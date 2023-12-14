import React from "react";
import { Table2 } from "./Table2";
/**
 *cart
 */
export const Card = ({ cardType, dataType, name, avatarURL }) => {
  const words = name.split(" ");
  let cardStyle;

  switch (cardType) {
    case "table":
      cardStyle =
        "max-w-xl bg-white rounded-md flex flex-col justify-center items-start p-4";
      break;
    case "contact":
      cardStyle =
        "max-w-sm bg-slate-100 rounded-xl flex justify-center items-center px-4";
      break;
    case "pile":
      cardStyle =
        "max-w-xl bg-white rounded-md flex flex-col justify-center items-start p-8";
  }
  return (
    <>
      <div className={cardStyle}>
      {cardType === "table" && <Table2 pageType="admin_panel" dataType={dataType} />}
        {cardType === "pile" && (
          <>
            <div>
              <h2 className="text-lg w-full font-bold py-4 px-6">Statistics</h2>
            </div>
            <div className="w-full flex gap-x-11 justify-center">piles</div>
          </>
        )}
        {cardType === "contact" && (
          <>
        <div className="w-20 h-20 flex items-center">
          <img src={avatarURL} className="h-16 w-16 bg-red-600 rounded-full" />
        </div>
        <h3 className="flex flex-col">
          {words.map((word, index) => (
            <span key={index} className="text-xl font-bold">
              {word}
            </span>
          ))}
        </h3>
        </>
        )}
      </div>
    </>
  );
};

