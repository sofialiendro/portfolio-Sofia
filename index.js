const hamburguesa = document.querySelector(".fa-bars")
const menuResponsive = document.querySelector(".menu-responsive")


hamburguesa.onclick = () => {
    menuResponsive.classList.toggle("no-mostrar-menu")
}