// ----------------------- Show Menu -----------------------
const navMenu = document.getElementById('nav-menu')
const navToogle = document.getElementById('toogle-btn')
const navClose = document.getElementById('nav-close')

// Menu Show
if (navToogle) {
    navToogle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// Menu Hidden
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// ----------------------- Remove Menu Mobile -----------------------
const navLink = document.querySelectorAll('.nav-link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// ----------------------- Swipper Honme -----------------------
const swiperHome = new Swiper('.home-swiper', {
    loop: true,
    speed: 800,
    parallax: true,
    effect: 'fade',
  
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      formatFractionCurrent: (number) => {return '0' + number},
      formatFractionTotal: (number) => {return '0' + number},
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});