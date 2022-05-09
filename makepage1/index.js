const header = document.querySelector("header");


// Navbar
const stickyNavbar = ()=>{
    header.classList.toggle("scrolled",window.pageYOffset>0);
    // page Y축이 0 이상일 경우에만 header class에 scrolled toggle
}

stickyNavbar();
window.addEventListener("scroll",stickyNavbar);


//Reveal
let sr = ScrollReveal({
    duration:2500,
    distance:"60px",
});

sr.reveal(".showcase-info",{delay:600});
sr.reveal(".showcase-image",{origin:"top",delay:900});