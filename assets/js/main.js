document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const btn = document.getElementById('menu-btn');
    const nav = document.getElementById('mobile-nav');

    btn.addEventListener('click', () => {
        nav.classList.toggle('hidden');
    });

    // Navbar Scroll Effect
    const header = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('bg-white', 'shadow-md', 'py-2');
            header.classList.remove('bg-transparent', 'py-4');
            header.querySelectorAll('.nav-link').forEach(el => el.classList.remove('text-white'));
            header.querySelectorAll('.nav-link').forEach(el => el.classList.add('text-green-900'));
            // Logo text color change if needed
            document.getElementById('logo-text').classList.remove('text-white');
            document.getElementById('logo-text').classList.add('text-green-900');
        } else {
            header.classList.remove('bg-white', 'shadow-md', 'py-2');
            header.classList.add('bg-transparent', 'py-4');
            header.querySelectorAll('.nav-link').forEach(el => el.classList.add('text-white'));
            header.querySelectorAll('.nav-link').forEach(el => el.classList.remove('text-green-900'));
            // Logo text color change
            document.getElementById('logo-text').classList.add('text-white');
            document.getElementById('logo-text').classList.remove('text-green-900');
        }
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
