// File: app/roadmaps/[slug]/page.js

// We need the same data as the main roadmaps page to find the correct one
const roadmapsData = [
  { id: 'full-stack', title: 'Full-Stack Developer', description: '...', steps: ['HTML, CSS & JS', 'React.js', 'Node.js & Express', 'Databases (SQL & NoSQL)', 'Deployment'] },
  { id: 'data-scientist', title: 'Data Scientist', description: '...', steps: ['Python & SQL', 'Statistics & Probability', 'Data Visualization', 'Machine Learning Models', 'Big Data Technologies'] },
  { id: 'aiml-engineer', title: 'AI/ML Engineer', description: '...', steps: ['Advanced Python', 'Linear Algebra & Calculus', 'Neural Networks', 'Deep Learning (TensorFlow/PyTorch)', 'NLP & Computer Vision'] },
];

// This component receives 'params' which contains the slug from the URL
export default function RoadmapDetailPage({ params }) {
  const { slug } = params; // For URL /roadmaps/full-stack, slug will be "full-stack"

  // Find the roadmap data that matches the slug from the URL
  const roadmap = roadmapsData.find(r => r.id === slug);

  // If no roadmap is found (e.g., for a wrong URL), show a message
  if (!roadmap) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold">Roadmap not found!</h1>
      </div>
    );
  }

  // If the roadmap is found, display its details
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-gray-900">{roadmap.title}</h1>
          <p className="mt-4 text-lg text-gray-600">Your step-by-step learning path.</p>
        </div>
        
        {/* Step-by-step list */}
        <div className="space-y-6">
          {roadmap.steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div className="bg-blue-600 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold text-lg mr-4">
                {index + 1}
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex-grow">
                <p className="text-lg font-medium text-gray-800">{step}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}