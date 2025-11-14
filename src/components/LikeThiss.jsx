import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App.jsx";
import NotFound from "./components/NotFound.jsx";
import Home from "./components/Home.jsx";
import Admin from "./Admin.jsx";
import Login from "./components/Login.jsx";
import DashboardHome from "./Dashboard/DashboardHome.jsx";
import ServiceDashboard from "./Dashboard/ServiceDashboard.jsx";
import PortfolioDashboard from "./Dashboard/PortfolioDashboard.jsx";
import TestimonialsDashboard from "./Dashboard/TestimonialsDashboard.jsx";
import { MessagesProvider } from "./Context/MessagesContext.jsx";

import MessageDashboard from "./Dashboard/MessageDashboard.jsx";
import EditServiceForm from "./components/EditServiceForm.jsx";
import AddServiceForm from "./components/AddServiceForm.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [{ path: "/", element: <Home /> }],
  },
  { path: "/login", element: <Login /> },
  {
    path: "/dashboard",
    element: <Admin />,
    errorElement: <NotFound />,
    children: [
      { path: "", element: <DashboardHome /> },
      { path: "services", element: <ServiceDashboard /> },
      { path: "edit-service/:index", element: <EditServiceForm /> },
      { path: "add-service", element: <AddServiceForm /> },
      { path: "portfolio", element: <PortfolioDashboard /> },
      { path: "testimonials", element: <TestimonialsDashboard /> },
      { path: "message", element: <MessageDashboard /> },
    ],
  },
]);

const root = createRoot(document.querySelector("#root"));
root.render(
  <MessagesProvider>
    <RouterProvider router={router} />
  </MessagesProvider>
);