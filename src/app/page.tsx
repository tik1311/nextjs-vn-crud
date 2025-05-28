'use client'; // ถ้าใช้ App Router
import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    tel: '',
    detail: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert('Form submitted successfully!');
        setFormData({
          name: '',
          lastname: '',
          email: '',
          tel: '',
          detail: '',
        });
      } else {
        alert('Failed to submit');
      }
    } catch (err) {
      console.error(err);
      alert('Error submitting form');
    }
  };

  return (
    <div className="min-h-screen flex job-form-container">
      {/* ...Sidebar code remains the same... */}
      <div className="flex-1 p-8 job-form-container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 job-form-nav-item">Requests Job</h1>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-medium mb-2 job-form-nav-item">Name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border shadow-sm job-form-input"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block font-medium mb-2 job-form-nav-item">Lastname</label>
                <input
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border shadow-sm job-form-input"
                  placeholder="Enter your lastname"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-medium mb-2 job-form-nav-item">Email</label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border shadow-sm job-form-input"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block font-medium mb-2 job-form-nav-item">Tel.</label>
                <input
                  name="tel"
                  value={formData.tel}
                  onChange={handleChange}
                  type="tel"
                  className="w-full px-4 py-3 rounded-xl border shadow-sm job-form-input"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
            <div>
              <label className="block font-medium mb-2 job-form-nav-item">Detail</label>
              <textarea
                name="detail"
                value={formData.detail}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 rounded-xl border shadow-sm resize-none job-form-input"
                placeholder="Enter job details..."
              />
            </div>
            <div className="flex justify-center pt-6">
              <button
                type="submit"
                className="px-12 py-3 font-medium rounded-xl shadow-sm job-form-button"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
