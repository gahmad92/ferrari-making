import React from 'react'

const About = () => {
  return (
    <>
  <div className="py-16 bg-gray-50">
  <div className="text-4xl text-center font-bold text-gray-900 mb-12">About Us</div>
  
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      {/* Left Big Column - Video */}
      <div className="lg:col-span-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <video 
            className="w-full h-full object-cover"
            autoPlay 
            muted 
            loop
            playsInline
          >
            <source src="/ferrai-1.mp4" type="video/mp4" />
         
            Your browser does not support the video tag.
          </video>
          {/* Fallback image if video doesn't load */}
          <img 
            src="https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg" 
            alt="About us fallback" 
            className="w-full h-full object-cover hidden"
          />
        </div>
      </div>

      {/* Right Side - Two Small Columns */}
      <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
        
        {/* First Small Column */}
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
          <p className="text-gray-600 leading-relaxed">
            We are dedicated to pushing the boundaries of sports excellence, fostering community engagement, 
            and creating unforgettable experiences for athletes and fans alike.
          </p>
        </div>

        {/* Second Small Column */}
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Our Community</h3>
          <p className="text-gray-600 leading-relaxed">
            Join thousands of passionate sports enthusiasts who share your love for competition, 
            fitness, and the thrill of victory. Together we grow stronger every day.
          </p>
        </div>

      </div>
    </div>

    {/* Additional Content Row */}
    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="text-center">
        <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
        <div className="text-gray-600">Sports Events</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-green-600 mb-2">10K+</div>
        <div className="text-gray-600">Active Members</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
        <div className="text-gray-600">Years Experience</div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default About