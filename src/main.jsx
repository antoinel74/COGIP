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
import { InvoicesForm } from "./views/dashboard/invoiceForm.jsx";
import { CompaniesForm } from "./views/dashboard/companiesForm.jsx";
import { ContactForm } from "./views/dashboard/contactForm.jsx";
import { Company } from "./views/app/company.jsx";
import { Contact } from "./views/app/contact.jsx";

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
        path: "companies/:companyId",
        element: <Company />,
      },
      {
        path: "contacts",
        element: <Contacts />,
      },
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome />,
      },
      {
        path: "/dashboard/invoices",
        element: <InvoicesForm />,
      },
      {
        path: "/dashboard/companies",
        element: <CompaniesForm />,
      },
      {
        path: "/dashboard/contact",
        element: <ContactForm />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
