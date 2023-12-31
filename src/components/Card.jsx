import React from "react";
import { Table2 } from "./Table2";
import { Pile } from "./Pile";
import { Form } from "./Form";

/**
 *cart
 */

export const Card = ({ cardType, dataType, name, avatarURL, formType }) => {
  const words = name ? name.split(" ") : [];

  let cardStyle;

  switch (cardType) {
    case "table":
      cardStyle = "w-full bg-white rounded-md flex flex-col justify-center items-start p-4";
      break;
    case "contact":
      cardStyle = "max-w-sm bg-slate-100 rounded-xl flex items-center px-4";
      break;
    case "pile":
      cardStyle = "w-full bg-white rounded-md flex flex-col justify-center items-start p-6";
      break;
    case "form":
      cardStyle = "w-full bg-white rounded-md flex flex-col justify-center items-start p-8";
  }
  return (
    <>
      <div className={cardStyle}>
        {cardType === "table" && <Table2 pageType="admin_panel" dataType={dataType} />}
        {cardType === "pile" && (
          <>
            <div>
              <h2 className="text-xl w-full font-bold">Statistics</h2>
            </div>
            <div className="w-full flex md:flex-row gap-x-11 justify-center p-6">
              <Pile dataType="invoices" />
              <Pile dataType="contacts" />
              <Pile dataType="companies" />
            </div>
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
        {cardType === "form" && (
          <>
            <div className="border-b border-gray-200 w-full mb-4">
              <h2 className="text-lg w-full font-bold mb-2">New {formType}</h2>
            </div>
            <Form formType={formType} />
          </>
        )}
      </div>
    </>
  );
};
