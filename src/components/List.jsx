import React from "react";

export const List = ({ name, tva, country, type }) => {
  return (
    <ul className="flex flex-col gap-2">
      <li>
        <span className="font-bold">Name :</span> {name}
      </li>
      <li>
        <span className="font-bold">TVA :</span> {tva}
      </li>
      <li>
        <span className="font-bold">Country :</span> {country}
      </li>
      <li>
        <span className="font-bold">Type :</span> {type}
      </li>
    </ul>
  );
};
