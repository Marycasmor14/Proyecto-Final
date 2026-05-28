document.addEventListener("DOMContentLoaded", () => {

const productos = [
       {nombre:"Aceite Motor", precio:250, img:"img/acemotor.png", desc:"Lubricante para motor"},
    {nombre:"Filtro Aire", precio:180, img:"img/aire.png", desc:"Filtra impurezas del aire"},
    {nombre:"Bujías", precio:300, img:"img/bujias.png", desc:"Encendido del motor"},
    {nombre:"Balatas", precio:450, img:"img/balatas.png", desc:"Sistema de frenado"},
    {nombre:"Amortiguador", precio:1200, img:"img/amort.png", desc:"Conducción más cómoda"},
    {nombre:"Radiador", precio:1500, img:"img/radiador.png", desc:"Enfría el motor"},
    {nombre:"Batería", precio:2200, img:"img/bateria.png", desc:"Energía del auto"},
    {nombre:"Llanta", precio:1800, img:"img/p8.png", desc:"Agarre y seguridad"},
    {nombre:"Faros", precio:900, img:"img/p9.png", desc:"Iluminación"},
    {nombre:"Espejos", precio:600, img:"img/p10.png", desc:"Visibilidad"},
    {nombre:"Clutch", precio:1400, img:"img/p11.png", desc:"Transmisión"},
    {nombre:"Aceite Frenos", precio:220, img:"img/aceite.png", desc:"Sistema de frenos"},
    {nombre:"Cables Bujía", precio:350, img:"img/p13.png", desc:"Conexión eléctrica"},
    {nombre:"Filtro Gasolina", precio:200, img:"img/p14.png", desc:"Filtra combustible"},
    {nombre:"Termostato", precio:280, img:"img/p15.png", desc:"Control de temperatura"},
    {nombre:"Alternador", precio:2500, img:"img/p16.png", desc:"Genera energía"},
    {nombre:"Limpiaparabrisas", precio:750, img:"img/p17.png", desc:"Limpieza de vidrio"},
    {nombre:"Suspensión", precio:1600, img:"img/p18.png", desc:"Estabilidad"},
    {nombre:"Escape", precio:2000, img:"img/p19.png", desc:"Salida de gases"},
    {nombre:"Sensor O2", precio:850, img:"img/p20.png", desc:"Control de emisiones"}

];

const contenedor = document.getElementById("contenedor-productos");

productos.forEach((p,i)=>{
    contenedor.innerHTML += `
        <div class="producto" onclick="abrirModal(${i})">
            <img src="${p.img}">
            <h3>${p.nombre}</h3>
            <p>$${p.precio}</p>
        </div>
    `;
});

window.abrirModal = function(i){
    document.getElementById("modal").style.display = "flex";
    document.getElementById("modal-img").src = productos[i].img;
    document.getElementById("modal-nombre").innerText = productos[i].nombre;
    document.getElementById("modal-precio").innerText = "$"+productos[i].precio;
    document.getElementById("modal-descripcion").innerText = productos[i].desc;
}

window.cerrarModal = function(){
    document.getElementById("modal").style.display = "none";
}

});