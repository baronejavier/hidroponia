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
// PRECIOS POR TRANSFERENCIA
// ═══════════════════════════════
const preciosTransferencia = {
  p1: 140000,
  p2: 175000,
  p3: 115000
};

function formatearPrecio(num) {
  return "$" + num.toLocaleString("es-AR");
}

function aplicarPrecios() {
  const p1El = document.getElementById("precio1");
  const p2El = document.getElementById("precio2");
  const p3El = document.getElementById("precio3");

  if (p1El) p1El.textContent = formatearPrecio(preciosTransferencia.p1);
  if (p2El) p2El.textContent = formatearPrecio(preciosTransferencia.p2);
  if (p3El) p3El.textContent = formatearPrecio(preciosTransferencia.p3);
}

aplicarPrecios();