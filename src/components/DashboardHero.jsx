import React from "react";

export const DashboardHero = ({ name, url }) => {
  return (
    <div className="relative w-5/6 ml-auto right-0 mb-4">
      <div className="h-1/2 pb-8">
        <h1 className="text-3xl font-extrabold">Dashboard</h1>
        <span className="text-sm">{url}</span>
      </div>
      <div className="h-1/2 bg-[#9798d6] rounded">
        <div className="w-full md:w-[50%] p-8 text-white">
          <h2 className="text-3xl font-semibold">Welcome back {name} !</h2>
          <p className="font-light mt-2 text-sm">
            You can here add an invoice, a company and some contacts
          </p>
        </div>
        <figure className="hidden md:block w-1/2 h-full absolute top-0 right-0">
          <img
            src="/img/dash-scene.png"
            className="w-full h-full object-contain"
          ></img>
        </figure>
      </div>
    </div>
  );
};
