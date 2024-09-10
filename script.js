const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');

    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('active');
        navbar.classList.toggle('active');
    });

    navbar.addEventListener('click', () => {
        menuIcon.classList.remove('active');
        navbar.classList.remove('active');
    });