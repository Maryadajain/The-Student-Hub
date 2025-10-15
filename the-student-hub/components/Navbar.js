// File: components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold">The Student Hub 🎓</Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/pyqs" className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">PYQs & Notes</Link>
              <Link href="/roadmaps" className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">Career Roadmaps</Link>
              <Link href="/community" className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">Community</Link>
              <Link href="/login" className="bg-white text-blue-600 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">Login / Signup</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;