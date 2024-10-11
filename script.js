function sendWhatsApp() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const serviceType = document.getElementById("service-type").value;
    const message = document.getElementById("message").value;

    const whatsappMessage = `Hola, soy ${name}. Mi email es ${email}. Estoy interesado en el servicio de ${serviceType}. Mensaje: ${message}`;
    const whatsappNumber = "5493765188420"; // Reemplaza con tu número de WhatsApp
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Redirige al usuario a WhatsApp
    window.open(url, "_blank");

    // Limpia el formulario
    document.getElementById("contact-form").reset();
}