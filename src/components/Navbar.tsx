import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from '../assets/constants';
import logo_cropped from '/logo_cropped.png';

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
          <img src={logo_cropped} className="logo" alt="logo" title="Unga Bunga Dev" />
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
