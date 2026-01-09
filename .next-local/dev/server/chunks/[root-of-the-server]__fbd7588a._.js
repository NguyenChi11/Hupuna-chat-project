module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/mongodb [external] (mongodb, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("mongodb", () => require("mongodb"));

module.exports = mod;
}),
"[project]/src/components/(mongodb)/connectToDatabase.tsx [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app\lib\monggodb\connectToDatabase.tsx
__turbopack_context__.s([
    "connectToDatabase",
    ()=>connectToDatabase
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongodb [external] (mongodb, cjs)");
;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/';
const MONGODB_DB = process.env.MONGODB_DB || 'hupuna-price';
// Cache client khi hot-reload (Next.js dev mode)
let cachedClient = null;
let cachedDb = null;
async function connectToDatabase() {
    if (cachedClient && cachedDb) {
        return {
            client: cachedClient,
            db: cachedDb
        };
    }
    if (("TURBOPACK compile-time value", "development") === 'production' && (MONGODB_URI.includes('localhost') || MONGODB_URI.includes('127.0.0.1'))) //TURBOPACK unreachable
    ;
    const client = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["MongoClient"](MONGODB_URI);
    await client.connect();
    const db = client.db(MONGODB_DB);
    cachedClient = client;
    cachedDb = db;
    return {
        client,
        db
    };
}
}),
"[project]/src/lib/mongoDBCRUD.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app\lib\monggodb\mongoDBCRUD.ts
__turbopack_context__.s([
    "addRow",
    ()=>addRow,
    "createMany",
    ()=>createMany,
    "deleteByField",
    ()=>deleteByField,
    "deleteById",
    ()=>deleteById,
    "deleteManyRows",
    ()=>deleteManyRows,
    "findByField",
    ()=>findByField,
    "getAllRows",
    ()=>getAllRows,
    "getCollection",
    ()=>getCollection,
    "getHeaders",
    ()=>getHeaders,
    "getRowByIdOrCode",
    ()=>getRowByIdOrCode,
    "safeParse",
    ()=>safeParse,
    "updateByField",
    ()=>updateByField,
    "updateMany",
    ()=>updateMany
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongodb [external] (mongodb, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$mongodb$292f$connectToDatabase$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(mongodb)/connectToDatabase.tsx [app-route] (ecmascript)");
;
;
function safeParse(value) {
    if (typeof value !== 'string') return value;
    const firstChar = value.trim().charAt(0);
    if (firstChar !== '[' && firstChar !== '{') return value;
    try {
        return JSON.parse(value);
    } catch  {
        return value;
    }
}
const getHeaders = async (collectionName)=>{
    const { db } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$mongodb$292f$connectToDatabase$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectToDatabase"])();
    const doc = await db.collection(collectionName).findOne({});
    return doc ? Object.keys(doc) : [];
};
const findByField = async (collectionName, field, value)=>{
    const { db } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$mongodb$292f$connectToDatabase$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectToDatabase"])();
    const item = await db.collection(collectionName).find({
        [field]: value
    }).toArray();
    if (!item) return null;
    return {
        data: item
    };
};
const getRowByIdOrCode = async (collectionName, { id, code, _id })=>{
    const { db } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$mongodb$292f$connectToDatabase$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectToDatabase"])();
    const filter = {};
    if (_id) {
        if (__TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"].isValid(_id)) {
            filter['_id'] = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"](_id);
        } else if (!isNaN(Number(_id))) {
            filter['_id'] = Number(_id);
        }
    }
    if (id) filter['id'] = id;
    if (code) filter['code'] = code;
    const row = await db.collection(collectionName).findOne(filter);
    return row ? {
        rowIndex: 0,
        row: row
    } : null;
};
const getAllRows = async (collectionName, { search, skip = 0, limit, field, value, filters, sort, collation } = {})=>{
    const { db } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$mongodb$292f$connectToDatabase$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectToDatabase"])();
    const collection = db.collection(collectionName);
    const query = {};
    // Filter field=value
    if (field && value !== undefined) {
        query[field] = value;
    }
    // ====== 2. Filter nâng cao ======
    if (filters && Object.keys(filters).length > 0) {
        for (const [key, rawVal] of Object.entries(filters)){
            if (rawVal === undefined || rawVal === null) continue;
            // --- Nếu là mệnh đề $or hoặc $and ---
            // Trường hợp tìm kiếm có điều kiện kết hợp
            if (key === '$or' || key === '$and') {
                query[key] = rawVal;
                continue;
            }
            // --- Nếu là object có $gte / $lte (lọc khoảng thời gian hoặc khoảng số) ---
            if (typeof rawVal === 'object' && rawVal !== null && ('$gte' in rawVal || '$lte' in rawVal)) {
                query[key] = rawVal;
                continue;
            }
            // --- Nếu là object có toán tử MongoDB ---
            // Trường hợp tìm kiếm có điều kiện
            // $in – chứa trong danh sách giá trị (giống WHERE field IN (...))
            // $nin – không chứa trong danh sách giá trị
            // $gte – lớn hơn hoặc bằng (>=)
            // $lte – nhỏ hơn hoặc bằng (<=)
            // $gt – lớn hơn (>)
            // $lt – nhỏ hơn (<)
            // $ne – khác (!=)
            if (typeof rawVal === 'object' && rawVal !== null && Object.keys(rawVal).some((k)=>[
                    '$in',
                    '$nin',
                    '$gte',
                    '$lte',
                    '$gt',
                    '$lt',
                    '$ne'
                ].includes(k))) {
                query[key] = rawVal;
                continue;
            }
            // --- Nếu là chuỗi bắt đầu bằng "#" => regex ---
            if (typeof rawVal === 'string' && rawVal.trim().startsWith('#')) {
                // Trường hợp tìm kiếm gần đúng (regex)
                query[key] = {
                    $regex: rawVal.trim().slice(1),
                    $options: 'i'
                };
                continue;
            }
            // Trường hợp so sánh chính xác (exact match)
            query[key] = rawVal;
        }
    }
    // Search toàn bộ text - cách cũ - chỉ lấy key 1 cấp
    // if (search) {
    //     const sampleDoc = await collection.findOne();
    //     if (sampleDoc) {
    //         const textFields = Object.keys(sampleDoc).filter(
    //             (k) => typeof sampleDoc[k] === "string"
    //         );
    //         if (textFields.length > 0) {
    //             query["$or"] = textFields.map((key) => ({
    //                 [key]: { $regex: search, $options: "i" },
    //             }));
    //         }
    //     }
    // }
    // Search toàn bộ text - cải tiến để lấy cả các key trong object con - nhiều cấp
    if (search) {
        const sampleDoc = await collection.findOne();
        if (sampleDoc) {
            // 👉 Hàm đệ quy lấy tất cả key string (kể cả nested)
            const getStringPaths = (obj, prefix = '')=>{
                let keys = [];
                for (const [k, v] of Object.entries(obj)){
                    const path = prefix ? `${prefix}.${k}` : k;
                    if (typeof v === 'string') keys.push(path);
                    else if (v && typeof v === 'object' && !Array.isArray(v)) keys = keys.concat(getStringPaths(v, path));
                }
                return keys;
            };
            const textFields = getStringPaths(sampleDoc);
            if (textFields.length > 0) {
                query['$or'] = textFields.map((path)=>({
                        [path]: {
                            $regex: search,
                            $options: 'i'
                        }
                    }));
            }
        }
    }
    // Sort
    let sortOption = {};
    if (sort) {
        const sortArr = Array.isArray(sort) ? sort : [
            sort
        ];
        sortOption = sortArr.reduce((acc, s)=>{
            acc[s.field] = s.order === 'desc' ? -1 : 1;
            return acc;
        }, {});
    }
    const total = await collection.countDocuments(query, collation ? {
        collation
    } : undefined);
    let cursor = collection.find(query);
    if (collation) {
        cursor = cursor.collation(collation);
    }
    const data = await cursor.sort(sortOption).skip(skip).limit(limit ?? 0).toArray();
    return {
        total,
        data: data
    };
};
const addRow = async (collectionName, newData)=>{
    const { db } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$mongodb$292f$connectToDatabase$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectToDatabase"])();
    const result = await db.collection(collectionName).insertOne(newData);
    return result.insertedId.toString();
};
async function getCollection(name) {
    const { db } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$mongodb$292f$connectToDatabase$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectToDatabase"])();
    return db.collection(name);
}
async function createMany(collectionName, docs) {
    const collection = await getCollection(collectionName);
    return collection.insertMany(docs);
}
const updateByField = async (collectionName, field, value, updateData)=>{
    const { db } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$mongodb$292f$connectToDatabase$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectToDatabase"])();
    if ('_id' in updateData) delete updateData._id;
    let queryValue = value;
    if (field === '_id' && typeof value === 'string') {
        if (__TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"].isValid(value)) {
            // Nếu là ObjectId hợp lệ
            queryValue = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"](value);
        } else if (!isNaN(Number(value))) {
            // Nếu là số
            queryValue = Number(value);
        }
    // Nếu là string không phải ObjectId và không phải số, queryValue vẫn là string
    }
    const result = await db.collection(collectionName).updateOne({
        [field]: queryValue
    }, {
        $set: updateData
    });
    return result.modifiedCount > 0;
};
async function updateMany(collectionName, filter, update) {
    const collection = await getCollection(collectionName);
    const isOperatorUpdate = typeof update === 'object' && update !== null && Object.keys(update).some((key)=>key.startsWith('$'));
    const updateDoc = isOperatorUpdate ? update : {
        $set: update
    };
    return collection.updateMany(filter, updateDoc);
}
const deleteByField = async (collectionName, field, value)=>{
    const { db } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$mongodb$292f$connectToDatabase$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectToDatabase"])();
    const result = await db.collection(collectionName).deleteOne({
        [field]: value
    });
    return result.deletedCount > 0;
};
const deleteById = async (collectionName, id)=>{
    const { db } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$mongodb$292f$connectToDatabase$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectToDatabase"])();
    const result = await db.collection(collectionName).deleteOne({
        _id: new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"](id)
    });
    return result.deletedCount > 0;
};
async function deleteManyRows(collectionName, filter) {
    const collection = await getCollection(collectionName);
    return collection.deleteMany(filter);
}
}),
"[project]/src/types/Group.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GROUP_COLLECTION_NAME",
    ()=>GROUP_COLLECTION_NAME
]);
const GROUP_COLLECTION_NAME = 'Groups';
}),
"[project]/src/types/User.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "USERS_COLLECTION_NAME",
    ()=>USERS_COLLECTION_NAME
]);
const USERS_COLLECTION_NAME = 'Users';
}),
"[project]/src/types/Message.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MESSAGES_COLLECTION_NAME",
    ()=>MESSAGES_COLLECTION_NAME
]);
const MESSAGES_COLLECTION_NAME = 'Messages';
}),
"[project]/src/lib/chatUpdateFields.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildToggleChatStatusFields",
    ()=>buildToggleChatStatusFields,
    "buildUpdateCategoriesFields",
    ()=>buildUpdateCategoriesFields,
    "buildUpdateTagsFields",
    ()=>buildUpdateTagsFields,
    "normalizeStringArray",
    ()=>normalizeStringArray
]);
function buildToggleChatStatusFields(currentUserId, payload) {
    const fields = {};
    if (typeof payload.isPinned === 'boolean') {
        fields[`isPinnedBy.${currentUserId}`] = payload.isPinned;
    }
    if (typeof payload.isHidden === 'boolean') {
        fields[`isHiddenBy.${currentUserId}`] = payload.isHidden;
    }
    if (Object.keys(fields).length === 0) return null;
    return fields;
}
function normalizeStringArray(input) {
    if (!Array.isArray(input)) return [];
    return input.filter((x)=>typeof x === 'string');
}
function buildUpdateCategoriesFields(currentUserId, categories) {
    const arr = normalizeStringArray(categories);
    return {
        [`categoriesBy.${currentUserId}`]: arr
    };
}
function buildUpdateTagsFields(currentUserId, tags) {
    const arr = normalizeStringArray(tags);
    return {
        [`tagsBy.${currentUserId}`]: arr
    };
}
}),
"[project]/src/app/api/groups/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mongoDBCRUD.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$Group$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/Group.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongodb [external] (mongodb, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$User$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/User.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$Message$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/Message.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$chatUpdateFields$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/chatUpdateFields.ts [app-route] (ecmascript)");
;
;
;
;
;
;
;
// 🔥 Helper function để normalize member ID
function normalizeMemberId(member) {
    if (!member) return null;
    if (typeof member === 'string') return member;
    if (typeof member === 'object') {
        if ('_id' in member && member._id) return String(member._id);
        if ('id' in member && member.id) return String(member.id);
    }
    return null;
}
// 🔥 Helper function để tạo filter cho member ID (hỗ trợ cả string và number)
function createMemberIdFilter(memberId) {
    const filters = [
        {
            _id: memberId
        }
    ];
    // Nếu là số, thêm filter cho number
    if (!isNaN(Number(memberId))) {
        filters.push({
            _id: Number(memberId)
        });
    }
    // Nếu là ObjectId hợp lệ, thêm filter cho ObjectId
    if (__TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"].isValid(memberId)) {
        filters.push({
            _id: new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"](memberId)
        });
    }
    return filters;
}
async function POST(req) {
    const body = await req.json();
    const { action, data, _id, conversationId, newMembers, targetUserId, roomId } = body;
    const currentUserId = _id;
    try {
        const collection = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCollection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$Group$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GROUP_COLLECTION_NAME"]);
        switch(action){
            case 'createGroup':
                {
                    if (!data || !data.name || !Array.isArray(data.members) || data.members.length < 2) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            error: 'Missing data or not enough members'
                        }, {
                            status: 400
                        });
                    }
                    const membersWithRole = data.members.map((memberId)=>({
                            _id: memberId,
                            role: memberId === data.createdBy ? 'OWNER' : 'MEMBER',
                            joinedAt: Date.now(),
                            addedBy: data.createdBy
                        }));
                    const finalData = {
                        name: data.name,
                        members: membersWithRole,
                        isGroup: true,
                        createdBy: data.createdBy,
                        createdAt: Date.now(),
                        avatar: data.avatar
                    };
                    const newId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["addRow"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$Group$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GROUP_COLLECTION_NAME"], finalData);
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        success: true,
                        group: {
                            ...finalData,
                            _id: newId
                        }
                    });
                }
            case 'readGroups':
                {
                    if (!_id) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            error: 'Missing _id'
                        }, {
                            status: 400
                        });
                    }
                    const userIdStr = String(_id);
                    const variants = [
                        userIdStr
                    ];
                    if (!isNaN(Number(userIdStr))) {
                        variants.push(Number(userIdStr));
                    }
                    // 🔥 Tạo filter hỗ trợ nhiều kiểu dữ liệu
                    const memberFilters = createMemberIdFilter(userIdStr).map((filter)=>({
                            'members._id': filter._id
                        }));
                    const filters = {
                        isGroup: true,
                        $or: memberFilters
                    };
                    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAllRows"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$Group$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GROUP_COLLECTION_NAME"], {
                        filters
                    });
                    const conversations = result.data || [];
                    if (!conversations.length) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(result);
                    // 🔥 Thu thập tất cả member IDs
                    const allMemberIds = Array.from(new Set(conversations.flatMap((conv)=>(conv.members || []).map(normalizeMemberId).filter((id)=>!!id))));
                    // 🔥 Tạo filters để query users (hỗ trợ cả string, number và ObjectId)
                    const userFilters = [];
                    allMemberIds.forEach((id)=>{
                        // Thêm filter cho string
                        userFilters.push({
                            _id: id
                        });
                        // Nếu là số, thêm filter cho number
                        if (!isNaN(Number(id))) {
                            userFilters.push({
                                _id: Number(id)
                            });
                        }
                        // Nếu là ObjectId hợp lệ, thêm filter cho ObjectId
                        if (__TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"].isValid(id)) {
                            userFilters.push({
                                _id: new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"](id)
                            });
                        }
                    });
                    // Query users với $or filter
                    const usersResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAllRows"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$User$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["USERS_COLLECTION_NAME"], {
                        filters: userFilters.length > 0 ? {
                            $or: userFilters
                        } : {}
                    });
                    // 🔥 Tạo userMap với nhiều key formats
                    const userMap = new Map();
                    (usersResult.data || []).forEach((u)=>{
                        if (u._id) {
                            const id = String(u._id);
                            userMap.set(id, u);
                            // Thêm cả key dạng number nếu có thể
                            if (!isNaN(Number(id))) {
                                userMap.set(String(Number(id)), u);
                            }
                        }
                    });
                    // Chuẩn hóa conversations
                    const enrichedConversations = conversations.map((conv)=>{
                        const rawMembers = Array.isArray(conv.members) ? conv.members : [];
                        const hasOwner = rawMembers.some((m)=>m && typeof m === 'object' && m.role === 'OWNER');
                        let ownerIdToAssign = null;
                        const createdByStr = conv.createdBy ? String(conv.createdBy) : null;
                        if (!hasOwner && rawMembers.length > 0) {
                            if (createdByStr && rawMembers.some((m)=>normalizeMemberId(m) === createdByStr)) {
                                ownerIdToAssign = createdByStr;
                            } else {
                                const firstId = normalizeMemberId(rawMembers[0]);
                                ownerIdToAssign = firstId;
                            }
                        }
                        const normalizedMembers = rawMembers.map((mem)=>{
                            const memId = normalizeMemberId(mem);
                            const base = typeof mem === 'object' ? {
                                ...mem
                            } : {
                                _id: memId ?? ''
                            };
                            if (!base.role || ![
                                'OWNER',
                                'ADMIN',
                                'MEMBER'
                            ].includes(base.role)) {
                                if (ownerIdToAssign && memId === ownerIdToAssign) {
                                    base.role = 'OWNER';
                                } else {
                                    base.role = 'MEMBER';
                                }
                            }
                            // 🔥 Tìm user info với nhiều cách
                            let memberInfo;
                            if (memId) {
                                memberInfo = userMap.get(memId);
                                // Thử tìm với number format nếu chưa có
                                if (!memberInfo && !isNaN(Number(memId))) {
                                    memberInfo = userMap.get(String(Number(memId)));
                                }
                            }
                            if (memberInfo) {
                                return {
                                    ...base,
                                    _id: memId ?? '',
                                    name: memberInfo.name,
                                    avatar: memberInfo.avatar
                                };
                            }
                            return {
                                ...base,
                                _id: memId ?? '',
                                name: base.name ?? 'Unknown User'
                            };
                        });
                        return {
                            ...conv,
                            _id: conv._id.toString(),
                            members: normalizedMembers
                        };
                    });
                    const msgCollection = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCollection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$Message$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MESSAGES_COLLECTION_NAME"]);
                    const settled = await Promise.allSettled(enrichedConversations.map(async (group)=>{
                        const unreadCount = await msgCollection.countDocuments({
                            roomId: group._id,
                            readBy: {
                                $nin: variants
                            }
                        });
                        const lastMsgs = await msgCollection.find({
                            roomId: group._id
                        }).sort({
                            timestamp: -1
                        }).limit(1).toArray();
                        const lastMsgObj = lastMsgs[0];
                        const isPinned = group.isPinnedBy?.[userIdStr] === true;
                        const isHidden = group.isHiddenBy?.[userIdStr] === true;
                        let lastMessagePreview = '';
                        if (lastMsgObj) {
                            let senderName = '';
                            const senderIdStr = String(lastMsgObj.sender);
                            if (senderIdStr === userIdStr) {
                                senderName = 'Bạn';
                            } else {
                                const membersArr = Array.isArray(group.members) ? group.members : [];
                                const matchedMember = membersArr.find((m)=>String(m._id) === senderIdStr) || membersArr.find((m)=>!isNaN(Number(String(m._id))) && !isNaN(Number(senderIdStr)) && Number(String(m._id)) === Number(senderIdStr));
                                const roomNick = matchedMember && (matchedMember.nickname || '').trim();
                                if (roomNick) {
                                    senderName = roomNick;
                                } else {
                                    const senderInfo = userMap.get(senderIdStr) || userMap.get(String(Number(senderIdStr)));
                                    senderName = senderInfo ? senderInfo.name : 'Người lạ';
                                }
                            }
                            if (lastMsgObj.isRecalled) {
                                lastMessagePreview = `${senderName}: đã thu hồi tin nhắn`;
                            } else {
                                const content = lastMsgObj.type === 'text' || lastMsgObj.type === 'notify' ? lastMsgObj.content : `[${lastMsgObj.type}]`;
                                lastMessagePreview = `${senderName}: ${content}`;
                            }
                        }
                        const fallbackTime = typeof group.createdAt === 'number' ? group.createdAt : Date.now();
                        return {
                            ...group,
                            unreadCount,
                            lastMessage: lastMessagePreview,
                            lastMessageAt: lastMsgObj ? lastMsgObj.timestamp : fallbackTime,
                            isRecall: lastMsgObj ? lastMsgObj.isRecalled || false : false,
                            isPinned,
                            isHidden,
                            categories: Array.isArray(group.categoriesBy?.[userIdStr]) ? group.categoriesBy?.[userIdStr] : []
                        };
                    }));
                    const finalConversations = settled.filter((r)=>r.status === 'fulfilled').map((r)=>r.value);
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        total: finalConversations.length,
                        data: finalConversations
                    });
                }
            case 'addMembers':
                {
                    if (!conversationId || !newMembers || !Array.isArray(newMembers)) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            error: 'Missing conversationId or newMembers'
                        }, {
                            status: 400
                        });
                    }
                    const filter = {
                        _id: new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"](conversationId)
                    };
                    const membersToAdd = newMembers.map((memberId)=>({
                            _id: memberId,
                            role: 'MEMBER',
                            joinedAt: Date.now(),
                            addedBy: currentUserId
                        }));
                    const result = await collection.updateOne(filter, {
                        $push: {
                            members: {
                                $each: membersToAdd
                            }
                        }
                    });
                    // ========== TẠO THÔNG BÁO HỆ THỐNG ==========
                    try {
                        // 1. Lấy tên người thêm (currentUserId)
                        let actorName = 'Ai đó';
                        if (currentUserId) {
                            const actorRes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAllRows"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$User$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["USERS_COLLECTION_NAME"], {
                                filters: createMemberIdFilter(String(currentUserId)).length > 0 ? {
                                    $or: createMemberIdFilter(String(currentUserId))
                                } : {},
                                limit: 1
                            });
                            const actor = actorRes.data?.[0];
                            if (actor) {
                                actorName = actor.name || actor.username || 'Người dùng';
                            }
                        }
                        // 2. Lấy tên những người được thêm
                        const newMemberNames = [];
                        for (const mid of newMembers){
                            const mRes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAllRows"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$User$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["USERS_COLLECTION_NAME"], {
                                filters: createMemberIdFilter(String(mid)).length > 0 ? {
                                    $or: createMemberIdFilter(String(mid))
                                } : {},
                                limit: 1
                            });
                            const mUser = mRes.data?.[0];
                            if (mUser) {
                                newMemberNames.push(mUser.name || mUser.username || 'Người dùng');
                            } else {
                                newMemberNames.push('Người dùng');
                            }
                        }
                        if (newMemberNames.length > 0) {
                            const namesStr = newMemberNames.join(', ');
                            const notifyContent = `${actorName} đã thêm ${namesStr} vào nhóm.`;
                            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["addRow"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$Message$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MESSAGES_COLLECTION_NAME"], {
                                roomId: String(conversationId),
                                sender: String(currentUserId || 'system'),
                                type: 'notify',
                                content: notifyContent,
                                timestamp: Date.now()
                            });
                        }
                    } catch (e) {
                        console.error('Failed to create notify message:', e);
                    }
                    // ============================================
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        success: true,
                        result
                    });
                }
            case 'updateAvatar':
                {
                    if (!conversationId || !data?.avatar) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            error: 'Missing info'
                        }, {
                            status: 400
                        });
                    }
                    const result = await collection.updateOne({
                        _id: new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"](conversationId)
                    }, {
                        $set: {
                            avatar: data.avatar
                        }
                    });
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        success: true,
                        result
                    });
                }
            case 'renameGroup':
                {
                    if (!conversationId || !data?.name) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            error: 'Missing info'
                        }, {
                            status: 400
                        });
                    }
                    const result = await collection.updateOne({
                        _id: new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"](conversationId)
                    }, {
                        $set: {
                            name: data.name
                        }
                    });
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        success: true,
                        result
                    });
                }
            case 'changeRole':
                {
                    if (!conversationId || !targetUserId || !data?.role || !currentUserId) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            error: 'Missing info'
                        }, {
                            status: 400
                        });
                    }
                    const group = await collection.findOne({
                        _id: new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"](conversationId)
                    });
                    if (!group) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            error: 'Group not found'
                        }, {
                            status: 404
                        });
                    }
                    const members = Array.isArray(group.members) ? group.members : [];
                    const ownerMember = members.find((m)=>m && typeof m === 'object' && m.role === 'OWNER' && '_id' in m && m._id);
                    const ownerId = ownerMember ? String(ownerMember._id) : null;
                    const userIdStr = String(currentUserId);
                    if (!ownerId || ownerId !== userIdStr) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            error: 'Only owner can change roles'
                        }, {
                            status: 403
                        });
                    }
                    const requestedRole = String(data.role);
                    if (![
                        'ADMIN',
                        'MEMBER'
                    ].includes(requestedRole)) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            error: 'Invalid role'
                        }, {
                            status: 400
                        });
                    }
                    const targetStr = String(targetUserId);
                    // 🔥 THAY ĐỔI: Tìm index của member trong array, sau đó update trực tiếp
                    let memberIndex = -1;
                    // Tìm index của member cần update
                    for(let i = 0; i < members.length; i++){
                        const m = members[i];
                        const mId = normalizeMemberId(m);
                        // So sánh với nhiều format
                        if (mId === targetStr) {
                            memberIndex = i;
                            break;
                        }
                        if (!isNaN(Number(mId)) && !isNaN(Number(targetStr)) && Number(mId) === Number(targetStr)) {
                            memberIndex = i;
                            break;
                        }
                    }
                    if (memberIndex === -1) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            error: 'Member not found in group'
                        }, {
                            status: 404
                        });
                    }
                    // 🔥 Update trực tiếp bằng cách chỉ định index cụ thể
                    const updateField = `members.${memberIndex}.role`;
                    const result = await collection.updateOne({
                        _id: new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"](conversationId)
                    }, {
                        $set: {
                            [updateField]: requestedRole
                        }
                    });
                    if (result.modifiedCount === 0) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            error: 'Failed to update role'
                        }, {
                            status: 500
                        });
                    }
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        success: true,
                        result
                    });
                }
            case 'updateMemberNickname':
                {
                    if (!conversationId || !targetUserId || data?.nickname === undefined) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            error: 'Missing info'
                        }, {
                            status: 400
                        });
                    }
                    const group = await collection.findOne({
                        _id: new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"](conversationId)
                    });
                    if (!group) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            error: 'Group not found'
                        }, {
                            status: 404
                        });
                    }
                    const members = Array.isArray(group.members) ? group.members : [];
                    const targetStr = String(targetUserId);
                    let memberIndex = -1;
                    for(let i = 0; i < members.length; i++){
                        const m = members[i];
                        const mId = normalizeMemberId(m);
                        if (mId === targetStr) {
                            memberIndex = i;
                            break;
                        }
                        if (!isNaN(Number(mId)) && !isNaN(Number(targetStr)) && Number(mId) === Number(targetStr)) {
                            memberIndex = i;
                            break;
                        }
                    }
                    if (memberIndex === -1) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            error: 'Member not found in group'
                        }, {
                            status: 404
                        });
                    }
                    const nickname = String(data.nickname).trim();
                    const updateField = `members.${memberIndex}.nickname`;
                    const updateOp = nickname ? {
                        $set: {
                            [updateField]: nickname
                        }
                    } : {
                        $unset: {
                            [updateField]: ''
                        }
                    };
                    const result = await collection.updateOne({
                        _id: new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"](conversationId)
                    }, updateOp);
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        success: true,
                        result
                    });
                }
            case 'kickMember':
                {
                    if (!conversationId || !targetUserId) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            error: 'Missing info'
                        }, {
                            status: 400
                        });
                    }
                    const targetStr = String(targetUserId);
                    // 🔥 Tạo pull condition cho nhiều định dạng ID
                    const pullConditions = [
                        {
                            _id: targetStr
                        }
                    ];
                    if (!isNaN(Number(targetStr))) {
                        pullConditions.push({
                            _id: Number(targetStr)
                        });
                    }
                    if (__TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"].isValid(targetStr)) {
                        pullConditions.push({
                            _id: new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"](targetStr)
                        });
                    }
                    const result = await collection.updateOne({
                        _id: new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"](conversationId)
                    }, {
                        $pull: {
                            members: {
                                $or: pullConditions
                            }
                        }
                    });
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        success: true,
                        result
                    });
                }
            case 'leaveGroup':
                {
                    if (!conversationId || !currentUserId) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            error: 'Missing info'
                        }, {
                            status: 400
                        });
                    }
                    const userIdStr = String(currentUserId);
                    const group = await collection.findOne({
                        _id: new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"](conversationId)
                    });
                    if (!group) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            error: 'Group not found'
                        }, {
                            status: 404
                        });
                    }
                    const members = Array.isArray(group.members) ? group.members : [];
                    const ownerMember = members.find((m)=>{
                        if (!m || typeof m === 'string') return false;
                        const id = normalizeMemberId(m);
                        return id === userIdStr && m.role === 'OWNER';
                    });
                    if (!ownerMember) {
                        // 🔥 Pull với nhiều format
                        const pullConditions = [
                            {
                                _id: userIdStr
                            }
                        ];
                        if (!isNaN(Number(userIdStr))) {
                            pullConditions.push({
                                _id: Number(userIdStr)
                            });
                        }
                        if (__TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"].isValid(userIdStr)) {
                            pullConditions.push({
                                _id: new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"](userIdStr)
                            });
                        }
                        const result = await collection.updateOne({
                            _id: new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"](conversationId)
                        }, {
                            $pull: {
                                members: {
                                    $or: pullConditions
                                }
                            }
                        });
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            success: true,
                            result
                        });
                    }
                    const otherMembers = members.filter((m)=>m && typeof m === 'object' && '_id' in m && normalizeMemberId(m) !== userIdStr);
                    if (otherMembers.length === 0) {
                        await collection.deleteOne({
                            _id: new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"](conversationId)
                        });
                        const msgCollection = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCollection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$Message$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MESSAGES_COLLECTION_NAME"]);
                        await msgCollection.deleteMany({
                            roomId: String(conversationId)
                        });
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            success: true
                        });
                    }
                    const adminCandidate = otherMembers.find((m)=>typeof m === 'object' && m.role === 'ADMIN');
                    const nextOwnerCandidate = adminCandidate || otherMembers[Math.floor(Math.random() * otherMembers.length)];
                    const nextOwnerId = normalizeMemberId(nextOwnerCandidate) || '';
                    // 🔥 Update owner với filter phức tạp
                    const ownerFilters = [
                        {
                            'members._id': nextOwnerId
                        }
                    ];
                    if (!isNaN(Number(nextOwnerId))) {
                        ownerFilters.push({
                            'members._id': Number(nextOwnerId)
                        });
                    }
                    if (__TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"].isValid(nextOwnerId)) {
                        ownerFilters.push({
                            'members._id': new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"](nextOwnerId)
                        });
                    }
                    await collection.updateOne({
                        _id: new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"](conversationId),
                        $or: ownerFilters
                    }, {
                        $set: {
                            'members.$.role': 'OWNER'
                        }
                    });
                    const pullConditions = [
                        {
                            _id: userIdStr
                        }
                    ];
                    if (!isNaN(Number(userIdStr))) {
                        pullConditions.push({
                            _id: Number(userIdStr)
                        });
                    }
                    if (__TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"].isValid(userIdStr)) {
                        pullConditions.push({
                            _id: new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"](userIdStr)
                        });
                    }
                    const result = await collection.updateOne({
                        _id: new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"](conversationId)
                    }, {
                        $pull: {
                            members: {
                                $or: pullConditions
                            }
                        }
                    });
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        success: true,
                        result
                    });
                }
            case 'disbandGroup':
                {
                    if (!conversationId || !currentUserId) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            error: 'Missing info'
                        }, {
                            status: 400
                        });
                    }
                    const group = await collection.findOne({
                        _id: new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"](conversationId)
                    });
                    if (!group) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            error: 'Group not found'
                        }, {
                            status: 404
                        });
                    }
                    const userIdStr = String(currentUserId);
                    const ownerMember = Array.isArray(group.members) ? group.members.find((m)=>m && typeof m === 'object' && m.role === 'OWNER' && '_id' in m) : null;
                    const ownerId = ownerMember ? normalizeMemberId(ownerMember) : null;
                    if (!ownerId || ownerId !== userIdStr) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            error: 'Only owner can disband group'
                        }, {
                            status: 403
                        });
                    }
                    await collection.deleteOne({
                        _id: new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"](conversationId)
                    });
                    const msgCollection = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCollection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$Message$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MESSAGES_COLLECTION_NAME"]);
                    await msgCollection.deleteMany({
                        roomId: String(conversationId)
                    });
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        success: true
                    });
                }
            case 'toggleChatStatus':
                {
                    const targetId = conversationId || roomId;
                    if (!targetId || !currentUserId || !data) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            error: 'Missing ID/Data'
                        }, {
                            status: 400
                        });
                    }
                    const updateFields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$chatUpdateFields$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildToggleChatStatusFields"])(String(currentUserId), {
                        isPinned: typeof data.isPinned === 'boolean' ? data.isPinned : undefined,
                        isHidden: typeof data.isHidden === 'boolean' ? data.isHidden : undefined
                    });
                    if (!updateFields) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            error: 'No status provided'
                        }, {
                            status: 400
                        });
                    }
                    const result = await collection.updateOne({
                        _id: new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"](targetId)
                    }, {
                        $set: updateFields
                    });
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        success: true,
                        result
                    });
                }
            case 'updateCategories':
                {
                    const targetId = conversationId || roomId;
                    if (!targetId || !currentUserId || !data) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            error: 'Missing ID/Data'
                        }, {
                            status: 400
                        });
                    }
                    const updateFields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$chatUpdateFields$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildUpdateCategoriesFields"])(String(currentUserId), data.categories);
                    const result = await collection.updateOne({
                        _id: new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"](targetId)
                    }, {
                        $set: updateFields
                    });
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        success: true,
                        result
                    });
                }
            case 'updateTags':
                {
                    const targetId = conversationId || roomId;
                    if (!targetId || !currentUserId || !data) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            error: 'Missing ID/Data'
                        }, {
                            status: 400
                        });
                    }
                    const updateFields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$chatUpdateFields$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildUpdateTagsFields"])(String(currentUserId), data.tags);
                    const result = await collection.updateOne({
                        _id: new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"](targetId)
                    }, {
                        $set: updateFields
                    });
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        success: true,
                        result
                    });
                }
            default:
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Invalid action'
                }, {
                    status: 400
                });
        }
    } catch (error) {
        console.error('Conversations API Error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Server error'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__fbd7588a._.js.map