# Tareas y Objetividad
_Este archivo funciona como bloc de notas sobre el proyecto y avances, o tareas pendientes por completar._



### **Estructura de la Documentación**  
#### **1. Portada**  
- **Nombre del Proyecto**: "Plantilla Base Full-Stack".  
- **Descripción Breve**: "Plantilla escalable para aplicaciones web modernas, con frontend, backend y base de datos preconfigurados".  
- **Versión**: v1.0.0.  
- **Autor**: Tu nombre o equipo.  


#### **1. Introducción**  
- **Propósito**:  
  > "Esta plantilla sirve como punto de partida para proyectos web full-stack. Incluye una estructura organizada, herramientas esenciales y documentación para acelerar el desarrollo".  

- **Público Objetivo**:  
  > "Desarrolladores principiantes o avanzados que buscan una base sólida para sus aplicaciones".  

- **Características Clave**:  
  - Frontend con React y PWA.  
  - Backend con Node.js/Express.  
  - Soporte para PostgreSQL y MongoDB.  
  - Configuración lista para despliegue en la nube.  

---

#### **2. Tecnologías Utilizadas**  
Organiza las tecnologías por capa (frontend, backend, etc.) con **explicaciones simples**:  

| **Tecnología**              | **Función**                                                                 |  
|-----------------------------|-----------------------------------------------------------------------------|  
| **React**                   | Biblioteca para construir interfaces de usuario interactivas.               |  
| **Vite**                    | Herramienta para crear proyectos frontend rápidamente.                      |  
| **Node.js**                 | Entorno que ejecuta JavaScript en el servidor.                              |  
| **Express.js**              | Framework para crear APIs y manejar peticiones HTTP.                        |  
| **PostgreSQL**              | Base de datos SQL para almacenar datos estructurados (tablas).              |  
| **MongoDB**                 | Base de datos NoSQL para datos flexibles (documentos tipo JSON).            |  
| **JWT**                     | Sistema para autenticar usuarios mediante tokens seguros.                   |  

---







### Estructura del Proyecto "Gráfica"
ProyectoBase/     `Carpeta Proyecto Raiz`
  - client/         `Carpeta Frontend`
    - dist/           `Carpeta Build`
    - public/         `Carpeta Estática`
      - manifest.json   `Configuración PWA`
      - offline.html    `Pagina 'Sin Conexión'`
      - robots.txt      `Intrucciones 'SEO'`
      - icons/          `Carpeta Iconos`
        - favicon.ico     `Pestaña del Navegador`
        - logo192.png     `Logo de Aplicación`
        - logo512.png     `Logo de Escritorio`
    - src/            `Codigo Fuente Aplicación`
      - assets/         `Recursos Visuales`
      - components/     `Componentes Reutilizables`
        - ui/             `Iu`
          - Button/
            - Button.jsx
            - Button.module.jsx
          - Forms/
          - Input/
          - Card/
          - Modal/
          - Dropdown/
          - Checkbox/
          - RadioButton/
          - DatePicker/
          - ToggleSwitch/
          - Tooltip/
          - ProgressBar/
          - FileUpload/
        - navigation/
          - Header/
          - Menu/
          - Footer/
        - layout/
          - Grid/
          - Container/
          - Divider/
          - HeroSection/
        - feedback/
          - Loader/
          - Toast/  `Notificaciones`
        - display/
          - Table/
          - Carousel/
        - integration/
          - Map/
          - VideoPlayer/
          - SocialShare/
          - SearchBar/
        - animations/
          - FadeIn/
          - SlideIn/
        - segurity/
          Captcha/
      - pages/          `Paginas Completas`
        - MainPage.jsx
        - HomePage.jsx
        - TermsPage.jsx
        - AboutPage.jsx
        - NotFoundPage.jsx
      - layouts/          `Diseños Páginas`
        - MainLayout.jsx    `Estructura Común`
        - AuthLayout.jsx    `Diseño Autentificación`
      - services/
        - LanguageSwitcher/
          - Es.
          - In.
        - selectorLanguage.js
        - apis.js
        - storage.js
      - context/          `Estados entre Componentes`
        - AuthContext       `Estado Global Autentificación`
        - ThemeContext      `Estado Global Tema`
      - styles/
        - base.css
        - variables.css
        - globals.css
      - hooks/          `Logica Complejas`
        - useAuth.json  `Logica Autentificación`
        - useFetch.js   `Logica Obtención Datos`
      - utils/          `Funciones helpers`
        - formatDate.js   `Formatear Fecha`
        - validateForm.js `Validacion Formulario`
      - tests/
      - config/
      - Main.jsx        `Iniciación React y Renderizar DOM`
      - App.jsx         `Configuración Rutas (React Router)`
    - packege.json    `Dependencias del Frontend`
    - README.md
  - server/      `Directorio del Backend`
    - routes/          `Rutas del Servidor`
    - controllers/     `Controladores del Servidor`
    - models/          `Modelos del Servidor`
    - services/        `ServiciosPlanificación`
    - app.js           `Aplicación de Servidor`
    - packege.json
    - README.md        `Descripción y Intrucciones del Servidor`
  - packege.json
  - README.md
  - TASK.md
  - .gitignore



### Estructura del Proyecto "Descriptiva"
**ProyectoBase:**
Todo el contenido de este proyecto se encuentra dentro,
"ProyectoBase" hace referencia a que este proyecto tiene una estructura base,
Significa que es escalable..

**Contenido:**
  - *client/:*
  - *server/:*
  - *database*










dist/ explicación descriptiva de esta estructura
assets/       `Recursos procesados (JS/CSS minificados)`
- index.html    `Punto de entrada HTML procesado`
- sw.js         `Service Worker compilado`
- manifest.json `Copia procesada del manifiesto`

/public
      - index.html      `Punto de Entrada (Sin Vite)`
      - sw.js           `Servicio Worker (Sin VPP)`

# Archivos clave:
- client/public/manifest.json: Config PWA (nombre, íconos, tema) (⚠️ esencial)
- client/src/pages/NotFoundPage.jsx: Página 404 personalizada (🚨 manejo de rutas)
- server/src/index.js: Inicia servidor + middlewares (🚀 punto de entrada)
- client/package.json: Dependencias front (React, Vite, PWA) (📦)
  
  
  
  
### Estructura del Proyecto "Descriptiva"

Public 
los archivos de esta carpeta se copin tal cual en la carpeta build durante build y se cachean automáticamente. 

