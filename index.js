const hamburguesa = document.querySelector(".fa-bars")
const menuResponsive = document.querySelector(".menu-responsive")
const links = document.querySelectorAll(".link");


hamburguesa.onclick = () => {
    menuResponsive.classList.toggle("mostrar-menu")
}

for (let link of links) {
    link.onclick = () => {
      hamburguesa.onclick();
    };
}