/*   CURSOR*/

/* OBTENER CURSOR */

const cursor = document.getElementById("cursor");


/* MOVIMIENTO CURSOR */

document.addEventListener("mousemove",(e)=>{

    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";

});


/*  NAVBAR SCROLL */

window.addEventListener("scroll",()=>{

    /* OBTENER NAV */

    const nav = document.querySelector("nav");


    /* CAMBIAR FONDO */

    if(window.scrollY > 50){

        nav.style.background = "rgba(0,0,0,.95)";

    }else{

        nav.style.background = "rgba(0,0,0,.85)";

    }

});


/*  EFECTO CARDS */

/* OBTENER TARJETAS */

const cards = document.querySelectorAll(

    ".service-card, .product-card"

);


/* EFECTO ENTRAR */

cards.forEach((card)=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform = "translateY(-10px)";

    });

});


/* EFECTO SALIR */

cards.forEach((card)=>{

    card.addEventListener("mouseleave",()=>{

        card.style.transform = "translateY(0px)";

    });

});


/*   MENSAJE */

console.log("Sitio cargado correctamente 🚗");