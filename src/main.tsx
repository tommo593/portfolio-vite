import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from '../router';
import { Analytics } from '@vercel/analytics/react';
import ReactGA from 'react-ga4';
import './index.css';

ReactGA.initialize('G-BB19JP0LHQ');
ReactGA.send({ hitType: 'pageview', page: window.location.pathname });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Analytics />
  </React.StrictMode>
);
