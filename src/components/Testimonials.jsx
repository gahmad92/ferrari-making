import React from "react";
import Navbar from "./Navbar";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Jhon Dee",

      image: "/testimonial picture.jpg",
      rating: 5,
      text: "The training program completely transformed my performance. I've achieved personal bests I never thought possible.",
    },
    {
      id: 2,
      name: "Jhon Dee",

      image: "/testimonial picture.jpg",
      rating: 4,
      text: "Our corporate team building events have never been better. The sports activities boosted morale significantly.",
    },
    {
      id: 3,
      name: "Jhon Dee",

      image: "/testimonial picture.jpg",
      rating: 5,
      text: "The virtual coaching sessions fit perfectly into my busy schedule. Personalized attention helped me overcome plateaus.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              Testimonials
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Hear from athletes and teams who’ve experienced our programs.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="relative bg-gray-100 rounded-xl shadow-md p-6 pt-16"
              >
                {/* Profile Picture */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-transparent shadow-md"
                  />
                </div>

                {/* Testimonial Text */}
                <p className="text-black leading-relaxed">"{t.text}"</p>
                <div className="flex justify-between items-center mt-10 mb-7">
                  <h3 className="font-semibold text-gray-900">{t.name}</h3>
                  {/* Name + Rating */}
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < 3 ? "text-[#FFA500]" : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
