import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./views/ErrorPage.jsx";
import { Invoices } from "./views/app/invoices.jsx";
import Home from "./views/app/home.jsx";
import { Companies } from "./views/app/companies.jsx";
import { Contacts } from "./views/app/contacts.jsx";

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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
