import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = () => {
  const { user } = useAuth(); // Obtiene el estado de autenticación

  // Si el usuario está autenticado, renderiza la ruta. Si no, redirige a /login.
  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;