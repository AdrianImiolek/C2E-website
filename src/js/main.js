const nav = document.querySelector('.nav-mobile');
const navShadow = document.querySelector('.nav-shadow');
const navBtn = document.querySelector('.nav-button');
const allNavLinks = document.querySelectorAll('.nav__link');
const footerCurrentDate = document.querySelector('.current-date');

const toggleMenu = () => {
    navShadow.classList.toggle("nav-shadow-active");
    nav.classList.toggle("nav-active");
    allNavLinks.forEach((item) => {
        item.addEventListener("click", () => {
            nav.classList.remove("nav-active");
            navShadow.classList.remove("nav-shadow-active");
        })
    }) 
}

const handleYear = () => {
    const year = new Date().getFullYear();
    footerCurrentDate.textContent = year;
}

handleYear();
navBtn.addEventListener('click',toggleMenu);
navShadow.addEventListener('click',toggleMenu);
