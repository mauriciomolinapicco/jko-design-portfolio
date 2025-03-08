/*document.querySelector('#externasBtn').addEventListener('click', function() {
    document.querySelector('#internas').style.display = 'none';
    document.querySelector('#externas').style.display = 'block';
})

document.querySelector('#internasBtn').addEventListener('click', function() {
    document.querySelector('#externas').style.display = 'none';
    document.querySelector('#internas').style.display = 'block';

})*/

document.addEventListener("DOMContentLoaded", function() {
    const photoItems = document.querySelectorAll('.grid-item img');
    const modal = document.getElementById('lightbox-modal');
    const lightboxImage = document.getElementById('lightbox-image');
    const closeBtn = document.getElementById('close-btn');

    // Mostrar el modal con la imagen y detalles
    photoItems.forEach(item => {
        item.addEventListener('click', function() {
            const imageSrc = item.getAttribute('src');
            const title = item.getAttribute('data-title');
            const description = item.getAttribute('data-description');

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
    lightboxImage.addEventListener('click', function() {
        this.classList.toggle('zoomed');
    });
});


// funcionalidad para el zoom
const lightboxImage = document.getElementById('lightbox-image');

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



const internas = document.getElementById("internas");
const externas = document.getElementById("externas");
const isometricas = document.getElementById("isometricas");
const titulos = document.querySelectorAll(".titulos-portfolio");

function resetButtons() {
    todasBtn.classList.remove("bg-bege", "text-white", "border-none", "shadow-lg");
    internasBtn.classList.remove("bg-bege", "text-white", "border-none", "shadow-lg");
    externasBtn.classList.remove("bg-bege", "text-white", "border-none", "shadow-lg");
    isometricasBtn.classList.remove("bg-bege", "text-white", "border-none", "shadow-lg");
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

document.getElementById("todasBtn").addEventListener("click", function() {
    resetButtons();
    showTitulos();
    todasBtn.classList.add("bg-bege", "text-white", "border-none", "shadow-lg");

    internas.style.display = "block";
    externas.style.display = "block";
    isometricas.style.display = "block";
})

document.getElementById("internasBtn").addEventListener("click", function() {
    resetButtons();
    hideTitulos();

    internasBtn.classList.add("bg-bege", "text-white", "border-none", "shadow-lg");

    internas.style.display = "block";
    externas.style.display = "none";
    isometricas.style.display = "none";
})

document.getElementById("externasBtn").addEventListener("click", function() {
    resetButtons();
    hideTitulos();

    externasBtn.classList.add("bg-bege", "text-white", "border-none", "shadow-lg");

    internas.style.display = "none";
    externas.style.display = "block";
    isometricas.style.display = "none";
})

document.getElementById("isometricasBtn").addEventListener("click", function() {
    resetButtons();
    hideTitulos();

    isometricasBtn.classList.add("bg-bege", "text-white", "border-none", "shadow-lg");

    internas.style.display = "none";
    externas.style.display = "none";
    isometricas.style.display = "block";
})