import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="w-full px-12">
      <span className="border-t block border-solid border-[#f9de4e] w-full mb-24 mt-12"></span>
      <div className="flex">
        <div className="w-1/2 hidden md:block">
          <a
            href="#"
            alt="home"
            className="border-4 border-yellow-400 text-5xl p-3 font-extrabold"
          >
            COGIP
          </a>
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-10">
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

          <p className="flex text-gray-600">
            Social Media :
            <a href="https://facebook.com">
              <img
                src="/icons/square-facebook.svg"
                className="h-6 w-6 mx-2 cursor-pointer hover:scale-105"
              />
            </a>
            <a href="https://twitter.com/?lang=fr">
              <img
                src="/icons/x-twitter.svg"
                className="h-6 w-6 mr-2 cursor-pointer hover:scale-105"
              />
            </a>
            <a href="https://linkedin.com/">
              <img
                src="/icons/linkedin-in.svg"
                className="h-6 w-6 mr-2 cursor-pointer hover:scale-105"
              />
            </a>
            <a href="https://instagram.com/">
              <img
                src="/icons/instagram.svg"
                className="h-6 w-6 mr-2 cursor-pointer hover:scale-105"
              />
            </a>
            <a href="https://youtube.com">
              <img
                src="/icons/youtube.svg"
                className="h-6 w-6 mr-2 cursor-pointer hover:scale-105"
              />
            </a>
          </p>
        </div>
      </div>
      <span className="border-t block border-solid border-gray-200 w-full mt-24"></span>
      <div className="w-full flex justify-between opacity-40">
        <ul className="gap-4 uppercase py-4 flex-wrap hidden md:flex ">
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
        <p className="mt-4">Copyright © 2023 • COGIP</p>
      </div>
    </div>
  );
};
