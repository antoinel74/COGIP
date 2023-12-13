import React, { useEffect } from "react";
import Avatar from "../../components/Avatar";
import { Divider } from "../../components/Divider";

export const Companies = () => {
  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await fetch(
          "https://cogip-api-8d6f281a9687.herokuapp.com/invoices/last/"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        console.log("Fetched data:", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchInvoices();
  }, []);

  return (
    <div>
      <Divider />
      companies
      <Avatar name="Afrit" />
    </div>
  );
};
