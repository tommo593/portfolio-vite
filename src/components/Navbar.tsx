import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from '../assets/constants';
import cb_nav from '/cb_nav.png';

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
            <a href={link.url}>{link.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Navbar = () => {
  const [showLinks, setShowLinks] = useState<boolean>(false);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <a href="/">
            <img src={cb_nav} className="logo" alt="logo" title="Coding Bruv" />
          </a>
          <button className="nav-toggle" onClick={() => setShowLinks(!showLinks)}>
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
