import React from 'react';
import './main.css'
const Main = () => {
  return (
    <div className='main'>
      <div className="main-heading --seprator">
        <h1 className='heading'>Home</h1>
      </div>

      <div className="main-description">
        <p>Hello, my name is Mostafa Waseem Mahmoud, and I am a 13-year-old MERN Stack web developer. I have a solid understanding of full-stack web development using the MERN Stack, which includes MongoDB, Express.js, React.js, and Node.js. I have hands-on experience in building dynamic and responsive web applications, from back-end server setups to front-end user interfaces. I am passionate about coding and continuously learning new technologies to enhance my skills. My goal is to create efficient, scalable, and user-friendly applications that solve real-world problems And I Got Cs50 Course With <a href="ttps://certificates.cs50.io/f3fb964f-d41c-420c-add6-123a62074e14.pdf?size=letter" target='_blank'>certifcate</a>.</p>
      </div>

      <div className="my-skills">
        <div className="main-heading --seprator">
          <h1 className='heading'>Skills</h1>
        </div>
        <div className="skills-cards">
          <div className="column">
            <div className="card">
              <div className="card-heading">
                <div className="icon"><img src="https://mostfasyntax.com/storage/categories/GO5Z8lCzgy2stm59pi16ETKVcZDwoNBxdxk0Wri1.svg" alt="" /></div>
                <div className="title"><h1>Tools</h1></div>
              </div>
              <div className="card-skills">
                  <ul>
                    <li>Post Man</li>
                    <li>Vscode</li>
                    <li>Command Line</li>
                    <li>Sublime Text</li>
                  </ul>
              </div>
            </div>


            <div className="card">
              <div className="card-heading">
                <div className="icon"><img src="https://mostfasyntax.com/storage/categories/UmX2rgsQTiN7xFLBMGBfoxJx7X9CKGDElSwxrad2.svg" alt="" /></div>
                <div className="title"><h1>LANGUAGE</h1></div>
              </div>
              <div className="card-skills">
                  <ul>
                    <li>JavaScipt</li>
                  </ul>
              </div>
            </div>
          </div>



          <div className="column">
            <div className="card">
              <div className="card-heading">
                <div className="icon"><img src="https://mostfasyntax.com/storage/categories/GO5Z8lCzgy2stm59pi16ETKVcZDwoNBxdxk0Wri1.svg" alt="" /></div>
                <div className="title"><h1>Frameworks</h1></div>
              </div>
              <div className="card-skills">
                  <ul>
                    <li>React</li>
                    <li>Express</li>
                  </ul>
              </div>
            </div>
            
            <div className="card">
              <div className="card-heading">
                <div className="icon"><img src="https://mostfasyntax.com/storage/categories/GO5Z8lCzgy2stm59pi16ETKVcZDwoNBxdxk0Wri1.svg" alt="" /></div>
                <div className="title"><h1>DataBase</h1></div>
              </div>
              <div className="card-skills">
                  <ul>
                    <li>MongoDb</li>
                    <li>Mongoose</li>
                  </ul>
              </div>
            </div>
          </div>

          <div className="column">
          <div className="card">
              <div className="card-heading">
                <div className="icon"><img src="https://mostfasyntax.com/storage/categories/GO5Z8lCzgy2stm59pi16ETKVcZDwoNBxdxk0Wri1.svg" alt="" /></div>
                <div className="title"><h1>PACKAGE MANAGER</h1></div>
              </div>
              <div className="card-skills">
                  <ul>
                    <li>Npm</li>
                    <li>NodeJs</li>
                  </ul>
              </div>
            </div>

          <div className="card">
              <div className="card-heading">
                <div className="icon"><img src="https://mostfasyntax.com/storage/categories/GO5Z8lCzgy2stm59pi16ETKVcZDwoNBxdxk0Wri1.svg" alt="" /></div>
                <div className="title"><h1>Markup Styling Language</h1></div>
              </div>
              <div className="card-skills">
                  <ul>
                    <li>Html</li>
                    <li>Css</li>
                  </ul>
              </div>
            </div>
          </div>

          <div className="column">
          <div className="card">
              <div className="card-heading">
                <div className="icon"><img src="https://mostfasyntax.com/storage/categories/GO5Z8lCzgy2stm59pi16ETKVcZDwoNBxdxk0Wri1.svg" alt="" /></div>
                <div className="title"><h1>VERSION CONTROL</h1></div>
              </div>
              <div className="card-skills">
                  <ul>
                    <li>Git</li>
                    <li>GitHub</li>
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
                <img src="https://i.ibb.co/P5z4rPt/Chat-Application.png" alt="" />
              </div>
              <div className="card-txt">
                <div className="title">
                  <h1>Chat Application</h1>
                </div>
                <div className="card-description">
                  <p>(HTML,CSS,VanillaJs)</p>
                  <p>(NodeJs,Express,MongoDB)</p>
                  <div className="links">

                  <h3>
                  <a target='_blank' href="https://youtu.be/gAKsZvU4G-g?si=yPN4eXEhEYLnBD63">
                  <i class="fa-brands fa-youtube"></i>
                  </a>
                  </h3>
                  <h3>
                  </h3>
                  </div>
                </div>
              </div>
          </div>

        <div className="card project-card">
              <div className="card-img">
                <img src="https://i.ibb.co/sWmkY3p/Socail-Media-Application.png" alt="" />
              </div>
              <div className="card-txt">
                <div className="title">
                  <h1>Socail Media Applcation</h1>
                </div>
                <div className="card-description">
                  <p>(React,ReactRouter)</p>
                  <p>(NodeJs,Express,MongoDB,Mongoose)</p>
                  <div className="links">
                  <h3>
                  <a target='_blank' href="https://github.com/MostafaWaseemMahmoud/Socail-Media-Application-F-End">
                  <i class="fa-brands fa-github"></i>
                  </a>
                  <a target='_blank' href="https://socialmedia-application1.netlify.app/">
                    <i class="fa-solid fa-life-ring"></i>
                  </a>
                  </h3>
                  <h3>
                  </h3>
                  </div>
                </div>
              </div>
          </div>
        <div className="card project-card">
              <div className="card-img">
                <img src="https://i.ibb.co/F3Dk23B/covid-19.png" alt="" />
              </div>
              <div className="card-txt">
                <div className="title">
                  <h1>Kovid-19 Application</h1>
                </div>
                <div className="card-description">
                  <p>(React, Css, ReactIcons)</p>
                  <div className="links">

                  <h3>
                  <a target='_blank' href="https://github.com/MostafaWaseemMahmoud/Kovid-App">
                  <i class="fa-brands fa-github"></i>
                  </a>
                  </h3>
                  <h3>
                    <a target='_blank' href="https://kovid-app.netlify.app/">
                    <i class="fa-solid fa-life-ring"></i></a>
                  </h3>
                  </div>
                </div>
              </div>
        </div>


        <div className="card project-card">
              <div className="card-img">
                <img src="https://i.ibb.co/bLLHW9z/Email-Sender.png" alt="" />
              </div>
              <div className="card-txt">
                <div className="title">
                  <h1>Send Email Application</h1>
                </div>
                <div className="card-description">
                  <p>(React, EmailJs)</p>
                  <div className="links">
                  <h3>
                  <a target='_blank' href="https://github.com/MostafaWaseemMahmoud/Send-Email-With-React">
                  <i class="fa-brands fa-github"></i>
                  </a>
                  </h3>
                  <h3>
                    <a target='_blank' href="https://send-email-with-react.netlify.app/">
                    <i class="fa-solid fa-life-ring"></i></a>
                  </h3>
                  </div>
                </div>
              </div>
        </div>

        <div className="card project-card">
              <div className="card-img">
                <img src="https://i.ibb.co/DRLKC13/Mobilexx.png" alt="" />
              </div>
              <div className="card-txt">
                <div className="title">
                  <h1>Mobile Shop Application</h1>
                </div>
                <div className="card-description">
                  <p>(HtMl,Css,VanillaJs)</p>
                  <div className="links">
                  <h3>
                  <a target='_blank' href="https://mobilexx-v2.netlify.app/">
                    <i class="fa-solid fa-life-ring"></i>
                  </a>
                  </h3>
                  </div>
                </div>
              </div>
        </div>


        <div className="card project-card">
              <div className="card-img">
                <img src="https://i.ibb.co/h2sLxX2/Authrization-Application.png" alt="" />
              </div>
              <div className="card-txt">
                <div className="title">
                  <h1>Authrization Application</h1>
                </div>
                <div className="card-description">
                  <p>(ReactJs, Auth0)</p>
                  <div className="links">
                  <h3>
                  <a target='_blank' href="https://github.com/MostafaWaseemMahmoud/Authrization-With-React">
                  </a>
                  <i class="fa-brands fa-github"></i>
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