// Menú móvil - abrir/cerrar
const menuToggle = document.getElementById('menuToggle');
const menuClose  = document.getElementById('menuClose');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle.addEventListener('click', () => {
    mobileMenu.style.display = 'block';
    setTimeout(() => mobileMenu.classList.add('show'), 10);
});

menuClose.addEventListener('click', () => {
    mobileMenu.classList.remove('show');
    setTimeout(() => { mobileMenu.style.display = 'none'; }, 300);
});

// Dropdowns del menú móvil
document.querySelectorAll('.mobile-dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        e.preventDefault();
        toggle.parentElement.classList.toggle('active');
    });
});

// Navbar sticky al hacer scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('sticky', window.scrollY > 100);
});
