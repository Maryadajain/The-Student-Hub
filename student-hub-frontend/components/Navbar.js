export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">🎓 StudentHub</h1>
      <ul className="flex space-x-6">
        <li><a href="#" className="hover:text-gray-200">Home</a></li>
        <li><a href="#" className="hover:text-gray-200">Notes</a></li>
        <li><a href="#" className="hover:text-gray-200">Roadmaps</a></li>
        <li><a href="#" className="hover:text-gray-200">Interview Q&A</a></li>
        <li><a href="#" className="hover:text-gray-200">Resume Scanner</a></li>
      </ul>
    </nav>
  );
}

