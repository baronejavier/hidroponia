'use strict';

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");

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

const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
}, { passive: true });

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

document.querySelectorAll(".faq-item").forEach(item => {
  const btn = item.querySelector(".faq-q");

  btn.addEventListener("click", () => {
    const estaAbierto = item.classList.contains("open");
    
    document.querySelectorAll(".faq-item").forEach(i => {
      i.classList.remove("open");
      i.querySelector(".faq-q").setAttribute("aria-expanded", "false");
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

const preciosTransferencia = {
  p1: 154900,
  p2: 194900,
  p3: 129900
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
