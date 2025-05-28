import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex job-form-container">
      {/* Sidebar */}
      <div className="w-64 p-6 job-form-sidebar">
        <div className="mb-8">
          <span className="text-sm job-form-nav-item">MENU</span>
        </div>
        
        <nav className="space-y-4">
          <div className="rounded-lg p-3 flex items-center gap-3 job-form-card">
            <div className="w-5 h-5">
              {/* <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" fill="var(--text-color)"/>
              </svg> */}
            </div>
            <span className="font-medium job-form-nav-item">Requests</span>
          </div>
          
          <div className="flex items-center gap-3 p-3 rounded-lg cursor-pointer job-form-nav-item">
            <div className="w-5 h-5">
              {/* <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H11V21H5V3H13V9H21Z" fill="var(--text-color)"/>
              </svg> */}
            </div>
            <span>Status</span>
          </div>
          
          <div className="flex items-center gap-3 p-3 rounded-lg cursor-pointer job-form-nav-item">
            <div className="w-5 h-5">
              {/* <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 5 19 5ZM12 17C9.24 17 7 14.76 7 12S9.24 7 12 7 17 9.24 17 12 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12S10.34 15 12 15 15 13.66 15 12 13.66 9 12 9Z" fill="var(--text-color)"/>
              </svg> */}
            </div>
            <span>Support</span>
          </div>
        </nav>

        <div className="absolute bottom-6 left-6">
          <div className="flex items-center gap-2 cursor-pointer job-form-nav-item">
            {/* <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <path d="M17 7L15.59 5.59L9 12.17L13.42 16.59L12 18L6 12L12 6L17 7Z" fill="var(--text-color)"/>
            </svg> */}
            <span>Exit</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 job-form-container">
        {/* Profile Avatar */}
        <div className="flex justify-end mb-8">
          <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--primary-color)' }}>
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <span className="text-white font-medium">👤</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 job-form-nav-item">Requests Job</h1>
          
          <form className="space-y-6">
            {/* Name and Lastname Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-medium mb-2 job-form-nav-item">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border shadow-sm job-form-input"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block font-medium mb-2 job-form-nav-item">Lastname</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border shadow-sm job-form-input"
                  placeholder="Enter your lastname"
                />
              </div>
            </div>

            {/* Email and Tel Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-medium mb-2 job-form-nav-item">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border shadow-sm job-form-input"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block font-medium mb-2 job-form-nav-item">Tel.</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-xl border shadow-sm job-form-input"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            {/* Detail */}
            <div>
              <label className="block font-medium mb-2 job-form-nav-item">Detail</label>
              <textarea
                rows={6}
                className="w-full px-4 py-3 rounded-xl border shadow-sm resize-none job-form-input"
                placeholder="Enter job details..."
              />
            </div>

            {/* Submit Button */}
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