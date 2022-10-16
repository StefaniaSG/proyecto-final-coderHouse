const botonMenu = document.querySelector("#boton-menu");
const navBar = document.querySelector("#nav-bar");

botonMenu.addEventListener("click", () => {
  navBar.classList.toggle("activo");
  botonMenu.classList.toggle("activo");
});
