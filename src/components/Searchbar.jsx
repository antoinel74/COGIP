import React from "react";

export const Searchbar = () => {
  return (
    <form className="my-2">
      <input
        type="text"
        className="p-1 border border-solid border-gray-200 rounded focus:outline-gray-400"
        placeholder="Search"
      />
      <input type="submit" className="opacity-0" />
    </form>
  );
};
