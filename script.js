document.addEventListener('contextmenu', event => event.preventDefault());

// ===========================
// 1️⃣ Precios base
const precios = [
  { id: 1, valor: 144900 },
  { id: 2, valor: 194900 },
  { id: 3, valor: 129900 },
  { id: 4, valor: 74900 }
];

const descuentoOferta = 0.10; // 1 al 10
const descuentoNormal = 0.05;  // resto del mes

// ===========================
// 2️⃣ Verificar si estamos en oferta
const hoy = new Date();
const dia = hoy.getDate();
const mes = hoy.getMonth();
const año = hoy.getFullYear();

const tieneDescuento = dia >= 1 && dia <= 10;

// ===========================
// 3️⃣ Aplicar precios y mensaje de transferencia
precios.forEach(prod => {
  const precioOriginal = prod.valor;
  const precioFinal = tieneDescuento
    ? Math.round(precioOriginal * (1 - descuentoOferta))
    : Math.round(precioOriginal * (1 - descuentoNormal));

  document.getElementById(`precio${prod.id}-original`).innerHTML = `<span class="tachado">$${precioOriginal.toLocaleString("es-AR")}</span>`;
  document.getElementById(`precio${prod.id}-descuento`).innerHTML = `<span class="descuento">$${precioFinal.toLocaleString("es-AR")}</span>`;

  document.getElementById(`oferta${prod.id}-transferencia`).innerHTML = tieneDescuento
    ? `💸 10% OFF por transferencia`
    : `💳 5% off con transferencia`;
});

// ===========================
// 4️⃣ Contador y barra superior
const barraTexto = document.getElementById("barra-texto");
const contadorTexto = document.getElementById("contador-texto");
const contadorTiempo = document.getElementById("contador-tiempo");
const barraContador = document.getElementById("barra-contador");

function calcularFechaObjetivo() {
  let objetivo;
  if (tieneDescuento) {
    // Fin de la oferta: día 10 23:59:59
    objetivo = new Date(año, mes, 10, 23, 59, 59);
  } else {
    // Próxima oferta: día 1 del próximo mes 00:00:00
    let mesProx = mes + 1;
    let añoProx = año;
    if (mesProx > 11) {
      mesProx = 0;
      añoProx += 1;
    }
    objetivo = new Date(añoProx, mesProx, 1, 0, 0, 0);
  }
  return objetivo;
}

function actualizarContador() {
  const ahora = new Date().getTime();
  const objetivo = calcularFechaObjetivo().getTime();
  const diferencia = objetivo - ahora;

  if (diferencia <= 0) {
    contadorTiempo.innerHTML = tieneDescuento
      ? "🌱 ¡Cosecha lista! Oferta finalizada"
      : "💧 Hidroponía en acción: ¡cuida tus plantas!";
    barraContador.innerHTML = contadorTiempo.innerHTML;
    return;
  }

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
  const segundos = Math.floor((diferencia / 1000) % 60);

  const textoTiempo = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
  contadorTiempo.innerHTML = textoTiempo;
  barraContador.innerHTML = textoTiempo;

  if (tieneDescuento) {
    barraTexto.innerHTML = "🌱 Promo del 1 al 10 - 10% OFF";
    contadorTexto.textContent = "⏳ La oferta termina en:";
  } else {
    // Mensajes fijos sin relación con ofertas
    barraTexto.innerHTML = "🌱 El futuro de tus plantas empieza aquí";
    contadorTexto.textContent = "💧 Tecnología y cuidado en cada planta";
    contadorTiempo.innerHTML = "";
    barraContador.innerHTML = "";
  }
}

setInterval(actualizarContador, 1000);
actualizarContador();
