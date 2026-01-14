import { NextRequest, NextResponse } from 'next/server';
import { addRow, deleteByField, getAllRows, getCollection, getRowByIdOrCode, updateByField } from '@/lib/mongoDBCRUD';
import { Filter, ObjectId } from 'mongodb';
import { User, USERS_COLLECTION_NAME } from '@/types/User';
import { Message, MESSAGES_COLLECTION_NAME } from '@/types/Message';
import { signJWT, signEphemeralJWT } from '@/lib/auth';
import { createSession, fingerprintFromHeaders } from '@/lib/session';
import { setAuthCookies, clearAuthCookies } from '@/lib/authCookies';
import {
  buildToggleChatStatusFields,
  buildUpdateCategoriesFields,
  buildUpdateTagsFields,
} from '@/lib/chatUpdateFields';
import bcrypt from 'bcryptjs';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

type UserSort = { field: keyof User; order?: 'asc' | 'desc' } | Array<{ field: keyof User; order?: 'asc' | 'desc' }>;

interface ToggleChatStatusPayload {
  isPinned?: boolean;
  isHidden?: boolean;
}
interface UpdateCategoriesPayload {
  categories?: string[];
}

interface LoginPayload {
  username?: string;
  password?: string;
}

type UsersRequestData = Partial<User> & ToggleChatStatusPayload & LoginPayload & Record<string, unknown>;

interface UsersRequestBody {
  action?:
    | 'create'
    | 'read'
    | 'getById'
    | 'update'
    | 'delete'
    | 'toggleChatStatus'
    | 'updateCategories'
    | 'login'
    | 'logout'
    | 'changePassword'
    | 'updateNickname'
    | 'updateTags'
    | 'forgotPasswordSendCode'
    | 'forgotPasswordVerifyCode'
    | 'forgotPasswordReset';
  collectionName?: string;
  data?: UsersRequestData;
  field?: keyof User;
  value?: unknown;
  filters?: Record<string, unknown>;
  search?: string;
  skip?: number;
  limit?: number;
  _id?: string;
  code?: string;
  sort?: UserSort;
  currentUserId?: string;
  roomId?: string;
  isPinned?: boolean;
  isHidden?: boolean;
}

function createIdFilter(id: string | number): ObjectId | number {
  if (typeof id === 'number') {
    return id;
  }

  const idStr = String(id);

  // Kiểm tra nếu là ObjectId hợp lệ
  if (ObjectId.isValid(idStr) && idStr.length === 24) {
    return new ObjectId(idStr);
  }

  // Kiểm tra nếu là số
  if (!isNaN(Number(idStr))) {
    return Number(idStr);
  }

  // Mặc định trả về string (trường hợp đặc biệt)
  return idStr as unknown as number;
}

type UserIdFilter = Filter<User> & { _id: ObjectId | number };

async function sendResetCodeEmail(to: string, code: string, username: string) {
  const user = process.env.EMAIL_USER || process.env.EMAIL_USERNAME || process.env.MAIL_USER || '';
  const pass = process.env.EMAIL_KEY || process.env.EMAIL_PASSWORD || process.env.MAIL_PASSWORD || '';

  if (!user || !pass) {
    console.log('Missing email credentials for reset code', {
      username,
      to,
      hasUser: Boolean(user),
      hasPass: Boolean(pass),
    });
    return;
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user,
      pass,
    },
  });

  const from = process.env.EMAIL_FROM || process.env.MAIL_FROM || `"Hupuna Chat" <${user}>`;

  const subject = 'Mã xác thực đặt lại mật khẩu Hupuna Chat';
  const text = `Xin chào ${username},

Mã xác thực đặt lại mật khẩu của bạn là: ${code}

Mã này có hiệu lực trong 10 phút.

Nếu bạn không yêu cầu đặt lại mật khẩu, vui lòng bỏ qua email này.`;

  const html = `<p>Xin chào <strong>${username}</strong>,</p>
<p>Mã xác thực đặt lại mật khẩu của bạn là:</p>
<p style="font-size:20px;font-weight:bold;letter-spacing:4px">${code}</p>
<p>Mã này có hiệu lực trong 10 phút.</p>
<p>Nếu bạn không yêu cầu đặt lại mật khẩu, vui lòng bỏ qua email này.</p>`;

  await transporter.sendMail({
    from,
    to,
    subject,
    text,
    html,
  });
}

