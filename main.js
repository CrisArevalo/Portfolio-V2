/* =================================== MENU SHOW AND HIDDEN =================================== */
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

/* =================================== VALIDATIONS =================================== */
if(navToggle){
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    })
}
/* =================================== MENU HIDDEN =================================== */
if(navClose){
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // Cuando clickeamos en cada nav__link cerramos el menu.
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

