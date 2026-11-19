'use strict';

const productos = {
  p1: {
    precioMP: 169900, 
    precioTransfer: 154900, 
    linkMP: "https://mpago.la/33tQ7Ns" 
  },
  p2: {
    precioMP: 214900,
    precioTransfer: 194900,
    linkMP: "https://mpago.la/1jdUSvy"
  },
  p3: {
    precioMP: 144900,
    precioTransfer: 129900,
    linkMP: "https://mpago.la/2kqVQ3f"
  }
  // Para agregar un nuevo producto, solo sumá una nueva entrada:
  // p4: { precioMP: 0, precioTransfer: 0, linkMP: "..." }
};

function formatearPrecio(num) {
  if (num === 0) return "$ Consultar";
  return "$" + num.toLocaleString("es-AR");
}

function aplicarPrecios() {
  // Busca todas las tarjetas con data-id y aplica precio/link dinámicamente
  document.querySelectorAll('.oferta-card[data-id]').forEach(card => {
    const id = card.dataset.id;
    const producto = productos[id];
    if (!producto) return;

    const elMP = card.querySelector('[data-role="mp"]');
    const elTrans = card.querySelector('[data-role="transfer"]');
    const elLink = card.querySelector('[data-role="link-mp"]');

    if (elMP) elMP.textContent = formatearPrecio(producto.precioMP);
    if (elTrans) elTrans.textContent = formatearPrecio(producto.precioTransfer);
    if (elLink) elLink.href = producto.linkMP;
  });
}

aplicarPrecios();

// ============================================
// MENÚ HAMBURGUESA
// ============================================
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");

if (hamburger && mobileMenu) {
  hamburger.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    hamburger.classList.toggle("active");
    hamburger.setAttribute("aria-expanded", isOpen);
  });

  document.querySelectorAll("#mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      hamburger.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });
}

// ============================================
// NAVBAR SCROLL
// ============================================
const navbar = document.getElementById("navbar");
if (navbar) {
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  }, { passive: true });
}

// ============================================
// REVEAL ON SCROLL
// ============================================
const revealElements = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealElements.forEach(el => revealObserver.observe(el));

// ============================================
// CONTADORES ANIMADOS (respeta prefers-reduced-motion)
// ============================================
const prefiereMovimientoReducido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const counters = document.querySelectorAll(".stat-num");
let countersActivados = false;

if (!prefiereMovimientoReducido && counters.length > 0) {
  const statsObserver = new IntersectionObserver((entries, observer) => {
    if (entries[0].isIntersecting && !countersActivados) {
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
      countersActivados = true;
      observer.disconnect();
    }
  }, { threshold: 0.4 });

  const statsSection = document.querySelector(".hero-stats");
  if (statsSection) statsObserver.observe(statsSection);
} else if (counters.length > 0) {
  counters.forEach(counter => {
    counter.textContent = counter.dataset.target;
  });
}

// ============================================
// PARTÍCULAS DEL HERO
// ============================================
const particlesContainer = document.getElementById("particles");
if (particlesContainer && !prefiereMovimientoReducido) {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 35; i++) {
    const p = document.createElement("span");
    p.classList.add("particle");
    p.style.left = Math.random() * 100 + "%";
    p.style.animationDuration = (5 + Math.random() * 10) + "s";
    p.style.opacity = Math.random();
    fragment.appendChild(p);
  }
  particlesContainer.appendChild(fragment);
}

// ============================================
// ACORDEÓN DE PREGUNTAS FRECUENTES
// ============================================
document.querySelectorAll(".pregunta-item").forEach(item => {
  const btn = item.querySelector(".pregunta-q");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const estaAbierto = item.classList.contains("open");
    
    document.querySelectorAll(".pregunta-item").forEach(i => {
      i.classList.remove("open");
      i.querySelector(".pregunta-q")?.setAttribute("aria-expanded", "false");
    });

    if (!estaAbierto) {
      item.classList.add("open");
      btn.setAttribute("aria-expanded", "true");
    }
  });

  btn.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      btn.click();
    }
  });
});
