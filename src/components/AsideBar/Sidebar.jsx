import React from 'react';
import './sidebar.css'
const SideBar = () => {
  return (
    <div className="sideBar">
        <div className="side-container">
            <div className="info">
            <div className="p-img">
                <img src="src/assets/PersonalPic(1).jpeg" alt="sas" />
            </div>
            <div className='s-heading'>
                <h3>
                Mostafa Waseem
                </h3>
                <div className='badge'>Mern Stack</div>
            </div>
            </div>
            <div className="additional-info">
                <div className="separator">
                </div>
                <div className="icon-block">
                <div className="icon-box">
                    <i class="fa-solid fa-envelope"></i>
                </div>
                <div className="block-info">
                    <div className="block-heading">
                        <span>
                        Email
                            </span>
                    </div>
                    <div className="text-overflow">
                        <a href="mailto:mostafawaseem22@gmail.com">mostafawaseem22@gmail.com</a>
                    </div>
                </div>
                </div>
    <br />

                <div className="icon-block">
                <div className="icon-box">
                    <i class="fa-solid fa-phone"></i>
                </div>
                <div className="block-info">
                    <div className="block-heading">
                        <span>
                        Phone
                            </span>
                    </div>
                    <div className="text-overflow">
                        <a href="" title='+201064032608'>+20 1064032608</a>
                    </div>
                </div>
                </div>
            </div>

            <div className="navigate-icons">
            <i class="fa-brands fa-github"></i>
            <i class="fa-brands fa-linkedin"></i>
            </div>

        </div>
    </div>
  );
};

export default SideBar;