# Especificaciones del proyecto

> **Tipo:** portafolio personal estático  
> **Tecnologías:** HTML, CSS, JavaScript, Vite y pnpm  
> **Idioma de interfaz:** español

## Objetivo

Presentar el perfil, la formación, los proyectos y los certificados de Alfredo Sandoval en un sitio fácil de recorrer, adaptable a distintos tamaños de pantalla y preparado para desplegarse como sitio estático.

## Alcance funcional

### Páginas y navegación

| Archivo | Responsabilidad |
| --- | --- |
| `index.html` | Presentación, resumen, enlaces sociales y contacto |
| `about.html` | Perfil y descripción personal |
| `proyectos.html` | Listado de proyectos con acceso a demostración y detalle |
| `detalle-proyecto.html` | Presentación detallada seleccionada mediante `?id=` |
| `certificados.html` | Listado de certificados y personalizador de descarga |
| `detalle-certificado.html` | Información de cada certificado seleccionada mediante `?id=` |
| `curriculum.html` | CV adaptable con opción de impresión o guardado como PDF |

El menú principal enlaza las páginas del sitio y se convierte en un menú desplegable en pantallas pequeñas. La navegación se implementa en `style/main.js`.

### Personalizador de certificados

- Acepta imágenes PNG, JPEG y WebP de hasta 12 MB.
- Rechaza otros formatos y comunica el estado mediante una región accesible.
- Permite indicar el nombre y el título que aparecen en la composición.
- Produce una composición PNG de 1800 × 1280 con marco azul, acentos dorados y el certificado original centrado y ajustado a su proporción.
- Muestra una previsualización de la composición y actualiza el arte al editar los campos.
- Genera y descarga el archivo en el navegador con Canvas. La imagen original permanece intacta y no se carga a un servidor.
- Los PDF no se admiten directamente; deben convertirse a imagen antes de seleccionarlos.

La composición es una presentación visual personal. No es un certificado oficial, no valida credenciales y no debe cubrir ni modificar los datos emitidos por la institución.

### CV

El botón de impresión llama al diálogo de impresión del navegador. Desde ese diálogo se puede elegir una impresora o guardar el documento como PDF. Las reglas `@media print` ocultan la navegación y los controles, y adaptan la hoja para impresión en A4.

## Diseño e interfaz

- **Paleta principal:** azul `#0D52FF`, gris claro `#E3E3E3`, blanco y tonos de texto de alto contraste.
- **Tratamiento visual:** fondos con degradados, paneles translúcidos y bordes glassmorphism discretos.
- **Adaptabilidad:** rejillas que colapsan en pantallas pequeñas, botones amplios en móvil y navegación tipo menú en tabletas y teléfonos.
- **Tipografía:** Inter, cargada desde Google Fonts, con fuentes locales de respaldo.
- **Movimiento:** transiciones contenidas y respeto a `prefers-reduced-motion`.

## Accesibilidad

- Enlace para saltar directamente al contenido principal.
- Navegación identificada con `aria-label` y botón móvil con `aria-expanded` y `aria-controls`.
- Indicador visible de foco para navegación por teclado.
- Etiquetas explícitas para las entradas del personalizador y texto de ayuda asociado.
- Mensajes de carga y descarga anunciados con `role="status"` y `aria-live`.
- Textos alternativos en imágenes informativas.
- Reducción de animaciones cuando la preferencia del sistema lo solicita.

## Arquitectura y herramientas

El proyecto es multipágina y no utiliza un framework JavaScript ni backend. Cada archivo HTML es una entrada de Vite. Los estilos y comportamientos comunes se comparten desde `style/style.css` y `style/main.js`.

| Archivo | Función |
| --- | --- |
| `vite.config.js` | Servidores de desarrollo/vista previa y lista de entradas HTML |
| `package.json` | Scripts de desarrollo, compilación y vista previa; dependencia Vite |
| `pnpm-lock.yaml` | Resolución reproducible de dependencias |
| `.gitignore` | Exclusión de dependencias, build, logs, archivos locales y metadatos de despliegue |
| `imagenes/` | Fotografías e iconos usados por las páginas |
| `dist/` | Salida generada por Vite; no se versiona |

### Comandos

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
```

Ejecuta los comandos desde la carpeta raíz, donde se encuentra `package.json`. `pnpm build` genera la carpeta `dist/`, que es la salida que debe desplegarse.

## Datos por revisar antes de hacer público

- Confirmar que el número de teléfono en `curriculum.html` es intencionalmente público.
- Reemplazar `alfredosandoval@example.com` por el correo real o retirar el enlace hasta tenerlo.
- Reemplazar las URLs ficticias de demostración y los enlaces de redes que aún sean genéricos.
- Confirmar la exactitud de la información de formación, habilidades, proyectos y certificados.
- Verificar permisos para publicar fotos, logos e imágenes.
- No incluir certificados originales privados ni secretos en el repositorio. El personalizador procesa localmente las imágenes que seleccione cada visitante.

## Verificación

La compilación se valida con:

```bash
pnpm build
```

Antes de un despliegue público, probar los enlaces externos, páginas de detalle, menú móvil, impresión del CV, entradas no válidas del personalizador y descarga de PNG en los navegadores objetivo.