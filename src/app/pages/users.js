// src/pages/users.js
import { useState, useEffect } from "react";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // ดึงข้อมูล users เมื่อหน้าโหลด
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await fetch("/api/users");
      const data = await res.json();
      if (data.success) {
        setUsers(data.data);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setMessage("เพิ่ม User สำเร็จ!");
        setFormData({ name: "", email: "", age: "" });
        fetchUsers(); // รีเฟรชรายการ users
      } else {
        setMessage("เกิดข้อผิดพลาด: " + data.error);
      }
    } catch (error) {
      setMessage("เกิดข้อผิดพลาด: " + error.message);
    }

    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (!confirm("คุณแน่ใจว่าต้องการลบ User นี้?")) return;

    try {
      const res = await fetch(`/api/users/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (data.success) {
        setMessage("ลบ User สำเร็จ!");
        fetchUsers();
      } else {
        setMessage("เกิดข้อผิดพลาด: " + data.error);
      }
    } catch (error) {
      setMessage("เกิดข้อผิดพลาด: " + error.message);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>จัดการ Users</h1>

      {/* Form สำหรับเพิ่ม User */}
      <form
        onSubmit={handleSubmit}
        style={{
          marginBottom: "30px",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "5px",
        }}
      >
        <h2>เพิ่ม User ใหม่</h2>

        <div style={{ marginBottom: "10px" }}>
          <label>ชื่อ:</label>
          <br />
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>อีเมล:</label>
          <br />
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>อายุ:</label>
          <br />
          <input
            type="number"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "10px 20px",
            backgroundColor: "#0070f3",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "กำลังเพิ่ม..." : "เพิ่ม User"}
        </button>
      </form>

      {message && (
        <div
          style={{
            padding: "10px",
            marginBottom: "20px",
            backgroundColor: message.includes("สำเร็จ") ? "#d4edda" : "#f8d7da",
            border: `1px solid ${
              message.includes("สำเร็จ") ? "#c3e6cb" : "#f5c6cb"
            }`,
            borderRadius: "5px",
          }}
        >
          {message}
        </div>
      )}

      {/* รายการ Users */}
      <h2>รายการ Users</h2>
      <div>
        {users.length > 0 ? (
          users.map((user) => (
            <div
              key={user._id}
              style={{
                padding: "15px",
                marginBottom: "10px",
                border: "1px solid #ddd",
                borderRadius: "5px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <h3 style={{ margin: "0 0 5px 0" }}>{user.name}</h3>
                <p style={{ margin: "0", color: "#666" }}>
                  อีเมล: {user.email}
                </p>
                {user.age && (
                  <p style={{ margin: "0", color: "#666" }}>
                    อายุ: {user.age} ปี
                  </p>
                )}
              </div>
              <button
                onClick={() => handleDelete(user._id)}
                style={{
                  padding: "5px 15px",
                  backgroundColor: "#dc3545",
                  color: "white",
                  border: "none",
                  borderRadius: "3px",
                  cursor: "pointer",
                }}
              >
                ลบ
              </button>
            </div>
          ))
        ) : (
          <p>ยังไม่มี Users</p>
        )}
      </div>
    </div>
  );
}
