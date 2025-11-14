
import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";


import App from "./App.jsx";

// Pages
import Home from "./Pages/Home.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Portfolio from "./components/FinalPortfolio.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Contact from "./components/Contact.jsx";
import Sidebar from "./components/Sidebar.jsx";
import { ContactSubmissions } from "./components/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,              
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "testimonials", element: <Testimonials /> },
      { path: "contact", element: <Contact /> },
      { path: "submissions", element: <ContactSubmissions /> },
      { path: "sidebar", element: <Sidebar /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
