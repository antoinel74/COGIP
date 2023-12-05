import React from "react";

export const DashboardHero = ({ name, url }) => {
  return (
    <div className=" relative h-full w-5/6 ml-auto absolute right-0 h-[250px] p-8">
      <div className="min-h-[50%]">
        <h1 className="text-3xl font-extrabold">Dashboard</h1>
        <span>{url}</span>
      </div>
      <div className="h-50 bg-[#9798d6] rounded">
        <div className="w-[50%] p-8 text-white">
          <h2 className="text-3xl font-semibold">Welcome back {name} !</h2>
          <p className="font-light mt-2">
            You can here add an invoice, a company and some contacts
          </p>
        </div>
        <figure className="w-1/2 h-full absolute top-0 right-0">
          <img
            src="/img/dash-scene.png"
            className="w-full h-full object-contain"
          ></img>
        </figure>
      </div>
    </div>
  );
};
