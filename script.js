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

// carrusel de proyectos 

document.querySelectorAll('.tst-track').forEach(track => {
    const controls = track.nextElementSibling;
    if (!controls || !controls.classList.contains('tst-controls')) return;

    const cards = [...track.children];
    const [prev, next] = controls.querySelectorAll('.tst-btn');
    const dotsBox = controls.querySelector('.tst-dots');

    const perView = () => (innerWidth > 900 ? 3 : innerWidth > 600 ? 2 : 1);
    const step = () =>
    cards[0].offsetWidth + (parseFloat(getComputedStyle(track).columnGap) || 0);
    const positions = () => Math.max(cards.length - perView() + 1, 1);
    const current = () => Math.min(Math.round(track.scrollLeft / step()), positions() - 1);

    const goTo = i => track.scrollTo({ left: i * step(), behavior: 'smooth' });

    function buildDots() {
        dotsBox.innerHTML = '';
        for (let i = 0; i < positions(); i++) {
            const d = document.createElement('button');
            d.className = 'tst-dot';
            d.setAttribute('aria-label', 'Ir al elemento ' + (i + 1));
            d.addEventListener('click', () => goTo(i));
            dotsBox.appendChild(d);
        }
        controls.classList.toggle('is-hidden', positions() <= 1);
        update();
    }

    function update() {
        const c = current();
        [...dotsBox.children].forEach((d, i) => d.classList.toggle('active', i === c));
        prev.disabled = c === 0;
        next.disabled = c >= positions() - 1;
        prev.style.opacity = prev.disabled ? 0.4 : 1;
        next.style.opacity = next.disabled ? 0.4 : 1;
    }

    prev.addEventListener('click', () => goTo(Math.max(current() - 1, 0)));
    next.addEventListener('click', () => goTo(Math.min(current() + 1, positions() - 1)));
    track.addEventListener('scroll', update, { passive: true });
    addEventListener('resize', buildDots);
    buildDots();
});

// carrusel de opiniones 

(() => {
    const track = document.getElementById('tstTrack');
    if (!track) return;
    const cards = [...track.querySelectorAll('.tst-card')];
    const prev = document.getElementById('tstPrev');
    const next = document.getElementById('tstNext');
    const dotsBox = document.getElementById('tstDots');
    const controls = document.getElementById('tstControls');

    const perView = () => (innerWidth > 900 ? 3 : innerWidth > 600 ? 2 : 1);
    const step = () => cards[0].offsetWidth + parseFloat(getComputedStyle(track).columnGap || 0);
    const positions = () => Math.max(cards.length - perView() + 1, 1);
    const current = () => Math.min(Math.round(track.scrollLeft / step()), positions() - 1);

    function goTo(i) {
        track.scrollTo({ left: i * step(), behavior: 'smooth' });
    }

    function buildDots() {
        dotsBox.innerHTML = '';
        for (let i = 0; i < positions(); i++) {
            const d = document.createElement('button');
            d.className = 'tst-dot';
            d.setAttribute('aria-label', 'Ir al testimonio ' + (i + 1));
            d.addEventListener('click', () => goTo(i));
            dotsBox.appendChild(d);
        }
        controls.classList.toggle('is-hidden', positions() <= 1);
        update();
    }

    function update() {
        const c = current();
        [...dotsBox.children].forEach((d, i) => d.classList.toggle('active', i === c));
        prev.disabled = c === 0;
        next.disabled = c >= positions() - 1;
        prev.style.opacity = prev.disabled ? .4 : 1;
        next.style.opacity = next.disabled ? .4 : 1;
    }

    prev.addEventListener('click', () => goTo(Math.max(current() - 1, 0)));
    next.addEventListener('click', () => goTo(Math.min(current() + 1, positions() - 1)));
    track.addEventListener('scroll', update, { passive: true });
    addEventListener('resize', buildDots);
    buildDots();
})();