// components/Sidebar.jsx
import { icon } from "leaflet";
import { useState, useEffect } from "react";
import { href, Link, useLocation } from "react-router-dom";
import {
  FiHome,
  FiInfo,
  FiZap,
  FiFolder,
  FiMessageSquare,
  FiMail,
  FiStar,
} from "react-icons/fi";

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();
// ----------------------------------------------------------------------------------------------------------------------------THIS IS JUST A DEMO YOU CAN MAKE YOUR OWN ROUTES FOR JUST DASHBOARD THIS IS JUST BASIC STRUCTURE OF DASHBOARD OK Wahaj bhai ----------------------------------
  const navigation = [
    { name: "Dashboard", href: "/", icon: <FiHome className="w-5 h-5" /> },
    { name: "About", href: "/about", icon: <FiInfo className="w-5 h-5" /> },
    {
      name: "Services",
      href: "/services",
      icon: <FiZap className="w-5 h-5" />,
    },
    {
      name: "Portfolio",
      href: "/portfolio",
      icon: <FiFolder className="w-5 h-5" />,
    },
    {
      name: "Testimonials",
      href: "/testimonials",
      icon: <FiStar className="w-5 h-5" />,
    },
    { name: "Contact", href: "/contact", icon: <FiMail className="w-5 h-5" /> },
    {
      name: "Messages",
      href: "/submissions",
      icon: <FiMessageSquare className="w-5 h-5" />,
    },
  ];
// ----------------------------------------------------------------------------------------------------------------------------THIS IS JUST A DEMO YOU CAN MAKE YOUR OWN ROUTES FOR JUST DASHBOARD THIS IS JUST BASIC STRUCTURE OF DASHBOARD ----------------------------------
  // Close sidebar when route changes FOR CHECKING THE PROJECT SETUP AND SEPERATING DASHBOARD WTIH WEBSITE just a starter
  useEffect(() => {
    if (isOpen) {
      onClose();
    }
  }, [location.pathname]);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".sidebar-content")) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" />
      )}

      {/* Sidebar */}
      <div
        className={`
  fixed top-0 left-0 h-full w-50 bg-gradient-to-b from-indigo-700 to-purple-400 shadow-2xl transform transition-transform duration-300 ease-in-out z-50 sidebar-content
  ${isOpen ? "translate-x-0" : "-translate-x-full"}
  lg:translate-x-0 lg:static lg:shadow-none 
`}
      >
        {/* Header */}
        <div className="p-14 h-full">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center" onClick={onClose}>
              <span className="custom-fonts text-2xl text-white bg-transparent font-bold">
                Peakplay
              </span>
            </Link>

            {/* Close button - only show on mobile */}
            
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="p-4">
          <ul className="space-y-2">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  onClick={onClose}
                  className={`
                    flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200
                    ${
                      location.pathname === item.href
                        ? "bg-white text-black border-l-4 border-purple-500"
                        : "text-white hover:bg-gray-100 hover:text-gray-600"
                    }
                  `}
                >
                  <span className="text-lg mr-3">{item.icon}</span>
                  {item.name}
                </Link>
              </li>
              
            ))}
            <button className="py-2 px-7 mx-7 bg-[#10B981] text-white font-bold rounded-md ">Logout</button>
          </ul>
        </nav>

        {/* Footer Section */}
      </div>
    </>
  );
};

export default Sidebar;
