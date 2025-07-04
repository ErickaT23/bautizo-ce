// Función para abrir la invitación (sobre) y reproducir la música
function abrirInvitacion() {
    const envelope = document.getElementById('envelope');
    const invitacion = document.getElementById('invitacion');
    const musica = document.getElementById('musica');

    if (!envelope.classList.contains('open')) {
        // Abrir el sobre solo si aún no está abierto
        envelope.classList.add('open');

        setTimeout(() => {
            envelope.style.display = 'none';
            invitacion.style.display = 'block';

            // Reproducir música al abrir la invitación
            if (musica.paused) {
                musica.play();
            }
        }, 1000);
    } else {
        // Si el sobre ya está abierto, solo controlar la música
        if (musica.paused) {
            musica.play();
        } else {
            musica.pause();
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const sello = document.getElementById("seal");
    if (sello) {
        sello.addEventListener("click", abrirInvitacion);
    }

    // Iniciar contador y cargar datos del invitado al cargar la página
    iniciarContador();
    cargarDatosInvitado();

    // 👇 Aquí agregas esto 👇
    const params = new URLSearchParams(window.location.search);
    const invitadoId = params.get('id');

    if (invitadoId === '105') {
        document.getElementById('texto-confirmacion').innerText = 
            "Su presencia es muy importante para nosotros y por razones de protocolo y organización, es necesaria su confirmación lo antes posible o bien indicarnos si esta vez no podrán acompañarnos.";
    }
});


// Función para iniciar el contador de la fecha del evento
function iniciarContador() {
    const eventoFecha = new Date("July 26, 2025 00:00:00").getTime();

    setInterval(() => {
        const ahora = new Date().getTime();
        const diferencia = eventoFecha - ahora;

        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        document.getElementById("dias").innerText = dias;
        document.getElementById("horas").innerText = horas;
        document.getElementById("minutos").innerText = minutos;
        document.getElementById("segundos").innerText = segundos;
    }, 1000);
}

// Función para abrir el lightbox solo al hacer clic en una imagen de la galería
function changePhoto(element) {
    const mainPhotoModal = document.getElementById('main-photo-modal');
    mainPhotoModal.src = element.src;
    openModal();
}

// Función para mostrar el modal
function openModal() {
    const modal = document.getElementById('photo-modal');
    modal.style.display = 'flex';
}

// Función para cerrar el modal
function closeModal(event) {
    if (event.target.id === 'photo-modal' || event.target.className === 'close') {
        const modal = document.getElementById('photo-modal');
        modal.style.display = 'none';
    }
}

// Fade-in effect cuando los elementos se hacen visibles al hacer scroll
document.addEventListener("DOMContentLoaded", function() {
    const elementsToFade = document.querySelectorAll('.fade-in-element');

    const observerOptions = {
        threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elementsToFade.forEach(element => {
        observer.observe(element);
    });
});

// Función para abrir Waze o Google Maps
function elegirAplicacion() {
    const enlaceGoogleMaps = 'https://maps.app.goo.gl/dfD9cMEbSAdn56qV8';
    const enlaceWaze = 'https://www.waze.com/en/live-map/directions/iglesia-la-merced-la-antigua-guatemala?place=w.176488594.1764689328.480633';

    window.open(enlaceGoogleMaps, '_blank');
    setTimeout(() => {
        window.open(enlaceWaze, '_blank');
    }, 1000);
}

function elegirAplicacionOtraDireccion() {
    const enlaceGoogleMaps = 'https://maps.app.goo.gl/NnCguYMBKCZbxJh97';
    const enlaceWaze = 'https://waze.com/ul/h9fx77cwc9 ';

    window.open(enlaceGoogleMaps, '_blank');
    setTimeout(() => {
        window.open(enlaceWaze, '_blank');
    }, 1000);
}
//senal
// Ocultar la señal tras 5 segundos
setTimeout(() => {
    const senal = document.getElementById('desliza-senal');
    if (senal) {
        senal.style.display = 'none';
    }
}, 20000);

// O si prefieres al detectar scroll
/*document.addEventListener('scroll', () => {
    const senal = document.getElementById('desliza-senal');
    if (senal) {
        senal.style.display = 'none';
    }
});*/

function mostrarCategoria(categoria) {
    // Ocultar todas las galerías
    const galerias = document.querySelectorAll('.galeria');
    galerias.forEach(g => g.classList.add('oculto'));

    // Mostrar la galería seleccionada
    const galeriaSeleccionada = document.getElementById(`galeria-${categoria}`);
    if (galeriaSeleccionada) {
        galeriaSeleccionada.classList.remove('oculto');
    }
}

//opitmización de imágenes
