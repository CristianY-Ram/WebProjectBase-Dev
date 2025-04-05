import express from 'express';
import path from 'path';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Sirve frontend estático
app.use(express.static(path.join(__dirname, '../client/dist')));

// Ejemplo de ruta API
app.get('/api/healthcheck', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date() });
});

// Redirige todo lo demás al frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor listo en http://localhost:${PORT}`));