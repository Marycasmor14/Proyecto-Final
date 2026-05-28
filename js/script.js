/* CURSOR PERSONALIZADO */

const cursor = document.getElementById("cursor");


/* MOVIMIENTO DEL CURSOR */

document.addEventListener("mousemove",(e)=>{

    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";

});


/* CAMBIO DE COLOR EN NAVBAR */

window.addEventListener("scroll",()=>{

    const nav = document.querySelector("nav");

    if(window.scrollY > 50){

        nav.style.background = "rgba(0,0,0,.95)";

    }

    else{

        nav.style.background = "rgba(0,0,0,.85)";

    }

});


/* MENSAJE EN CONSOLA */

console.log("Proyecto cargado correctamente");