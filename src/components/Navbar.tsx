import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from '../assets/constants';
import handwritten_logo from '/handwritten_logo.svg';

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
    <div className="links-container" style={{ height: showLinks ? 180 : 0 }}>
      <ul className="links">
        {links.map((link) => (
          <li key={link.id}>
            <a href={link.url}>{link.img}</a>
          </li>
        ))}
      </ul>
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
            <img src={handwritten_logo} className="logo" alt="Tom O'Hanlon Logo" title="Tom O'Hanlon" />
          </a>
          <button className={`nav-toggle ${isRotated ? 'rotated' : ''}`} onClick={toggleLinks}>
            {' '}
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
