import React from "react";
import Avatar from "./Avatar";
/**
 * Premier essai de carte pour les tableau du dashboard restructuration a voir le titre devra surement etre passer par le tableau la séparation également a retravailler
 *
 */
export const Card = () => {
  return (
    <>
      {/* card dahboard tables */}
      <div className="max-w-xl bg-white rounded-md flex flex-col justify-center items-start p-4">
        {/* dynamic title component import */}
        <div>
          <h2 className="text-lg w-full font-bold py-4 px-6">titre</h2>
        </div>
        <span className="border-t block border-solid border-black w-11/12 mb-4 mt-2"></span>
        <div>{/* table component import */}</div>
      </div>
      {/* card dashboard pile */}
      <div className="max-w-xl bg-white rounded-md flex flex-col justify-center items-start p-8">
        <div>
          <h2 className="text-lg w-full font-bold py-4 px-6">titre</h2>
        </div>
        <div className="w-full flex gap-x-11 justify-center">
          {/* import des composants piles */}
        </div>
      </div>
      {/* card dashboard formulaire */}
      <div className="max-w-6xl bg-white rounded-md flex flex-col justify-center items-start p-4">
        {/* dynamic title component import */}
        <div>
          <h2 className="text-lg w-full font-bold py-4 px-6">titre</h2>
        </div>
        <span className="border-t block border-solid border-black w-11/12 mb-4 mt-2"></span>
        <div>{/* Form component import */}</div>
      </div>
      {/* contact card */}
      <div className="max-w-sm bg-slate-200 rounded-xl flex  justify-center items-center p-4">
        {/* dynamic title component import */}
        <div className="w-32 h-32">
          <Avatar name="Henry" height="h-5" width="w-5"></Avatar>
        </div>
        <div className="flex flex-col text-4xl font-black	">
          <p>Henry</p>
          <p>George</p>
        </div>
      </div>
    </>
  );
};
