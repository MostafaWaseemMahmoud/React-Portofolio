import './home.css';
const Home = () => {
  return (
    <main>
        <div className="about">
            <h1>Hi Im Mostafa, a special human with some ability to love learning and Build Attractive Sites</h1>
        </div>
        <div className="info">
          <div className="info-content">
            <div className="personal-pic"></div>
            <div className="description">
              <h1>Info</h1>
              <p>Hi Iam Mostafa Waseem 14 Years Old Mern Full Stack Web Developer  I am Soo Interested For Learning The News .. And Learn The World That The Teenagers Between (14 - 18) Can Build Attractive And beautiful  And Fast Web Sites</p>
            </div>
          </div>
          <div className="get-touch">
            <h1>Get In Touch</h1>
            <div className='icons'>
              <a target='_blank' href="https://www.linkedin.com/in/mostafa-waseem-224aa6312/"><i  class="fa-brands fa-linkedin f-child"></i></a>
              <a target='_blank' href="https://github.com/MostafaWaseemMahmoud"><i class="fa-brands fa-github s-child"></i></a>
              <a target='_blank' href="mailto:mostafawaseem22@gmail.com"> <i class="fa-solid fa-envelope s-child"></i></a>
            </div>
          </div>
        </div>

        <div className="what-i-do">
          <div className="what-i-do-content">
            <h1 className="heading">What I Do</h1>
            <p>I am Building A <span className='s1'>Full Web Application</span> From The <span className="s2">Server Management (Backend)</span> To <span className='s2'>User Interface (frontend)</span> I Do All of This by the featured Stack <span className='s1'>Mern Stack</span> </p>
          </div>
          <div className='what-i-do-cards'>
            <div className="card">
              <div className="card-logo"><i class="fa-solid fa-palette"></i></div>
              <div className="card-title"><h2>Front End Development</h2></div>
              <div className="card-description"><p>I am Building Attractive And Coordinator User Interface And It Will Be Customized As You want</p></div>
            </div>
            <div className="card">
              <div className="card-logo"><i class="fa-solid fa-globe"></i></div>
              <div className="card-title"><h2>Back End Development</h2></div>
              <div className="card-description">
               <p>I Will Make An Fast And Adjustable Server Side It Data Will Be Secured</p>
              </div>
            </div>
          </div>
        </div>

        <div className="featured-project">
          <h1 className="heading">Featured Projects</h1>
          <div className="featured-project-cards">
            <div className="card">
              <div className="project-img">
                <button className="b1"><a target="_blank" href="https://filmtech.netlify.app/"><i class="fa-solid fa-eye btn-i"></i></a></button>
                <button className="b2"><a target="_blank" href="https://github.com/MostafaWaseemMahmoud/FilmTech-FrontEnd"><i class="fa-brands fa-github s-child"></i></a></button>
                <button className="b3"><a target="_blank" href="https://github.com/MostafaWaseemMahmoud/FilmTech-Backend"><i class="fa-brands fa-github s-child"></i></a></button>
                <img src="/Untitled.png" alt="HiHIHI"/>
                </div>
              <div className="project-description">
                <h1>Film Tech</h1>
                <p>Film Tech Is A Community Of A People Who Loves Series And Films It Lets You give your Opinion Of A Series, Film or Actor</p>
                <div className="user-technical-icons">
                  <h3>(ReactJs,Css,NodeJs)</h3>
                  <h3>(Express,MongoDb,Multer,Cloudinary)</h3>
                </div>
              </div>
          </div>
                      <div className="card">
              <div className="project-img">

                <button className="b1"><a target="_blank" href="https://lumeo-e-commerce.vercel.app/"><i class="fa-solid fa-eye btn-i"></i></a></button>
                <button className="b2"><a target="_blank" href="https://github.com/MostafaWaseemMahmoud/E-Commerce-App"><i class="fa-brands fa-github s-child"></i></a></button>
                <button className="b3"><a target="_blank" href="https://github.com/MostafaWaseemMahmoud/E-commerce-backend"><i class="fa-brands fa-github s-child"></i></a></button>
                <img src="/lumeo scren.png" alt="HiHIHI"/>
                </div>
              <div className="project-description">
                <h1>Lumeo E-commerce Site</h1>
                <p>Lumeo Is A Web Site Application Which Is Simulates Real Online Shops And Using 3D Designs To Show Products</p>
                <h3>(ReactJs,Css,NodeJs,ThreeJs,ReactSliders,PaymentStripe)</h3>
                <h3>(MongoDb,Multer,Cloudinary,ExpressJs)</h3>
              </div>
            </div>
        </div>
        </div>
    </main>
  );
};

export default Home;