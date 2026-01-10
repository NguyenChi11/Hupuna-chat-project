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
"[project]/src/types/Message.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MESSAGES_COLLECTION_NAME",
    ()=>MESSAGES_COLLECTION_NAME
]);
const MESSAGES_COLLECTION_NAME = 'Messages';
}),
"[project]/src/types/User.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "USERS_COLLECTION_NAME",
    ()=>USERS_COLLECTION_NAME
]);
const USERS_COLLECTION_NAME = 'Users';
}),
"[project]/src/lib/socketInstance.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSocketInstance",
    ()=>getSocketInstance,
    "setSocketInstance",
    ()=>setSocketInstance
]);
let ioInstance = null;
function setSocketInstance(io) {
    ioInstance = io;
}
function getSocketInstance() {
    if (!ioInstance) {
        throw new Error('Socket.IO instance not initialized');
    }
    return ioInstance;
}
}),
"[project]/src/utils/utils.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-unused-vars */ __turbopack_context__.s([
    "accentAwareIncludes",
    ()=>accentAwareIncludes,
    "buildAccentInsensitiveRegex",
    ()=>buildAccentInsensitiveRegex,
    "computeMatchScore",
    ()=>computeMatchScore,
    "getProxyUrl",
    ()=>getProxyUrl,
    "hasDiacritics",
    ()=>hasDiacritics,
    "isLink",
    ()=>isLink,
    "isVideoFile",
    ()=>isVideoFile,
    "normalizeNoAccent",
    ()=>normalizeNoAccent,
    "resolveSocketUrl",
    ()=>resolveSocketUrl,
    "stripHtml",
    ()=>stripHtml
]);
const getProxyUrl = (url, download)=>{
    if (!url) return '';
    // Các link khác (S3, Firebase, External, PocketBase...) -> Giữ nguyên
    return url;
};
const isVideoFile = (fileName)=>{
    if (!fileName) return false;
    const videoExtensions = [
        'mp4',
        'mov',
        'avi',
        'mkv',
        'webm',
        'flv'
    ];
    const ext = fileName.split('.').pop()?.toLowerCase();
    return videoExtensions.includes(ext || '');
};
const isLink = (str)=>{
    const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
    '(' + // Bắt đầu nhóm Hostname
    'localhost|' + // ✅ THÊM DÒNG NÀY: Chấp nhận localhost
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,})|' + // domain name (google.com)
    '((\\d{1,3}\\.){3}\\d{1,3})' + // OR ip (127.0.0.1)
    ')' + // Kết thúc nhóm Hostname
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i');
    return !!pattern.test(str || '');
};
const resolveSocketUrl = ()=>{
    const envUrl = (("TURBOPACK compile-time value", "http://localhost:3002") || '').trim();
    const envPort = (("TURBOPACK compile-time value", "3002") || '').trim();
    if ("TURBOPACK compile-time truthy", 1) return envUrl || '';
    //TURBOPACK unreachable
    ;
    const host = undefined;
    const protocol = undefined;
    const isSecure = undefined;
    // 2. Logic fallback (tự động đoán)
    const port = undefined;
};
const normalizeNoAccent = (str)=>{
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').toLowerCase();
};
const normalizeNoAccentKeepDHook = (str)=>{
    return String(str || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').normalize('NFC').toLowerCase();
};
const buildAccentInsensitiveRegex = (term)=>{
    const escape = (ch)=>ch.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const parts = [];
    for (const ch of term){
        if (/\s/.test(ch)) {
            parts.push('\\s+');
        } else if (/[A-Za-z]/.test(ch)) {
            if (ch.toLowerCase() === 'd') {
                parts.push('(?:[dđ][\\u0300-\\u036f]*)');
            } else {
                parts.push(`(?:${escape(ch)}[\\u0300-\\u036f]*)`);
            }
        } else {
            parts.push(escape(ch));
        }
    }
    const pattern = parts.join('');
    return new RegExp(`(${pattern})`, 'giu');
};
const hasDiacritics = (str)=>{
    const s = String(str || '');
    const sNFD = s.normalize('NFD');
    if (/[\u0300-\u036f]/.test(sNFD)) return true;
    return /[đĐ]/.test(s);
};
const computeMatchScore = (text, term)=>{
    const escape = (v)=>v.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const txt = String(text || '').toLowerCase();
    const q = String(term || '').toLowerCase();
    const nTxt = normalizeNoAccent(txt);
    const nQ = normalizeNoAccent(q);
    if (!nTxt.includes(nQ)) return -Infinity;
    const qHasDia = hasDiacritics(q);
    const exactIdx = txt.indexOf(q);
    const normIdx = nTxt.indexOf(nQ);
    const wordExact = new RegExp(`(^|\\b)${escape(q)}`, 'i').test(txt);
    const wordNorm = new RegExp(`(^|\\b)${escape(nQ)}`, 'i').test(nTxt);
    let score = 0;
    if (exactIdx >= 0) {
        score += 50;
        if (qHasDia) score += 30;
        if (exactIdx === 0) score += 20;
        if (wordExact) score += 10;
        score += Math.max(0, 10 - exactIdx);
    } else {
        score += 20;
        if (normIdx === 0) score += 10;
        if (wordNorm) score += 5;
        score += Math.max(0, 5 - normIdx);
    }
    const lengthBoost = Math.min(10, Math.floor(nQ.length / Math.max(1, nTxt.length) * 10));
    score += lengthBoost;
    return score;
};
const hasToneMarks = (str)=>{
    const s = String(str || '').normalize('NFD');
    return /[\u0300\u0301\u0303\u0309\u0323]/.test(s);
};
const stripToneMarks = (str)=>{
    return String(str || '').normalize('NFD').replace(/[\u0300\u0301\u0303\u0309\u0323]/g, '').normalize('NFC').toLowerCase();
};
const stripBaseMarks = (str)=>{
    return String(str || '').normalize('NFD').replace(/[\u0302\u0306\u031B]/g, '').normalize('NFC').toLowerCase();
};
const accentAwareIncludes = (text, keyword)=>{
    const t = String(text || '');
    const k = String(keyword || '');
    if (!k.trim()) return true;
    const tNFC = t.normalize('NFC');
    const kNFC = k.normalize('NFC');
    const kHasDia = hasDiacritics(kNFC);
    if (kHasDia) {
        if (hasToneMarks(kNFC)) {
            const tBase = stripBaseMarks(tNFC);
            const kBase = stripBaseMarks(kNFC);
            return tBase.includes(kBase);
        }
        const tNoTone = stripToneMarks(tNFC);
        const kNoTone = stripToneMarks(kNFC);
        const tNoAccent = normalizeNoAccentKeepDHook(tNoTone);
        const kNoAccent = normalizeNoAccentKeepDHook(kNoTone);
        return tNoAccent.includes(kNoAccent);
    }
    const tNo = normalizeNoAccentKeepDHook(tNFC);
    const kNo = normalizeNoAccentKeepDHook(kNFC);
    return tNo.includes(kNo);
};
const stripHtml = (html)=>{
    if (!html) return '';
    // Check if it's HTML-like
    if (!/<[a-z][\s\S]*>/i.test(html)) return html;
    // Strip tags
    return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
};
}),
"[project]/src/app/api/messages/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/app/api/messages/route.ts
__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mongoDBCRUD.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$Message$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/Message.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$User$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/User.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongodb [external] (mongodb, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketInstance$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/socketInstance.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/utils.ts [app-route] (ecmascript)");
;
;
;
;
;
;
;
async function sendPushOnMessage(data) {
    const appId = ("TURBOPACK compile-time value", "12119819-aca3-4965-86fe-633ab89cd21a") || process.env.ONESIGNAL_APP_ID || '';
    const apiKey = process.env.ONESIGNAL_REST_API_KEY || '';
    if (!appId || !apiKey) return;
    const roomId = String(data.roomId);
    const senderId = String(data.senderId);
    let recipients = [];
    let heading = 'Tin nhắn mới';
    const body = data.content || 'Bạn có tin nhắn mới';
    try {
        const senderRes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAllRows"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$User$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["USERS_COLLECTION_NAME"], {
            filters: {
                _id: __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"].isValid(senderId) ? new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"](senderId) : senderId
            },
            limit: 1
        });
        const sender = senderRes.data?.[0];
        if (sender && sender.name) heading = sender.name;
    } catch (error) {
        console.warn('sendPushOnMessage:getSender', error);
    }
    if (roomId.includes('_')) {
        const parts = roomId.split('_');
        const other = parts.find((p)=>String(p) !== senderId) || parts[0];
        recipients = [
            String(other)
        ];
    } else {
        try {
            const groupRes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAllRows"])('Groups', {
                filters: {
                    _id: __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"].isValid(roomId) ? new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"](roomId) : roomId
                },
                limit: 1
            });
            const group = groupRes.data?.[0];
            if (group) {
                heading = group.name || heading;
                const members = Array.isArray(group.members) ? group.members : [];
                const ids = members.map((m)=>{
                    if (typeof m === 'string') return String(m);
                    const obj = m;
                    return obj._id ? String(obj._id) : obj.id ? String(obj.id) : '';
                }).filter((id)=>id && id !== senderId);
                recipients = Array.from(new Set(ids));
            }
        } catch (error) {
            console.warn('sendPushOnMessage:getGroup', error);
        }
    }
    const targets = Array.from(new Set([
        ...recipients,
        senderId
    ])).filter(Boolean);
    if (targets.length === 0) return;
    const url = 'https://api.onesignal.com/notifications';
    let subscriptionIds = [];
    try {
        const usersRes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAllRows"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$User$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["USERS_COLLECTION_NAME"], {
            filters: {
                _id: {
                    $in: targets.map((t)=>__TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"].isValid(t) ? new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"](t) : t)
                }
            },
            limit: 9999
        });
        subscriptionIds = Array.from(new Set((usersRes.data || []).map((u)=>Array.isArray(u['onesignalSubs']) ? u['onesignalSubs'] : []).flat().filter((x)=>typeof x === 'string' && x.trim().length > 0)));
    } catch (error) {
        console.warn('sendPushOnMessage:getSubscriptions', error);
    }
    const useSubs = subscriptionIds.length > 0;
    const payload = useSubs ? {
        app_id: appId,
        include_subscription_ids: subscriptionIds,
        target_channel: 'push',
        contents: {
            en: body,
            vi: body
        },
        headings: {
            en: heading,
            vi: heading
        },
        isAnyWeb: true
    } : {
        app_id: appId,
        include_aliases: {
            external_id: targets
        },
        target_channel: 'push',
        contents: {
            en: body,
            vi: body
        },
        headings: {
            en: heading,
            vi: heading
        },
        isAnyWeb: true
    };
    try {
        const postWithRetry = async (p)=>{
            const max = 3;
            let i = 0;
            let last = null;
            while(i < max){
                last = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `key ${apiKey}`
                    },
                    body: JSON.stringify(p)
                });
                if (last.ok) return last;
                i++;
                if (i < max) {
                    await new Promise((r)=>setTimeout(r, 300 * Math.pow(2, i - 1)));
                }
            }
            return last;
        };
        const res = await postWithRetry(payload);
        if (!res.ok) {
            const filtersPayload = {
                app_id: appId,
                target_channel: 'push',
                isAnyWeb: true,
                filters: targets.map((rid)=>({
                        field: 'tag',
                        relation: '=',
                        key: 'userId',
                        value: rid
                    })).flatMap((f, i)=>i === 0 ? [
                        f
                    ] : [
                        {
                            operator: 'OR'
                        },
                        f
                    ]),
                contents: {
                    en: body,
                    vi: body
                },
                headings: {
                    en: heading,
                    vi: heading
                }
            };
            const fallbackRes = await postWithRetry(filtersPayload);
            if (!fallbackRes.ok) {
                const txt = await fallbackRes.text().catch(()=>'');
                console.error('sendPushOnMessage:onesignal', fallbackRes.status, txt);
            }
        }
    } catch (error) {
        console.error('sendPushOnMessage:send', error);
    }
}
async function POST(req) {
    const { action, collectionName = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$Message$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MESSAGES_COLLECTION_NAME"], data, filters, field, value, skip, limit, _id: requestId, code, sort, roomId, userId, messageId, assetType, beforeTs } = await req.json();
    try {
        switch(action){
            case 'create':
                {
                    const t = String(data?.type || '').toLowerCase();
                    let newData = {
                        ...data,
                        timestamp: Date.now(),
                        readBy: [
                            String(data.sender)
                        ]
                    };
                    if (t === 'poll') {
                        const qRaw = String(data?.['pollQuestion'] ?? data?.['content'] ?? '').trim();
                        const arrRaw = Array.isArray(data['pollOptions']) ? data['pollOptions'] : [];
                        const cleaned = arrRaw.map((o)=>String(o || '').trim()).filter((o)=>o);
                        const lowers = Array.from(new Set(cleaned.map((o)=>o.toLowerCase())));
                        const unique = lowers.map((lo)=>cleaned.find((x)=>x.toLowerCase() === lo));
                        if (!qRaw || unique.length < 2) {
                            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                                error: 'Invalid poll'
                            }, {
                                status: 400
                            });
                        }
                        newData = {
                            ...newData,
                            type: 'poll',
                            content: qRaw,
                            pollQuestion: qRaw,
                            pollOptions: unique,
                            pollVotes: {},
                            isPollLocked: !!data['isPollLocked'] ? true : false
                        };
                    }
                    // Xóa _id (nếu có) để MongoDB tự sinh ObjectId mới
                    if (newData['_id']) delete newData['_id'];
                    if (newData['id']) delete newData['id'];
                    const newId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["addRow"])(collectionName, newData);
                    Promise.resolve().then(()=>sendPushOnMessage({
                            roomId: String(newData.roomId),
                            senderId: String(newData.sender),
                            content: String(newData.content || '')
                        })).catch((error)=>{
                        console.error('messages.create:push', error);
                    });
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        success: true,
                        _id: newId
                    });
                }
            case 'read':
                {
                    const { roomId, isPinned, searchQuery, ...otherFilters } = filters || {};
                    const baseFilters = {};
                    if (roomId) {
                        const variants = [
                            roomId
                        ];
                        const num = Number(roomId);
                        if (!Number.isNaN(num)) variants.push(num);
                        if (__TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"].isValid(String(roomId))) variants.push(new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"](String(roomId)));
                        baseFilters.roomId = {
                            $in: variants
                        };
                    }
                    if (isPinned !== undefined) {
                        baseFilters.isPinned = isPinned;
                    }
                    const finalFilters = {
                        ...baseFilters
                    };
                    for (const [k, v] of Object.entries(otherFilters || {})){
                        if (k === 'timestamp') continue;
                        finalFilters[k] = v;
                    }
                    const searchOr = null;
                    if (searchQuery && typeof searchQuery === 'string' && searchQuery.trim()) {
                        // Không thêm $regex ở Mongo để tránh phải điền đủ dấu
                        // Chỉ đảm bảo loại bỏ notify để giảm dữ liệu
                        if (!otherFilters || !Object.keys(otherFilters).includes('type')) {
                            finalFilters.type = {
                                $ne: 'notify'
                            };
                        }
                    }
                    const tsCondRaw = (otherFilters || {})['timestamp'];
                    if (tsCondRaw && typeof tsCondRaw === 'object') {
                        const op = [
                            '$lt',
                            '$lte',
                            '$gt',
                            '$gte'
                        ].find((k)=>k in tsCondRaw);
                        if (op) {
                            const val = tsCondRaw[op];
                            const expr = {
                                [op]: [
                                    {
                                        $toDouble: '$timestamp'
                                    },
                                    val
                                ]
                            };
                            const tsOr = [
                                {
                                    timestamp: tsCondRaw
                                },
                                {
                                    $expr: expr
                                }
                            ];
                            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                            ;
                            else {
                                finalFilters.$or = tsOr;
                            }
                        } else if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                        ;
                    }
                    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAllRows"])(collectionName, {
                        search: undefined,
                        skip,
                        limit,
                        filters: finalFilters,
                        sort,
                        collation: {
                            locale: 'vi',
                            strength: 1,
                            normalization: true
                        }
                    });
                    let messages = result.data || [];
                    if (searchQuery && typeof searchQuery === 'string' && searchQuery.trim()) {
                        const term = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeNoAccent"])(searchQuery);
                        messages = messages.filter((m)=>{
                            const text = m.type === 'file' ? String(m.fileName || '') : m.type === 'sticker' ? '' : String(m.content || '');
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeNoAccent"])(text).includes(term);
                        });
                    }
                    // ... (phần còn lại của case 'read' để lấy thông tin sender và trả về)
                    // ... (phần lấy danh sách senderIds, query users, enrichedMessages)
                    // Lấy danh sách senderId (hỗ trợ cả ObjectId, number, string)
                    const rawSenderIds = [
                        ...new Set(messages.map((m)=>{
                            const s = m.sender;
                            if (s && typeof s === 'object' && s !== null && '_id' in s) {
                                return String(s._id);
                            }
                            return String(m.sender);
                        }))
                    ];
                    const senderIdValues = rawSenderIds.map((idStr)=>{
                        if (__TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"].isValid(idStr)) return new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"](idStr);
                        const num = Number(idStr);
                        return Number.isNaN(num) ? idStr : num;
                    });
                    // ... (các bước lấy userMap và enrichedMessages)
                    const usersResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAllRows"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$User$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["USERS_COLLECTION_NAME"], {
                        filters: {
                            _id: {
                                $in: senderIdValues
                            }
                        },
                        limit: 999999
                    });
                    const userMap = new Map();
                    (usersResult.data || []).forEach((u)=>userMap.set(String(u._id), u));
                    // Map info vào message
                    const enrichedMessages = messages.map((msg)=>{
                        const user = userMap.get(String(msg.sender));
                        return {
                            ...msg,
                            sender: user ? {
                                _id: String(user._id),
                                name: user.name,
                                avatar: user.avatar
                            } : {
                                _id: String(msg.sender),
                                name: 'Unknown',
                                avatar: null
                            }
                        };
                    });
                    const uniqueMessages = Array.from(new Map(enrichedMessages.map((m)=>[
                            String(m._id),
                            m
                        ])).values());
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        total: result.total,
                        data: uniqueMessages
                    });
                }
            case 'readAssets':
                {
                    if (!roomId) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        error: 'Missing roomId'
                    }, {
                        status: 400
                    });
                    const type = String(assetType || '').toLowerCase();
                    const max = typeof limit === 'number' && limit > 0 ? Math.min(limit, 5000) : 6;
                    const videoRegex = /\.(mp4|mov|mkv|webm|avi|m4v)$/i;
                    const linkRegex = /(https?:\/\/|www\.)\S+/i;
                    const baseFilters = {
                        roomId,
                        isRecalled: {
                            $ne: true
                        }
                    };
                    if (typeof beforeTs === 'number' && beforeTs > 0) {
                        baseFilters.timestamp = {
                            $lte: beforeTs
                        };
                    }
                    let mongoFilters = {
                        ...baseFilters
                    };
                    if (type === 'media') {
                        mongoFilters = {
                            ...baseFilters,
                            $or: [
                                {
                                    type: 'image'
                                },
                                {
                                    type: 'video'
                                },
                                {
                                    $and: [
                                        {
                                            type: 'file'
                                        },
                                        {
                                            $or: [
                                                {
                                                    fileUrl: {
                                                        $regex: videoRegex
                                                    }
                                                },
                                                {
                                                    fileName: {
                                                        $regex: videoRegex
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        };
                    } else if (type === 'file') {
                        mongoFilters = {
                            ...baseFilters,
                            type: 'file',
                            $nor: [
                                {
                                    fileUrl: {
                                        $regex: videoRegex
                                    }
                                },
                                {
                                    fileName: {
                                        $regex: videoRegex
                                    }
                                }
                            ]
                        };
                    } else if (type === 'link') {
                        mongoFilters = {
                            ...baseFilters,
                            type: 'text',
                            content: {
                                $regex: linkRegex
                            }
                        };
                    } else {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            error: 'Invalid assetType'
                        }, {
                            status: 400
                        });
                    }
                    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAllRows"])(collectionName, {
                        filters: mongoFilters,
                        limit: max,
                        sort: {
                            field: 'timestamp',
                            order: 'desc'
                        }
                    });
                    const items = (result.data || []).map((msg)=>{
                        if (type === 'media') {
                            const isVid = msg.type === 'video' || videoRegex.test(String(msg.fileUrl || msg.fileName || ''));
                            return {
                                id: String(msg._id),
                                url: String(msg.fileUrl || ''),
                                fileName: msg.fileName,
                                type: isVid ? 'video' : 'image',
                                timestamp: Number(msg.timestamp) || Date.now()
                            };
                        }
                        if (type === 'file') {
                            return {
                                id: String(msg._id),
                                url: String(msg.fileUrl || msg.content || ''),
                                fileName: msg.fileName || 'Tài liệu',
                                timestamp: Number(msg.timestamp) || Date.now()
                            };
                        }
                        // link
                        {
                            const raw = String(msg.content || '');
                            const firstMatch = raw.match(linkRegex);
                            const onlyUrl = firstMatch ? String(firstMatch[0]) : '';
                            return {
                                id: String(msg._id),
                                url: onlyUrl,
                                timestamp: Number(msg.timestamp) || Date.now()
                            };
                        }
                    });
                    const toDateKey = (ts)=>{
                        const d = new Date(ts);
                        const y = d.getFullYear();
                        const m = String(d.getMonth() + 1).padStart(2, '0');
                        const day = String(d.getDate()).padStart(2, '0');
                        return `${y}-${m}-${day}`;
                    };
                    const toDateLabel = (ts)=>{
                        const d = new Date(ts);
                        const today = new Date();
                        const yday = new Date();
                        yday.setDate(yday.getDate() - 1);
                        const sameDate = (a, b)=>a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
                        if (sameDate(d, today)) return 'Hôm nay';
                        if (sameDate(d, yday)) return 'Hôm qua';
                        return d.toLocaleDateString('vi-VN');
                    };
                    const map = new Map();
                    items.forEach((it)=>{
                        const key = toDateKey(it.timestamp);
                        if (!map.has(key)) map.set(key, {
                            dateKey: key,
                            dateLabel: toDateLabel(it.timestamp),
                            items: []
                        });
                        map.get(key).items.push(it);
                    });
                    const groups = Array.from(map.values());
                    groups.sort((a, b)=>a.dateKey < b.dateKey ? 1 : a.dateKey > b.dateKey ? -1 : 0);
                    groups.forEach((g)=>g.items.sort((a, b)=>b.timestamp - a.timestamp));
                    const nextCursor = (result.data || []).length > 0 ? Math.min(...(result.data || []).map((m)=>m.timestamp)) : null;
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        success: true,
                        total: result.total || items.length,
                        groups,
                        nextCursor
                    });
                }
            case 'recall':
                {
                    if (!messageId) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        error: 'Missing messageId'
                    }, {
                        status: 400
                    });
                    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateByField"])(collectionName, '_id', messageId, {
                        isRecalled: true
                    });
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        success: true,
                        result
                    });
                }
            case 'markAsRead':
                {
                    if (!roomId || !userId) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            error: 'Missing roomId or userId'
                        }, {
                            status: 400
                        });
                    }
                    const userIdStr = String(userId);
                    const variants = [
                        userIdStr,
                        Number.isNaN(Number(userIdStr)) ? undefined : Number(userIdStr)
                    ].filter((v)=>v !== undefined);
                    // 1. Filter: Tìm các tin nhắn trong roomId có userId CHƯA đọc
                    const filter = {
                        roomId: String(roomId),
                        readBy: {
                            $nin: variants
                        }
                    };
                    // 2. Update: Thêm userId vào mảng readBy của các tin nhắn tìm được ($addToSet)
                    const updateData = {
                        $addToSet: {
                            readBy: userIdStr
                        }
                    };
                    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateMany"])(collectionName, filter, updateData);
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        success: true,
                        result
                    });
                }
            case 'togglePin':
                {
                    // messageId: ID tin nhắn cần ghim/bỏ ghim
                    // isPinned: Trạng thái mới (true/false) được gửi từ frontend
                    if (!messageId || !data || typeof data.isPinned !== 'boolean') {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            error: 'Missing messageId or invalid data/isPinned status'
                        }, {
                            status: 400
                        });
                    }
                    const newPinnedStatus = data.isPinned;
                    const pinnedTitle = data.pinnedTitle;
                    // Tìm tin nhắn theo ID và cập nhật trường isPinned
                    const updatePayload = {
                        isPinned: newPinnedStatus,
                        pinnedAt: newPinnedStatus ? Date.now() : null
                    };
                    if (pinnedTitle !== undefined && pinnedTitle !== null) {
                        updatePayload.pinnedTitle = String(pinnedTitle);
                    }
                    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateByField"])(collectionName, '_id', messageId, updatePayload);
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        success: true,
                        result
                    });
                }
            case 'getById':
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getRowByIdOrCode"])(collectionName, {
                    _id: requestId,
                    code
                }));
            case 'update':
                {
                    if (!field || value === undefined) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        error: 'Missing field or value'
                    }, {
                        status: 400
                    });
                    const key = String(field);
                    const val = typeof value === 'string' || typeof value === 'number' ? value : String(value);
                    const ok = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateByField"])(collectionName, key, val, data);
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        success: ok
                    });
                }
            case 'updateMany':
                {
                    if (!filters || !data) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        error: 'Missing filters or data'
                    }, {
                        status: 400
                    });
                    const safeFilters = {
                        ...filters
                    };
                    if (safeFilters._id && typeof safeFilters._id === 'string') {
                        if (__TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"].isValid(safeFilters._id)) {
                            safeFilters._id = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"](safeFilters._id);
                        } else if (!isNaN(Number(safeFilters._id))) {
                            safeFilters._id = Number(safeFilters._id);
                        }
                    }
                    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateMany"])(collectionName, safeFilters, {
                        $set: data
                    });
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        success: true,
                        matchedCount: result.matchedCount,
                        modifiedCount: result.modifiedCount
                    });
                }
            case 'delete':
                {
                    if (!field || value === undefined) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        error: 'Missing field or value'
                    }, {
                        status: 400
                    });
                    const isIdField = String(field) === '_id';
                    let ok = false;
                    if (isIdField) {
                        ok = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteById"])(collectionName, String(value));
                    } else {
                        const key = String(field);
                        const val = typeof value === 'string' || typeof value === 'number' ? value : String(value);
                        ok = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteByField"])(collectionName, key, val);
                    }
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        success: ok
                    });
                }
            case 'clearHistory':
                {
                    if (!roomId) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            error: 'Missing roomId'
                        }, {
                            status: 400
                        });
                    }
                    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteManyRows"])(collectionName, {
                        roomId: String(roomId)
                    });
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        success: true,
                        deletedCount: result?.deletedCount ?? undefined
                    });
                }
            // Thay thế case 'globalSearch' trong /api/messages/route.ts
            case 'globalSearch':
                {
                    const searchTerm = data?.searchTerm;
                    const searchUserId = data?.userId;
                    if (!searchTerm || !searchUserId) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            error: 'Missing userId or searchTerm'
                        }, {
                            status: 400
                        });
                    }
                    // ========== BƯỚC 1: LẤY DANH SÁCH GROUP MÀ USER LÀ THÀNH VIÊN ==========
                    const groupRoomIds = [];
                    const groupMap = new Map();
                    try {
                        const allGroupsResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAllRows"])('Groups', {
                            filters: {},
                            limit: 9999
                        });
                        const getMemberId = (m)=>{
                            if (!m) return null;
                            if (typeof m === 'string') return m;
                            if (typeof m === 'object') {
                                if ('_id' in m && m._id) return String(m._id);
                                if ('id' in m && m.id) return String(m.id);
                            }
                            return null;
                        };
                        const userGroups = (allGroupsResult.data || []).filter((g)=>{
                            if (g.members && Array.isArray(g.members)) {
                                const isMemberInArray = g.members.some((m)=>{
                                    const memberId = getMemberId(m);
                                    return String(memberId) === String(searchUserId);
                                });
                                if (isMemberInArray) return true;
                            }
                            return false;
                        });
                        userGroups.forEach((g)=>{
                            const gId = String(g._id);
                            groupRoomIds.push(gId);
                            let membersList = [];
                            if (g.members && Array.isArray(g.members)) {
                                membersList = g.members.map((m)=>getMemberId(m) || String(m));
                            }
                            groupMap.set(gId, {
                                _id: gId,
                                name: g.name || 'Nhóm',
                                avatar: g.avatar,
                                isGroup: true,
                                members: membersList
                            });
                        });
                    } catch (e) {
                        console.error('❌ [API] Error fetching groups:', e);
                    }
                    // ========== BƯỚC 2: TẠO REGEX TÌM KIẾM ==========
                    const termNorm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeNoAccent"])(String(searchTerm || ''));
                    // ========== BƯỚC 3: LẤY DANH SÁCH ROOMID CHAT 1-1 ==========
                    const oneToOneRoomIds = [];
                    const userMap = new Map();
                    try {
                        const allUsersResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAllRows"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$User$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["USERS_COLLECTION_NAME"], {
                            filters: {},
                            limit: 9999
                        });
                        (allUsersResult.data || []).forEach((u)=>{
                            userMap.set(String(u._id), u);
                        });
                        const otherUsers = allUsersResult.data?.filter((u)=>String(u._id) !== String(searchUserId)) || [];
                        otherUsers.forEach((otherUser)=>{
                            const ids = [
                                searchUserId,
                                String(otherUser._id)
                            ].sort();
                            const roomId = `${ids[0]}_${ids[1]}`;
                            oneToOneRoomIds.push(roomId);
                        });
                    } catch (e) {
                        console.error('❌ [API] Error generating 1-1 rooms:', e);
                    }
                    const allAccessibleRoomIds = [
                        ...groupRoomIds,
                        ...oneToOneRoomIds
                    ];
                    // ========== BƯỚC 4: TÌM KIẾM TIN NHẮN ==========
                    const searchFilters = {
                        $and: [
                            {
                                roomId: {
                                    $in: allAccessibleRoomIds
                                }
                            },
                            {
                                isDeleted: {
                                    $ne: true
                                }
                            },
                            {
                                isRecalled: {
                                    $ne: true
                                }
                            },
                            {
                                type: {
                                    $ne: 'notify'
                                }
                            }
                        ]
                    };
                    const searchResults = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAllRows"])(collectionName, {
                        filters: searchFilters,
                        limit: data.limit || 100,
                        sort: {
                            field: 'timestamp',
                            order: 'desc'
                        },
                        collation: {
                            locale: 'vi',
                            strength: 1,
                            normalization: true
                        }
                    });
                    let foundMessages = searchResults.data || [];
                    if (termNorm) {
                        foundMessages = foundMessages.filter((msg)=>{
                            const base = msg.type === 'file' ? String(msg.fileName || '') : msg.type === 'sticker' ? '' : String(msg.content || '');
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeNoAccent"])(base).includes(termNorm);
                        });
                    }
                    if (!foundMessages.length) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            success: true,
                            data: [],
                            total: 0
                        });
                    }
                    // ========== BƯỚC 5: LÀM GIÀU DỮ LIỆU TIN NHẮN ==========
                    const enrichedMessages = foundMessages.map((msg)=>{
                        const senderId = String(msg.sender);
                        const senderUser = userMap.get(senderId);
                        const isMyMessage = senderId === searchUserId;
                        const chatInfo = {
                            roomId: msg.roomId,
                            roomName: 'Cuộc trò chuyện',
                            roomAvatar: null,
                            isGroupChat: false,
                            partnerId: null,
                            partnerName: 'Người dùng',
                            partnerAvatar: null
                        };
                        // Check GROUP TRƯỚC
                        const isInGroup = groupMap.has(msg.roomId);
                        if (isInGroup) {
                            const group = groupMap.get(msg.roomId);
                            chatInfo.isGroupChat = true;
                            chatInfo.roomId = msg.roomId;
                            chatInfo.roomName = group?.name || 'Nhóm';
                            chatInfo.roomAvatar = group?.avatar || null;
                            chatInfo.partnerId = null;
                        } else {
                            // Chat 1-1
                            chatInfo.isGroupChat = false;
                            let partnerId = null;
                            // ✅ FIX: Cải thiện logic xác định partnerId
                            if (msg.roomId && msg.roomId.includes('_')) {
                                const parts = msg.roomId.split('_');
                                partnerId = parts[0] === searchUserId ? parts[1] : parts[0];
                            } else if (isMyMessage && msg.receiver) {
                                partnerId = String(msg.receiver);
                            } else if (!isMyMessage) {
                                partnerId = senderId;
                            }
                            if (partnerId) {
                                const partnerUser = userMap.get(partnerId);
                                chatInfo.partnerId = partnerId;
                                chatInfo.partnerName = partnerUser?.name || 'Người dùng';
                                chatInfo.partnerAvatar = partnerUser?.avatar || null;
                                chatInfo.roomName = chatInfo.partnerName;
                                chatInfo.roomAvatar = chatInfo.partnerAvatar;
                                // ✅ CRITICAL: Tạo roomId chuẩn cho 1-1 chat
                                const ids = [
                                    searchUserId,
                                    partnerId
                                ].sort();
                                chatInfo.roomId = `${ids[0]}_${ids[1]}`;
                            }
                        }
                        // Format content preview
                        let contentPreview = '';
                        if (msg.type === 'file' && msg.fileName) {
                            contentPreview = `📎 ${msg.fileName}`;
                        } else if (msg.type === 'image') {
                            contentPreview = '🖼️ Hình ảnh';
                        } else if (msg.type === 'sticker') {
                            contentPreview = '😊 Sticker';
                        } else if (msg.type === 'video') {
                            contentPreview = '🎥 Video';
                        } else {
                            contentPreview = msg.content || 'Tin nhắn';
                        }
                        const displaySenderName = isMyMessage ? 'Bạn' : senderUser?.name || `User ${senderId.slice(0, 8)}`;
                        const displayRoomName = chatInfo.isGroupChat ? chatInfo.roomName : chatInfo.partnerName;
                        return {
                            _id: String(msg._id),
                            type: msg.type,
                            content: msg.content,
                            fileName: msg.fileName,
                            fileUrl: msg.fileUrl,
                            timestamp: msg.timestamp,
                            sender: senderId,
                            senderName: displaySenderName,
                            senderAvatar: senderUser?.avatar || null,
                            isMyMessage,
                            receiver: msg.receiver ? String(msg.receiver) : null,
                            ...chatInfo,
                            displaySenderName,
                            displayRoomName,
                            contentPreview,
                            replyToMessageId: msg.replyToMessageId,
                            replyToMessageName: msg.replyToMessageName
                        };
                    });
                    // ========== BƯỚC 6: PHÂN LOẠI KẾT QUẢ ==========
                    const messagesByType = {
                        text: enrichedMessages.filter((m)=>m.type === 'text'),
                        file: enrichedMessages.filter((m)=>m.type === 'file'),
                        image: enrichedMessages.filter((m)=>m.type === 'image'),
                        video: enrichedMessages.filter((m)=>m.type === 'video'),
                        sticker: enrichedMessages.filter((m)=>m.type === 'sticker'),
                        reminder: enrichedMessages.filter((m)=>m.type === 'reminder'),
                        all: enrichedMessages
                    };
                    const messagesBySource = {
                        group: enrichedMessages.filter((m)=>m.isGroupChat),
                        oneToOne: enrichedMessages.filter((m)=>!m.isGroupChat),
                        all: enrichedMessages
                    };
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        success: true,
                        data: enrichedMessages,
                        total: searchResults.total || enrichedMessages.length,
                        metadata: {
                            searchTerm,
                            totalResults: enrichedMessages.length,
                            byType: {
                                text: messagesByType.text.length,
                                file: messagesByType.file.length,
                                image: messagesByType.image.length,
                                video: messagesByType.video.length,
                                sticker: messagesByType.sticker.length,
                                reminder: messagesByType.reminder.length
                            },
                            bySource: {
                                group: messagesBySource.group.length,
                                oneToOne: messagesBySource.oneToOne.length
                            }
                        }
                    });
                }
            case 'readReminders':
                {
                    const searchUserId = data?.userId;
                    const untilTs = typeof data?.untilTs === 'number' ? data.untilTs : undefined;
                    const fromTs = typeof data?.fromTs === 'number' ? data.fromTs : undefined;
                    if (!searchUserId) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            error: 'Missing userId'
                        }, {
                            status: 400
                        });
                    }
                    const groupRoomIds = [];
                    try {
                        const allGroupsResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAllRows"])('Groups', {
                            filters: {},
                            limit: 9999
                        });
                        const getMemberId = (m)=>{
                            if (!m) return null;
                            if (typeof m === 'string') return m;
                            if (typeof m === 'object') {
                                if ('_id' in m && m._id) return String(m._id);
                                if ('id' in m && m.id) return String(m.id);
                            }
                            return null;
                        };
                        const userGroups = (allGroupsResult.data || []).filter((g)=>{
                            if (g.members && Array.isArray(g.members)) {
                                return g.members.some((m)=>String(getMemberId(m)) === String(searchUserId));
                            }
                            return false;
                        });
                        userGroups.forEach((g)=>groupRoomIds.push(String(g._id)));
                    } catch (error) {
                        console.error('messages.searchReminders:getGroups', error);
                    }
                    const oneToOneRoomIds = [];
                    try {
                        const allUsersResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAllRows"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$User$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["USERS_COLLECTION_NAME"], {
                            filters: {},
                            limit: 9999
                        });
                        const otherUsers = (allUsersResult.data || []).filter((u)=>String(u._id) !== String(searchUserId));
                        otherUsers.forEach((otherUser)=>{
                            const ids = [
                                searchUserId,
                                String(otherUser._id)
                            ].sort();
                            const roomId = `${ids[0]}_${ids[1]}`;
                            oneToOneRoomIds.push(roomId);
                        });
                    } catch (error) {
                        console.error('messages.searchReminders:getUsers', error);
                    }
                    const allAccessibleRoomIds = [
                        ...groupRoomIds,
                        ...oneToOneRoomIds
                    ];
                    const reminderFilters = {
                        type: 'reminder',
                        isDeleted: {
                            $ne: true
                        },
                        isRecalled: {
                            $ne: true
                        },
                        reminderFired: {
                            $ne: true
                        },
                        $or: [
                            {
                                roomId: {
                                    $in: allAccessibleRoomIds
                                }
                            },
                            {
                                sender: String(searchUserId)
                            }
                        ]
                    };
                    if (typeof fromTs === 'number' || typeof untilTs === 'number') {
                        reminderFilters.reminderAt = {
                            ...typeof fromTs === 'number' ? {
                                $gte: fromTs
                            } : {},
                            ...typeof untilTs === 'number' ? {
                                $lte: untilTs
                            } : {}
                        };
                    }
                    const searchResults = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAllRows"])(collectionName, {
                        filters: reminderFilters,
                        limit: data?.limit || 5000,
                        sort: {
                            field: 'reminderAt',
                            order: 'asc'
                        }
                    });
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        success: true,
                        data: searchResults.data || [],
                        total: searchResults.total || 0
                    });
                }
            case 'fireReminder':
                {
                    if (!messageId || !userId) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            error: 'Missing messageId or userId'
                        }, {
                            status: 400
                        });
                    }
                    const rowRes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getRowByIdOrCode"])(collectionName, {
                        _id: messageId
                    });
                    const row = rowRes?.row ?? null;
                    if (!row || row.type !== 'reminder') {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            success: false,
                            updated: false
                        });
                    }
                    const latestAt = row.reminderAt || row.timestamp || Date.now();
                    // 🔥 Prevent firing if the reminder is in the future (with 1 min buffer)
                    if (latestAt > Date.now() + 60 * 1000) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            success: true,
                            updated: false,
                            message: 'Reminder is in the future'
                        });
                    }
                    const repeat = row.reminderRepeat || 'none';
                    // Tính nextAt cho recurring reminder
                    let nextAt = null;
                    if (repeat === 'daily') nextAt = latestAt + 24 * 60 * 60 * 1000;
                    else if (repeat === 'weekly') nextAt = latestAt + 7 * 24 * 60 * 60 * 1000;
                    else if (repeat === 'monthly') {
                        const d = new Date(latestAt);
                        d.setMonth(d.getMonth() + 1);
                        nextAt = d.getTime();
                    }
                    // Update message
                    const updateData = nextAt ? {
                        reminderAt: nextAt,
                        reminderFired: false,
                        editedAt: Date.now()
                    } : {
                        reminderFired: true
                    };
                    const filter = {
                        _id: __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"].isValid(String(messageId)) ? new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"](String(messageId)) : String(messageId),
                        type: 'reminder',
                        reminderFired: {
                            $ne: true
                        },
                        reminderAt: latestAt
                    }; // ✅ Thêm type assertion
                    const upd = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateMany"])(collectionName, filter, {
                        $set: updateData
                    });
                    const modified = upd?.modifiedCount ?? 0;
                    if (!modified) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            success: true,
                            updated: false
                        });
                    }
                    // ✅ TẠO THÔNG BÁO
                    const timeStr = new Date(latestAt).toLocaleString('vi-VN');
                    const notifyContent = `Đến giờ lịch hẹn: "${String(row.content || '')}" lúc ${timeStr}`;
                    const notifyId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["addRow"])(collectionName, {
                        roomId: String(row.roomId),
                        sender: String(userId),
                        type: 'notify',
                        content: notifyContent,
                        timestamp: Date.now(),
                        replyToMessageId: String(row._id)
                    });
                    // ✅ EMIT SOCKET - CHỈ 1 LẦN DUY NHẤT
                    try {
                        const io = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socketInstance$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSocketInstance"])(); // Cần implement hàm này
                        const roomId = String(row.roomId);
                        // Emit thông báo
                        io.in(roomId).emit('receive_message', {
                            _id: notifyId,
                            roomId: roomId,
                            sender: String(userId),
                            type: 'notify',
                            content: notifyContent,
                            timestamp: Date.now(),
                            replyToMessageId: String(row._id)
                        });
                        // Nếu có nextAt, emit update reminder
                        if (nextAt) {
                            io.in(roomId).emit('edit_message', {
                                _id: String(row._id),
                                roomId: roomId,
                                reminderAt: nextAt,
                                editedAt: Date.now()
                            });
                        }
                    } catch (err) {
                        console.error('❌ Socket emit error:', err);
                    }
                    // Push notification
                    Promise.resolve().then(()=>sendPushOnMessage({
                            roomId: String(row.roomId),
                            senderId: String(userId),
                            content: notifyContent
                        })).catch((error)=>{
                        console.error('messages.fireReminder:push', error);
                    });
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        success: true,
                        updated: true,
                        notifyId,
                        nextAt
                    });
                }
            case 'editMessage':
                {
                    const { messageId, newContent } = data;
                    // 1. 🔥 LẤY TIN NHẮN HIỆN TẠI ĐỂ LƯU NỘI DUNG GỐC
                    const existingMsg = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getRowByIdOrCode"])(collectionName, {
                        _id: messageId
                    });
                    // 2. Xác định nội dung gốc (nếu originalContent chưa tồn tại)
                    const originalContentToSave = existingMsg?.row.originalContent || existingMsg?.row.content;
                    if (!messageId || !newContent || typeof newContent !== 'string' || !existingMsg) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            error: 'Invalid data or message not found'
                        }, {
                            status: 400
                        });
                    }
                    // 3. Cập nhật data
                    const updateData = {
                        content: newContent,
                        editedAt: Date.now(),
                        originalContent: originalContentToSave
                    };
                    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateByField"])(collectionName, '_id', messageId, updateData);
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
        console.error('MongoDB API Error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Server error'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8906b91d._.js.map