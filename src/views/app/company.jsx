import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { List } from "../../components/List";
import { Divider } from "../../components/Divider";
import { Title } from "../../components/Title";
import { fetchCompanyById } from "../../helpers/api/fetchAllDatas";
import { Loader } from "../../components/Loader";
import { Card } from "../../components/Card";
import { Link } from "react-router-dom";
import { transformIPFSUrl } from "../../helpers/transformIPFSUrl";
import { Table2 } from "../../components/Table2";

export const Company = () => {
  const { companyId } = useParams();
  const [companyDetails, setCompanyDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCompany = async () => {
      const data = await fetchCompanyById("companies", companyId);
      setCompanyDetails(data);
      setLoading(false);
    };
    fetchCompany();
  }, [companyId]);

  useEffect(() => {
    console.log("Company Details:", companyDetails);
  }, [companyDetails]);

  return (
    <section className="w-full">
      <Divider />
      {loading ? (
        <Loader />
      ) : companyDetails ? (
        <div className="mt-4 py-10 p-6 md:p-12">
          <Title title={companyDetails.Companies.name} uppercase={true} />
          <List
            label1="Name"
            label2="TVA"
            label3="Country"
            label4="Type"
            data1={companyDetails.Companies.name}
            data2={companyDetails.Companies.tva}
            data3={companyDetails.Companies.country}
            data4={companyDetails.Companies.type_name}
          />
          <div className="border-t border-gray-100 my-6">
            <h2 className="text-3xl md:text-4xl font-extrabold my-6">Contact People</h2>
            <div className="flex gap-4 flex-wrap">
              {companyDetails.Contacts.map((contact) => (
                <Link to={`/contacts/${contact.id}`} key={contact.id}>
                  <Card cardType={"contact"} name={contact.name} avatarURL={transformIPFSUrl(contact.Avatar)} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>Company not found !</div>
      )}
      <Table2 pageType="company" dataType="invoices" data={companyDetails.Invoices} />
    </section>
  );
};
