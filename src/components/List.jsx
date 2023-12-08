import React from "react";

export const List = ({
  label1,
  label2,
  label3,
  label4,
  data1,
  data2,
  data3,
  data4,
}) => {
  return (
    <ul className="flex flex-col gap-2">
      <li>
        <span className="font-bold">{label1} :</span> {data1}
      </li>
      <li>
        <span className="font-bold">{label2} :</span> {data2}
      </li>
      <li>
        <span className="font-bold">{label3} :</span> {data3}
      </li>
      <li>
        <span className="font-bold">{label4} :</span> {data4}
      </li>
    </ul>
  );
};
