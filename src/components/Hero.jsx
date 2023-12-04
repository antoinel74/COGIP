import React from "react";

const Hero = ({ text, img, yellowBg }) => {
  const containerClass = `flex justify-center items-center ${
    yellowBg ? "bg-[#f9de4e]" : "bg-transparent"
  }`;

  return (
    <div className={containerClass}>
      <div className="w-1/2 p-4">
        <h2 className="text-1xl md:text-4xl lg:text-6xl pl-12 font-bold">
          {text}
        </h2>
      </div>
      <div className="w-1/2 p-4">
        <img src={img} alt="vector-img" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Hero;
