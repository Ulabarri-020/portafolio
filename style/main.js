const projectData = {
  nova: {
    title: 'Nova Studio',
    category: 'Landing Page',
    summary: 'Agencia creativa con identidad visual premium y enfoque en conversión.',
    url: 'https://nova-studio-demo.vercel.app',
    visual: 'linear-gradient(135deg, rgba(13, 82, 255, 0.9), rgba(124, 168, 255, 0.9))',
    description: [
      'Se desarrolló una landing page moderna para una marca de diseño y estrategia digital con enfoque premium.',
      'El proyecto prioriza la experiencia visual, el storytelling de marca y la claridad en cada sección para guiar al usuario hacia una acción concreta.'
    ],
    highlights: [
      'Diseño de alto impacto con enfoque comercial',
      'Sections claras: servicios, casos, testimonios y CTA',
      'Responsive completo para desktop, tablet y móvil'
    ]
  },
  pulse: {
    title: 'Pulse Metrics',
    category: 'Dashboard',
    summary: 'Panel administrativo para visualización de métricas clave y análisis comercial.',
    url: 'https://pulse-metrics-demo.vercel.app',
    visual: 'linear-gradient(135deg, rgba(79, 70, 229, 0.85), rgba(59, 130, 246, 0.85))',
    description: [
      'Pulse Metrics es una experiencia orientada a análisis, métricas y manejo de datos para equipos de producto y operaciones.',
      'La interfaz se construyó para dar claridad en información financiera, rendimiento y comportamiento del usuario de forma visual y ordenada.'
    ],
    highlights: [
      'Gráficos y KPIs organizados por prioridad',
      'Estructura escalable para dashboards administrativos',
      'UX enfocada en claridad y velocidad de lectura'
    ]
  },
  solar: {
    title: 'Solar Cart',
    category: 'E-commerce',
    summary: 'Catálogo digital para tecnología con navegación comercial fluida y visual moderna.',
    url: 'https://solar-cart-demo.vercel.app',
    visual: 'linear-gradient(135deg, rgba(59, 130, 246, 0.9), rgba(14, 165, 233, 0.9))',
    description: [
      'Solar Cart fue pensado como una experiencia de compra moderna para productos tecnológicos y gadgets.',
      'Se priorizó la velocidad visual, el atractivo de las tarjetas de producto y la navegación intuitiva para que la acción de compra sea natural.'
    ],
    highlights: [
      'Catálogo visual con foco en conversión',
      'Diseño fluido para dispositivos móviles',
      'Estructura preparada para ampliar secciones y productos'
    ]
  }
};

const certificateData = {
  frontend: {
    title: 'Desarrollo Frontend',
    category: 'Certificado',
    summary: 'Especialización en maquetación, diseño responsive y experiencia de usuario.',
    visual: 'linear-gradient(135deg, rgba(13, 82, 255, 0.8), rgba(124, 168, 255, 0.7))',
    description: [
      'Este certificado reforzó las bases para crear interfaces limpias, accesibles y visualmente sólidas.',
      'Se trabajó con HTML, CSS y prácticas de diseño web modernas, con enfoque en responsividad y legibilidad.'
    ],
    highlights: [
      'Responsive design',
      'Accesibilidad UX',
      'Estructura semántica'
    ]
  },
  javascript: {
    title: 'JavaScript Avanzado',
    category: 'Certificado',
    summary: 'Lógica, DOM, eventos y herramientas para construir interfaces dinámicas.',
    visual: 'linear-gradient(135deg, rgba(84, 92, 255, 0.78), rgba(13, 82, 255, 0.7))',
    description: [
      'Se profundizó en la lógica del lenguaje para crear experiencias interactivas con mejor rendimiento y claridad.',
      'También se reforzó la manipulación del DOM, la gestión de eventos y la organización del código en proyectos web.'
    ],
    highlights: [
      'DOM y eventos',
      'Lógica de estados',
      'JS moderno'
    ]
  },
  cloud: {
    title: 'Cloud & DevOps',
    category: 'Certificado',
    summary: 'Fundamentos de despliegue, servicios remotos y automatización de infraestructura.',
    visual: 'linear-gradient(135deg, rgba(59, 130, 246, 0.82), rgba(14, 165, 233, 0.8))',
    description: [
      'Este certificado amplió la visión del desarrollo al despliegue y la infraestructura digital.',
      'Se trabajó con la idea de llevar proyectos a entornos reales, con seguridad, escalabilidad y mantenimiento consciente.'
    ],
    highlights: [
      'Despliegue de apps',
      'Servicios cloud',
      'Flujo de trabajo profesional'
    ]
  }
};

const initYear = () => {
  const yearNode = document.querySelector('#year');
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }
};

const initNavMenu = () => {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav__links');

  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('is-open');
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
};

