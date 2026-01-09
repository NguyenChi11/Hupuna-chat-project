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
"[project]/src/app/api/posts/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mongoDBCRUD.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongodb [external] (mongodb, cjs)");
;
;
;
const POSTS_COLLECTION_NAME = 'Posts';
async function POST(req) {
    const body = await req.json();
    const { action, collectionName = POSTS_COLLECTION_NAME, data, filters, field, value, skip, limit, sort, postId, userId } = body;
    try {
        switch(action){
            /* ------------------------------- CREATE POST ------------------------------- */ case 'create':
                {
                    const payload = data;
                    if (!payload?.authorId || !payload?.content) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            error: 'Missing authorId or content'
                        }, {
                            status: 400
                        });
                    }
                    const newData = {
                        authorId: String(payload.authorId),
                        authorName: payload.authorName ? String(payload.authorName) : undefined,
                        authorAvatar: payload.authorAvatar ? String(payload.authorAvatar) : undefined,
                        content: String(payload.content || ''),
                        images: Array.isArray(payload.images) ? payload.images.map(String) : [],
                        videos: Array.isArray(payload.videos) ? payload.videos.map(String) : [],
                        files: Array.isArray(payload.files) ? payload.files.map(String) : [],
                        createdAt: Date.now(),
                        likedBy: [],
                        commentsCount: 0,
                        visibility: payload.visibility || 'public'
                    };
                    const newId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["addRow"])(collectionName, newData);
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        success: true,
                        _id: newId
                    });
                }
            /* ------------------------------- READ POSTS ------------------------------- */ case 'read':
                {
                    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAllRows"])(collectionName, {
                        filters: filters || {},
                        skip: typeof skip === 'number' ? skip : 0,
                        limit: typeof limit === 'number' ? limit : 20,
                        sort: sort || {
                            field: 'createdAt',
                            order: 'desc'
                        }
                    });
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        success: true,
                        ...result
                    });
                }
            /* ------------------------------ GET BY ID ------------------------------ */ case 'getById':
                {
                    const idStr = typeof postId === 'string' ? postId : String(value || '');
                    if (!idStr) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        error: 'Missing postId'
                    }, {
                        status: 400
                    });
                    const row = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getRowByIdOrCode"])(collectionName, {
                        _id: idStr
                    });
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(row);
                }
            /* ------------------------------- UPDATE POST ------------------------------- */ case 'update':
                {
                    if (!field || value === undefined) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            error: 'Missing field or value'
                        }, {
                            status: 400
                        });
                    }
                    const key = String(field);
                    const val = typeof value === 'string' || typeof value === 'number' ? value : String(value);
                    const ok = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateByField"])(collectionName, key, val, data);
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        success: ok
                    });
                }
            /* ------------------------------ DELETE POST ------------------------------ */ case 'delete':
                {
                    const idStr = typeof postId === 'string' ? postId : String(value || '');
                    if (!idStr) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        error: 'Missing postId'
                    }, {
                        status: 400
                    });
                    const ok = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteById"])(collectionName, idStr);
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        success: ok
                    });
                }
            /* ----------------------------- TOGGLE LIKE ----------------------------- */ case 'toggleLike':
                {
                    const idStr = typeof postId === 'string' ? postId : String(value || '');
                    const uid = typeof userId === 'string' ? userId : String(data?.userId || '');
                    const like = !!(data && (data.like === true || data.like === 'true'));
                    if (!idStr || !uid) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            error: 'Missing postId or userId'
                        }, {
                            status: 400
                        });
                    }
                    const collection = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCollection"])(collectionName);
                    const updatePipeline = like ? [
                        {
                            $set: {
                                likedBy: {
                                    $cond: [
                                        {
                                            $in: [
                                                uid,
                                                {
                                                    $ifNull: [
                                                        '$likedBy',
                                                        []
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            $ifNull: [
                                                '$likedBy',
                                                []
                                            ]
                                        },
                                        {
                                            $concatArrays: [
                                                {
                                                    $ifNull: [
                                                        '$likedBy',
                                                        []
                                                    ]
                                                },
                                                [
                                                    uid
                                                ]
                                            ]
                                        }
                                    ]
                                }
                            }
                        }
                    ] : [
                        {
                            $set: {
                                likedBy: {
                                    $filter: {
                                        input: {
                                            $ifNull: [
                                                '$likedBy',
                                                []
                                            ]
                                        },
                                        cond: {
                                            $ne: [
                                                '$$this',
                                                uid
                                            ]
                                        }
                                    }
                                }
                            }
                        }
                    ];
                    const filter = __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"].isValid(idStr) ? {
                        _id: new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"](idStr)
                    } : {
                        _id: idStr
                    };
                    const result = await collection.updateOne(filter, updatePipeline);
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        success: result.modifiedCount > 0
                    });
                }
            case 'addComment':
                {
                    const idStr = typeof postId === 'string' ? postId : String(value || '');
                    const payload = data;
                    if (!idStr || !payload?.userId || !payload?.content) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            error: 'Missing postId, userId or content'
                        }, {
                            status: 400
                        });
                    }
                    const newData = {
                        postId: String(idStr),
                        userId: String(payload.userId),
                        username: payload.username ? String(payload.username) : undefined,
                        avatar: payload.avatar ? String(payload.avatar) : undefined,
                        content: String(payload.content || ''),
                        createdAt: Date.now(),
                        parentId: payload.parentId ? String(payload.parentId) : undefined,
                        reactions: {}
                    };
                    const newId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["addRow"])('PostComments', newData);
                    const posts = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCollection"])(collectionName);
                    const filter = __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"].isValid(idStr) ? {
                        _id: new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"](idStr)
                    } : {
                        _id: idStr
                    };
                    const pipeline = [
                        {
                            $set: {
                                commentsCount: {
                                    $add: [
                                        {
                                            $ifNull: [
                                                '$commentsCount',
                                                0
                                            ]
                                        },
                                        1
                                    ]
                                }
                            }
                        }
                    ];
                    await posts.updateOne(filter, pipeline);
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        success: true,
                        _id: newId
                    });
                }
            case 'readComments':
                {
                    const idStr = typeof postId === 'string' ? postId : String(value || '');
                    const skipNum = typeof skip === 'number' ? skip : 0;
                    const limitNum = typeof limit === 'number' ? limit : 50;
                    if (!idStr) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        error: 'Missing postId'
                    }, {
                        status: 400
                    });
                    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAllRows"])('PostComments', {
                        filters: {
                            postId: String(idStr)
                        },
                        skip: skipNum,
                        limit: limitNum,
                        sort: sort || {
                            field: 'createdAt',
                            order: 'asc'
                        }
                    });
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        success: true,
                        ...result
                    });
                }
            case 'toggleCommentReaction':
                {
                    const commentId = typeof body.commentId === 'string' ? body.commentId : String(body.commentId || '');
                    const uid = typeof userId === 'string' ? userId : String(body?.userId || body?.data?.userId || '');
                    const emoji = String(body?.emoji || body?.data?.emoji || '');
                    const like = !!(body && (body.like === true || body.like === 'true' || body?.data?.like === true));
                    if (!commentId || !uid || !emoji) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            error: 'Missing commentId, userId or emoji'
                        }, {
                            status: 400
                        });
                    }
                    const comments = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCollection"])('PostComments');
                    const filter = __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"].isValid(commentId) ? {
                        _id: new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"](commentId)
                    } : {
                        _id: commentId
                    };
                    const doc = await comments.findOne(filter);
                    const existing = doc?.reactions || {};
                    const arr = Array.isArray(existing[emoji]) ? existing[emoji] : [];
                    const set = new Set(arr);
                    if (like) set.add(uid);
                    else set.delete(uid);
                    const next = {
                        ...existing,
                        [emoji]: Array.from(set)
                    };
                    await comments.updateOne(filter, {
                        $set: {
                            reactions: next
                        }
                    });
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        success: true,
                        reactions: next
                    });
                }
            default:
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Invalid action'
                }, {
                    status: 400
                });
        }
    } catch (err) {
        console.error('POST /posts error:', err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Server error'
        }, {
            status: 500
        });
    }
}
async function GET(req) {
    const url = req.nextUrl;
    const skip = Number(url.searchParams.get('skip') || 0);
    const limit = Number(url.searchParams.get('limit') || 20);
    const authorId = url.searchParams.get('authorId') || undefined;
    const visibility = url.searchParams.get('visibility') || undefined;
    const likedBy = url.searchParams.get('likedBy') || undefined;
    const beforeStr = url.searchParams.get('before') || undefined;
    const afterStr = url.searchParams.get('after') || undefined;
    const search = url.searchParams.get('search') || url.searchParams.get('q') || undefined;
    const filters = {};
    if (authorId) filters.authorId = authorId;
    if (visibility) filters.visibility = visibility;
    if (likedBy) {
        filters.likedBy = {
            $in: [
                likedBy
            ]
        };
    }
    const range = {};
    if (beforeStr && !isNaN(Number(beforeStr))) range.$lt = Number(beforeStr);
    if (afterStr && !isNaN(Number(afterStr))) range.$gt = Number(afterStr);
    if (Object.keys(range).length) {
        filters.createdAt = range;
    }
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAllRows"])(POSTS_COLLECTION_NAME, {
        filters,
        skip,
        limit,
        sort: {
            field: 'createdAt',
            order: 'desc'
        },
        search: search || undefined
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        success: true,
        ...result
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__670b2d73._.js.map