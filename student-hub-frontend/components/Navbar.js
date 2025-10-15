"use client";
import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-8 py-4 shadow-md flex justify-between items-center">
      {/* Left Side - Logo or Title */}
      <div className="text-2xl font-bold">Student Hub</div>

      {/* Right Side - Menu */}
      <ul className="flex space-x-8 text-lg">
        <li className="hover:text-gray-200 cursor-pointer transition">Home</li>
        <li className="hover:text-gray-200 cursor-pointer transition">Notes</li>
        <li className="hover:text-gray-200 cursor-pointer transition">PYQs</li>
        <li className="hover:text-gray-200 cursor-pointer transition">Career</li>
        <li className="hover:text-gray-200 cursor-pointer transition">Community</li>
      </ul>
    </nav>
  );
}


