export default function SignUp() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-customBlue3">
            Register Your Company
          </h2>
          <form className="mt-6">
            <div className="mb-4">
              <label className="block text-gray-700">Company Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customBlue"
                placeholder="Enter company name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Company Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customBlue"
                placeholder="Enter company email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customBlue"
                placeholder="Create a password"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Regulatory Documents</label>
              <input
                type="file"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customBlue"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-customBlue text-white py-2 rounded-lg hover:bg-customBlue3"
            >
              Register
            </button>
          </form>
          <p className="mt-4 text-center text-gray-600">
            Already have an account? <a href="/login" className="text-customBlue underline">Login</a>
          </p>
        </div>
      </div>
    );
  }
  