import { useAuth } from '../context/AuthContext';

const DashboardPage = () => {
  const { user, logout } = useAuth();
  
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Bienvenido {user?.name}</p>
      <button onClick={logout}>Cerrar sesión</button>
    </div>
  );
};

export default DashboardPage;