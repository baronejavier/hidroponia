// ═══════════════════════════════
// CONFIGURACIÓN DE OFERTA
// ═══════════════════════════════
const ofertaConfig = {
  texto: "🔥 Producción inteligente en tu hogar",
  titulo: "Elegí tu sistema y empezá hoy",
  subtitulo: "Tecnología hidropónica diseñada para producir todo el año",
  duracionHoras: 48
};

// ═══════════════════════════════
// FECHA PERSISTENTE (URGENTE REAL)
// ═══════════════════════════════
let fechaFin = localStorage.getItem("oferta_fin");

if (!fechaFin) {
  const ahora = new Date();
  ahora.setHours(ahora.getHours() + ofertaConfig.duracionHoras);
  fechaFin = ahora.getTime();
  localStorage.setItem("oferta_fin", fechaFin);
} else {
  fechaFin = parseInt(fechaFin);
}

// ═══════════════════════════════
// TEXTOS DINÁMICOS
// ═══════════════════════════════
document.getElementById("barra-texto").textContent = ofertaConfig.texto;
document.getElementById("titulo-oferta").textContent = ofertaConfig.titulo;
document.getElementById("subtitulo-oferta").textContent = ofertaConfig.subtitulo;
document.getElementById("contador-texto").textContent = "Finaliza en:";

// ═══════════════════════════════
// CONTADOR
// ═══════════════════════════════
function actualizarContador() {
  const ahora = Date.now();
  const distancia = fechaFin - ahora;

  if (distancia <= 0) {
    document.getElementById("contador-tiempo").textContent = "Finalizado";
    document.getElementById("barra-contador").textContent = "Finalizado";
    return;
  }

  const h = Math.floor(distancia / (1000 * 60 * 60));
  const m = Math.floor((distancia / (1000 * 60)) % 60);
  const s = Math.floor((distancia / 1000) % 60);

  const tiempo = `${h}h ${m}m ${s}s`;

  document.getElementById("contador-tiempo").textContent = tiempo;
  document.getElementById("barra-contador").textContent = tiempo;
}

setInterval(actualizarContador, 1000);
actualizarContador();

// ═══════════════════════════════
// MENÚ MOBILE
// ═══════════════════════════════
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
  hamburger.classList.toggle("active");
});

document.querySelectorAll("#mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    hamburger.classList.remove("active");
  });
});

// ═══════════════════════════════
// NAVBAR SCROLL
// ═══════════════════════════════
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// ═══════════════════════════════
// REVEAL (OPTIMIZADO)
// ═══════════════════════════════
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.15
});

revealElements.forEach(el => observer.observe(el));

// ═══════════════════════════════
// CONTADORES HERO
// ═══════════════════════════════
const counters = document.querySelectorAll(".stat-num");

function activarContadores() {
  counters.forEach(counter => {
    const target = +counter.dataset.target;
    let current = 0;
    const increment = target / 60;

    function update() {
      current += increment;
      if (current < target) {
        counter.textContent = Math.ceil(current);
        requestAnimationFrame(update);
      } else {
        counter.textContent = target;
      }
    }

    update();
  });
}

let countersActivados = false;

const statsObserver = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting && !countersActivados) {
    activarContadores();
    countersActivados = true;
  }
}, { threshold: 0.4 });

const statsSection = document.querySelector(".hero-stats");
if (statsSection) statsObserver.observe(statsSection);

// ═══════════════════════════════
// FAQ INTERACTIVO
// ═══════════════════════════════
document.querySelectorAll(".faq-item").forEach(item => {
  const btn = item.querySelector(".faq-q");

  btn.addEventListener("click", () => {
    const abierto = item.classList.contains("open");

    document.querySelectorAll(".faq-item").forEach(i => i.classList.remove("open"));

    if (!abierto) item.classList.add("open");
  });
});

// ═══════════════════════════════
// SCROLL SUAVE
// ═══════════════════════════════
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ═══════════════════════════════
// PARTÍCULAS HERO
// ═══════════════════════════════
const particlesContainer = document.getElementById("particles");

if (particlesContainer) {
  for (let i = 0; i < 35; i++) {
    const p = document.createElement("span");
    p.classList.add("particle");

    p.style.left = Math.random() * 100 + "%";
    p.style.animationDuration = (5 + Math.random() * 10) + "s";
    p.style.opacity = Math.random();

    particlesContainer.appendChild(p);
  }
}

// ═══════════════════════════════
// PRECIOS ESTRATÉGICOS
// ═══════════════════════════════

// Ajuste dinámico según urgencia
let factorOferta = 1.35;

const horasRestantes = (fechaFin - Date.now()) / (1000 * 60 * 60);

if (horasRestantes < 12) {
  factorOferta = 1.35;
}

const preciosBase = {
  p1: 140000,
  p2: 175000,
  p3: 115000
};

function formatearPrecio(num) {
  return "$" + num.toLocaleString("es-AR");
}

function aplicarPrecios() {

  // Producto 1
  const p1_base = preciosBase.p1;
  const p1_final = Math.round(p1_base * factorOferta);

  document.getElementById("precio1-original").textContent = formatearPrecio(p1_final);
  document.getElementById("oferta1-transferencia").textContent =
    "Transferencia: " + formatearPrecio(p1_base);

  // Producto 2
  const p2_base = preciosBase.p2;
  const p2_final = Math.round(p2_base * factorOferta);

  document.getElementById("precio2-original").textContent = formatearPrecio(p2_final);
  document.getElementById("oferta2-transferencia").textContent =
    "Transferencia: " + formatearPrecio(p2_base);

  // Producto 3
  const p3_base = preciosBase.p3;
  const p3_final = Math.round(p3_base * factorOferta);

  document.getElementById("precio3-original").textContent = formatearPrecio(p3_final);
  document.getElementById("oferta3-transferencia").textContent =
    "Transferencia: " + formatearPrecio(p3_base);
}

aplicarPrecios();
