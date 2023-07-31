import React, { useState, useEffect } from "react";
import "./Menu.scss";
import { Link } from "react-router-dom";

const NavDropdown = ({ title, subItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <li
      className="nav-item"
      onMouseEnter={toggleDropdown}
      onMouseLeave={toggleDropdown}
    >
      <span className="nav-link">
        {title}
      </span>
      {isOpen && (
        <ul className="dropdown-menu">
          {subItems.map((item, index) => (
            <li key={index}>
              {/* Replace a tag with Link component */}
              <Link to={`/category/${item.id}`} className="nav-link">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

const SiteHeaderNav = () => {
  const [categories, setCategories] = useState([]);

  const menuItems = [
    {
      label: "Headsets for PC's",
      subItems: [
        { id: "wireless-pc-headsets", label: "Wireless PC Headsets", url: "https://www.headset-store.co.uk/cordless-headsets-for-pc.html" },
        { id: "usb-pc-headsets", label: "USB PC Headsets", url: "https://www.headset-store.co.uk/corded-usb-a-headsets.html" },
        // Add more submenu items as needed
      ],
    },
    {
      label: "Headsets for Phone",
      subItems: [
        { id: "yealink-headsets", label: "Headsets for Yealink Phones", url: "https://www.headset-store.co.uk/yealink-headsets.html" },
        { id: "poly-handsets", label: "Headset for Poly Handsets", url: "https://www.headset-store.co.uk/polycom-headsets.html" },
        // Add more submenu items as needed
      ],
    },
    {
      label: "Headsets by Type",
      subItems: [
        { id: "wireless-headsets", label: "Wireless Headsets", url: "https://www.headset-store.co.uk/cordless-headsets.html" },
        { id: "corded-qd-headsets", label: "Corded QD Headsets", url: "https://www.headset-store.co.uk/corded-headsets.html" },
        // Add more submenu items as needed
      ],
    },
  ];

  useEffect(() => {
    // Lấy danh sách các danh mục từ menuItems
    const categoriesFromMenu = menuItems.map(item => ({ id: item.label.replace(/ /g, "-").toLowerCase(), name: item.label }));

    // Lưu trữ danh sách danh mục vào state
    setCategories(categoriesFromMenu);
  }, []);

  return (
    <header>
      <nav>
        <ul className="main-nav">
          {menuItems.map((item, index) => {
            if (item.subItems) {
              return (
                <NavDropdown key={index} title={item.label} subItems={item.subItems} />
              );
            } else {
              // Replace a tag with Link component
              return (
                <li key={index}>
                  {/* Sử dụng Link component để chuyển hướng đến trang Category */}
                  <Link to={`/category/${item.label.replace(/ /g, "-").toLowerCase()}`} className="nav-link">
                    {item.label}
                  </Link>
                </li>
              );
            }
          })}
        </ul>
      </nav>
    </header>
  );
};

export default SiteHeaderNav;
