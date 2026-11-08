document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

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
};

function formatearPrecio(num) {
  if (num === 0) return "$ Consultar";
  return "$" + num.toLocaleString("es-AR");
}

function aplicarPrecios() {
  const p1mp = document.getElementById("precio-mp-1");
  const p1trans = document.getElementById("precio-transfer-1");
  const p1link = document.getElementById("link-mp-1");
  
  const p2mp = document.getElementById("precio-mp-2");
  const p2trans = document.getElementById("precio-transfer-2");
  const p2link = document.getElementById("link-mp-2");
  
  const p3mp = document.getElementById("precio-mp-3");
  const p3trans = document.getElementById("precio-transfer-3");
  const p3link = document.getElementById("link-mp-3");

  if(p1mp) p1mp.textContent = formatearPrecio(productos.p1.precioMP);
  if(p1trans) p1trans.textContent = formatearPrecio(productos.p1.precioTransfer);
  if(p1link) p1link.href = productos.p1.linkMP;

  if(p2mp) p2mp.textContent = formatearPrecio(productos.p2.precioMP);
  if(p2trans) p2trans.textContent = formatearPrecio(productos.p2.precioTransfer);
  if(p2link) p2link.href = productos.p2.linkMP;

  if(p3mp) p3mp.textContent = formatearPrecio(productos.p3.precioMP);
  if(p3trans) p3trans.textContent = formatearPrecio(productos.p3.precioTransfer);
  if(p3link) p3link.href = productos.p3.linkMP;
}

aplicarPrecios();

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