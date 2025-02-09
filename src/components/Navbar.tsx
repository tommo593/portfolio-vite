import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { social } from '../assets/constants';
import tab_icon from '/tab_icon.svg';

const SocialIcons = () => {
  return (
    <ul className="social-icons">
      {social.map((socialIcon) => (
        <li key={socialIcon.id}>
          <a href={socialIcon.url}>{socialIcon.icon}</a>
        </li>
      ))}
    </ul>
  );
};

const NavLinks = ({ showLinks }: { showLinks: boolean }) => {
  return (
    <div className="links-container flex flex-row gap-2" style={{ height: showLinks ? 180 : 0 }}>
      <Link to="/">
        <img src="home.svg" alt="Home" className="max-h-6 hover:scale-125" />
      </Link>
      <Link to="/about">
        <img src="about.svg" alt="About" className="max-h-6 hover:scale-125" />
      </Link>
      <Link to="/projects">
        <img src="projects.svg" alt="Projects" className="max-h-6 hover:scale-125" />
      </Link>
      <Link to="/contact">
        <img src="contact.svg" alt="Contact" className="max-h-6 hover:scale-125" />
      </Link>
    </div>
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
            <img src={tab_icon} className="logo" alt="Tom O'Hanlon Logo" title="Tom O'Hanlon" />
          </a>
          <button className={`nav-toggle ${isRotated ? 'rotated' : ''}`} onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <NavLinks showLinks={showLinks} />
        <SocialIcons />
      </div>
    </nav>
  );
};

export default Navbar;
