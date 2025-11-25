document.addEventListener('contextmenu', event => event.preventDefault());

// ===========================
// 1️⃣ Precios base
const precios = [
  { id: 1, valor: 139900 },
  { id: 2, valor: 184900 },
];

const descuentoOferta = 0.10; // fin de semana
const descuentoNormal = 0.05; // días de semana

// ===========================
// 2️⃣ Verificar si estamos en oferta (sábado o domingo)
const hoy = new Date();
const diaSemana = hoy.getDay(); // 0 = domingo, 6 = sábado
const mes = hoy.getMonth();
const año = hoy.getFullYear();

const tieneDescuento = diaSemana === 0 || diaSemana === 6; // true sábados y domingos

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
    : `💸 5% off con transferencia`;
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
    // Fin de la oferta: domingo 23:59:59
    const proximoDomingo = new Date(hoy);
    proximoDomingo.setDate(hoy.getDate() + (7 - hoy.getDay()) % 7);
    proximoDomingo.setHours(23, 59, 59, 999);
    objetivo = proximoDomingo;
  } else {
    // Próximo inicio de oferta: sábado 00:00:00
    const diasHastaSabado = (6 - hoy.getDay() + 7) % 7;
    const proximoSabado = new Date(hoy);
    proximoSabado.setDate(hoy.getDate() + diasHastaSabado);
    proximoSabado.setHours(0, 0, 0, 0);
    objetivo = proximoSabado;
  }
  return objetivo;
}

function actualizarContador() {
  const ahora = new Date().getTime();
  const objetivo = calcularFechaObjetivo().getTime();
  const diferencia = objetivo - ahora;

  if (diferencia <= 0) {
    contadorTiempo.innerHTML = tieneDescuento
      ? "🌱 ¡Fin de semana de ofertas finalizado!"
      : "💧 Preparando las próximas ofertas...";
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
    barraTexto.innerHTML = "🌿 Fin de semana de ofertas - 10% OFF";
    contadorTexto.textContent = "⏳ La oferta termina en:";
  } else {
    barraTexto.innerHTML = "🌱 El futuro de tus plantas empieza aquí";
    contadorTexto.textContent = "💧 Tecnología y cuidado en cada planta";
    contadorTiempo.innerHTML = "";
    barraContador.innerHTML = "";
  }
}

setInterval(actualizarContador, 1000);
actualizarContador();

















