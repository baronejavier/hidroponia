document.addEventListener('contextmenu', event => event.preventDefault());

const precios = [
  { id: 1, valor: 150000 },
  { id: 2, valor: 195000 },
  { id: 3, valor: 125000 },
];

precios.forEach(prod => {
  const precio = prod.valor;

  document.getElementById(`precio${prod.id}-original`).innerHTML =
    `<span class="precio">$${precio.toLocaleString("es-AR")}</span>`;

  const descuentoEl = document.getElementById(`precio${prod.id}-descuento`);
  if (descuentoEl) descuentoEl.innerHTML = "";

  const ofertaEl = document.getElementById(`oferta${prod.id}-transferencia`);
  if (ofertaEl) ofertaEl.innerHTML = "";
});

const barraTexto = document.getElementById("barra-texto");
const contadorTexto = document.getElementById("contador-texto");
const contadorTiempo = document.getElementById("contador-tiempo");
const barraContador = document.getElementById("barra-contador");

barraTexto.innerHTML = "🌱 El futuro de tus plantas empieza aquí";
contadorTexto.textContent = "💧 Tecnología y cuidado en cada planta";
contadorTiempo.innerHTML = "";

barraContador.innerHTML = "";















