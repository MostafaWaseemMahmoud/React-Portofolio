import React, { useRef, useEffect, useState } from 'react';
import "./sidebar.css";
import {useNavigate} from "react-router-dom"
const Sidebar = () => {
  const navigate = useNavigate()
  const [activeIndex, setActiveIndex] = useState(0);
  const SideBar = useRef();

  useEffect(() => {
      if (SideBar.current) {
    SideBar.current.classList.add("show");
  }
  }, []);

  const menuItems = [
    { icon: "fa-house", label: "Home" ,link: "/"},
    { icon: "fa-user", label: "About" ,link: "/about"},
    { icon: "fa-screwdriver-wrench", label: "Skills" ,link: "/skills"},
    { icon: "fa-eye", label: "Projects" ,link: "/projects"},
    { icon: "fa-address-book", label: "Contact" ,link: "/contact"},
    { icon: "fa-solid fa-school", label: "education" ,link: "/education"}
  ];

  return (
    <div className="sidebar" ref={SideBar}>
      <div className="logo">
        <p>mostafa<br />waseem</p>
      </div>
      <div className="navigation-btns">
        {menuItems.map((item, index) => (
          <div 
            key={index} 
            className={`icon ${activeIndex === index ? "active" : ""}`}
            onClick={() => {setActiveIndex(index); navigate(item.link)}}
          >
            <i className={`fa-solid ${item.icon} btn-i`}></i>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
      <div className="out-links">
        <a href="https://github.com/MostafaWaseemMahmoud/">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/mostafa-waseem-224aa6312/">
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
