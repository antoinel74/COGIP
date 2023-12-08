import React from "react";

export const Title = ({ title }) => {
  return (
    <h2 class="text-4xl md:text-5xl relative z-10 inline-block font-extrabold uppercase after:absolute after:-bottom-2 after:right-0 after:-z-10 after:h-4 after:w-3/4 after:-translate-y-1 after:bg-[#f9de4e] after:content-[''] mb-8">
      {title}
    </h2>
  );
};
