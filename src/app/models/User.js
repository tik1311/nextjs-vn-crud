// src/models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "กรุณาระบุชื่อ"],
      maxlength: [60, "ชื่อไม่ควรเกิน 60 ตัวอักษร"],
    },
    email: {
      type: String,
      required: [true, "กรุณาระบุอีเมล"],
      unique: true,
      match: [/.+\@.+\..+/, "กรุณาระบุอีเมลที่ถูกต้อง"],
    },
    age: {
      type: Number,
      min: [0, "อายุต้องไม่น้อยกว่า 0"],
      max: [200, "อายุต้องไม่เกิน 200"],
    },
  },
  {
    timestamps: true, // จะเพิ่ม createdAt และ updatedAt อัตโนมัติ
  }
);

// ป้องกันการสร้าง model ซ้ำใน development
export default mongoose.models.User || mongoose.model("User", userSchema);
