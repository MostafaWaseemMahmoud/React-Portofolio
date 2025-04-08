import React, { useRef, useState } from 'react';
import './sidebar.css';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false); // Sidebar visibility state
  const SideBar = useRef();
  const menuBtn = useRef();

  const menuItems = [
    { icon: "fa-house", label: "Home", link: "/" },
    { icon: "fa-user", label: "About", link: "/about" },
    { icon: "fa-screwdriver-wrench", label: "Skills", link: "/skills" },
    { icon: "fa-eye", label: "Projects", link: "/projects" },
    { icon: "fa-address-book", label: "Contact", link: "/contact" },
    { icon: "fa-solid fa-school", label: "Education", link: "/education" }
  ];

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const handleMenuBtnClick = () => {
    toggleSidebar(); // Toggle sidebar visibility
    if (menuBtn.current) {
      menuBtn.current.style.marginLeft = isSidebarVisible ? "20px" : "70px"; // Adjust the margin based on sidebar visibility
    }
  };

  return (
    <div>
      {/* Menu button for mobile view */}
      <button className="menu-btn-1" ref={menuBtn} onClick={handleMenuBtnClick}>
        ☰
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarVisible ? 'show' : ''}`} ref={SideBar}>
        <div className="logo">
          <p>mostafa<br />waseem</p>
        </div>
        <div className="navigation-btns">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`icon ${activeIndex === index ? "active" : ""}`}
              onClick={() => { 
                setActiveIndex(index); 
                navigate(item.link); 
              }}
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
    </div>
  );
};

export default Sidebar;
