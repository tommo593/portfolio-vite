import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import ReactGA from 'react-ga4';
import App from './App.tsx';
import './index.css';
import AboutMe from './pages/AboutMe.tsx';
import MyWork from './pages/MyWork.tsx';
import ContactMe from './pages/ContactMe.tsx';
import NotFound from './pages/NotFound.tsx';

ReactGA.initialize('G-BB19JP0LHQ');

ReactGA.send({ hitType: 'pageview', page: window.location.pathname });

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: '/about',
    element: <AboutMe />,
  },
  {
    path: '/projects',
    element: <MyWork />,
  },
  {
    path: '/contact',
    element: <ContactMe />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Analytics />
  </React.StrictMode>
);
