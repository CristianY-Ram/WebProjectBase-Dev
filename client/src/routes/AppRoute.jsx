import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import DashboardPage from '../pages/DashboardPage';
import NotFoundPage from '../pages/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import MainLayout from '../layouts/MainLayout';

const AppRoute = () => {
  const router = createBrowserRouter([
    {
      element:  <MainLayout />,
      children:[
        { path: '/',  element: <LandingPage />  },
        { path: '/dashboard', element: <PrivateRoute element={<DashboardPage />} />  },
      ],
    },
    { path: '*', element: <NotFoundPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoute;