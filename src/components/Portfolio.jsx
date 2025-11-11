import React from 'react'

const Portfolio = () => {
  const videos = [
    {
      src: "/ferrari-competetion.mp4",
      title: "Circuit race"
    },
    {
      src: "/ferrari-orange.mp4",
      title: "Enhancement"
    },
    {
      src: "/ferrari-black.mp4",
      title: "Most rare Ferrai"
    },
    
  ];

  return (
    <>
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-indigo-600">Portfolio</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Watch our athletes in action. Each video showcases the dedication, 
              skill, and passion that defines our sports community.
            </p>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Video Container */}
                <div className="relative aspect-square overflow-hidden">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                 
                </div>
                
                {/* Video Title */}
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 text-center group-hover:text-blue-600 transition-colors duration-300">
                    {video.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
         
        </div>
      </div>

      <style jsx>{`
        /* Ensure videos loop properly */
        video {
          object-fit: cover;
        }
        
        /* Smooth hover transitions */
        .group:hover video {
          transform: scale(1.05);
          transition: transform 0.3s ease;
        }
      `}</style>
    </>
  )
}

export default Portfolio