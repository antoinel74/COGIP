import React from "react";

export const Form = () => {
  const companies = [
    { value: "1", label: "Phoque Off " },
    { value: "2", label: "Ame Doux Lila Corporation" },
    { value: "3", label: "Mohammedia" },
    { value: "4", label: "La Sacrada Pedruzza" },
    {
      value: "5",
      label: "LGBTQIAXHLEMPOE+++2 Respect 4 All",
    },
  ];

  return (
    <form className="flex flex-col gap-6 mx-12">
      <input
        type="text"
        placeholder="References"
        className="bg-gray-100 p-2 rounded focus:outline-gray-400"
      />
      <input
        type="number"
        placeholder="Price"
        className="bg-gray-100 p-2 rounded focus:outline-gray-400"
      />
      <select className="bg-gray-100 p-2 rounded focus:outline-gray-400">
        <option value="" disabled hidden>
          Select Company
        </option>
        {companies.map((company) => (
          <option key={company.value} value={company.value}>
            {company.label}
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
