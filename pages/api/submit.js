import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
let cachedClient = null;
let cachedDb = null;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  if (!cachedClient) {
    try {
      cachedClient = new MongoClient(uri, {
        // ตั้งค่า TLS/SSL ให้ถูกต้อง
        tls: true,
        // สำหรับทดสอบถ้าเจอปัญหา SSL อาจใช้บรรทัดนี้ (ไม่แนะนำใช้ใน production)
        // tlsAllowInvalidCertificates: true,
      });
      await cachedClient.connect();
      cachedDb = cachedClient.db(test); // จะใช้ฐานข้อมูลใน connection string (ถ้าไม่ได้ระบุชื่อ db)
    } catch (error) {
      console.error("MongoDB connection error:", error);
      return res.status(500).json({ message: "Database connection error" });
    }
  }

  try {
    const { name, lastname, email, tel, detail } = req.body;

    if (!name || !lastname || !email || !tel || !detail) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const data = {
      name,
      lastname,
      email,
      tel,
      detail,
      createdAt: new Date(),
    };

    const collection = cachedDb.collection("test1"); // ชื่อ collection ตามที่บอก
    const result = await collection.insertOne(data);

    return res
      .status(200)
      .json({ message: "Data saved successfully", id: result.insertedId });
  } catch (error) {
    console.error("Insert error:", error);
    return res.status(500).json({ message: "Failed to save data" });
  }
}
