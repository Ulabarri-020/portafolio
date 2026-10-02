<div align="center">
  <img src="imagenes/personal.jpg" width="112" alt="Retrato de Alfredo Sandoval" />
  <h1>Alfredo Sandoval · Portafolio</h1>
  <p><strong>Desarrollo web, experiencias claras y diseño con intención.</strong></p>
  <p>Portafolio multipágina construido con HTML, CSS, JavaScript y Vite.</p>

  <p>
    <a href="index.html">Inicio</a> ·
    <a href="proyectos.html">Proyectos</a> ·
    <a href="certificados.html">Certificados</a> ·
    <a href="curriculum.html">CV</a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite 8" />
    <img src="https://img.shields.io/badge/pnpm-12-F69220?style=flat-square&logo=pnpm&logoColor=white" alt="pnpm 12" />
    <img src="https://img.shields.io/badge/HTML-CSS-JavaScript-0D52FF?style=flat-square&logo=javascript&logoColor=white" alt="HTML, CSS y JavaScript" />
    <img src="https://img.shields.io/badge/Responsive-Design-1F7A5A?style=flat-square" alt="Diseño adaptable" />
  </p>
</div>

---

## Sobre el proyecto

Un sitio personal para presentar perfil, formación, proyectos y certificados. La interfaz combina una base visual clara con acentos azules, superficies glassmorphism y navegación adaptable a escritorio, tablet y móvil.

| Identidad visual | Valor |
| --- | --- |
| Azul principal | `#0D52FF` |
| Gris claro | `#E3E3E3` |
| Enfoque | Limpio, accesible y responsivo |
| Arquitectura | Sitio estático multipágina |

## Qué incluye

- Inicio con presentación, redes y llamada a contacto.
- Página de perfil y página de CV, con opción de imprimir o guardar como PDF desde el navegador.
- Catálogo de proyectos con páginas de detalle y enlaces de demostración.
- Sección de certificados con páginas informativas y personalizador de descargas.
- Personalizador local: carga PNG, JPG o WebP de hasta 12 MB, previsualiza un marco gráfico personalizado y descarga una copia PNG. El certificado fuente no se modifica ni se envía a un servidor.
- Accesibilidad básica: enlace para saltar al contenido, controles etiquetados, estado anunciado para la descarga, foco visible y respeto a movimiento reducido.

## Primeros pasos

Necesitas Node.js y pnpm. Desde la carpeta raíz del proyecto:

```bash
pnpm install
pnpm dev
```

Abre la dirección local que Vite muestra en la terminal. Si el puerto predeterminado está ocupado, Vite selecciona otro disponible.

### Compilar y previsualizar

```bash
pnpm build
pnpm preview
```

La compilación de producción se genera en `dist/`. Esa carpeta se excluye del control de versiones porque puede regenerarse con `pnpm build`.

## Mapa del sitio

| Página | Contenido |
| --- | --- |
| [`index.html`](index.html) | Presentación y secciones principales |
| [`about.html`](about.html) | Perfil personal |
| [`proyectos.html`](proyectos.html) | Catálogo de proyectos |
| [`detalle-proyecto.html`](detalle-proyecto.html) | Detalle por identificador de proyecto |
| [`certificados.html`](certificados.html) | Certificados y herramienta de personalización |
| [`detalle-certificado.html`](detalle-certificado.html) | Detalle por identificador de certificado |
| [`curriculum.html`](curriculum.html) | CV imprimible |

## Documentación

- [Especificaciones del proyecto](ESPECIFICACIONES_PROYECTO.md): páginas, tecnologías, diseño, accesibilidad y límites funcionales.

## Estructura

```text
.
├── imagenes/                 # Recursos gráficos del sitio
├── style/
│   ├── main.js               # Menú, detalles, CV y personalizador
│   └── style.css             # Estilos y reglas responsivas
├── index.html                # Página principal
├── about.html                # Perfil
├── proyectos.html            # Listado de proyectos
├── detalle-proyecto.html     # Plantilla de detalle
├── certificados.html         # Certificados y generador de imagen
├── detalle-certificado.html  # Plantilla de certificado
├── curriculum.html           # CV imprimible
├── vite.config.js            # Entradas multipágina de Vite
├── package.json              # Scripts y dependencias
├── pnpm-lock.yaml            # Versiones fijadas de dependencias
└── ESPECIFICACIONES_PROYECTO.md
```

## Antes de publicar

- Confirma que el teléfono mostrado en el CV se pueda hacer público y reemplaza el correo `example.com` por el correo profesional correcto.
- Sustituye los enlaces de demostración de proyectos y redes por URLs reales; verifica que cada destino esté publicado.
- Revisa que los datos de estudios, habilidades, certificados y experiencia sean precisos.
- Comprueba que tienes permiso para publicar la fotografía y todas las imágenes incluidas.
- `package.json` declara la licencia ISC, pero no hay un archivo `LICENSE`; confirma que esa licencia es intencional y añade el texto correspondiente si quieres conceder esos permisos.
- No subas `.env`, credenciales, tokens ni certificados privados. `.gitignore` excluye archivos de entorno locales y artefactos generados, pero no detecta secretos escritos dentro del código.

## Licencia

La licencia ISC aparece declarada en `package.json`. Confirma que sea la licencia deseada y añade un archivo `LICENSE` antes de presentar el repositorio como reutilizable. La licencia del código no concede automáticamente derechos sobre fotografías, marcas o certificados.