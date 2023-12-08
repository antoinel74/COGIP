import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { List } from "../../components/List";
import { Divider } from "../../components/Divider";
import { Title } from "../../components/Title";
import { fetchAllData } from "../../helpers/api/fetchAllData";
import Avatar from "../../components/Avatar";

export const Contact = () => {
  const { contactsId } = useParams();
  const [contactData, setContactData] = useState(null);

  useEffect(() => {
    const fetchAllContacts = async () => {
      try {
        const contacts = await fetchAllData("contacts");
        const contact = contacts.find(
          (contact) => contact.id === parseInt(contactsId)
        );
        setContactData(contact);
      } catch (error) {
        console.error("Error fetching contacts", error);
      }
    };
    fetchAllContacts();
  }, [contactsId]);

  return (
    <section>
      <Divider />
      {contactData ? (
        <div className="mt-4 p-6 md:px-48 flex justify-around md:justify-between">
          <div>
            <Title title={contactData.name} />
            <List
              name={contactData.firstname}
              tva={contactData.email}
              country={contactData.phone}
              type={contactData.id_company}
            />
          </div>
          <Avatar
            name={contactData.name}
            height="h-16 md:h-[240px]"
            width="w-16 md:w-[240px]"
          />
        </div>
      ) : (
        <div>Contact not found !</div>
      )}
    </section>
  );
};
