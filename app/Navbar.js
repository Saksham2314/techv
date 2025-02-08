import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-customBlue text-white py-4 px-6 shadow-md flex justify-between items-center">
      {/* Left: Navigation Links */}
      <div className="flex space-x-8">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="#tutorial" className="hover:underline">Tutorial</Link>
        <Link href="#benefits" className="hover:underline">Benefits</Link>
        <Link href="#learn-more" className="hover:underline">Learn More</Link>
      </div>

      {/* Right: Buttons */}
      <div className="flex space-x-4">
        <Link href="./login">
          <button className="border border-white text-white px-4 py-2 rounded-md hover:bg-customBlue3 transition">
            Login
          </button>
        </Link>
        <Link href="./signin">
          <button className="border border-white text-white px-4 py-2 rounded-md hover:bg-customBlue3 transition">
            Register
          </button>
        </Link>
      </div>
    </nav>
  );
}


  