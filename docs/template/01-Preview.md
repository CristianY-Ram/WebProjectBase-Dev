
# Frontend `/Client`
Interfaz visual de la aplicación web.

- Herramientas: React, Vite.

**Archivos Principales**:

## index.html
Es el único archivo HTML de la aplicación.

- **Ruta**: `/index.html`.
- **Propósito**: Sirve como punto de entrada para el navegador y monta la app React.
- **Recursos**: favicon.ico, main.jsx.

### **Que declara su estructura**:
- Documento es **HTML5**.
- Idioma principal de la página es Español.
- Codificación de características **UTF-8**.
- Ajusta el ancho al dispositivo y Zoom inicial al 100%.
- Descripción de la página: *Proyecto Aplicación React*.
- Título de la Página: ***Mi Proyecto Base***.
- Autor de la página: ***Tu Nombre***.
- Palabras claves de la página: `App, React, Proyecto`.
- Usa como pestaña del navegador: *`favicon.ico`*.
- Contenedor `root` donde **React** montará la Aplicación.
- Carga el módulo de punto de entrada Javascript *`main.jsx`*.

### **Comportamiento**:
1. **Carga inicial**:  
   - El navegador solicita *`index.html`* y descarga recursos vinculados.  
   - El script *`main.jsx`* monta la app React en el contenedor `root`.  
2. **Renderizado**:  
   - React genera el DOM virtual y lo sincroniza con el DOM real sin recargar la página.
   - Vite inyecta automáticamente los scripts y estilos durante el desarrollo (HMR).
3. **Interactividad**:  
   - Los componentes actualizan el estado y React re-renderiza solo las partes afectadas.







## main.jsx
Punto de entrada principal Javascript.

- **Ruta**: `/src/main.jsx`.
- **Propósito**: Monta la aplicación React en el DOM y inicia scripts de configuración.
- **Recursos**: React, ReactDOM, App.

### **Que declara su estructura**:
- Importa `React` para crear componentes.
- Importa `ReactDOM` para renderizar react en el navegador.
- Importa `App` el componente principal de la aplicación.
- Registra Service Worker (PWA) solo en producción.
  - Lo registra desde: `/sw.js`.
- Crea un contenedor virtual para react y renderiza la aplicación. 
- Detecta prácticas inseguras en desarrollo con `StrictMode`.

### **⚙️ Comportamiento**  
1. **Carga del script**:  
   - El navegador ejecuta *`main.jsx`* después de cargar *`index.html`*.
2. **Montaje inicial**:  
   - React crea un DOM virtual y lo sincroniza con el `root`.
3. **Configuración PWA**:  
   - En producción, registra el Service Worker para cachear recursos. 
4. **Modo Estricto**:  
   - `StrictMode` detecta prácticas inseguras en desarrollo.


## App.jsx  
Componente raíz que organiza la estructura global de la app.  

- **Ruta**: `/src/App.jsx`.  
- **Propósito**: Define la estructura base de la aplicación, rutas, proveedores y estilos.  
- **Recursos**: `React`, `RouterProvider`, `AuthProvider`, `global.css`.  

### **Que declara su estructura**:  
- Importa `React` para crear componentes.  
- Importa `RouterProvider` para manejar la navegación entre páginas.  
- Importa `AuthProvider` para gestionar la autenticación global.  
- Aplica estilos globales `global.css`.  
- Define el componente `App`, que envuelve toda la app en proveedores y rutas.  

### **Comportamiento**:  
1. **Inicialización**:  
   - Carga los estilos globales que afectan a toda la aplicación.  
   - Envuelve la app en `AuthProvider` para acceso a la autenticación en cualquier componente.  
2. **Enrutamiento**:  
   - Usa `RouterProvider` para mostrar la página correspondiente a la URL actual.  
3. **Renderizado**:  
   - Renderiza componentes hijos (como páginas) según la ruta activa.  

### **Extras**:  
- Es el lugar ideal para añadir temas globales (ej: `ThemeProvider`).  
- Las rutas protegidas (ej: dashboard) se gestionan desde aquí usando `PrivateRoute`.  


## router.jsx  
Configura las rutas de navegación de la aplicación.  

- **Ruta**: `/src/routes/router.jsx`.  
- **Propósito**: Define qué componente se muestra según la URL del navegador.  
- **Recursos**: `react-router-dom`, componentes de páginas, `PrivateRoute`.  

### **Que declara su estructura**:  
- Importa `createBrowserRouter` para crear el enrutador.  
- Importa componentes de páginas (ej: `HomePage`, `LoginPage`).  
- Define rutas públicas (acceso libre) y privadas (requieren autenticación).  
  - Ejemplo de ruta privada:  
    ```jsx
    {
      path: "/dashboard",
      element: <PrivateRoute><DashboardPage /></PrivateRoute>,
    }
    ```  
- Maneja rutas no existentes (404) con `path: "*"`.  

### **Comportamiento**:  
1. **Navegación**:  
   - Compara la URL actual con las rutas definidas y renderiza el componente asociado.  
2. **Protección de rutas**:  
   - `PrivateRoute` redirige al login si el usuario no está autenticado.  
3. **Carga bajo demanda**:  
   - Si se usa `React.lazy()`, carga componentes solo cuando se accede a su ruta (mejora rendimiento).  

### **Extras**:  
- Las rutas se pueden dividir en módulos (ej: `publicRoutes.js`, `privateRoutes.js`).  
- Soporte para anidar rutas (ej: `/dashboard/settings`).  




## archivo.txt
(Que es el archivo.txt).

- **Ruta**: (ruta desde la raíz (/client)).
- **Propósito**: (Resumen corto de su propósito).
- **Recursos**: (Importaciones o archivos requeridos aquí).

### **Que declara su estructura**:
- (Declaración por línea o función múltiple).
  - (Su declaración de una función o detalles (Si aplica)).
- (Segunda declaración por línea o función múltiple).
- ...

### **Comportamientos**: (Sí aplica)
1. **(Comportamiento inicial)**:
 - (Explica su comportamiento).
 - (Explica más sobre este comportamiento).

2. **(Comportamiento secundario)**:
  - (Explica segundo comportamiento).
  - ...
3. ...

### **Extras**: (Menciona cualquier otra información respecto a este archivo)
- (Información 1)
- (Información 2)
- ...