const initResumePrint = () => {
  const printButton = document.querySelector('#print-resume');
  if (!printButton) return;

  printButton.addEventListener('click', () => window.print());
};

const initCertificateDownload = () => {
  const fileInput = document.querySelector('#certificate-file');
  const downloadButton = document.querySelector('#download-certificate');
  const preview = document.querySelector('#certificate-preview');
  const previewImage = document.querySelector('#certificate-preview-image');
  const previewName = document.querySelector('#certificate-preview-name');
  const previewSize = document.querySelector('#certificate-preview-size');
  const ownerInput = document.querySelector('#certificate-owner');
  const titleInput = document.querySelector('#certificate-title');
  const status = document.querySelector('#certificate-status');

  if (!fileInput || !downloadButton || !preview || !previewImage || !status) return;

  const maxFileSize = 12 * 1024 * 1024;
  let selectedFile = null;
  let selectedImage = null;
  let selectedImageUrl = null;
  let previewUrl = null;
  let loadSequence = 0;
  let previewSequence = 0;

  const createArtwork = () => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (!context || !selectedImage) throw new Error('No se pudo preparar el lienzo');

    canvas.width = 1800;
    canvas.height = 1280;
    const roundedRect = (x, y, width, height, radius) => {
      context.beginPath();
      context.moveTo(x + radius, y);
      context.arcTo(x + width, y, x + width, y + height, radius);
      context.arcTo(x + width, y + height, x, y + height, radius);
      context.arcTo(x, y + height, x, y, radius);
      context.arcTo(x, y, x + width, y, radius);
      context.closePath();
    };

    const fillRoundedRect = (x, y, width, height, radius, color) => {
      roundedRect(x, y, width, height, radius);
      context.fillStyle = color;
      context.fill();
    };

    const owner = ownerInput.value.trim() || 'Alfredo Sandoval';
    const certificateTitle = titleInput.value.trim() || 'Certificado de formación';
    const initials = owner
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0].toLocaleUpperCase())
      .join('') || 'AS';

    const background = context.createLinearGradient(0, 0, canvas.width, canvas.height);
    background.addColorStop(0, '#E3E3E3');
    background.addColorStop(1, '#F5F7FC');
    context.fillStyle = background;
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.shadowColor = 'rgba(16, 37, 83, 0.18)';
    context.shadowBlur = 36;
    context.shadowOffsetY = 16;
    fillRoundedRect(48, 42, 1704, 1196, 34, '#FFFFFF');
    context.shadowColor = 'transparent';
    context.shadowBlur = 0;
    context.shadowOffsetY = 0;
    roundedRect(48, 42, 1704, 1196, 34);
    context.strokeStyle = '#D7DFEF';
    context.lineWidth = 2;
    context.stroke();

    const header = context.createLinearGradient(48, 42, 1752, 270);
    header.addColorStop(0, '#073FCB');
    header.addColorStop(0.58, '#0D52FF');
    header.addColorStop(1, '#397DFF');
    fillRoundedRect(50, 44, 1700, 230, 32, header);
    context.fillStyle = header;
    context.fillRect(50, 174, 1700, 100);

    context.save();
    context.globalAlpha = 0.12;
    context.strokeStyle = '#FFFFFF';
    context.lineWidth = 2;
    for (let ring = 0; ring < 5; ring += 1) {
      context.beginPath();
      context.arc(1630, 120, 54 + ring * 24, 0, Math.PI * 2);
      context.stroke();
    }
    context.restore();

    context.fillStyle = '#DCE7FF';
    context.font = '700 20px Inter, Arial, sans-serif';
    context.textBaseline = 'middle';
    context.fillText('PORTAFOLIO  /  APRENDIZAJE', 112, 100);
    context.fillStyle = '#FFFFFF';
    context.font = '800 48px Inter, Arial, sans-serif';
    context.fillText(owner.slice(0, 48), 108, 169, 1250);

    context.beginPath();
    context.arc(1600, 154, 62, 0, Math.PI * 2);
    context.fillStyle = 'rgba(255, 255, 255, 0.12)';
    context.fill();
    context.strokeStyle = '#E9C978';
    context.lineWidth = 3;
    context.stroke();
    context.fillStyle = '#FFFFFF';
    context.textAlign = 'center';
    context.font = '800 38px Inter, Arial, sans-serif';
    context.fillText(initials, 1600, 151);
    context.font = '700 12px Inter, Arial, sans-serif';
    context.fillStyle = '#F6DEA0';
    context.fillText('PORTAFOLIO', 1600, 184);
    context.textAlign = 'left';

    context.fillStyle = '#D3AC50';
    context.fillRect(112, 253, 1576, 3);

    fillRoundedRect(95, 290, 1610, 690, 22, '#F4F7FC');
    roundedRect(95, 290, 1610, 690, 22);
    context.strokeStyle = '#D9E2F1';
    context.lineWidth = 2;
    context.stroke();

    const imageArea = { x: 125, y: 315, width: 1550, height: 640 };
    const scale = Math.min(imageArea.width / selectedImage.width, imageArea.height / selectedImage.height);
    const imageWidth = selectedImage.width * scale;
    const imageHeight = selectedImage.height * scale;
    const imageX = imageArea.x + (imageArea.width - imageWidth) / 2;
    const imageY = imageArea.y + (imageArea.height - imageHeight) / 2;
    context.drawImage(selectedImage, imageX, imageY, imageWidth, imageHeight);

    fillRoundedRect(95, 1000, 1610, 196, 22, '#F7F9FE');
    context.fillStyle = '#D3AC50';
    context.fillRect(128, 1034, 5, 120);
    context.fillStyle = '#0D52FF';
    context.font = '800 17px Inter, Arial, sans-serif';
    context.fillText('CERTIFICADO DESTACADO', 160, 1055);
    context.fillStyle = '#17233D';
    context.font = '700 38px Inter, Arial, sans-serif';
    context.fillText(certificateTitle.slice(0, 64), 158, 1110, 1120);
    context.fillStyle = '#65738B';
    context.font = '600 17px Inter, Arial, sans-serif';
    context.fillText('PRESENTACIÓN PERSONALIZADA  ·  ORIGINAL SIN ALTERACIONES', 160, 1157, 1100);

    context.beginPath();
    context.arc(1570, 1096, 48, 0, Math.PI * 2);
    context.fillStyle = '#FFF9E9';
    context.fill();
    context.strokeStyle = '#D3AC50';
    context.lineWidth = 2;
    context.stroke();
    context.fillStyle = '#0D52FF';
    context.textAlign = 'center';
    context.font = '800 15px Inter, Arial, sans-serif';
    context.fillText('AS', 1570, 1091);
    context.font = '700 9px Inter, Arial, sans-serif';
    context.fillStyle = '#6A7890';
    context.fillText('PORTAFOLIO', 1570, 1110);
    context.textAlign = 'left';

    return { canvas, certificateTitle };
  };

  const canvasToBlob = (canvas) => new Promise((resolve, reject) => {
    canvas.toBlob((blob) => blob ? resolve(blob) : reject(new Error('No se pudo generar el PNG')), 'image/png');
  });

  const updatePreview = async () => {
    if (!selectedImage) return;
    const currentPreviewSequence = ++previewSequence;

    try {
      const { canvas } = createArtwork();
      const blob = await canvasToBlob(canvas);
      if (currentPreviewSequence !== previewSequence) return;

      if (previewUrl) URL.revokeObjectURL(previewUrl);
      previewUrl = URL.createObjectURL(blob);
      previewImage.src = previewUrl;
    } catch {
      status.textContent = 'No se pudo actualizar la previsualización.';
    }
  };

  fileInput.addEventListener('change', async () => {
    const currentLoadSequence = ++loadSequence;
    const file = fileInput.files?.[0];
    selectedFile = null;
    selectedImage = null;
    downloadButton.disabled = true;
    preview.hidden = true;

    if (selectedImageUrl) {
      URL.revokeObjectURL(selectedImageUrl);
      selectedImageUrl = null;
    }

    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
      previewUrl = null;
    }

    if (!file) {
      status.textContent = 'Selecciona una imagen para habilitar la descarga.';
      return;
    }

    if (!['image/png', 'image/jpeg', 'image/webp'].includes(file.type)) {
      status.textContent = 'Formato no compatible. Selecciona una imagen PNG, JPG o WebP.';
      fileInput.value = '';
      return;
    }

    if (file.size > maxFileSize) {
      status.textContent = 'La imagen supera el límite de 12 MB. Elige un archivo más pequeño.';
      fileInput.value = '';
      return;
    }

    selectedFile = file;
    const image = new Image();
    const imageUrl = URL.createObjectURL(file);
    try {
      await new Promise((resolve, reject) => {
        image.addEventListener('load', resolve, { once: true });
        image.addEventListener('error', reject, { once: true });
        image.src = imageUrl;
      });
    } catch {
      URL.revokeObjectURL(imageUrl);
      selectedFile = null;
      fileInput.value = '';
      status.textContent = 'No se pudo leer la imagen. Prueba con otro archivo.';
      return;
    }

    if (currentLoadSequence !== loadSequence) {
      URL.revokeObjectURL(imageUrl);
      return;
    }

    selectedImage = image;
    selectedImageUrl = imageUrl;
    previewName.textContent = file.name;
    previewSize.textContent = `${(file.size / (1024 * 1024)).toFixed(2)} MB`;
    preview.hidden = false;
    downloadButton.disabled = false;
    status.textContent = 'Previsualización lista. Revisa el diseño y descarga tu copia.';
    await updatePreview();
  });

  ownerInput.addEventListener('input', updatePreview);
  titleInput.addEventListener('input', updatePreview);

  downloadButton.addEventListener('click', async () => {
    if (!selectedFile || !selectedImage) return;

    downloadButton.disabled = true;
    status.textContent = 'Preparando la descarga personalizada…';

    let downloadUrl = null;

    try {
      const { canvas, certificateTitle } = createArtwork();
      const blob = await canvasToBlob(canvas);
      downloadUrl = URL.createObjectURL(blob);
      const link = document.createElement('a');
      const safeTitle = certificateTitle
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '') || 'certificado';
      link.href = downloadUrl;
      link.download = `certificado-${safeTitle}-alfredo-sandoval.png`;
      link.click();
      const downloadUrlToRevoke = downloadUrl;
      setTimeout(() => URL.revokeObjectURL(downloadUrlToRevoke), 1000);
      downloadUrl = null;
      status.textContent = 'Descarga iniciada. Tu archivo original no se modificó.';
    } catch {
      status.textContent = 'No se pudo preparar la descarga. Prueba con otra imagen.';
    } finally {
      if (downloadUrl) URL.revokeObjectURL(downloadUrl);
      downloadButton.disabled = !selectedFile;
    }
  });
};

