import { useState, useEffect } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [allSubmissions, setAllSubmissions] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);

  // Load all submissions from localStorage on component mount
  useEffect(() => {
    const savedSubmissions = localStorage.getItem("contactFormSubmissions");
    if (savedSubmissions) {
      setAllSubmissions(JSON.parse(savedSubmissions));
    }
  }, []);

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
      id: Date.now(), // Unique ID based on timestamp
      timestamp: new Date().toISOString(),
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    // Add new submission to the list
    const updatedSubmissions = [newSubmission, ...allSubmissions];
    setAllSubmissions(updatedSubmissions);

    // Save to localStorage
    localStorage.setItem(
      "contactFormSubmissions",
      JSON.stringify(updatedSubmissions)
    );

    // Reset form and show success message
    setFormData({ name: "", email: "", message: "" });
    setShowSuccess(true);

    // Hide success message after 3 seconds
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const clearAllSubmissions = () => {
    if (window.confirm("Are you sure you want to delete all saved messages?")) {
      localStorage.removeItem("contactFormSubmissions");
      setAllSubmissions([]);
    }
  };

  const deleteSubmission = (id) => {
    const updatedSubmissions = allSubmissions.filter(
      (submission) => submission.id !== id
    );
    setAllSubmissions(updatedSubmissions);
    localStorage.setItem(
      "contactFormSubmissions",
      JSON.stringify(updatedSubmissions)
    );
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 text-lg">
            Have a question or want to work together? Send me a message!
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
              {/* Name Field */}
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

              {/* Email Field */}
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

              {/* Message Field */}
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

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Saved Submissions */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-800">
                Saved Messages ({allSubmissions.length})
              </h3>
              {allSubmissions.length > 0 && (
                <button
                  onClick={clearAllSubmissions}
                  className="px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition duration-200 text-sm font-medium"
                >
                  Clear All
                </button>
              )}
            </div>

            {allSubmissions.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <svg
                  className="w-12 h-12 mx-auto text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  />
                </svg>
                <p className="mt-4">No messages saved yet</p>
              </div>
            ) : (
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {allSubmissions.map((submission) => (
                  <div
                    key={submission.id}
                    className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition duration-200"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          {submission.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {submission.email}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-gray-500">
                          {submission.date}
                        </span>
                        <button
                          onClick={() => deleteSubmission(submission.id)}
                          className="text-red-400 hover:text-red-600 transition duration-200"
                          title="Delete message"
                        >
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
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm mt-2">
                      {submission.message}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Storage Info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            All messages are saved in your browser's localStorage. They will
            persist even after closing the browser.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;



