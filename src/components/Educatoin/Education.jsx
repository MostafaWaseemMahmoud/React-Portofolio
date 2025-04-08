import React from 'react';
import './education.css';

export default function Education() {
  return (
    <section className="education-section">
      <h1 className="education-title">Education</h1>
      <div className="education-cards">
        <div className="education-card">
          <div className="card-header">
            <h2 className="degree">Cs50x Course</h2>
            <p className="school">Harvard University</p>
          </div>
          <div className="card-footer">
            <p className="duration"><a href="https://certificates.cs50.io/f3fb964f-d41c-420c-add6-123a62074e14.pdf?size=letter">certificate</a></p>
          </div>
        </div>
        <div className="education-card">
          <div className="card-header">
            <h2 className="degree">Introduction To Mern Stack </h2>
            <p className="school">Simpleilearn</p>
          </div>
          <div className="card-footer">
            <p className="duration"><a href="https://certificates.simplicdn.net/share/8069155_84241931742474534938.pdf">certificate</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}
