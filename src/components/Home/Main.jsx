import React, { useRef, useEffect } from "react";
import resume from "./Mostafa_Waseem_Mahmoud_Resume.pdf"; // استيراد الملف
import "./main.css";

const Main = () => {
  const buttonRef = useRef();

  useEffect(() => {
    buttonRef.current.classList.add("button-animate");
  }, []);

  return (
    <div className="mainPage">
      <div className="heading">
        <h1>Hi,</h1>
        <h1>
          I'm <span>M</span>ostafa
        </h1>
        <h1>Web Developer</h1>
        <p>FrontEnd-developer / BackEnd-developer / MernStack-developer</p>
        <a href={resume} download="Mostafa_Waseem_Mahmoud_Resume.pdf">
          <button ref={buttonRef}>Download Resume</button>
        </a>
      </div>
      <div className="letter-img">
        <h1>M</h1>
      </div>
    </div>
  );
};

export default Main;
