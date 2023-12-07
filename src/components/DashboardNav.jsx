import React from "react";
import Avatar from "./Avatar";
import { Link } from "react-router-dom";

const NavbarItem = ({ link, text, icon }) => (
  <li className="mb-1">
    <a
      className="flex gap-4 items-center justify-center md:justify-start p-3 hover:border-r-4 border-[#9798d6] hover:text-[#9798d6]"
      href={link}
    >
      <img className="h-5 w-5" src={icon} alt="icon" />
      <span className="hidden md:block">{text}</span>
    </a>
  </li>
);

const ProfileSection = () => (
  <div className="flex flex-col items-center border-b border-gray-200 py-6 my-4 md:my-8">
    <Avatar name="Henry" width="w-8 md:w-12" height="h-8 md:h-12" />
    <h3 className="text-2xl py-4 text-center font-semibold hidden md:block">
      Henry Georges
    </h3>
  </div>
);

const FooterSection = () => (
  <div className="mt-auto border-t border-gray-200 flex justify-between p-2">
    <Avatar name="Henry" width="w-6" height="h-6" />
    <Link to="/" className="text-[#9798d6]">
      Log out
    </Link>
  </div>
);

export const DashboardNav = () => {
  const menuItems = [
    { link: "/", text: "Home", icon: "/icons/Icon_dashboard.png" },
    { link: "/invoices", text: "Invoices", icon: "/icons/Icon_Invoices.png" },
    {
      link: "/companies",
      text: "Companies",
      icon: "/icons/Icon_Companies.png",
    },
    { link: "/contacts", text: "Contact", icon: "/icons/Icon_contact.png" },
  ];

  return (
    <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-1/6 max-w-sm bg-white border-r overflow-y-auto">
      <ProfileSection />
      <ul>
        {menuItems.map((item, index) => (
          <NavbarItem
            key={index}
            link={item.link}
            text={item.text}
            icon={item.icon}
          />
        ))}
      </ul>
      <FooterSection />
    </nav>
  );
};
