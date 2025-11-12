
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
 
  return (
    <Router>
     
         
          
          {/* Page Content */}
          <main className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/contact" element={<Contact />} />
               <Route path="/submissions" element={<ContactSubmissions/>} />
               <Route path='sidebar' element = { <Sidebar/>} />
            </Routes>
          </main>
     
    
    </Router>
  );
}

export default App;