import { Outlet, Link, useMatches } from "react-router-dom";
import styles from "./MainLayout.module.css";
import logo from "../../assets/logo.png";

const MainLayout = () => {
  const matches = useMatches();
  const currentPageTitle = matches.find(m => m.handle)?.handle?.title || 'Título por defecto';
  
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Logo" className={styles.logo} />
          <h1 className={styles.title}>{currentPageTitle}</h1>
        </div>
        
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li><Link to="/" className={styles.navLink}>Inicio</Link></li>
            <li><Link to="/about" className={styles.navLink}>Nosotros</Link></li>
            <li><Link to="/services" className={styles.navLink}>Servicios</Link></li>
          </ul>
        </nav>
      </header>
      
      <main className={styles.mainContent}>
        <Outlet />
      </main>
      
      <footer className={styles.footer}>
        <p>© 2025 Mi Sitio Web. Todos los derechos reservados.</p>
        <div className={styles.footerLinks}>
          <Link to="/privacy" className={styles.footerLink}>Privacidad</Link>
          <Link to="/terms" className={styles.footerLink}>Términos</Link>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;