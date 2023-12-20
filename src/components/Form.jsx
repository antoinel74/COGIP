import React, { useState, useEffect } from "react";
import { postNewCompany, postNewContact, postNewInvoice } from "../helpers/api/postData";
import { FormField } from "./FormField";
import { fetchAllDatas, fetchEveryCompanies } from "../helpers/api/fetchAllDatas";

export const Form = ({ formType }) => {
  const [companyOptions, setCompanyOptions] = useState([]);

  useEffect(() => {
    const fetchDataForSelect = async () => {
      if (formType === "company") {
        const fetchedData = await fetchAllDatas({ dataType: "types", options: "" });
        const fetchedOptions = fetchedData.data || [];
        setCompanyOptions(fetchedOptions);
      } else {
        const fetchedCompanies = await fetchEveryCompanies();
        setCompanyOptions(fetchedCompanies.data || []);
      }
    };
    fetchDataForSelect();
  }, [formType]);
  /*   console.log(companyOptions); */

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
    setFormInputs({
      ...formInputs,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formType === "invoice") {
        const payload = {
          ref: formInputs.ref,
          price: formInputs.price,
          id_company: formInputs.id_company,
        };
        const response = await postNewInvoice(payload);
        console.log("New invoice created successfully:", response);
      } else if (formType === "contact") {
        const payload = {
          name: formInputs.name,
          phone: formInputs.phone,
          email: formInputs.email,
          company_id: formInputs.id_company,
        };
        const response = await postNewContact(payload);
        console.log("New contact created successfully:", response);
      } else if (formType === "company") {
        const payload = {
          name: formInputs.name,
          country: formInputs.country,
          tva: formInputs.tva,
          type_id: formInputs.type_id,
        };
        console.log(payload);
        const response = await postNewCompany(payload);
        console.log("New company created successfully:", response);
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
      console.error("ERR - Entry not created:", error);
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
          { name: "type_id", placeholder: "Select type", type: "select" },
        ]
      : [];

  return (
    <form className="flex flex-col gap-6 w-full ml-auto" onSubmit={handleSubmit}>
      {fields.map((field, index) => (
        <FormField
          key={index}
          type={field.type}
          placeholder={field.placeholder}
          name={field.name}
          value={formInputs[field.name]}
          onChange={handleInputChange}
          options={field.type === "select" ? companyOptions || [] : []}
        />
      ))}
      <input
        type="submit"
        value="Save"
        className="p-2 bg-[#9798d6] hover:opacity-70 text-white font-semibold cursor-pointer rounded text-left"
      />
    </form>
  );
};
