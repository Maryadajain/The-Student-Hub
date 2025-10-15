// File: app/pyqs/page.js

'use client'; 

import { useState } from 'react';

// Dummy Data Array
const allResources = [
  { id: 1, title: 'Data Structures Complete Notes', subject: 'Data Structures', semester: '3rd', type: 'Notes', uploader: 'Riya Sharma' },
  { id: 2, title: 'DBMS End Semester PYQ 2023', subject: 'Database Management', semester: '4th', type: 'PYQ', uploader: 'Aman Singh' },
  { id: 3, title: 'Operating Systems Handwritten Notes', subject: 'Operating Systems', semester: '5th', type: 'Notes', uploader: 'Priya Jain' },
  { id: 4, title: 'Algorithms Mid-Sem PYQ 2022', subject: 'Algorithms', semester: '4th', type: 'PYQ', uploader: 'Karan Mehta' },
  { id: 5, title: 'Compiler Design Unit 1-3 Notes', subject: 'Compiler Design', semester: '6th', type: 'Notes', uploader: 'Sneha Verma' },
  { id: 6, title: 'Computer Networks Full PYQ Set', subject: 'Computer Networks', semester: '5th', type: 'PYQ', uploader: 'Vikram Rathore' },
];


export default function PyqsPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // NEW: State for each filter dropdown
  const [selectedCollege, setSelectedCollege] = useState('all');
  const [selectedBranch, setSelectedBranch] = useState('all');
  const [selectedSemester, setSelectedSemester] = useState('all');
  const [selectedSubject, setSelectedSubject] = useState('all');

  // NEW: The complete, final filtering logic
  const filteredResources = allResources
    .filter(resource => activeTab === 'all' || resource.type.toLowerCase() === activeTab)
    .filter(resource => {
      const query = searchQuery.toLowerCase();
      return resource.title.toLowerCase().includes(query) || resource.subject.toLowerCase().includes(query);
    })
    .filter(resource => selectedSemester === 'all' || resource.semester === selectedSemester)
    .filter(resource => selectedSubject === 'all' || resource.subject === selectedSubject);
    // Note: College and Branch filters are ready for when you add that data.

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <h1 className="text-3xl font-bold text-gray-900 mb-2">PYQs & Notes Repository</h1>
        
        {/* Tab Buttons */}
        <div className="flex border-b border-gray-200 mb-6">
          <button onClick={() => setActiveTab('all')} className={`py-2 px-4 text-sm font-medium ${activeTab === 'all' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>All Resources</button>
          <button onClick={() => setActiveTab('notes')} className={`py-2 px-4 text-sm font-medium ${activeTab === 'notes' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>Notes</button>
          <button onClick={() => setActiveTab('pyq')} className={`py-2 px-4 text-sm font-medium ${activeTab === 'pyq' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>PYQs</button>
        </div>
        
        {/* Filters and Search Section */}
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
          <div className="mb-4">
            <div className="relative">
              <input type="text" id="search" className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Search by title or subject..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg></div>
            </div>
          </div>
          {/* NEW: Dropdowns are now connected to state */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label htmlFor="college" className="block text-sm font-medium text-gray-700 mb-1">College</label>
              <select id="college" value={selectedCollege} onChange={e => setSelectedCollege(e.target.value)} className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                <option value="all">All Colleges</option><option>IIT Bombay</option>
              </select>
            </div>
            <div>
              <label htmlFor="branch" className="block text-sm font-medium text-gray-700 mb-1">Branch</label>
              <select id="branch" value={selectedBranch} onChange={e => setSelectedBranch(e.target.value)} className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                <option value="all">All Branches</option><option>Computer Science</option>
              </select>
            </div>
            <div>
              <label htmlFor="semester" className="block text-sm font-medium text-gray-700 mb-1">Semester</label>
              <select id="semester" value={selectedSemester} onChange={e => setSelectedSemester(e.target.value)} className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                <option value="all">All Semesters</option><option value="3rd">3rd</option><option value="4th">4th</option><option value="5th">5th</option><option value="6th">6th</option>
              </select>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <select id="subject" value={selectedSubject} onChange={e => setSelectedSubject(e.target.value)} className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                <option value="all">All Subjects</option><option>Data Structures</option><option>Database Management</option><option>Operating Systems</option><option>Algorithms</option><option>Compiler Design</option><option>Computer Networks</option>
              </select>
            </div>
          </div>
        </div>

        {/* Resource Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <div key={resource.id} className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-5 flex flex-col justify-between">
              <div>
                <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full mb-2 ${resource.type === 'Notes' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>{resource.type}</span>
                <h3 className="text-lg font-bold text-gray-800 mb-1">{resource.title}</h3>
                <p className="text-sm text-gray-600 mb-4">Subject: {resource.subject} | Semester: {resource.semester}</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-xs text-gray-500">Uploader: {resource.uploader}</p>
                <a href="#" className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md text-sm hover:bg-blue-700 transition-colors duration-300">Download</a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Message for no results */}
        {filteredResources.length === 0 && (
          <div className="text-center py-10"><p className="text-gray-500">No resources found matching your filters.</p></div>
        )}
      </div>
    </div>
  );
}