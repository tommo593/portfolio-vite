import { createBrowserRouter } from 'react-router-dom';
import App from './src/App';
import AboutMe from './src/routes/AboutMe';
import MyWork from './src/routes/MyWork';
import ContactMe from './src/routes/ContactMe';
import NotFound from './src/routes/NotFound';

export const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/about', element: <AboutMe /> },
  { path: '/projects', element: <MyWork /> },
  { path: '/contact', element: <ContactMe /> },
  { path: '/notfound', element: <NotFound /> },
]);
