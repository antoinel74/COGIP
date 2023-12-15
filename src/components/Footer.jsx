import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="w-full px-6 md:px-6 py-2 sticky top-[100vh]">
      <span className="block border-t border-solid border-[#f9de4e] w-full my-2 md:my-12 opacity-40"></span>
      <div className="flex pt-4">
        <div className="w-1/2 hidden md:block">
          <a href="#" alt="home" className="border-4 border-yellow-400 text-5xl p-3 font-extrabold">
            COGIP
          </a>
        </div>
        <div className="flex w-full md:w-1/2 flex-col py-6 gap-8 mb-6 text-sm">
          <p className="flex">
            <img src="/icons/location-dot-solid.svg" className="h-5 w-5 mr-2" />
            <a href="#" className="text-gray-600">
              Square des Martyrs, 6000 Charleroi
            </a>
          </p>
          <p className="flex">
            <img src="/icons/phone-solid.svg" className="h-5 w-5 mr-2" />
            <a href="#" className="mr-4 text-gray-600">
              (123) 456-7890
            </a>
            <img src="/icons/fax-solid.svg" className="h-5 w-5 mr-2" />
            <a href="#" className="text-gray-600">
              (123) 456-7890
            </a>
          </p>

          <div className="flex text-gray-600">
            <span className="hidden md:block">Social media :</span>
            <a href="https://facebook.com">
              <img src="/icons/square-facebook.svg" className="h-6 w-6 mx-2 cursor-pointer hover:scale-105" />
            </a>
            <a href="https://twitter.com/?lang=fr">
              <img src="/icons/x-twitter.svg" className="h-6 w-6 mr-2 cursor-pointer hover:scale-105" />
            </a>
            <a href="https://linkedin.com/">
              <img src="/icons/linkedin-in.svg" className="h-6 w-6 mr-2 cursor-pointer hover:scale-105" />
            </a>
            <a href="https://instagram.com/">
              <img src="/icons/instagram.svg" className="h-6 w-6 mr-2 cursor-pointer hover:scale-105" />
            </a>
            <a href="https://youtube.com">
              <img src="/icons/youtube.svg" className="h-6 w-6 mr-2 cursor-pointer hover:scale-105" />
            </a>
          </div>
        </div>
      </div>
      <span className="border-t block border-solid border-gray-200 mt-2 w-full"></span>
      <div className="w-full flex justify-between opacity-40 text-sm py-2">
        <ul className="gap-4 uppercase flex-wrap hidden md:flex">
          <li>
            <Link to={`/`}>Home</Link>
          </li>
          <li>
            <Link to={`invoices`}>Invoices</Link>
          </li>
          <li>
            <Link to={`companies`}>Company</Link>
          </li>
          <li>
            <Link to={`contacts`}>Contact</Link>
          </li>
          <li>
            <a href="#">PRIVACY POLICY</a>
          </li>
        </ul>
        <p>Copyright © 2023 • COGIP</p>
      </div>
    </footer>
  );
};
