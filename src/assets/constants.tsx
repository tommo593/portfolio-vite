import { FaGithub, FaDiscord, FaLinkedin, FaPhone, FaEnvelope, FaFile } from 'react-icons/fa';

export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
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
  {
    id: 5,
    url: '/profile',
    text: 'profile',
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
];

export const contactInfo = [
  { id: 5, icon: <FaPhone />, url: '' },
  { id: 6, icon: <FaEnvelope />, url: 'tomdevwork@gmail.com' },
  { id: 7, icon: <FaFile />, url: 'https://tan-eileen-42.tiiny.site' },
];
