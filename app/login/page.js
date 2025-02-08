export default function Login() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-customBlue3">
            Login
          </h2>
          <form className="mt-6">
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customBlue"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customBlue"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-customBlue text-white py-2 rounded-lg hover:bg-customBlue3"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-center text-gray-600">
            Don't have an account? <a href="/signin" className="text-customBlue underline">Register</a>
          </p>
        </div>
      </div>
    );
  }
  
  