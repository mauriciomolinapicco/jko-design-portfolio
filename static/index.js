//flecha do hero section 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Scroll to section
function scrollToSection() {
    document.getElementById('scroll-target').scrollIntoView({ behavior: 'smooth' });
}

// portfolio open pictures
function openModal(src) {
    document.getElementById('modalImage').src = src;
    document.getElementById('imageModal').classList.add('open');
}
// Función para cerrar el modal
function closeModal() {
    document.getElementById('imageModal').classList.remove('open');
}


// B&W picture
const foto = document.getElementById('byn-foto');

foto.addEventListener('mouseenter', function() {
    this.classList.remove('grayscale');
    this.classList.add('no-grayscale');
});

foto.addEventListener('mouseleave', function() {
    this.classList.remove('no-grayscale');
    this.classList.add('grayscale');
});

// Navbar hamburger menu
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('[data-collapse-toggle]');
    const mobileMenu = document.getElementById('navbar-default');

    menuToggle.addEventListener('click', function() {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';

        // Toggle menu visibility
        mobileMenu.classList.toggle('hidden', isExpanded);
        
        // Update aria-expanded attribute
        this.setAttribute('aria-expanded', !isExpanded);
    });

    // Accordion
    const accordions = document.querySelectorAll('[data-accordion="collapse"]');

    accordions.forEach(accordion => {
        const buttons = accordion.querySelectorAll('button');
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                const target = document.querySelector(this.getAttribute('data-accordion-target'));
                const isExpanded = this.getAttribute('aria-expanded') === 'true';

                // Toggle the target visibility
                target.classList.toggle('hidden', isExpanded);
                
                // Update aria-expanded attribute
                this.setAttribute('aria-expanded', !isExpanded);

                // Toggle icon rotation
                const icon = this.querySelector('[data-accordion-icon]');
                if (icon) {
                    icon.classList.toggle('rotate-180', !isExpanded);
                    icon.classList.toggle('rotate-0', isExpanded);
                }
            });
        });
    });
});
