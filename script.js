document.addEventListener('contextmenu', event => event.preventDefault());

const precios = [
  { id: 1, valor: 144900 },
  { id: 2, valor: 194900 },
];

const descuentoTransferencia = 0.05;

precios.forEach(prod => {
  const precio = prod.valor;
  const precioConDescuento = Math.round(precio * (1 - descuentoTransferencia));

  document.getElementById(`precio${prod.id}-original`).innerHTML =
    `<span class="precio">$${precio.toLocaleString("es-AR")}</span>`;

  const descuentoEl = document.getElementById(`precio${prod.id}-descuento`);
  if (descuentoEl) descuentoEl.innerHTML = "";

  document.getElementById(`oferta${prod.id}-transferencia`).innerHTML =
    `💸 5% OFF pagando con transferencia: <strong>$${precioConDescuento.toLocaleString("es-AR")}</strong>`;
});

const barraTexto = document.getElementById("barra-texto");
const contadorTexto = document.getElementById("contador-texto");
const contadorTiempo = document.getElementById("contador-tiempo");
const barraContador = document.getElementById("barra-contador");

barraTexto.innerHTML = "🌱 El futuro de tus plantas empieza aquí";
contadorTexto.textContent = "💧 Tecnología y cuidado en cada planta";
contadorTiempo.innerHTML = "";
barraContador.innerHTML = "";

