document.addEventListener('contextmenu', event => event.preventDefault());

const precios = [
  { id: 1, valor: 144900 },
  { id: 2, valor: 189900 },
];

const descuentoNormal = 0.05;

precios.forEach(prod => {
  const precioOriginal = prod.valor;
  const precioFinal = Math.round(precioOriginal * (1 - descuentoNormal));

  document.getElementById(`precio${prod.id}-original`).innerHTML =
    `<span class="tachado">$${precioOriginal.toLocaleString("es-AR")}</span>`;

  document.getElementById(`precio${prod.id}-descuento`).innerHTML =
    `<span class="descuento">$${precioFinal.toLocaleString("es-AR")}</span>`;

  document.getElementById(`oferta${prod.id}-transferencia`).innerHTML =
    `💸 5% off con transferencia`;
});

const barraTexto = document.getElementById("barra-texto");
const contadorTexto = document.getElementById("contador-texto");
const contadorTiempo = document.getElementById("contador-tiempo");
const barraContador = document.getElementById("barra-contador");

barraTexto.innerHTML = "🌱 El futuro de tus plantas empieza aquí";
contadorTexto.textContent = "💧 Tecnología y cuidado en cada planta";
contadorTiempo.innerHTML = "";
barraContador.innerHTML = "";
























