import { FaGithub, FaDiscord, FaLinkedin, /* FaPhone, FaEnvelope, */ FaFile } from 'react-icons/fa';
import home from '../../public/home.svg';

export const links = [
  {
    id: 1,
    url: '/',
    img: home,
  },
  {
    id: 2,
    url: '/about',
    text: 'about',
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
  },
  {
    id: 4,
    url: '/contact',
    text: 'contact',
  },
];

export const social = [
  {
    id: 1,
    url: 'https://www.github.com/tommo593',
    icon: <FaGithub />,
  },
  {
    id: 2,
    url: 'https://discord.gg/ZKynHuhVT4',
    icon: <FaDiscord />,
  },
  {
    id: 3,
    url: 'https://www.linkedin.com/in/tomohanlon/',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://tan-eileen-42.tiiny.site',
    icon: <FaFile />,
  },
];

// Keeping for future reference

/* export const contactInfo = [
  { id: 5, icon: <FaPhone />, url: '' },
  { id: 6, icon: <FaEnvelope />, url: 'tomdevwork@gmail.com' },
  { id: 7, icon: <FaFile />, url: 'https://tan-eileen-42.tiiny.site' },
]; */
