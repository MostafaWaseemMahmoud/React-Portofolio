import React, {useEffect} from 'react'
import './skills.css'
const Skills = () => {
const MySkills = [
  { name: "HTML 5", Exp: "100%", type: "FrontEnd" },
  { name: "Css", Exp: "99%", type: "FrontEnd" },
  { name: "Scss", Exp: "60%", type: "FrontEnd" },
  { name: "Tailiwand Css", Exp: "100%", type: "FrontEnd" },
  { name: "BootStrap", Exp: "66%", type: "FrontEnd" },
  { name: "React", Exp: "100%", type: "Library" },
  { name: "next", Exp: "90%", type: "FrontEnd" },
  { name: "Express", Exp: "100%", type: "BackEnd" },
  { name: "NodeJs", Exp: "100%", type: "BackEnd" },
  { name: "MongoDb", Exp: "100%", type: "BackEnd" },
  { name: "Mongoose", Exp: "100%", type: "Library" },
  { name: "Desgin Patterns", Exp: "90%", type: "BackEnd" },
  { name: "Solid Prenciples", Exp: "100%", type: "BackEnd" },
  { name: "Data Structure", Exp: "70%", type: "BackEnd" },
  { name: "OOP", Exp: "100%", type: "BackEnd" },
  { name: "JavaScript", Exp: "100%", type: "Programming Language" },
  { name: "TypeScript", Exp: "90%", type: "Programming Language" },
  { name: "Python", Exp: "100%", type: "Programming Language" },
  { name: "Git", Exp: "100%", type: "Tool" },
  { name: "GitHub", Exp: "95%", type: "Tool" },
  { name: "VS Code", Exp: "100%", type: "Tool" },
  { name: "Postman", Exp: "100%", type: "Tool" },
  { name: "Figma", Exp: "85%", type: "Tool" },
  { name: "Command Line", Exp: "100%", type: "Tool" },
  { name: "Sublime Text", Exp: "100%", type: "Tool" },
  { name: "Docker", Exp: "20%", type: "Tool" },
  { name: "Firebase", Exp: "60%", type: "Tool" },
  { name: "Jenkins", Exp: "40%", type: "DevOps" }
];

const groupedSkills = MySkills.reduce((acc, skill) => {
  acc[skill.type] = acc[skill.type] || [];
  acc[skill.type].push(skill);
  return acc;
}, {}); return (
  <div className="skills">
  <h1 className="a-heading">My Skills</h1> 
    <div className="skills-container">
      {Object.entries(groupedSkills).map(([type, skills]) => (
        <div className="skill-group" key={type}>
          <h2 className="group-title">{type}</h2>
          <ul className="skill-list">
            {skills.map((skill, index) => (
              <li key={index} className="skill-item">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-exp">{skill.Exp}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
  );
}

export default Skills