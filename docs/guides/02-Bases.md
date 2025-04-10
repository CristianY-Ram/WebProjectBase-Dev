# 🌍 Bases del Desarrollo Web

## 🌐 ¿Que es Internet?
Internet es una red global de computadoras que se comunican mediante protocolos estandarizados. Cuando accedes a un sitio web:

1. **Cliente (Navegador)**:  
   - Inicia una solicitud (ej: `GET https://tusitio.com`).  
   - Usa **DNS** para traducir el dominio a una dirección IP.  

2. **Servidor**:  
   - Recibe la solicitud en un puerto específico (ej: 80 para HTTP).  
   - Procesa la petición (ej: consulta una base de datos).  

3. **Respuesta**:  
   - El servidor envía datos estructurados (HTML, JSON, etc.) con códigos de estado HTTP (200 = éxito, 404 = no encontrado).  

El Sistema de Nombres de Dominio (DNS): Es en esencia, La `Libreta de Contactos` de Internet, se encarga de convertir los nombres de dominios (Direcciones de Páginas web que podemos recordar Ej. www.misitio.com) a direcciones IP con las que suelen comunicarse las computadoras.

## Protocolo HTTP
El Protocolo de Transferencia de Hipertexto (HTTP): es la base de la comunicación de datos en la World Wide Web (WWW). Es un protocolo de la capa de aplicación que define cómo se transmiten y formatean los mensajes entre los navegadores web (clientes) y los servidores web.
- **Métodos**:  
  - `GET`: Obtener recursos  
  - `POST`: Enviar datos  
  - `PUT/PATCH`: Actualizar recursos  
  - `DELETE`: Eliminar recursos



**Glosario**:
- **HTML**: Lenguaje de marcado para estructurar páginas web.  
- **React**: Biblioteca de JavaScript para crear interfaces dinámicas.  
- **Vite**: Herramienta para construir proyectos frontend rápidamente.  
- **Favicon**: Ícono pequeño en la pestaña del navegador.  

- JSON

## 🧠 Conceptos Clave Técnicos

### 1. Frontend vs Backend
|                   | Frontend                          | Backend                          |
|--------------------|-----------------------------------|----------------------------------|
| **Lenguajes**      | HTML, CSS, JavaScript             | Node.js, Python, Java, PHP       |
| **Responsabilidad**| Interfaz de usuario               | Lógica de negocio, seguridad     |
| **En ProyectoBase**| `/client` (React, Vite)           | `/server` (Express, MongoDB)     |

### 2. 

```javascript
// Ejemplo en /server/routes/auth.js
router.post('/login', (req, res) => { 
  // 1. Validar credenciales
  // 2. Generar token JWT
  // 3. Responder con código 200 o 401
});
```

### 3. Bases de Datos
- **SQL** (Structured Query Language):  
  - Datos estructurados en tablas (PostgreSQL en `/database/sql`).  
  - Consultas complejas con JOINs.  

- **NoSQL**:  
  - Datos flexibles en documentos (MongoDB en `/database/nosql`).  
  - Escalabilidad horizontal.  

---

## 🔧 Ejercicio Práctico Técnico
1. Abre `/server/.env.example`  
2. Crea un archivo `.env` con tus credenciales de DB  
3. Ejecuta `npm run migrate` para crear las tablas  
4. Usa `curl http://localhost:3000/api/healthcheck` para probar la API  

<details>
<summary>🔍 Solución Esperada</summary>

```bash
# .env
DB_HOST=localhost
DB_USER=admin
DB_PASSWORD=segura123

# Terminal
$ curl http://localhost:3000/api/healthcheck
{"status":"OK","timestamp":"2024-03-15T12:00:00Z"}
```
</details>

---

## ➡️ Recursos para Profundizar
- [Documentación HTTP/1.1 (RFC 7231)](https://tools.ietf.org/html/rfc7231)  
- [Guía Oficial de MongoDB](https://docs.mongodb.com/manual/core/document/)  

> 💡 **Consejo Profesional**: Usa herramientas como **Wireshark** o **DevTools > Network** para analizar tráfico HTTP real.