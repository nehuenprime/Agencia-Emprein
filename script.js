/* formulario */

document.addEventListener("DOMContentLoaded", () => {

    emailjs.init("tkspDk8bPvI-qeIks");

    const form = document.getElementById("formulario");

    form.addEventListener("submit", function(e){

        e.preventDefault();

        emailjs.sendForm(
            "EmpreinAgency",
            "template_n364m2c",
            this
        )
        .then(() => {

            alert("Mensaje enviado correctamente 🚀");
            form.reset();

        })
        .catch((error) => {

            console.log(error);
            alert("Error al enviar: " + error.text);

        });

    });

});

/* mejora del boton del navbar */

const navbar = document.querySelector(".navbar-collapse");
const icono = document.querySelector(".icono-menu");

// cuando abre
navbar.addEventListener("show.bs.collapse", () => {
    icono.innerHTML = "✕";
});

// cuando cierra
navbar.addEventListener("hide.bs.collapse", () => {
    icono.innerHTML = "☰";
});

// cerrar al hacer click en links
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        const bsCollapse = new bootstrap.Collapse(navbar, {
            toggle: false
        });
        bsCollapse.hide();
    });
});