/* =========================
PAGE LOADER
========================= */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");
    
    setTimeout(() => {
    loader.style.display = "none";
    }, 800);
    
    });
    
    /* =========================
    MOBILE MENU
    ========================= */
    
    const menuBtn = document.querySelector(".menu-btn");
    const navbar = document.querySelector(".navbar");
    
    menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
    });
    
    /* =========================
    CLOSE MENU AFTER CLICK
    ========================= */
    
    document.querySelectorAll(".navbar a")
    .forEach(link => {
    
    link.addEventListener("click", () => {
    navbar.classList.remove("active");
    });
    
    });
    
    /* =========================
    STICKY HEADER SHADOW
    ========================= */
    
    window.addEventListener("scroll", () => {
    
    const header = document.querySelector(".header");
    
    if(window.scrollY > 50){
    header.style.boxShadow =
    "0 5px 20px rgba(0,0,0,.12)";
    }
    else{
    header.style.boxShadow =
    "0 2px 15px rgba(0,0,0,.08)";
    }
    
    });
    