// Esperar a que cargue el documento
document.addEventListener('DOMContentLoaded', () => {

    // 1. Menú Hamburguesa Móvil
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Cerrar menú móvil al hacer clic en un enlace
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // 2. Filtro de Galería
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Cambiar clase activa
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // 3. Manejo del Formulario de Contacto
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Obtener valores de los campos
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;

            // Simulación de envío exitoso
            formStatus.className = 'form-status success';
            formStatus.innerHTML = `¡Gracias <strong>${nombre}</strong>! Tu mensaje ha sido enviado correctamente. Te contactaremos pronto a <em>${email}</em>.`;

            // Limpiar formulario
            contactForm.reset();

            // Ocultar mensaje después de 6 segundos
            setTimeout(() => {
                formStatus.style.display = 'none';
            }, 6000);
        });
    }
});

// 4. Funciones de Lightbox
function openLightbox(src, caption) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');

    lightboxImg.src = src;
    lightboxCaption.textContent = caption;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}
