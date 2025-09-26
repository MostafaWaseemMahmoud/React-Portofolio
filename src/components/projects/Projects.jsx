import './project.css';
const Projects = ()=> {
  return (
        <div className="projects">
        <div className="project-heading --seprator">
          <h1 className="heading">Projects</h1>
        </div>
        <div className="projects-cards">
        <div className="card project-card">
              <div className="card-img">
                <img src="https://i.ibb.co/Df1FWvZC/pic.png" alt="" />
              </div>
              <div className="card-txt">
                <div className="title">
                  <h1>E-commerce Application</h1>
                </div>
                <div className="card-description">
                  <p>(ReactJs, PaymentStripe, threeJs)</p>
                  <p>(NodeJs, MongoDB)</p>
                  <div className="links">
                  <h3>
                  <a target='_blank' href="https://github.com/MostafaWaseemMahmoud/E-Commerce-App">
                  <i className="fa-brands fa-github"></i>
                  </a>
                  <a target='_blank' href="https://github.com/MostafaWaseemMahmoud/E-commerce-backend">
                  <i className="fa-brands fa-github"></i>
                  </a>
                  <a target='_blank' href="https://lumeo-e-commerce.vercel.app/">
                    <i className="fa-solid fa-life-ring"></i>
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
                <img src="https://i.ibb.co/k1MzF6N/Prescripto-Application.png" alt="" />
              </div>
              <div className="card-txt">
                <div className="title">
                  <h1>Prescripto Application</h1>
                </div>
                <div className="card-description">
                  <p>(ReactJs)</p>
                  <p>(NodeJs,Express,MongoDB,Multer,CloudInary)</p>
                  <div className="links">
                  <h3>
                  <a target='_blank' href="https://github.com/MostafaWaseemMahmoud/Prescripto">
                  <i class="fa-brands fa-github"></i>
                  </a>
                  <a target='_blank' href="https://prescripto-a.netlify.app">
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
                  <a target='_blank' href="https://socailmedia-application.netlify.app/">
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
                  <h1>Covid-19 Application</h1>
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
                    <a target='_blank' href="https://kovid19-app.netlify.app/">
                    <i class="fa-solid fa-life-ring"></i></a>
                  </h3>
                  </div>
                </div>
              </div>
        </div>
        </div>
      </div>
    )
}

export default Projects