export async function POST(req: NextRequest) {
  let body: UsersRequestBody = {};
  try {
    const contentType = req.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      body = (await req.json()) as UsersRequestBody;
    }
  } catch (err) {
    console.warn('Invalid JSON body in /api/users:', err);
    body = {};
  }

  const {
    action,
    collectionName = USERS_COLLECTION_NAME,
    data,
    field,
    value,
    filters,
    search,
    skip,
    limit,
    _id: requestId,
    code,
    sort,
    currentUserId,
    roomId,
  } = body;

  try {
    switch (action) {
      case 'create': {
        if (!data || !data.password) {
          return NextResponse.json({ error: 'Missing data or password' }, { status: 400 });
        }

        const hashed = await bcrypt.hash(String(data.password), 5);
        const newData = { ...data, password: hashed };

        const _id = await addRow<User>(collectionName, newData as User);
        return NextResponse.json({ success: true, _id });
      }

      case 'read': {
        const result = await getAllRows<User>(collectionName, {
          search,
          skip,
          limit,
          field,
          value,
          filters,
          sort,
        });

        const users = result.data || [];

        if (!currentUserId) {
          return NextResponse.json(result);
        }
        const userIdStr = String(currentUserId);
        const variants: (string | number)[] = [userIdStr];
        if (!isNaN(Number(userIdStr))) {
          variants.push(Number(userIdStr));
        }
        const msgCollection = await getCollection<Message>(MESSAGES_COLLECTION_NAME);

        const usersWithData = await Promise.all(
          users.map(async (u: User) => {
            if (String(u._id) === userIdStr) return u;

            const roomId = [userIdStr, String(u._id)].sort().join('_');

            const unreadCount = await msgCollection.countDocuments({
              roomId,
              readBy: { $nin: variants as unknown as string[] },
            });

            const lastMsgs = await msgCollection.find({ roomId }).sort({ timestamp: -1 }).limit(1).toArray();

            let lastMessagePreview = '';
            const lastMsgObj = lastMsgs[0];

            if (lastMsgObj) {
              if (lastMsgObj.isRecalled) {
                const isMySender = String(lastMsgObj.sender) === userIdStr;
                const senderName = isMySender ? 'Bạn' : u.name || 'Người dùng';
                lastMessagePreview = `${senderName}: đã thu hồi tin nhắn`;
              } else {
                const content =
                  lastMsgObj.type === 'text' || lastMsgObj.type === 'notify'
                    ? lastMsgObj.content
                    : `[${lastMsgObj.type}]`;

                if (String(lastMsgObj.sender) === userIdStr) {
                  lastMessagePreview = `Bạn: ${content}`;
                } else {
                  lastMessagePreview = content || '';
                }
              }
            } else {
              lastMessagePreview = 'Các bạn đã kết nối với nhau trên Hupuna Chat';
            }

            const isPinned = u.isPinnedBy?.[userIdStr] === true;
            const isHidden = u.isHiddenBy?.[userIdStr] === true;
            const categories = Array.isArray(
              (u as unknown as { categoriesBy?: Record<string, string[]> }).categoriesBy?.[userIdStr],
            )
              ? ((u as unknown as { categoriesBy?: Record<string, string[]> }).categoriesBy?.[userIdStr] as string[])
              : [];
            return {
              ...u,
              unreadCount,
              lastMessage: lastMessagePreview,
              lastMessageAt: lastMsgObj ? lastMsgObj.timestamp : null,
              isGroup: false,
              isRecall: lastMsgObj ? lastMsgObj.isRecalled || false : false,
              isPinned,
              isHidden,
              categories,
            };
          }),
        );
        return NextResponse.json({ total: usersWithData.length, data: usersWithData });
      }

      case 'getById': {
        const idStr = requestId ? String(requestId) : '';
        const isObjId = idStr ? ObjectId.isValid(idStr) && idStr.length === 24 : false;
        const isNumeric = idStr ? !isNaN(Number(idStr)) : false;

        if (isObjId || isNumeric || code) {
          return NextResponse.json(await getRowByIdOrCode<User>(collectionName, { _id: idStr, code }));
        }

        if (!idStr) return NextResponse.json(null);

        const result = await getAllRows<User>(collectionName, {
          filters: { $or: [{ username: idStr }, { _id: idStr }] },
          limit: 1,
        });
        const row = (result.data || [])[0];
        return NextResponse.json(row ? { rowIndex: 0, row } : null);
      }

      case 'update':
        if (!field || value === undefined) {
          return NextResponse.json({ error: 'Missing field or value for update' }, { status: 400 });
        }
        try {
          if (field === '_id') {
            const userCollection = await getCollection<User>(collectionName);
            const idStr = String(value);

            const orFilters: Array<Record<string, unknown>> = [{ _id: idStr }];
            if (!isNaN(Number(idStr))) {
              orFilters.push({ _id: Number(idStr) });
            }
            if (ObjectId.isValid(idStr) && idStr.length === 24) {
              orFilters.push({ _id: new ObjectId(idStr) });
            }

            const result = await userCollection.updateOne({ $or: orFilters } as Filter<User>, { $set: data || {} });

            if (result.matchedCount === 0) {
              return NextResponse.json({ error: 'User not found' }, { status: 404 });
            }

            return NextResponse.json({ success: true, modified: result.modifiedCount });
          } else {
            await updateByField<User>(collectionName, field, value as string | number, (data || {}) as Partial<User>);
            return NextResponse.json({ success: true });
          }
        } catch (error) {
          console.error('Update error:', error);
          return NextResponse.json({ error: 'Invalid ID format or update failed' }, { status: 400 });
        }

      case 'delete':
        if (!field || value === undefined) {
          return NextResponse.json({ error: 'Missing field or value for delete' }, { status: 400 });
        }
        const deleteValue =
          field === '_id' && typeof value === 'string' && ObjectId.isValid(value)
            ? new ObjectId(value)
            : (value as string | number);
        await deleteByField<User>(collectionName, field, deleteValue as string | number);
        return NextResponse.json({ success: true });

      case 'toggleChatStatus': {
        if (!currentUserId || !data || !roomId) {
          return NextResponse.json({ error: 'Missing currentUserId, roomId or data' }, { status: 400 });
        }
        const statusData = data as ToggleChatStatusPayload;
        const partnerId = roomId;
        const updateFields = buildToggleChatStatusFields(String(currentUserId), statusData);
        if (!updateFields) {
          return NextResponse.json({ error: 'No status provided' }, { status: 400 });
        }

        const result = await updateByField<User>(collectionName, '_id', partnerId, updateFields);
        return NextResponse.json({ success: true, result });
      }

      case 'updateNickname': {
        if (!currentUserId || !data || !roomId) {
          return NextResponse.json({ error: 'Missing currentUserId, roomId or data' }, { status: 400 });
        }
        const nicknameData = data as { nickname: string };
        const partnerId = roomId;

        const updateFields: Record<string, string> = {};
        updateFields[`nicknames.${currentUserId}`] = nicknameData.nickname;

        const result = await updateByField<User>(collectionName, '_id', partnerId, updateFields);
        return NextResponse.json({ success: true, result });
      }

      case 'updateCategories': {
        if (!currentUserId || !data || !roomId) {
          return NextResponse.json({ error: 'Missing currentUserId, roomId or data' }, { status: 400 });
        }
        const payload = data as UpdateCategoriesPayload;
        const partnerId = roomId;
        const updateFields = buildUpdateCategoriesFields(String(currentUserId), payload.categories);
        const result = await updateByField<User>(collectionName, '_id', partnerId, updateFields);
        return NextResponse.json({ success: true, result });
      }

      case 'updateTags': {
        if (!currentUserId || !data || !roomId) {
          return NextResponse.json({ error: 'Missing currentUserId, roomId or data' }, { status: 400 });
        }
        const payload = data as { tags?: string[] };
        const partnerId = roomId;
        const updateFields = buildUpdateTagsFields(String(currentUserId), payload.tags);
        const result = await updateByField<User>(collectionName, '_id', partnerId, updateFields);
        return NextResponse.json({ success: true, result });
      }

      case 'login': {
        const loginData = (data || {}) as LoginPayload;
        const { username, password } = loginData;

        if (!username || !password) {
          return NextResponse.json({ success: false, message: 'Thiếu tên người dùng hoặc mật khẩu!' }, { status: 400 });
        }

        const queryResult = await getAllRows<User>(collectionName, { filters: { username }, limit: 1 });

        const found = queryResult.data?.[0];

        if (!found) {
          return NextResponse.json({ success: false, message: 'Username hoặc Password không đúng!' }, { status: 401 });
        }
        let ok = await bcrypt.compare(String(password), String(found.password || ''));
        if (!ok && String(found.password || '') === String(password)) {
          try {
            const userCollection = await getCollection<User>(collectionName);
            const idStr = String(found._id);
            const orFilters: Array<Record<string, unknown>> = [{ _id: idStr }];
            if (!isNaN(Number(idStr))) {
              orFilters.push({ _id: Number(idStr) });
            }
            if (ObjectId.isValid(idStr) && idStr.length === 24) {
              orFilters.push({ _id: new ObjectId(idStr) });
            }
            const hashed = await bcrypt.hash(String(password), 12);
            await userCollection.updateOne({ $or: orFilters } as Filter<User>, { $set: { password: hashed } });
            ok = true;
          } catch {}
        }
        if (!ok) {
          return NextResponse.json({ success: false, message: 'Username hoặc Password không đúng!' }, { status: 401 });
        }

        const fp = fingerprintFromHeaders({
          'user-agent': req.headers.get('user-agent') || '',
          'accept-language': req.headers.get('accept-language') || '',
        });
        const sid = await createSession({
          userId: String(found._id),
          deviceName: 'web',
          headers: {
            'user-agent': req.headers.get('user-agent') || '',
            'accept-language': req.headers.get('accept-language') || '',
          },
          ttlDays: 3650,
        });
        const token = await signJWT({
          _id: String(found._id),
          username: String(found.username || ''),
          name: String(found.name || ''),
          sid,
          fp,
        });

        const res = NextResponse.json({
          success: true,
          token,
          user: {
            _id: String(found._id),
            name: String(found.name || ''),
            username: String(found.username || ''),
            avatar: found.avatar,
            role: found.role,
            department: found.department,
            status: found.status,
            phone: found['phone'],
            gender: found['gender'],
            birthday: found['birthday'],
            email: found['email'],
            address: found['address'],
            title: found['title'],
            background: found['background'],
            bio: found['bio'],
            nicknames: found.nicknames,
            categoryTags: Array.isArray(found.categoryTags) ? found.categoryTags : [],
          },
        });

        const refreshToken = await signEphemeralJWT(
          {
            purpose: 'refresh',
            sub: String(found._id),
            username: String(found.username || ''),
            name: String(found.name || ''),
            fp,
          },
          3650 * 24 * 3600,
        );
        setAuthCookies(res, { accessToken: token, sid, refreshToken });

        return res;
      }

      case 'logout': {
        const res = NextResponse.json({ success: true });
        clearAuthCookies(res);
        return res;
      }

      case 'changePassword': {
        const changeData = data as { userId?: string; currentPassword?: string; newPassword?: string };
        const { userId, currentPassword, newPassword } = changeData;

        if (!userId || !currentPassword || !newPassword) {
          return NextResponse.json({ success: false, message: 'Thiếu thông tin bắt buộc' }, { status: 400 });
        }

        // 🔥 FIX: Xử lý cả ObjectId và number
        const userCollection = await getCollection<User>(collectionName);
        const queryId = createIdFilter(userId);

        // 🔥 Type-safe filter
        const filter: UserIdFilter = { _id: queryId } as UserIdFilter;

        const userDoc = await userCollection.findOne(filter);

        if (!userDoc || !userDoc.password) {
          return NextResponse.json({ success: false, message: 'Không tìm thấy tài khoản' }, { status: 404 });
        }

        const ok = await bcrypt.compare(String(currentPassword), String(userDoc.password || ''));
        if (!ok) {
          return NextResponse.json({ success: false, message: 'Mật khẩu hiện tại không đúng' }, { status: 401 });
        }

        const hashed = await bcrypt.hash(String(newPassword), 12);
        await userCollection.updateOne(filter, { $set: { password: hashed } });
        return NextResponse.json({
          success: true,
          message: 'Đổi mật khẩu thành công',
        });
      }

      case 'forgotPasswordSendCode': {
        const payload = data as { username?: string; email?: string };
        const username = String(payload?.username || '').trim();
        const email = String(payload?.email || '').trim();

        if (!username || !email) {
          return NextResponse.json(
            { success: false, message: 'Vui lòng nhập đầy đủ tên đăng nhập và email' },
            { status: 400 },
          );
        }

        const userCollection = await getCollection<User>(collectionName);
        const user = await userCollection.findOne({ username, email } as Filter<User>);

        if (!user) {
          return NextResponse.json(
            { success: false, message: 'Không tìm thấy tài khoản khớp với tên đăng nhập và email' },
            { status: 404 },
          );
        }

        const codeValue = Math.floor(100000 + Math.random() * 900000).toString();

        await userCollection.updateOne({ _id: user._id } as Filter<User>, {
          $set: {
            resetCode: codeValue,
            resetCodeExpiresAt: new Date(Date.now() + 10 * 60 * 1000),
          } as Partial<User> & { resetCode: string; resetCodeExpiresAt: Date },
        });
        await sendResetCodeEmail(email, codeValue, username || user.name || username);

        return NextResponse.json({
          success: true,
          message: 'Đã gửi mã xác thực đến email',
        });
      }

      case 'forgotPasswordVerifyCode': {
        const payload = data as { username?: string; email?: string; code?: string };
        const username = String(payload?.username || '').trim();
        const email = String(payload?.email || '').trim();
        const codeValue = String(payload?.code || '').trim();

        if (!username || !email || !codeValue) {
          return NextResponse.json({ success: false, message: 'Thiếu thông tin xác thực' }, { status: 400 });
        }

        if (!/^\d{6}$/.test(codeValue)) {
          return NextResponse.json({ success: false, message: 'Mã xác thực không hợp lệ' }, { status: 400 });
        }

        const userCollection = await getCollection<User>(collectionName);
        const now = new Date();

        const user = await userCollection.findOne({
          username,
          email,
          resetCode: codeValue,
          resetCodeExpiresAt: { $gte: now },
        } as Filter<User>);

        if (!user) {
          return NextResponse.json(
            { success: false, message: 'Mã xác thực không đúng hoặc đã hết hạn' },
            { status: 400 },
          );
        }

        return NextResponse.json({
          success: true,
          message: 'Xác minh mã thành công',
        });
      }

      case 'forgotPasswordReset': {
        const payload = data as {
          username?: string;
          email?: string;
          code?: string;
          newPassword?: string;
        };
        const username = String(payload?.username || '').trim();
        const email = String(payload?.email || '').trim();
        const codeValue = String(payload?.code || '').trim();
        const newPassword = String(payload?.newPassword || '');

        if (!username || !email || !codeValue || !newPassword) {
          return NextResponse.json({ success: false, message: 'Thiếu thông tin đặt lại mật khẩu' }, { status: 400 });
        }

        if (newPassword.length < 6) {
          return NextResponse.json({ success: false, message: 'Mật khẩu phải có ít nhất 6 ký tự' }, { status: 400 });
        }

        const userCollection = await getCollection<User>(collectionName);
        const now = new Date();

        const user = await userCollection.findOne({
          username,
          email,
          resetCode: codeValue,
          resetCodeExpiresAt: { $gte: now },
        } as Filter<User>);

        if (!user) {
          return NextResponse.json(
            { success: false, message: 'Mã xác thực không đúng hoặc đã hết hạn' },
            { status: 400 },
          );
        }

        const hashed = await bcrypt.hash(String(newPassword), 12);

        await userCollection.updateOne({ _id: user._id } as Filter<User>, {
          $set: { password: hashed },
          $unset: { resetCode: '', resetCodeExpiresAt: '' },
        });

        return NextResponse.json({
          success: true,
          message: 'Đặt lại mật khẩu thành công',
        });
      }

      default:
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
