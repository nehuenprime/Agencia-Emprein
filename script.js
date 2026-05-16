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