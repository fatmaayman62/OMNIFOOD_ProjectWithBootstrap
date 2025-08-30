let header = document.querySelector("header");
let navbar_toggler_icon = document.querySelector(".navbar-toggler-icon");
 
window.addEventListener('scroll', () => {
    header.classList.toggle("shadow" , window.scrollY > 0); 
});
navbar_toggler_icon.addEventListener('click', () => {
    header.classList.toggle("shadow"); 
});