const renderProjectDetail = () => {
  const container = document.querySelector('#detail-content');
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id') || 'nova';
  const item = projectData[id] || projectData.nova;

  const markup = `
    <div class="detail-card glass-card">
      <div class="detail-card__body">
        <div>
          <p class="eyebrow">${item.category}</p>
          <h1>${item.title}</h1>
          <p class="hero__text">${item.summary}</p>
          <div class="detail-card__actions" style="margin-top: 1.2rem; display: flex; gap: 1rem; flex-wrap: wrap;">
            <a class="button" href="${item.url}" target="_blank" rel="noreferrer">Ver en Vercel</a>
            <a class="button button--ghost" href="proyectos.html">Volver</a>
          </div>
        </div>
        <div class="detail-visual" style="background: ${item.visual};"></div>
      </div>

      <div class="detail-meta">
        <div>
          <strong>Descripción</strong>
          <p>${item.description[0]}</p>
        </div>
        <div>
          <strong>Objetivo</strong>
          <p>${item.description[1]}</p>
        </div>
        <div>
          <strong>Resultado</strong>
          <p>Solución visual con foco en usabilidad, claridad y conversión.</p>
        </div>
      </div>

      <div class="detail-content">
        <section>
          <h3>Aspectos destacados</h3>
          <ul>
            ${item.highlights.map((point) => `<li>${point}</li>`).join('')}
          </ul>
        </section>
      </div>
    </div>
  `;

  container.innerHTML = markup;
};

