const hamburguesa = document.querySelector(".fa-bars")
const menuResponsive = document.querySelector(".menu-responsive")

hamburguesa.onclick = () => {
    menuResponsive.classList.toggle("mostrar-menu")
}

const tarjetasProyectos = document.querySelectorAll(".proyecto")
const botonesFiltro = document.querySelectorAll(".filtro-proyecto")


for (let boton of botonesFiltro) {
    boton.onclick = () => {
        for (let tarjeta of tarjetasProyectos) {
            if (boton.dataset.tecnologia === tarjeta.dataset.tecnologia) {
                tarjeta.classList.remove("no-mostrar")
            }
            else if (boton.dataset.tecnologia === "todos") {
                tarjeta.classList.remove("no-mostrar")
            }
            else {
                tarjeta.classList.add("no-mostrar")
            }
        }
    }
}

