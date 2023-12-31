import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { List } from "../../components/List";
import { Divider } from "../../components/Divider";
import { Title } from "../../components/Title";
import { fetchContactById } from "../../helpers/api/fetchAllDatas";
import { Loader } from "../../components/Loader";
import { transformIPFSUrl } from "../../helpers/transformIPFSUrl";

export const Contact = () => {
  const { contactId } = useParams();
  const [contactDetails, setContactDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContact = async () => {
      const data = await fetchContactById("contacts", contactId);
      setContactDetails(data);
      setLoading(false);
    };
    fetchContact();
  }, [contactId]);

  // console.log(contactDetails);

  return (
    <section>
      <Divider />
      {loading ? (
        <Loader />
      ) : contactDetails ? (
        <div className="mt-4 p-6 md:px-48 flex flex-col-reverse md:flex-row justify-around md:justify-between">
          <div className="mt-4">
            <Title title={contactDetails.data.name} uppercase={false} />
            <List
              label1="Contact"
              label2="Phone"
              label3="Mail"
              label4="Company"
              data1={contactDetails.data.name}
              data2={contactDetails.data.phone}
              data3={contactDetails.data.email}
              data4={contactDetails.data.company_name}
            />
          </div>
          <img
            src={transformIPFSUrl(contactDetails.data.Avatar)}
            alt="avatar"
            className="h-16 w-16 md:h-[200px] md:w-[200px] lg:h-[240px] lg:w-[240px] rounded-full"
          />
        </div>
      ) : (
        <div>Contact not found !</div>
      )}
    </section>
  );
};
