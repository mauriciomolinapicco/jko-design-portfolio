document.addEventListener("DOMContentLoaded", function() {

    const photoItems = document.querySelectorAll('.grid-item img');
    const modal = document.getElementById('lightbox-modal');
    const lightboxImage = document.getElementById('lightbox-image');
    const closeBtn = document.getElementById('close-btn');
    const todasBtn = document.getElementById('todas-btn');  // Añadí esta línea por si 'todasBtn' no estaba definido

    // Mostrar el modal con la imagen y detalles
    photoItems.forEach(item => {
        item.addEventListener('click', function() {
            const imageSrc = item.getAttribute('src');
            lightboxImage.src = imageSrc;
            modal.classList.remove('hidden');
        });
    });

    // Cerrar el modal al hacer clic en el botón de cierre
    closeBtn.addEventListener('click', function() {
        modal.classList.add('hidden');
    });

    // Cerrar el modal si el usuario hace clic fuera del contenido
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });

    // Activar y desactivar el zoom de la imagen al hacer clic en ella
    lightboxImage.addEventListener('click', function(e) {
        const rect = lightboxImage.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;  // Normaliza la posición X
        const y = (e.clientY - rect.top) / rect.height;  // Normaliza la posición Y

        // Asigna las posiciones normalizadas como variables CSS para el origen del zoom
        lightboxImage.style.setProperty('--x', x);
        lightboxImage.style.setProperty('--y', y);

        // Cambia la clase para activar el zoom
        lightboxImage.classList.toggle('zoomed');

        // Ajusta el origen del zoom para que se enfoque en el área donde el usuario hizo clic
        lightboxImage.style.transformOrigin = `${x * 100}% ${y * 100}%`;
    });

    // Ya le doy el color diferente al botón de "Todos"
   
    todasBtn.classList.add("bg-bege", "text-white");
});


// LOGICA DE BOTONES DE PORTFOLIO
const internas = document.getElementById("internas");
const externas = document.getElementById("externas");
const isometricas = document.getElementById("isometricas");
const internasMobile = document.getElementById("internas-mobile");
const externasMobile = document.getElementById("externas-mobile");
const isometricasMobile = document.getElementById("isometricas-mobile");

const titulos = document.querySelectorAll(".titulos-portfolio");

function resetButtons() {
    todasBtn.classList.remove("bg-bege", "text-white");
    internasBtn.classList.remove("bg-bege", "text-white");
    externasBtn.classList.remove("bg-bege", "text-white");
    isometricasBtn.classList.remove("bg-bege", "text-white");
}

function hideTitulos() {
    titulos.forEach(titulo => {
        titulo.style.display = "none";
    }) 
}

function showTitulos() {
    titulos.forEach(titulo => {
        titulo.style.display = "block";
    }) 
}

todasBtn.addEventListener("click", function() {
    resetButtons();
    showTitulos();
    todasBtn.classList.add("bg-bege", "text-white");

    if (window.innerWidth > 768) {
        internas.style.display = "block";
        externas.style.display = "block";
        isometricas.style.display = "block";
        internasMobile.style.display = "none";
        externasMobile.style.display = "none";
        isometricasMobile.style.display = "none";
    } else {
        internas.style.display = "none";
        externas.style.display = "none";
        isometricas.style.display = "none";
        internasMobile.style.display = "block";
        externasMobile.style.display = "block";
        isometricasMobile.style.display = "block";

    }
})

internasBtn.addEventListener("click", function() {
    resetButtons();
    hideTitulos();

    internasBtn.classList.add("bg-bege", "text-white");
    if (window.innerWidth > 768) {
        internas.style.display = "block";
        externas.style.display = "none";
        isometricas.style.display = "none";
        internasMobile.style.display = "none";
        externasMobile.style.display = "none";
        isometricasMobile.style.display = "none";
    } else {
        internas.style.display = "none";
        externas.style.display = "none";
        isometricas.style.display = "none";
        internasMobile.style.display = "block";
        externasMobile.style.display = "none";
        isometricasMobile.style.display = "none";

    }
})

externasBtn.addEventListener("click", function() {
    resetButtons();
    hideTitulos();

    externasBtn.classList.add("bg-bege", "text-white");

    if (window.innerWidth > 768) {
        internas.style.display = "none";
        externas.style.display = "block";
        isometricas.style.display = "none";
        internasMobile.style.display = "none";
        externasMobile.style.display = "none";
        isometricasMobile.style.display = "none";
    } else {
        internas.style.display = "none";
        externas.style.display = "none";
        isometricas.style.display = "none";
        internasMobile.style.display = "none";
        externasMobile.style.display = "block";
        isometricasMobile.style.display = "none";

    }})

isometricasBtn.addEventListener("click", function() {
    resetButtons();
    hideTitulos();

    isometricasBtn.classList.add("bg-bege", "text-white");

    if (window.innerWidth > 768) {
        internas.style.display = "none";
        externas.style.display = "none";
        isometricas.style.display = "block";
        internasMobile.style.display = "none";
        externasMobile.style.display = "none";
        isometricasMobile.style.display = "none";
    } else {
        internas.style.display = "none";
        externas.style.display = "none";
        isometricas.style.display = "none";
        internasMobile.style.display = "none";
        externasMobile.style.display = "none";
        isometricasMobile.style.display = "block";

    }})