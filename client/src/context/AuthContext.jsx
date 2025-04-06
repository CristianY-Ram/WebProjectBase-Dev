// 1. Importa funciones de React para crear contextos y hooks
import { createContext, useContext, useState, useEffect } from 'react';

// 2. Crea el contexto de autenticación
const AuthContext = createContext();

// 3. Proveedor del contexto (envuelve toda la app)
export const AuthProvider = ({ children }) => {
  // 4. Estado para almacenar los datos del usuario
  const [user, setUser] = useState(null);

  // 5. Efecto para cargar el usuario desde localStorage al inicio
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // 6. Función para iniciar sesión
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData)); // Persiste en localStorage
  };

  // 7. Función para cerrar sesión
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user'); // Elimina del localStorage
  };

  // 8. Provee el contexto a los componentes hijos
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// 9. Hook personalizado para acceder fácilmente al contexto
export const useAuth = () => {
  return useContext(AuthContext);
};