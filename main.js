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

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills__content"),
    skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i=0; i < skillsContent.length; i++){
        skillsContent[i].className = "skills__content skills__close"
    }
    if(itemClass === "skills__content skills__close"){
        this.parentNode.className = "skills__content skills__open";
    }
}

skillsHeader.forEach((t) => {
    t.addEventListener("click", toggleSkills)
})

/*==================== QUALIFICATION TABS ====================
let tabs = document.querySelectorAll("[data-target]");
let tabContents = document.querySelectorAll("[data-content]");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tabContent => {
            tabContent.classList.remove("qualification__active");
        })
        
        target.classList.add("qualification__active");

        tab.forEach(tab => {
            tab.classList.remove("qualification__active")
        })

        tab.classList.add("qualification__active")
    })
})
/* LO DEJO PARA MAS ADELANTE CUANDO TENGA UN EMPLEO QUE PONER. */ 

/* =================================================== */

/* ==================== SERVICES MODAL ==================== */
const modalViews = document.querySelectorAll(".services__modal");
const modalBtns = document.querySelectorAll(".services__button");
const modalClose = document.querySelectorAll(".services__modal-close");

let modal = function(modalClick){
    modalViews[modalClick].classList.add("active-modal");
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener("click", () => {
        modal(i);
    })
})

modalClose.forEach((modalClose) => {
    modalClose.addEventListener("click", () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove("active-modal");
        })
    })
})