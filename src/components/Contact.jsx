import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import ContactSubmissions from "./ContactSubmission";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newSubmission = {
      ...formData,
      id: Date.now(),
      timestamp: new Date().toISOString(),
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    // Get existing submissions
    const existingSubmissions = JSON.parse(
      localStorage.getItem("contactFormSubmissions") || "[]"
    );
    const updatedSubmissions = [newSubmission, ...existingSubmissions];

    // Save to localStorage
    localStorage.setItem(
      "contactFormSubmissions",
      JSON.stringify(updatedSubmissions)
    );

    // Reset form and show success message
    setFormData({ name: "", email: "", message: "" });
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <>
      <Navbar />
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Get In Touch
            </h2>
            <p className="text-gray-600 text-lg">
              Have a question or want to work together? Send us a message!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              {showSuccess && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  Thank you for your message! It has been saved successfully.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 resize-vertical"
                    placeholder="Enter your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Embedded Map */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Visit Our Location
              </h3>

              {/* Embedded Google Map */}
              {/* Free OpenStreetMap Embed */}
              <div className="rounded-lg overflow-hidden shadow-md">
                <iframe
                  width="100%"
                  height="400"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=10.8540,44.5220,10.8740,44.5420&layer=mapnik&marker=44.532593,10.864187"
                  title="Ferrari Headquarters Location"
                ></iframe>
              </div>

              {/* Location Details */}
              <div className="mt-4 space-y-2">
                <div className="flex items-center">
                  <span className="text-gray-500 mr-3">📍</span>
                  <div>
                    <p className="font-semibold text-gray-800">
                      Ferrari Headquarters
                    </p>
                    <p className="text-gray-600 text-sm">
                      Via Abetone Inferiore, 4, 41053 Maranello MO, Italy
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <span className="text-gray-500 mr-3">📞</span>
                  <p className="text-gray-600">+39 0536 949111</p>
                </div>

                <div className="flex items-center">
                  <span className="text-gray-500 mr-3">🕒</span>
                  <p className="text-gray-600">Mon-Fri: 9:00 AM - 6:00 PM</p>
                </div>
              </div>

              {/* Directions Button */}
              <div className="mt-6">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Ferrari+Maranello+Italy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-orange-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-orange-700 transition duration-200 flex items-center justify-center gap-2"
                >
                  <span>Get Directions</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
       
      </section>

      
     
    </>
  );
};

export default Contact;
