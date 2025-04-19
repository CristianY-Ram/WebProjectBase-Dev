import { defineConfig } from 'vite';
   import { VitePWA } from 'vite-plugin-pwa';

   export default defineConfig({
     plugins: [
       VitePWA({
         registerType: 'autoUpdate', // Auto-actualización en background
         includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
         manifest: {
           name: 'Mi App React',
           short_name: 'MiApp',
           description: 'Una PWA con React y Vite',
           theme_color: '#ffffff',
           icons: [
             {
               src: '/pwa-192x192.png',
               sizes: '192x192',
               type: 'image/png',
             },
             {
               src: '/pwa-512x512.png',
               sizes: '512x512',
               type: 'image/png',
             },
           ],
         },
         workbox: {
           globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'], // Archivos a cachear
           runtimeCaching: [
             {
               urlPattern: /^https:\/\/api\.example\.com\/.*/i, // Ejemplo: cachear llamadas API
               handler: 'NetworkFirst',
               options: {
                 cacheName: 'api-cache',
                 expiration: {
                   maxEntries: 10,
                   maxAgeSeconds: 60 * 60 * 24, // 1 día
                 },
               },
             },
           ],
         },
       }),
     ],
   });