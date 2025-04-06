// 1. Importa la función para crear el enrutador de React Router
import { createBrowserRouter } from 'react-router-dom';

// 2. Importa componentes de páginas
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';
import NotFoundPage from '../pages/NotFoundPage';

// 3. Importa el componente para rutas privadas (protección de acceso)
import PrivateRoute from './PrivateRoute';

// 4. Crea el enrutador con las rutas definidas
const router = createBrowserRouter([
  {
    path: '/', // Ruta raíz
    element: <HomePage />, // Componente a renderizar
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/dashboard',
    element: (
      // Ruta protegida: Solo accesible si el usuario está autenticado
      <PrivateRoute>
        <DashboardPage />
      </PrivateRoute>
    ),
  },
  {
    path: '*', // Cualquier ruta no definida
    element: <NotFoundPage />, // Página 404
  },
]);

// 5. Exporta el enrutador para usarlo en App.jsx
export default router;