import './certifications.css';

const Certifications = () => {
  return (
    <main className="certifications">
      <div className="cert-intro">
        <h1>My Certification Journey</h1>
        <p>
          Every achievement is a step forward in my story as a developer. Here's how my learning path has grown through official certifications.
        </p>
      </div>

      <div className="cert-timeline">

        {/* CS50 Certificate */}
        <div className="cert-card left">
          <div className="cert-content">
            <h2>CS50x – Harvard University</h2>
            <p>This was the start of everything. I built strong foundations in Computer Science and problem-solving by completing the world-famous CS50 course.</p>
            <a href="https://certificates.cs50.io/f3fb964f-d41c-420c-add6-123a62074e14.pdf?size=letter" target="_blank">View Certificate</a>
          </div>
        </div>

        {/* SimpliLearn MERN Stack Certificate */}
        <div className="cert-card right">
          <div className="cert-content">
            <h2>Introduction To MERN Stack Developer – SimpliLearn</h2>
            <p>I Listened About A Super Fast Stack Named "Mern Stack" I Searched A Free Mern Stack Course With It certificate And I Found Simple I Learn But I Finished The Course I Studied Alot To Be Versed Of The Stack</p>
            <a href="https://certificates.simplicdn.net/share/8069155_84241931742474534938.pdf" target="_blank">View Certificate</a>
          </div>
        </div>

      </div>
    </main>
  );
};

export default Certifications;
