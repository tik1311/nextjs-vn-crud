import dbConnect from "../../../lib/mongoose";
import User from "../../../models/User";

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const user = await User.findById(id);
        if (!user) {
          return res
            .status(404)
            .json({ success: false, message: "ไม่พบ User" });
        }
        res.status(200).json({ success: true, data: user });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    case "PUT":
      try {
        const user = await User.findByIdAndUpdate(id, req.body, {
          new: true, // return updated document
          runValidators: true, // run schema validators
        });
        if (!user) {
          return res
            .status(404)
            .json({ success: false, message: "ไม่พบ User" });
        }
        res.status(200).json({ success: true, data: user });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    case "DELETE":
      try {
        const deletedUser = await User.deleteOne({ _id: id });
        if (!deletedUser.deletedCount) {
          return res
            .status(404)
            .json({ success: false, message: "ไม่พบ User" });
        }
        res.status(200).json({ success: true, message: "ลบ User สำเร็จ" });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    default:
      res.status(400).json({ success: false, message: "Method not allowed" });
      break;
  }
}
