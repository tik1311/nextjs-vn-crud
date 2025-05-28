// src/lib/mongodb.js
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  // ใน development mode ใช้ global variable เพื่อไม่ให้สร้าง connection ใหม่ทุกครั้ง
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // ใน production mode สร้าง client ใหม่
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
