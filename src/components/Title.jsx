import React from "react";

export const Title = ({ title, uppercase }) => {
  const afterStyle = uppercase ? "uppercase" : "";

  return (
    <h2
      className={`text-4xl md:text-5xl after:bg-[#f9de4e] relative z-10 inline-block font-extrabold after:absolute after:-bottom-2 after:right-0 after:-z-10 after:h-6 after:w-3/4 after:-translate-y-1 ${afterStyle} after:content-[''] mb-8`}
    >
      {title}
    </h2>
  );
};
