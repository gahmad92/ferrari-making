// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./Pages/Home";
// import {About,Contact,ContactSubmissions,Services,Testimonials} from "../src/components/index.js"
// import FinalPortfolio from "./components/FinalPortfolio.jsx";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About/>}/>
//         <Route path="/services" element={<Services/>}/>
//         <Route path="portfolio" element={<FinalPortfolio/>} />
//         <Route path="testimonials" element = {<Testimonials/>} />
//         <Route path="contact" element={<Contact/>} />
//         <Route path="submissions" element={<ContactSubmissions/>} />
     

//       </Routes>
//     </Router>
//   );
// }
// export default App;



// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from "../src/Pages/Home"
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/FinalPortfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import { ContactSubmissions } from './components';
import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <Router>
      <div className="App flex h-screen bg-gray-50">
        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Navbar */}
         
          
          {/* Page Content */}
          <main className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/contact" element={<Contact />} />
               <Route path="submissions" element={<ContactSubmissions/>} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;