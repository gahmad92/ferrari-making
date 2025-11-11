import React, { useState } from 'react';

const Portfolio2 = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: "Professional Training Session",
      category: "training",
      image: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg",
      description: "One-on-one coaching session with professional athletes",
      tags: ["Coaching", "Fitness", "Personal Training"]
    },
    {
      id: 2,
      title: "Championship race",
      category: "events",
      image: "https://images.pexels.com/photos/16743653/pexels-photo-16743653.jpeg",
      description: "National championship finals with top teams competing",
      tags: ["street race", "Tournament", "Championship"]
    },
   
    {
      id: 4,
      title: "Youth Sports Academy",
      category: "academy",
      image: "https://images.pexels.com/photos/12801/pexels-photo-12801.jpeg",
      description: "Young athletes learning fundamental sports skills",
      tags: ["Youth", "Development", "Academy"]
    },
   
    {
      id: 6,
      title: "Community Sports Day",
      category: "community",
      image: "https://images.pexels.com/photos/13228142/pexels-photo-13228142.jpeg",
      description: "Community event promoting sports for all ages",
      tags: ["Community", "Event", "Inclusive"]
    },
   
   
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'training', label: 'Training' },
    { key: 'events', label: 'Events' },

    { key: 'academy', label: 'Academy' },
    
    { key: 'community', label: 'Community' },
  
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
      
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-indigo-500 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
                    {item.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Button */}
                <button className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform group-hover:scale-105">
                  View Project
                  <svg className="w-4 h-4 inline ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📷</div>
            <h3 className="text-2xl font-bold text-gray-600 mb-2">No projects found</h3>
            <p className="text-gray-500">Try selecting a different filter category</p>
          </div>
        )}

        {/* Results Count */}
        <div className="text-center mt-8">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-blue-600">{filteredItems.length}</span> of{' '}
            <span className="font-semibold">{portfolioItems.length}</span> projects
          </p>
        </div>

        
       
      </div>
    </div>
  );
};

export default Portfolio2;