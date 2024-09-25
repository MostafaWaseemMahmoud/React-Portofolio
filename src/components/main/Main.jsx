import React from 'react';
import './main.css';

const Main = () => {
  return (
    <div className='main'>
      <div className="main-heading --seprator">
        <h1 className='heading'>Home</h1>
      </div>

      <div className="main-description">
        <p>
          Hello, my name is Mostafa Waseem Mahmoud, and I am a 13-year-old MERN Stack web developer. Despite my young age, I have a solid understanding of full-stack web development using the MERN Stack, which includes MongoDB, Express.js, React.js, and Node.js. I have hands-on experience in building dynamic and responsive web applications, from back-end server setups to front-end user interfaces. I am passionate about coding and continuously learning new technologies to enhance my skills. My goal is to create efficient, scalable, and user-friendly applications that solve real-world problems. I completed the CS50 course and earned a <a href="https://certificates.cs50.io/f3fb964f-d41c-420c-add6-123a62074e14.pdf?size=letter" target='_blank'>certificate</a>.
        </p>
      </div>

      <div className="my-skills">
        <div className="main-heading --seprator">
          <h1 className='heading'>Skills</h1>
        </div>
        <div className="skills-cards">
          <div className="column">
            <div className="card">
              <div className="card-heading">
                <div className="icon"><img src="/images/tools.svg" alt="Tools" /></div>
                <div className="title"><h1>Tools</h1></div>
              </div>
              <div className="card-skills">
                <ul>
                  <li>Postman</li>
                  <li>VS Code</li>
                  <li>Command Line</li>
                  <li>Sublime Text</li>
                </ul>
              </div>
            </div>

            <div className="card">
              <div className="card-heading">
                <div className="icon"><img src="/images/languages.svg" alt="Languages" /></div>
                <div className="title"><h1>Languages</h1></div>
              </div>
              <div className="card-skills">
                <ul>
                  <li>HTML/CSS</li>
                  <li>SCSS</li>
                  <li>Vanilla JS</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <div className="card-heading">
                <div className="icon"><img src="/images/libraries.svg" alt="Libraries" /></div>
                <div className="title"><h1>Libraries</h1></div>
              </div>
              <div className="card-skills">
                <ul>
                  <li>React</li>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>Bootstrap</li>
                  <li>Multer</li>
                </ul>
              </div>
            </div>

            <div className="card">
              <div className="card-heading">
                <div className="icon"><img src="/images/database.svg" alt="Database" /></div>
                <div className="title"><h1>Database</h1></div>
              </div>
              <div className="card-skills">
                <ul>
                  <li>MongoDB</li>
                  <li>Mongoose</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="projects">
        <div className="project-heading --seprator">
          <h1 className="heading">Projects</h1>
        </div>
        <div className="projects-cards">
          <div className="card project-card">
            <div className="card-img">
              <img src="/images/chat-application.png" alt="Chat Application" />
            </div>
            <div className="card-txt">
              <div className="title">
                <h1>Chat Application</h1>
              </div>
              <div className="card-description">
                <p>(HTML, CSS, VanillaJS)</p>
                <p>(Node.js, Express, MongoDB)</p>
                <div className="links">
                  <h3>
                    <a target='_blank' href="https://youtu.be/gAKsZvU4G-g?si=yPN4eXEhEYLnBD63">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="card project-card">
            <div className="card-img">
              <img src="/images/covid-19.png" alt="Covid-19 Application" />
            </div>
            <div className="card-txt">
              <div className="title">
                <h1>Covid-19 Application</h1>
              </div>
              <div className="card-description">
                <p>(React, CSS, React Icons)</p>
                <div className="links">
                  <h3>
                    <a target='_blank' href="https://github.com/MostafaWaseemMahmoud/Kovid-App">
                      <i className="fa-brands fa-github"></i>
                    </a>
                  </h3>
                  <h3>
                    <a target='_blank' href="https://kovid-app.netlify.app/">
                      <i className="fa-solid fa-life-ring"></i>
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="card project-card">
            <div className="card-img">
              <img src="/images/email-sender.png" alt="Email Sender Application" />
            </div>
            <div className="card-txt">
              <div className="title">
                <h1>Email Sender Application</h1>
              </div>
              <div className="card-description">
                <p>(React, EmailJS)</p>
                <div className="links">
                  <h3>
                    <a target='_blank' href="https://github.com/MostafaWaseemMahmoud/Send-Email-With-React">
                      <i className="fa-brands fa-github"></i>
                    </a>
                  </h3>
                  <h3>
                    <a target='_blank' href="https://send-email-with-react.netlify.app/">
                      <i className="fa-solid fa-life-ring"></i>
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Main;
