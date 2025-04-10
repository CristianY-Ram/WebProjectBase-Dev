



#### **1. `<!DOCTYPE html>`**
- **Qué hace**: Declara que el documento es HTML5.
- **Importante**: Sin esto, los navegadores pueden entrar en modo de compatibilidad, lo que afecta el renderizado.

#### **2. `<html lang="es">`**
- **Qué hace**: Define el idioma principal de la página (español).
- **Para qué**:  
  - **SEO**: Ayuda a los motores de búsqueda a entender el idioma del contenido.  
  - **Accesibilidad**: Permite a los lectores de pantalla ajustar la pronunciación.

#### **3. `<meta charset="UTF-8">`**
- **Qué hace**: Especifica la codificación de caracteres (UTF-8 incluye caracteres especiales como ñ, á, €, emojis).  
- **Error común**: Si falta, el navegador puede mostrar caracteres incorrectos.

#### **4. `<meta name="viewport" ...>`**
- **Qué hace**: Hace la app adaptable a móviles.  
- **Parámetros clave**:  
  - `width=device-width`: Ajusta el ancho al dispositivo.  
  - `initial-scale=1.0`: Zoom inicial al 100%.  
- **Consejo**: No modificar estos valores si quieres diseño responsive.

#### **5. `<title>...</title>`**
- **Qué hace**: Texto en la pestaña del navegador y resultado de búsqueda.  
- **Mejores prácticas**:  
  - Usa palabras clave relevantes (ej: "Gestor de Tareas - Mi App").  
  - Máximo 60 caracteres.

#### **6. `<link rel="icon" href="/favicon.ico">`**
- **Qué hace**: Muestra un ícono en la pestaña del navegador.  
- **Ruta**: El archivo debe estar en `client/public/favicon.ico`.  
- **Formatos recomendados**: `.ico`, `.png`, `.svg` (tamaño ideal: 32x32px o 64x64px).

#### **7. Fuentes Externas (opcional)**  
- **Ejemplo con Google Fonts**:  
  ```html
  <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
  ```  
- **Consejo**: Si no usas fuentes externas, elimina esta línea.

---

### **8. `<div id="root"></div>`**
- **Qué hace**: Contenedor donde React montará toda la aplicación.  
- **Importante**:  
  - **No modificar el `id`**: React busca este elemento específicamente.  
  - **No añadir contenido aquí**: React lo sobrescribirá.

#### **9. `<script type="module" src="/src/main.jsx"></script>`**
- **Qué hace**: Carga el punto de entrada de JavaScript (`main.jsx`).  
- **`type="module"`**: Permite usar sintaxis ES6 (`import/export`).  
- **Ruta `/src/main.jsx`**: Vite resuelve la ruta desde la raíz del proyecto (`client/`).

---