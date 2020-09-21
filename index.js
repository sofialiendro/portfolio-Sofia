const hamburguesa = document.querySelector(".fa-bars")
const menuResponsive = document.querySelector(".menu-responsive")
const links = document.querySelectorAll(".link");

const botonProyectos = document.getElementById("boton-tarjetas-proyectos")
const tarjetasProyectos = document.querySelectorAll(".tarjeta-proyecto")


hamburguesa.onclick = () => {
    menuResponsive.classList.toggle("mostrar-menu")
}


for (let tarjeta of tarjetasProyectos) {
    
}
