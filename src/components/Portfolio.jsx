import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Portfolio = () => {
  const videos = [
    {
      src: "/ferrari-competetion.mp4",
      title: "Circuit race",
    },
    {
      src: "/ferrari-orange.mp4",
      title: "Enhancement",
    },
    {
      src: "/ferrari-black.mp4",
      title: "Most rare Ferrai",
    },
  ];

  return (
    <>
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            {/* <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-indigo-600">Portfolio</span>
            </h2> */}

            <motion.h2
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                Our{" "}
              </motion.span>
              <motion.span
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                transition={{ type: "spring", stiffness: 100 }}
                className="text-indigo-600"
              >
                Portfolio
              </motion.span>
            </motion.h2>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Watch our athletes in action. Each video showcases the dedication,
              skill, and passion that defines our sports community.
            </p>
          </div>

          {/* Bottom CTA */}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
