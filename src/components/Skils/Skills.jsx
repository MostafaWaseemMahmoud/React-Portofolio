import './skills.css';

const Skills = () => {
  return (
    <main>
      <div className="skills-intro">
        <h1>My Skills</h1>
        <p>I Have The Power To Build Full Web Applications From Scratch Using These Technologies</p>
      </div>

      {/* Frontend */}
      <h2 className="category-title">Front-End</h2>
      <div className="skills-section">
        {[
          { name: "HTML 5", type: "Markup Language" },
          { name: "CSS", type: "Styling Language" },
          { name: "SCSS", type: "Styling Preprocessor" },
          { name: "Tailwind CSS", type: "CSS Framework" },
          { name: "Bootstrap", type: "CSS Framework" },
          { name: "Next.js", type: "React Framework" },
          { name: "React", type: "JavaScript Library" },
          { name: "Mongoose", type: "ODM Library" },
        ].map((skill) => (
          <div className="skill-card" key={skill.name}>
            <div className="skill-icon"><i className="fa-solid fa-code"></i></div>
            <div className="skill-info">
              <h2>{skill.name}</h2>
              <p>{skill.type}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Backend */}
      <h2 className="category-title">Back-End</h2>
      <div className="skills-section">
        {[
          { name: "Express", type: "Backend Framework" },
          { name: "Node.js", type: "Backend Runtime" },
          { name: "MongoDB", type: "Database Tool" },
          { name: "SQL", type: "Database Tool" },
        ].map((skill) => (
          <div className="skill-card" key={skill.name}>
            <div className="skill-icon"><i className="fa-solid fa-server"></i></div>
            <div className="skill-info">
              <h2>{skill.name}</h2>
              <p>{skill.type}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Programming Concepts */}
      <h2 className="category-title">Programming Concepts</h2>
      <div className="skills-section">
        {[
          { name: "OOP", type: "Object Oriented Programming" },
          { name: "Data Structures", type: "Algorithmic Concept" },
          { name: "Design Patterns", type: "Software Design Techniques" },
          { name: "SOLID Principles", type: "Clean Code Principles" },
        ].map((concept) => (
          <div className="skill-card" key={concept.name}>
            <div className="skill-icon"><i className="fa-solid fa-brain"></i></div>
            <div className="skill-info">
              <h2>{concept.name}</h2>
              <p>{concept.type}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Programming Languages */}
      <h2 className="category-title">Programming Languages</h2>
      <div className="skills-section">
        {[
          { name: "JavaScript", type: "Scripting Language" },
          { name: "TypeScript", type: "Typed Superset of JS" },
          { name: "Python", type: "General Purpose Language" },
        ].map((lang) => (
          <div className="skill-card" key={lang.name}>
            <div className="skill-icon"><i className="fa-solid fa-code-branch"></i></div>
            <div className="skill-info">
              <h2>{lang.name}</h2>
              <p>{lang.type}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tools */}
      <h2 className="category-title">Tools</h2>
      <div className="skills-section">
        {[
          { name: "Git", type: "Version Control" },
          { name: "GitHub", type: "Code Hosting" },
          { name: "VS Code", type: "Code Editor" },
          { name: "Postman", type: "API Testing Tool" },
          { name: "Figma", type: "Design Tool" },
          { name: "Command Line", type: "Terminal Interface" },
          { name: "Sublime Text", type: "Text Editor" },
          { name: "Docker", type: "Container Tool" },
          { name: "Firebase", type: "Cloud Backend" },
        ].map((tool) => (
          <div className="skill-card" key={tool.name}>
            <div className="skill-icon"><i className="fa-solid fa-wrench"></i></div>
            <div className="skill-info">
              <h2>{tool.name}</h2>
              <p>{tool.type}</p>
            </div>
          </div>
        ))}
      </div>

      {/* DevOps */}
      <h2 className="category-title">DevOps</h2>
      <div className="skills-section">
        <div className="skill-card">
          <div className="skill-icon"><i className="fa-solid fa-gears"></i></div>
          <div className="skill-info">
            <h2>Jenkins</h2>
            <p>CI/CD Tool</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Skills;
