import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { List } from "../../components/List";
import { Divider } from "../../components/Divider";
import { Title } from "../../components/Title";
import { useShowContactStore } from "../../helpers/store/useShowContactStore";
import { Loader } from "../../components/Loader";
import Avatar from "../../components/Avatar";

export const Contact = () => {
  const { contactId } = useParams();
  const { contactDetails, fetchContactById } = useShowContactStore();
  const [loading, setLoading] = useState(true);

  console.log(contactId);

  useEffect(() => {
    const fetchCompany = async () => {
      await fetchContactById(contactId);
      setLoading(false);
    };
    fetchCompany();
  }, [contactId, fetchContactById]);

  console.log(contactDetails);

  return (
    <section>
      <Divider />
      {loading ? (
        <Loader />
      ) : contactDetails ? (
        <div className="mt-4 p-6 md:px-48 flex justify-around md:justify-between">
          <div>
            <Title title={contactDetails.name} uppercase={false} />
            <List
              label1="Contact"
              label2="Phone"
              label3="Mail"
              label4="Company"
              data1={contactDetails.name}
              data2={contactDetails.phone}
              data3={contactDetails.email}
              data4={contactDetails.company_name}
            />
          </div>
          <Avatar
            name={contactDetails.name}
            height="h-16 md:h-[240px] bg-slate-200"
            width="w-16 md:w-[240px]"
          />
        </div>
      ) : (
        <div>Contact not found !</div>
      )}
    </section>
  );
};
