import React from "react";

export const Navbar = () => {
  return (
    <div className="flex w-full justify-between p-4 bg-yellow-400 items-center">
      <ul className="flex gap-4 items-center">
        <li>
          <a href="#" className="text-3xl font-bold mr-6">
            COGIP
          </a>
        </li>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Invoices</a>
        </li>
        <li>
          <a href="#">Companies</a>
        </li>
        <li>
          <a href="#">Contacts</a>
        </li>
      </ul>
      <div className="flex gap-4 items-center">
        <button>Sign Up</button>
        <a href="#">Login</a>
      </div>
    </div>
  );
};