const renderCertificateDetail = () => {
  const container = document.querySelector('#detail-content');
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id') || 'frontend';
  const item = certificateData[id] || certificateData.frontend;

  const markup = `
    <div class="detail-card glass-card">
      <div class="detail-card__body">
        <div>
          <p class="eyebrow">${item.category}</p>
          <h1>${item.title}</h1>
          <p class="hero__text">${item.summary}</p>
          <div class="detail-card__actions" style="margin-top: 1.2rem; display: flex; gap: 1rem; flex-wrap: wrap;">
            <a class="button" href="certificados.html">Volver</a>
          </div>
        </div>
        <div class="detail-visual" style="background: ${item.visual};"></div>
      </div>

      <div class="detail-meta">
        <div>
          <strong>Contenido</strong>
          <p>${item.description[0]}</p>
        </div>
        <div>
          <strong>Enfoque</strong>
          <p>${item.description[1]}</p>
        </div>
        <div>
          <strong>Aprendizaje</strong>
          <p>Fortalecimiento de habilidades prácticas y aplicadas al mundo real.</p>
        </div>
      </div>

      <div class="detail-content">
        <section>
          <h3>Temas abordados</h3>
          <ul>
            ${item.highlights.map((point) => `<li>${point}</li>`).join('')}
          </ul>
        </section>
      </div>
    </div>
  `;

  container.innerHTML = markup;
};

const initDetailPages = () => {
  const detailContent = document.querySelector('#detail-content');
  if (!detailContent) return;

  const pageType = document.body.dataset.page;
  if (pageType === 'project-detail') {
    renderProjectDetail();
  }

  if (pageType === 'certificate-detail') {
    renderCertificateDetail();
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initYear();
  initNavMenu();
  initResumePrint();
  initCertificateDownload();
  initDetailPages();
});
