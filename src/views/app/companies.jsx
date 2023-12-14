import React, { useEffect } from "react";
import { Divider } from "../../components/Divider";
import { Table2 } from "../../components/Table2";

export const Companies = () => {
  return (
    <div>
      <Divider />
      <div className="mx-6">
        <Table2 pageType="show" dataType="companies" />
      </div>
    </div>
  );
};
