import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import AboutMe from './pages/AboutMe.tsx';
import MyWork from './pages/MyWork.tsx';
import ContactMe from './pages/ContactMe.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
  </React.StrictMode>
);
