import React, { useState, useEffect } from "react";
import { allCompanies } from "../helpers/store/allCompanies";
import { postNewInvoice } from "../helpers/api/postNewInvoice";

export const Form = () => {
  const { allCompaniesDetails, fetchAllCompanies } = allCompanies();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllCompanies();
    setLoading(false);
  }, [fetchAllCompanies]);
  console.log(allCompaniesDetails);

  const [formInputs, setFormInputs] = useState({
    ref: "",
    price: "",
    id_company: "",
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
      const response = await postNewInvoice(formInputs);
      console.log(response);
      console.log("New invoice created successfully :", response);
      setFormInputs({
        ref: "",
        price: "",
        id_company: "",
      });
    } catch (error) {
      console.error("ERR - Invoice not created:", error);
    }
  };

  return (
    <form
      className="flex flex-col gap-6 relative w-5/6 ml-auto right-0"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="References"
        name="ref"
        value={formInputs.ref}
        onChange={handleInputChange}
        className="bg-gray-100 p-2 rounded focus:outline-gray-400"
      />
      <input
        type="number"
        placeholder="Price"
        name="price"
        value={formInputs.price}
        onChange={handleInputChange}
        className="bg-gray-100 p-2 rounded focus:outline-gray-400"
      />
      <select
        className="bg-gray-100 p-2 rounded focus:outline-gray-400"
        name="id_company"
        value={formInputs.id_company}
        onChange={handleInputChange}
      >
        <option value="" disabled hidden>
          Select Company
        </option>
        {!loading &&
          allCompaniesDetails &&
          allCompaniesDetails.companies &&
          allCompaniesDetails.companies.map((company) => (
            <option key={company.id} value={company.id}>
              {company.name}
            </option>
          ))}
      </select>
      <input
        type="submit"
        value="Save"
        className="p-2 bg-[#9798d6] hover:opacity-70 text-white font-semibold cursor-pointer rounded"
      />
    </form>
  );
};
