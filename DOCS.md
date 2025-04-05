# Documentación/Manual

- **Nombre del Proyecto**: ProyectoBase.  
- **Descripción Breve**: Plantilla escalable para aplicaciones web modernas, con frontend, backend y base de datos preconfigurados.  
- **Versión**: v1.0.0.  
- **Autor**: Cristian Ramírez.


## **Introducción**  
- **Propósito**:  
  > Esta plantilla sirve como punto de partida para proyectos web full-stack. Incluye una estructura organizada, herramientas esenciales y documentación para acelerar el desarrollo.  

- **Público Objetivo**:  
  > Desarrolladores principiantes o avanzados que buscan una base sólida para sus aplicaciones.

- **Características**:  
  - Frontend con React y PWA.  
  - Backend con Node.js/Express.  
  - Soporte para PostgreSQL y MongoDB.  
  - Configuración lista para despliegue en la nube.  


## **Tecnologías Utilizadas**  


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
## **Desarrollo Web**

Aplicaciones Web

## **Estructura de Archivo**

La Estructura del Proyecto puede variar dependiendo de las preferencias del desarrollador o del equipo, aquí vengo a proponerte una estructura típica pero una vez la entiendas puedes adaptar a tu gusto.


### **Estructura del Proyecto "Descriptiva"**
**ProyectoBase:**
Todo el contenido de este proyecto se encuentra dentro,
"ProyectoBase" hace referencia a que este proyecto tiene una estructura base,
Significa que es escalable..

**Contenido:**
| **Carpeta/Archivo** | **Función**                                                                 |  
|---------------------|---------------------------------------------------------------------------------|  
| **client/**         | Contiene todo el código relacionado con la interfaz de usuario.                 |  
| **server/**         | Maneja la lógica del servidor, autentificación y conexión con la base de datos. |  
| **database/**       | Gestiona la configuración migraciones y datos iniciales de la base de datos.    |  
| **docs/**           | Almacena documentación técnica para entender el Proyecto.                       |
| **scrips/**         | Automatiza tareas repetitivas (Despliegue, Configuración de base datos, ect)    |
| **packege.json**    | ...  |
| **DOCS.md**         | ...  |
| **TASK.md**         | ...  |
| **README.md**       | ...  |
| **.gitignore**      | ...  |
---

#### **Cliente (client)**
Es el Frontend (Parte del Frente) del Proyecto, contiene todo el contenido visible para la aplicación web.
Cuando un usuario ingresa a tu web mediante la url, tu Aplicación responde el Frontend.
Se llama Client (Cliente en Español) porque este término hace referencia a "al lado del cliente", es el que se comunica con el servidor (Lógica de Trabajo).

Vite es una herramienta moderna de desarrollo que optimiza el flujo de trabajo del frontend al proporcionar un entorno de desarrollo rápido, eficiente y fácil de configurar.
- Inicia el Proyecto con Vite usando un comando en la terminal (npm create vite@latest) para crear la estructura básica, esto configura automáticamente los archivos principales para el funcionamiento de tu aplicación web.
- La carpeta públic es donde comienzan las cosas, y el navegador se conecta a través de Vite para cargar el resto del proyecto.
- Una vez terminado el diseño del Frontend usa el comando (npm run build), Vite empaqueta todo tu código en un formato optimizado y necesario para mostrar la página web para que lo subas al servidor (Entorno de Despliegue).

*Analogía:*
> Imagina que el frontend es una tienda: Aquí se definen los colores, muebles y la forma en que se muestre el inventario.


  **Contenido:**
  - **public/:**
  Contiene solo contenido fijó, este nunca cambia automáticamente.
  **Analogía:** Contiene los letreros fijos, ilustraciones, Logos de la tienda.
    - **index.html:**
    
  - **src/:**
  Contiene todo el código necesario para construir tu página automáticamente.
  **Analogía:** Es donde decoramos y organizamos los demás aspectos de la tienda, los que se cambian regularmente como las vitrinas, vendedores, habitaciones, etcétera.
    - 2.1
    - 2.2
  - **dist/:**
  - **packege.json:**
  - **README.md:**
  




#### **Servidor (server):**
...

#### **Base de Datos (database):**
...

#### **Documentación (docs):**
...

#### **Automatizaciones (scripts):**
...

#### **Paquete (package.json):**
...


### **Estructura del Proyecto "Gráfica"**
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

