// 4. menu item
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// 3. scroll section active link
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // 1. sticky navbar
    const header = document.querySelector('.header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // 5. remove menu icon navbar when click link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// 2. swiper 
var swiper = new Swiper(".swiper-1", {
    slidesPerView: 1,
    grabCursor: true,
    spaceBetween: 55,
    loop: true,
    pagination: {
        el: ".swiper-pagination-1",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// 6. dark light mode
const darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};

// 7.scroll reveal
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });

ScrollReveal().reveal('.profile-card, .category-box, .training-box, .testimony-wrapper', { origin: 'bottom' });

ScrollReveal().reveal('.about-img, .recruitment-content, .contact-content, .home-content h1', { origin: 'left' });

ScrollReveal().reveal('.about-content, .contact-container iframe', { origin: 'right' });

// 8. typed js
const typed = new Typed('.multiple-text', {
    strings: ['Housemaid', 'Babysitter', 'Nanny', 'Elderly Caregiver',],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
