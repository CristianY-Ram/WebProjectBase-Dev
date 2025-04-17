import { useAuth } from '../context/AuthContext';

export const Home = () => {
  const { user } = useAuth();
  return (
    <div>
      <h1>Bienvenido {user?.name}</h1>
      <p>Esta es la página de inicio</p>
    </div>
  );
};