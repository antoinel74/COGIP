import React from "react";

const NavbarItem = ({ link, text, icon }) => {
  return (
    <li className="mb-1">
      <a
        className="flex gap-4 items-center p-3 hover:border-r-4 border-[#9798d6] hover:text-[#9798d6]"
        href={link}
      >
        <img className="h-5 w-5" src={icon} alt="icon" />
        <span className="hidden md:block">{text}</span>
      </a>
    </li>
  );
};

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

  const renderedMenuItems = menuItems.map((item, index, icon) => (
    <NavbarItem
      key={index}
      link={item.link}
      text={item.text}
      icon={item.icon}
    />
  ));

  return (
    <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-1/6 max-w-sm bg-white border-r overflow-y-auto">
      <div className="flex flex-col items-center border-b border-gray-200 py-6 mb-8">
        <img src="/.." alt="avatar" />
        <h3 className="text-2xl font-semibold hidden md:block">
          Henry Georges
        </h3>
      </div>
      <ul>{renderedMenuItems}</ul>
      <div className="mt-auto border-t border-gray-200 flex justify-between p-2">
        <img src="/.." alt="avatar" className="hidden md:block" />
        <a href="/" className="text-[#9798d6]" alt="logout">
          Log out
        </a>
      </div>
    </nav>
  );
};
