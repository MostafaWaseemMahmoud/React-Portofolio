import './projects.css';

const Projects = () => {
  return (
      <div className="projects">

      <div className="projects-intro">
        <h1 className="heading">My Projects</h1>
        <p className="sub-heading">
          Welcome to my projects gallery. These are real-world full-stack applications I developed using the MERN stack and other modern technologies. Each project represents a challenge I solved and a feature I built with care and creativity.
        </p>
      </div>

      <div className="featured-project-cards">

        {/* Project 1 */}
        <div className="card">
          <div className="project-img">
            <button className="b1">
              <a target="_blank" href="https://filmtech.netlify.app/">
                <i className="fa-solid fa-eye btn-i"></i>
              </a>
            </button>
            <button className="b2">
              <a target="_blank" href="https://github.com/MostafaWaseemMahmoud/FilmTech-FrontEnd">
                <i className="fa-brands fa-github s-child"></i>
              </a>
            </button>
            <button className="b3">
              <a target="_blank" href="https://github.com/MostafaWaseemMahmoud/FilmTech-Backend">
                <i className="fa-brands fa-github s-child"></i>
              </a>
            </button>
            <img src="/Untitled.png" alt="Film Tech Project Screenshot" />
          </div>
          <div className="project-description">
            <h1>Film Tech</h1>
            <p>
             Film Tech Is A Community Of A People Who Loves Series And Films It Lets You give your Opinion Of A Series, Film or Actors
            </p>
            <div className="user-technical-icons">
                                <h3>(ReactJs,Css,NodeJs)</h3>
                  <h3>(Express,MongoDb,Multer,Cloudinary)</h3>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="card">
          <div className="project-img">
            <button className="b1">
              <a target="_blank" href="https://lumeo-e-commerce.vercel.app/">
                <i className="fa-solid fa-eye btn-i"></i>
              </a>
            </button>
            <button className="b2">
              <a target="_blank" href="https://github.com/MostafaWaseemMahmoud/E-Commerce-App">
                <i className="fa-brands fa-github s-child"></i>
              </a>
            </button>
            <button className="b3">
              <a target="_blank" href="https://github.com/MostafaWaseemMahmoud/E-commerce-backend">
                <i className="fa-brands fa-github s-child"></i>
              </a>
            </button>
            <img src="/lumeo scren.png" alt="Lumeo Project Screenshot" />
          </div>
          <div className="project-description">
            <h1>Lumeo E-commerce</h1>
            <p>
              Lumeo Is A Web Site Application Which Is Simulates Real Online Shops And Using 3D Designs To Show Products
            </p>
            <div className="user-technical-icons">
                <h3>(ReactJs,Css,NodeJs,ThreeJs,ReactSliders,PaymentStripe)</h3>
                <h3>(MongoDb,Multer,Cloudinary,ExpressJs)</h3>
            </div>
          </div>
        </div>



        <div className="card">
          <div className="project-img">
            <button className="b1">
              <a target="_blank" href="https://prescripto-a.netlify.app/">
                <i className="fa-solid fa-eye btn-i"></i>
              </a>
            </button>
            <button className="b2">
              <a target="_blank" href="https://github.com/MostafaWaseemMahmoud/Socail-Media-Application-F-End">
                <i className="fa-brands fa-github s-child"></i>
              </a>
            </button>
            <img src="/SocailMediaApp-img.png" alt="Social Media Project Screenshot" />
          </div>
          <div className="project-description">
            <h1>Social Media App</h1>
            <p>
             Social Media Application: Helps You To Communicate With Others And Meet Them Online By Camera And Mic Tools
            </p>
            <div className="user-technical-icons">
              <h3>(React,ReactRouter)</h3>
              <h3>(NodeJs,Express,MongoDB,Mongoose)</h3>
            </div>
          </div>
        </div>


        <div className="card">
          <div className="project-img">
            <button className="b1">
              <a target="_blank" href="https://prescripto-a.netlify.app/">
                <i className="fa-solid fa-eye btn-i"></i>
              </a>
            </button>
            <button className="b2">
              <a target="_blank" href="https://github.com/MostafaWaseemMahmoud/E-Commerce-App">
                <i className="fa-brands fa-github s-child"></i>
              </a>
            </button>
            <img src="/prescripto-img.png" alt="prescripto Project Screenshot" />
          </div>
          <div className="project-description">
            <h1>Prescripto | HealthCare Web App</h1>
            <p>
             Prescripto Is Web Site That Simulates the real healthCare Site ith Public Admin DashBoard
            </p>
            <div className="user-technical-icons">
              <h3>(ReactJs,css,Nodejs)</h3>
              <h3>(NodeJs,Express,MongoDB,Multer,CloudInary,Nodemailer)</h3>
            </div>
          </div>
        </div>


        <div className="card">
          <div className="project-img">
            <button className="b1">
              <a target="_blank" href="https://kovid19-app.netlify.app/">
                <i className="fa-solid fa-eye btn-i"></i>
              </a>
            </button>
            <button className="b2">
              <a target="_blank" href="https://github.com/MostafaWaseemMahmoud/Kovid-App">
                <i className="fa-brands fa-github s-child"></i>
              </a>
            </button>
            <img src="/covid-19-img.png" alt="Social Media Project Screenshot" />
          </div>
          <div className="project-description">
            <h1>Covid-19 App</h1>
            <p>
             Covid-19 App Is A Application To Provide People Information of how to protect them selfs for Covid 19 And Know What It's bad Effects
            </p>
            <div className="user-technical-icons">
              <h3>(React, Css, ReactIcons)</h3>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Projects;
