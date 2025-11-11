// components/Sidebar.jsx
import { icon } from 'leaflet';
import { useState, useEffect } from 'react';
import { href, Link, useLocation } from 'react-router-dom';
import { 
  FiHome, 
  FiInfo, 
  FiZap, 
  FiFolder, 
  FiMessageSquare,
  FiMail,
  FiStar
} from 'react-icons/fi';

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();

const navigation = [
  { name: 'Home', href: '/', icon: <FiHome className="w-5 h-5" /> },
  { name: 'About', href: '/about', icon: <FiInfo className="w-5 h-5" /> },
  { name: 'Services', href: '/services', icon: <FiZap className="w-5 h-5" /> },
  { name: 'Portfolio', href: '/portfolio', icon: <FiFolder className="w-5 h-5" /> },
  { name: 'Testimonials', href: '/testimonials', icon: <FiStar className="w-5 h-5" /> },
  { name: 'Contact', href: '/contact', icon: <FiMail className="w-5 h-5" /> },
  { name: 'Messages', href: '/submissions', icon: <FiMessageSquare className="w-5 h-5" /> }
];

  // Close sidebar when route changes
  useEffect(() => {
    if (isOpen) {
      onClose();
    }
  }, [location.pathname]);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.sidebar-content')) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 sidebar-content
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:shadow-none
      `}>
        
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center" onClick={onClose}>
              <span className="text-2xl font-bold text-orange-600">Peakplay</span>
            </Link>
            
            {/* Close button - only show on mobile */}
            <button
              onClick={onClose}
              className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
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
                    ${location.pathname === item.href
                      ? 'bg-orange-100 text-orange-600 border-l-4 border-orange-600'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-orange-600'
                    }
                  `}
                >
                  <span className="text-lg mr-3">{item.icon}</span>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer Section */}
        
      </div>
    </>
  );
};

export default Sidebar;