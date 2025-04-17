import AppRoute from './routes/AppRoute';
import { AuthProvider } from './context/AuthContext';

import './assets/styles/global.css';

export default function App() {
  return (
    <AuthProvider>
      <AppRoute/>
    </AuthProvider>
  );
}