import { Link } from 'react-router-dom';
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

const NavLinks = () => {
  return (
    <>
      <Link to="/">
        {' '}
        <img src="home.svg" alt="Home" className="max-h-6 hover:scale-125" />
      </Link>
      <Link to="/about">
        {' '}
        <img src="about.svg" alt="About" className="max-h-6 hover:scale-125" />
      </Link>
      <Link to="/projects">
        {' '}
        <img src="projects.svg" alt="Projects" className="max-h-6 hover:scale-125" />
      </Link>
      <Link to="/contact">
        {' '}
        <img src="contact.svg" alt="Contact" className="max-h-6 hover:scale-125" />
      </Link>
    </>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
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
          <button className="cursor-pointer md:hidden" onClick={toggleNavbar}>
            <FaHamburger
              className={`fill-mustard-yellow transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
            />
          </button>
        </div>
        <div
          className={`mx-4 flex-col items-end gap-4 pt-4 md:flex md:flex-row md:items-center ${isOpen ? 'flex' : 'hidden'}`}
        >
          <NavLinks />
        </div>
        <SocialIcons />
      </div>
    </nav>
  );
};

export default Navbar;
