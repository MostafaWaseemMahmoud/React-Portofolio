import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header>
      <h1 className="name">Mostafa</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "link active" : "link"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" className={({ isActive }) => isActive ? "link active" : "link"}>
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => isActive ? "link active" : "link"}>
              Projects
            </NavLink>
          </li>
        </ul>
        <ul className="ul2">
          <li>
            <NavLink to="/certifications" className={({ isActive }) => isActive ? "link active" : "link"}>
              Certifications
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
