const hamburguesa = document.querySelector(".fa-bars")
const menuResponsive = document.querySelector(".menu-responsive")
const links = document.querySelectorAll(".link");


hamburguesa.onclick = () => {
    menuResponsive.classList.toggle("mostrar-menu")
}

