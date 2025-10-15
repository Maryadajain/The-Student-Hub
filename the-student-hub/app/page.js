// File: app/page.js

export default function Home() {
  return (
    // Main container to center content vertically on the screen
    <main className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center max-w-4xl mx-auto px-6">
        
        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-4">
          The Ultimate Hub{" "}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            For Students
          </span>
        </h1>

        {/* Sub-headline / Paragraph */}
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          One platform to access PYQs, Notes, Career Roadmaps, and Connect
          with a community of learners just like you.
        </p>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4">
          <a
            href="/pyqs"
            className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300"
          >
            Explore Notes
          </a>
          <a
            href="/community"
            className="bg-transparent text-gray-800 font-semibold py-3 px-8 border border-gray-400 rounded-full hover:bg-gray-100 transition duration-300"
          >
            Join Community
          </a>
        </div>
      </div>
    </main>
  );
}