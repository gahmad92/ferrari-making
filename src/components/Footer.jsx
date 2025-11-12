import React from "react";



const Footer = () => {
  return (
    <footer className="bg-white py-10 px-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Left Column */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-[40px] font-bold text-right md:text-left">Business Name</h1>
          <p className="text-sm text-right md:text-left mt-2">&copy; 2025 Business Name. All rights reserved.</p>
        </div>

        {/* Right Column */}
        <div className="md:w-1/2 flex flex-col items-start">
          <div className="grid grid-cols-2 gap-8 mb-6">
            {/* Column 1 */}
            <div className="flex flex-col space-y-2">
              <p>About Us</p>
              <p>Features</p>
              <p>Pricing</p>
              <p>Blog</p>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col space-y-2">
              <p>Documentation</p>
              <p>FAQ</p>
              <p>Support</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" aria-label="LinkedIn" className="">
             
            <img src="/public/linkedin.svg" alt="" width="25px" />
          
            </a>
            <a href="#" aria-label="Instagram">
             <img src="/public/instagram.svg" alt="" width='20px'/>
            </a>
            <a href="#" aria-label="Facebook">
              <img src="/public/twitter.svg" alt="" width='25px' />
            </a>
            <a href="#" aria-label="Twitter">
              <img src="/public/facebook.svg" alt="" width='25px' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
