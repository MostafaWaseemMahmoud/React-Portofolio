import React from 'react';
import './main.css'
const Main = () => {
  return (
    <div className='main'>
      <div className="main-heading --seprator">
        <h1 className='heading'>Home</h1>
      </div>

      <div className="main-description">
        <p>Hello, my name is Mostafa Waseem Mahmoud, and I am a 13-year-old MERN Stack web developer. Despite my young age, I have a solid understanding of full-stack web development using the MERN Stack, which includes MongoDB, Express.js, React.js, and Node.js. I have hands-on experience in building dynamic and responsive web applications, from back-end server setups to front-end user interfaces. I am passionate about coding and continuously learning new technologies to enhance my skills. My goal is to create efficient, scalable, and user-friendly applications that solve real-world problems And I Got Cs50 Course With <a href="ttps://certificates.cs50.io/f3fb964f-d41c-420c-add6-123a62074e14.pdf?size=letter" target='_blank'>certifcate</a>.</p>
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
                <div className="title"><h1>Languages</h1></div>
              </div>
              <div className="card-skills">
                  <ul>
                    <li>Html/Css</li>
                    <li>Scss</li>
                    <li>VanillaJs</li>
                  </ul>
              </div>
            </div>
          </div>



          <div className="column">
            <div className="card">
              <div className="card-heading">
                <div className="icon"><img src="https://mostfasyntax.com/storage/categories/GO5Z8lCzgy2stm59pi16ETKVcZDwoNBxdxk0Wri1.svg" alt="" /></div>
                <div className="title"><h1>Libraries</h1></div>
              </div>
              <div className="card-skills">
                  <ul>
                    <li>React</li>
                    <li>NodeJs</li>
                    <li>Express</li>
                    <li>BootStrap</li>
                    <li>Multer</li>
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
        </div>
      </div>

      <div className="projects">
        <div className="project-heading --seprator">
          <h1 className="heading">Projects</h1>
        </div>
        <div className="projects-cards">
        <div className="card project-card">
              <div className="card-img">
                <img src="/Chat Application.png" alt="" />
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
                <img src="/covid-19.png" alt="" />
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
                <img src="/EmailSender.png" alt="" />
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
                <img src="/Mobilexx.png" alt="" />
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
                <img src="/Authrization Application.png" alt="" />
              </div>
              <div className="card-txt">
                <div className="title">
                  <h1>Authrization Application</h1>
                </div>
                <div className="card-description">
                  <p>(ReactJs, Auth0, Vite)</p>
                  <div className="links">
                  <h3>
                  <a target='_blank' href="https://github.com/MostafaWaseemMahmoud/Authrization-With-React">
                  <i class="fa-brands fa-github"></i>
                  </a>
                  </h3>
                  </div>
                </div>
              </div>
        </div>

        <div className="card project-card">
              <div className="card-img">
                <img src="/TomatoApi.png" alt="" />
              </div>
              <div className="card-txt">
                <div className="title">
                  <h1>Tomato BackEnd Application</h1>
                </div>
                <div className="card-description">
                  <p>(NodeJs,Express,MongoDb)</p>
                  <div className="links">
                  <h3>
                  <a target='_blank' href="https://github.com/MostafaWaseemMahmoud/Tomato-Api">
                  <i class="fa-brands fa-github"></i>
                  </a>
                  </h3>
                  </div>
                </div>
              </div>
        </div>

        <div className="card project-card">
              <div className="card-img">
                <img src="/FaceBook.png" alt="" />
              </div>
              <div className="card-txt">
                <div className="title">
                  <h1>FaceBook Full Small Application</h1>
                </div>
                <div className="card-description">
                  <p>(ReactJs)</p>
                  <p>(NodeJs,Express,MongoDb)</p>
                  <div className="links">
                  <h3>
                  <a target='_blank' href="https://github.com/MostafaWaseemMahmoud/FaceBook-React">
                  <i class="fa-brands fa-github"></i>
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