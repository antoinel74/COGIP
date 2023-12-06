import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import Dashboard from "./routes/Dashboard.jsx";
import "./style/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./views/ErrorPage.jsx";
import { Invoices } from "./views/app/invoices.jsx";
import Home from "./views/app/home.jsx";
import { Companies } from "./views/app/companies.jsx";
import { Contacts } from "./views/app/contacts.jsx";
import { DashboardHome } from "./views/dashboard/DashboardHome.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "invoices",
        element: <Invoices />,
      },
      {
        path: "companies",
        element: <Companies />,
      },
      {
        path: "contacts",
        element: <Contacts />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "dashboard",
        element: <DashboardHome />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
