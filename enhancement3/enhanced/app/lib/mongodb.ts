import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error("Please define the MONGODB_URI environment variable");
}

interface CachedConnection {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
}

declare global {
    var mongooseCache: CachedConnection;
}

let cached: CachedConnection = global.mongooseCache;

if (!cached) {
    cached = global.mongooseCache = { conn: null, promise: null }
}

// Connect to MongoDB and use caching to avoid multiple connections during development
export async function connectToDatabase() {
    if (cached.conn) {
        return cached.conn;
    }
    
    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
            dbName: "enhancement3"
        }

        cached.promise = mongoose
            .connect(MONGODB_URI as string, opts)
            .then((mongoose) => {
                console.log("Connected to MongoDB");
                return mongoose;
            })
            .catch((error) => {
                console.error("There was an error connecting to MongoDB:", error);
                throw error;
            });
    }

    try {
        cached.conn = await cached.promise;
    } catch (error) {
        cached.promise = null;
        throw error;
    }

    return cached.conn;
}
export default connectToDatabase;