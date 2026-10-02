import { resolve } from 'node:path'
import { defineConfig } from 'vite'

// defineConfig ayuda al editor a validar y autocompletar las opciones de Vite.
export default defineConfig({
  // Configuración del servidor usado durante el desarrollo (pnpm dev).
  server: {
    // Escucha en todas las interfaces de red. Permite acceder desde otros
    // dispositivos de la red local; usa 'localhost' si solo lo abrirás aquí.
    host: '0.0.0.0',
    // Puerto preferido para desarrollo. Si está ocupado, Vite prueba el siguiente.
    port: 5173,
  },
  // Configuración del servidor local que permite revisar el build (pnpm preview).
  preview: {
    // Tiene el mismo alcance de red que el servidor de desarrollo.
    host: '0.0.0.0',
    // Puerto preferido para la vista previa de producción.
    port: 4173,
  },
  build: {
    // Configura la compilación multipágina de Rollup, el empaquetador que usa Vite.
    rollupOptions: {
      // Cada propiedad registra un documento HTML que debe incluirse en dist/.
      // resolve construye rutas absolutas desde la carpeta donde se ejecuta Vite.
      input: {
        index: resolve(process.cwd(), 'index.html'),
        about: resolve(process.cwd(), 'about.html'),
        curriculum: resolve(process.cwd(), 'curriculum.html'),
        proyectos: resolve(process.cwd(), 'proyectos.html'),
        certificados: resolve(process.cwd(), 'certificados.html'),
        detalleProyecto: resolve(process.cwd(), 'detalle-proyecto.html'),
        detalleCertificado: resolve(process.cwd(), 'detalle-certificado.html'),
      },
    },
  },
})