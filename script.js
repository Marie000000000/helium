const nav = document.querySelector(".navbar");

window.addEventListener('scroll', function() {
    if (window.scrollY) {
        nav.style.backgroundColor = "#474DFF";
        nav.style.transition = "1.5s";
    } else {
        nav.style.backgroundColor = "transparent";
    }
   
})