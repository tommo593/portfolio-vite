import {
  FaGithub,
  FaDiscord,
  FaLinkedin,
  FaCamera,
  FaPhone,
  FaEnvelope,
  FaFile,
} from "react-icons/fa";

export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
  },
  {
    id: 2,
    url: "/about",
    text: "about",
  },
  {
    id: 3,
    url: "/projects",
    text: "projects",
  },
  {
    id: 4,
    url: "/contact",
    text: "contact",
  },
  {
    id: 5,
    url: "/profile",
    text: "profile",
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.github.com/tommo593",
    icon: <FaGithub />,
  },
  {
    id: 2,
    url: "https://discord.gg/ZKynHuhVT4",
    icon: <FaDiscord />,
  },
  {
    id: 3,
    url: "https://www.linkedin.com/tomohanlon",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://tommo593.github.io/portfolio",
    icon: <FaCamera />,
  },
  { id: 5, icon: <FaPhone /> },
  { id: 6, icon: <FaEnvelope /> },
  {
    id: 7,
    icon: <FaFile />,
  },
];
