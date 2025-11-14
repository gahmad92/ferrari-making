import Navbar from "./Navbar";

const Services = () => {
  const services = [
    {
      image: "/service-1.png",
      title: "Professional Training",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    },
    {
      image: "/service-2.png",
      title: "Competition Events",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation.",
    },
    {
      image: "/service-3.png",
      title: "Team Building",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit.",
    },
    {
      image: "/service-4.png",
      title: "Maintenance of Parts",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident.",
    },
    {
      image: "/service-5.png",
      title: "Facility Rental",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error.",
    },
    {
      image: "/service-6.png",
      title: "Performance Analytics",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemo enim ipsam voluptatem quia voluptas.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our range of offerings designed to support athletes and
              teams with professional facilities and expertise.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 flex flex-col"
              >
                {/* Image */}
                <div className="flex justify-center items-center h-48 bg-gray-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-32 h-32 object-contain"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-1">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
