import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const { user, logout } = useAuth();
  
  return (
    <nav>
      <Link to="/">Inicio</Link>
      {user ? (
        <>
          <Link to="/dashboard">Dashboard</Link>
          <button onClick={logout}>Cerrar sesión</button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
};