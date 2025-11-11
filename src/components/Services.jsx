import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar from "./Navbar";

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardHoverVariants = {
    rest: {
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const imageHoverVariants = {
    rest: {
      scale: 1,
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const services = [
    {
      image: "https://images.pexels.com/photos/34601860/pexels-photo-34601860.jpeg",
      title: "Professional Training",
      description:
        "Personalized coaching sessions with certified trainers to help you reach your peak performance.",
      features: [
        "One-on-one sessions",
        "Progress tracking",
        "Custom workout plans",
      ],
    },
    {
      image: "https://images.pexels.com/photos/27166577/pexels-photo-27166577.jpeg",
      title: "Competition Events",
      description:
        "Regular tournaments and competitions across various sports disciplines for all skill levels.",
      features: ["Weekly tournaments", "Skill-based divisions", "Prize pools"],
    },
    {
      image: "https://images.pexels.com/photos/16743658/pexels-photo-16743658.jpeg",
      title: "Team Building",
      description:
        "Corporate and group sports activities designed to foster teamwork and camaraderie.",
      features: ["Corporate events", "Team challenges", "Leadership training"],
    },
    {
      image: "https://images.pexels.com/photos/19444148/pexels-photo-19444148.jpeg",
      title: "Maintainance of parts",
      description:
        "Online submit your request for tuning your cars and replace the parts.",
      features: ["Video analysis", "Mobile app access"],
    },
    {
      image: "https://images.pexels.com/photos/2568538/pexels-photo-2568538.jpeg",
      title: "Facility Rental",
      description:
        "State-of-the-art sports facilities available for rent for practice and events.",
      features: [
        "Multiple venues",
        "Equipment included",
        "Flexible scheduling",
      ],
    },
    {
      image: "https://images.pexels.com/photos/34660253/pexels-photo-34660253.jpeg",
      title: "Performance Analytics",
      description:
        "Advanced tracking and analysis of your performance metrics with detailed insights.",
      features: ["Real-time data", "Progress reports", "Expert analysis"],
    },
  ];

  return (


    <>
    <Navbar/>
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block mb-4"
          >
            <span className="text-1xl font-semibold tracking-wider text-red-600 uppercase bg-blue-100 px-4 py-2 rounded-full">
              OUR SERVICES
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{fontFamily:'monospace'}}>
            Elevate Your <span className="text-orange-600">Game</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive sports services designed to help athletes of all
            levels achieve their goals and unlock their full potential.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="group"
            >
              <motion.div
                variants={cardHoverVariants}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 h-full flex flex-col"
              >
                {/* Image Header */}
                <div className="relative overflow-hidden h-48">
                  <motion.div
                    variants={imageHoverVariants}
                    className="absolute inset-0"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                  </motion.div>
                  
                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white">
                      {service.title}
                    </h3>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="bg-white/20 backdrop-blur-sm rounded-full p-4"
                    >
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-gray-600 mb-6 leading-relaxed flex-1">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          delay: 0.5 + index * 0.1 + featureIndex * 0.1,
                        }}
                        className="flex items-center text-sm text-gray-500"
                      >
                        <motion.svg
                          whileHover={{ scale: 1.2 }}
                          className="w-4 h-4 text-green-500 mr-2 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </motion.svg>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "#ea580c",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-red-500 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center group/btn"
                  >
                    Learn More
                    <motion.svg
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                      className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </motion.svg>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center space-x-4 bg-white rounded-2xl shadow-lg px-8 py-6 border border-gray-100"
          >
            
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)",
              }}
              className="bg-gradient-to-r from-orange-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold"
            >
              Let's race
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
    </>
  );
};

export default Services;