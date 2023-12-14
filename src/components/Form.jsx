import React, { useState, useEffect } from "react";
import { allCompanies } from "../helpers/api/allCompanies";
import { postNewInvoice } from "../helpers/api/postNewInvoice";
import { FormField } from "./FormField";

export const Form = ({ formType }) => {
  const { allCompaniesDetails, fetchAllCompanies } = allCompanies();

  useEffect(() => {
    fetchAllCompanies();
  }, [fetchAllCompanies]);
  /*   console.log(allCompaniesDetails); */

  const [formInputs, setFormInputs] = useState({
    ref: "",
    price: "",
    id_company: "",
    email: "",
    phone: "",
    name: "",
    country: "",
    tva: "",
    type_name: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    const parsedValue =
      name === "price" || name === "id_company" ? parseInt(value, 10) : value;
    setFormInputs({
      ...formInputs,
      [name]: parsedValue,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Form Inputs:", formInputs);
      if (formType === "invoice") {
        const response = await postNewInvoice(formInputs);
        console.log("New invoice created successfully :", response);
      } else if (formType === "contact") {
        // POST NEW CONTACT
      } else if (formType === "company") {
        // POST NEW COMPANY
      }
      setFormInputs({
        ref: "",
        price: "",
        id_company: "",
        email: "",
        phone: "",
        name: "",
        country: "",
        tva: "",
        type_name: "",
      });
    } catch (error) {
      console.error("ERR - Invoice not created:", error);
    }
  };

  const fields =
    formType === "invoice"
      ? [
          { name: "ref", placeholder: "References", type: "text" },
          { name: "price", placeholder: "Price", type: "number" },
          { name: "id_company", placeholder: "Select Company", type: "select" },
        ]
      : formType === "contact"
      ? [
          { name: "name", placeholder: "Name", type: "text" },
          { name: "phone", placeholder: "Phone Number", type: "tel" },
          { name: "email", placeholder: "Email", type: "email" },
          { name: "id_company", placeholder: "Select Company", type: "select" },
        ]
      : formType === "company"
      ? [
          { name: "name", placeholder: "Company Name", type: "text" },
          { name: "country", placeholder: "Country", type: "text" },
          { name: "tva", placeholder: "TVA", type: "number" },
          { name: "type_name", placeholder: "Type", type: "text" },
        ]
      : [];

  return (
    <form
      className="flex flex-col gap-6 relative w-5/6 ml-auto right-0"
      onSubmit={handleSubmit}
    >
      {fields.map((field, index) => (
        <FormField
          key={index}
          type={field.type}
          placeholder={field.placeholder}
          name={field.name}
          value={formInputs[field.name]}
          onChange={handleInputChange}
          options={
            field.type === "select" ? allCompaniesDetails?.companies || [] : []
          }
        />
      ))}
      <input
        type="submit"
        value="Save"
        className="p-2 bg-[#9798d6] hover:opacity-70 text-white font-semibold cursor-pointer rounded"
      />
    </form>
  );
};
