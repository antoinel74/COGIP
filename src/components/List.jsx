import React from "react";

export const List = ({ name, tva, country, type }) => {
  return (
    <ul className="flex flex-col gap-2">
      <li>
        <span className="font-semibold">Name :</span> {name}
      </li>
      <li>
        <span className="font-semibold">TVA :</span> {tva}
      </li>
      <li>
        <span className="font-semibold">Country :</span> {country}
      </li>
      <li>
        <span className="font-semibold">Type :</span> {type}
      </li>
    </ul>
  );
};
