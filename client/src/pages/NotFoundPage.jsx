const NotFoundPage = () => {
  return (
    <div className="errorContainer">
      <h2>404 - Página no encontrada</h2>
      <p>La página que buscas no existe.</p>
      <Link to="/" className="homeLink">Volver al inicio</Link>
    </div>
  );
};
export default NotFoundPage;