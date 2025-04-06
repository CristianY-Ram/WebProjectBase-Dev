// 1. Importa el proveedor de rutas de React Router
import { RouterProvider } from 'react-router-dom';

// 2. Importa el enrutador configurado
import router from './routes/router';

// 3. Importa el contexto de autenticación
import { AuthProvider } from './context/AuthContext';

// 4. Importa estilos globales
import './assets/styles/global.css';

// 5. Componente principal de la app
export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}