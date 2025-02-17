import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FaHamburger } from 'react-icons/fa';
import { social } from '../assets/constants';
import tab_icon from '/tab_icon.svg';

const SocialIcons = () => {
  return (
    <ul className="social-icons">
      {social.map((socialIcon) => (
        <li key={socialIcon.id}>
          <a href={socialIcon.url} className="duration-300 hover:opacity-80">
            {socialIcon.icon}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [showLinks, setShowLinks] = useState<boolean>(false);
  const [isRotated, setIsRotated] = useState<boolean>(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
    setIsRotated(!isRotated);
  };

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <a href="/">
            <img
              src={tab_icon}
              className="logo duration-300 hover:opacity-80"
              alt="Tom O'Hanlon Logo"
              title="Tom O'Hanlon"
            />
          </a>
          <button className={`nav-toggle ${isRotated ? 'rotated' : ''} cursor-pointer md:hidden`} onClick={toggleLinks}>
            <FaHamburger />
          </button>
        </div>
        <div className="flex flex-row gap-2 pb-4 pt-4">
          <Link to="/">
            <img src="home.svg" alt="Home" className="max-h-6 hover:scale-125" />
          </Link>
          <NavLink to="/about">
            <img src="about.svg" alt="About" className="max-h-6 hover:scale-125" />
          </NavLink>
          <NavLink to="/projects">
            <img src="projects.svg" alt="Projects" className="max-h-6 hover:scale-125" />
          </NavLink>
          <NavLink to="/contact">
            <img src="contact.svg" alt="Contact" className="max-h-6 hover:scale-125" />
          </NavLink>
        </div>
        <SocialIcons />
      </div>
    </nav>
  );
};

export default Navbar;
