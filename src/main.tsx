import React from 'react';
import ReactDOM from 'react-dom/client';
/*
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutMe from '../src/pages/AboutMe.tsx';
import ContactMe from '../src/pages/ContactMe.tsx';
import MyWork from '../src/pages/MyWork.tsx';
*/
import App from './App.tsx';
import './index.css';

/* const router = createBrowserRouter([
  {
    path: 'AboutMe',
    element: <AboutMe />,
  },
  {
    path: 'ContactMe',
    element: <ContactMe />,
  },
  {
    path: 'MyWork',
    element: <MyWork />,
  },
]); */

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </React.StrictMode>
);
