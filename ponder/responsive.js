// responsive.js
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav a');

menuBtn.addEventListener('click', function() {

    this.classList.toggle('change');

    navLinks.forEach(link => {
        if (link.style.display === 'block') {
            link.style.display = 'none';
        } else {
            link.style.display = 'block';
        }
    });
});
