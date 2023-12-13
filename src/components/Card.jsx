import React from "react";
import Avatar from "./Avatar";
/**
 * Premier essai de carte pour les tableau du dashboard restructuration a voir le titre devra surement etre passer par le tableau la séparation également a retravailler
 *
 */
export const Card = ({ name }) => {
  const words = name.split(" ");
  return (
    <>
      <div className="max-w-sm bg-slate-100 rounded-xl flex justify-center items-center px-4">
        <div className="w-20 h-20 flex items-center">
          <Avatar
            name="Henry"
            height="h-16"
            width="w-16 bg-red-600 rounded-full"
          ></Avatar>
        </div>
        <h3 className="flex flex-col">
          {words.map((word, index) => (
            <span key={index} className="text-xl font-bold">
              {word}
            </span>
          ))}
        </h3>
      </div>
    </>
  );
};
