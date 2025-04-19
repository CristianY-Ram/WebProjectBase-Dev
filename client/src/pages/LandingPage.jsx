import { useAuth } from '../context/AuthContext';

const LandingPage = () => {
  const { login } = useAuth();
  
  const handleLogin = () => {
    login({ name: "Usuario Demo", email: "demo@test.com" });
  };
  
  return (
    <div>
      <h2>Página de Inicio</h2>
      <button onClick={handleLogin}>Iniciar sesión demo</button>
    </div>
  );
};