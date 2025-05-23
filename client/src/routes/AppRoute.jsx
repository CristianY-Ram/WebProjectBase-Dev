import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import DashboardPage from '../pages/DashboardPage';
import NotFoundPage from '../pages/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import MainLayout from '../layouts/MainLayout/MainLayout';

const AppRoute = () => {
  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        { 
          path: '/',  
          element: <LandingPage />,
          handle: { title: 'Mi Sitio Web' } // Metadata para el layout
        },
        { 
          path: '/dashboard',
          element: <PrivateRoute element={<DashboardPage />} />,
          handle: { title: 'Bienvenido' }
        },
      ],
    },
    { 
      path: '*', 
      element: <NotFoundPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoute;