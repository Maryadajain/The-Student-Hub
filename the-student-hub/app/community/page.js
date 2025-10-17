// File: app/community/page.js

// 1. Dummy data for community questions
const questions = [
  {
    id: 1,
    title: 'How to prepare for Data Structures placement interviews?',
    author: 'Anjali Sharma',
    avatar: '👩‍💻',
    replies: 12,
    views: 156,
  },
  {
    id: 2,
    title: 'Best resources to learn Node.js for a beginner?',
    author: 'Rohan Verma',
    avatar: '👨‍🎓',
    replies: 8,
    views: 98,
  },
  {
    id: 3,
    title: 'Is it better to do an internship or a personal project in the 3rd year?',
    author: 'Priya Patel',
    avatar: '🤔',
    replies: 25,
    views: 320,
  },
  {
    id: 4,
    title: 'Can someone explain the difference between SQL and NoSQL databases?',
    author: 'Sameer Khan',
    avatar: '👨‍🏫',
    replies: 5,
    views: 72,
  },
];

export default function CommunityPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900">Community Forum</h1>
          <p className="mt-3 text-lg text-gray-600">
            Ask questions, share knowledge, and connect with fellow students.
          </p>
        </div>
        
        {/* Ask Question Button */}
        <div className="mb-8">
            <button className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md">
                Ask a New Question
            </button>
        </div>

        {/* Questions List */}
        <div className="bg-white rounded-lg shadow-md">
            <ul className="divide-y divide-gray-200">
                {questions.map((question) => (
                    <li key={question.id} className="p-6 hover:bg-gray-50 transition-colors duration-200">
                        <div className="flex items-start space-x-4">
                            {/* Avatar */}
                            <div className="text-2xl bg-gray-100 p-2 rounded-full">
                                {question.avatar}
                            </div>
                            
                            {/* Question Details */}
                            <div className="flex-grow">
                                <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600">
                                    <a href="#">{question.title}</a>
                                </h3>
                                <p className="text-sm text-gray-500 mt-1">
                                    Asked by {question.author}
                                </p>
                            </div>

                            {/* Stats */}
                            <div className="flex-shrink-0 flex space-x-6 text-sm text-gray-500 text-center">
                                <div>
                                    <p className="font-bold text-gray-800">{question.replies}</p>
                                    <p>Replies</p>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-800">{question.views}</p>
                                    <p>Views</p>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>

      </div>
    </div>
  );
}