// File: app/roadmaps/page.js

// 1. Dummy data for our roadmaps
const roadmapsData = [
  {
    id: 'full-stack',
    title: 'Full-Stack Developer',
    description: 'Learn to build complete web applications from the database to the user interface. Master both front-end and back-end technologies.',
    icon: '💻', // An emoji to represent the roadmap
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    description: 'Dive into the world of data. Learn Python, statistics, machine learning, and data visualization to extract insights from complex datasets.',
    icon: '📊',
  },
  {
    id: 'aiml-engineer',
    title: 'AI/ML Engineer',
    description: 'Build intelligent systems. Master algorithms, neural networks, and deep learning frameworks to create cutting-edge AI applications.',
    icon: '🤖',
  },
];

export default function RoadmapsPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900">Career Roadmaps</h1>
          <p className="mt-4 text-lg text-gray-600">
            Your step-by-step guide to a successful career in tech.
          </p>
        </div>

        {/* Grid of Roadmap Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roadmapsData.map((roadmap) => (
            <div key={roadmap.id} className="bg-gray-50 border border-gray-200 rounded-lg p-8 shadow-lg hover:shadow-2xl hover:transform hover:scale-105 transition-all duration-300 flex flex-col items-center text-center">
              
              <div className="text-5xl mb-4">{roadmap.icon}</div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{roadmap.title}</h3>
              
              <p className="text-gray-600 mb-6 flex-grow">{roadmap.description}</p>
              
              <a
                href={`/roadmaps/${roadmap.id}`} // This will link to a details page later
                className="bg-blue-600 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300"
              >
                View Roadmap
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}