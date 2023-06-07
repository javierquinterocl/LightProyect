const icononav = document.querySelector('.icono');
const barranav = document.querySelector('.barra');
const iconoi = document.querySelector(".icono i");
var can = document.getElementById("cambiodecolor")

icononav.onclick = function (){
   barranav.classList.toggle('open');
   const openyes = barranav.classList.contains("open");
   can.classList.toggle("open");
   iconoi.classList = openyes
   ? "fa-solid fa-bars fa-2xl"
   : "fa-solid fa-bars fa-2xl"
 
}