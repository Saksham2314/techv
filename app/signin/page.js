"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const [formData, setFormData] = useState({
    companyName: "",
    companyEmail: "",
    password: "",
    regulatoryDocs: null,
  });

  const router = useRouter();

  const handleChange = (e) => {
    if (e.target.type === "file") {
      setFormData({ ...formData, regulatoryDocs: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simulate API call (Replace with actual API call)
    try {
      console.log("Company Registered:", formData);

      // Redirect to home page after successful registration
      router.push("/");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-customBlue3">
          Register Your Company
        </h2>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Company Name</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customBlue"
              placeholder="Enter company name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Company Email</label>
            <input
              type="email"
              name="companyEmail"
              value={formData.companyEmail}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customBlue"
              placeholder="Enter company email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customBlue"
              placeholder="Create a password"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Regulatory Documents</label>
            <input
              type="file"
              name="regulatoryDocs"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customBlue"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-customBlue text-white py-2 rounded-lg hover:bg-customBlue3 transition"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <a href="./login" className="text-customBlue underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
