import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Professional Athlete",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      rating: 5,
      text: "The training program completely transformed my performance. I've achieved personal bests I never thought possible.",
      sport: "Track & Field"
    },
    {
      id: 2,
      name: "Mike Chen",
      role: "Team Manager",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
      rating: 5,
      text: "Our corporate team building events have never been better. The sports activities boosted morale significantly.",
      sport: "Corporate Sports"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Fitness Enthusiast",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg",
      rating: 5,
      text: "The virtual coaching sessions fit perfectly into my busy schedule. Personalized attention helped me overcome plateaus.",
      sport: "Virtual Training"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Youth Coach",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      rating: 5,
      text: "The youth development program has been incredible for our young athletes. They've improved skills and discipline.",
      sport: "Youth Sports"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold tracking-wider text-orange-600 uppercase bg-orange-100 px-4 py-2 rounded-full">
              Testimonials
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-orange-600">Athletes Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from the incredible athletes who have transformed their performance with our programs.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200"
            >
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-orange-200"
                />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                  <div className="text-orange-600 text-xs">{testimonial.role}</div>
                  <div className="text-gray-500 text-xs">{testimonial.sport}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join Our Success Stories
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Be the next athlete to achieve their goals with our proven programs.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;