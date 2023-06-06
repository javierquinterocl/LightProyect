const icononav = document.querySelector('.icono');
const barranav = document.querySelector('.barra');

icononav.onclick() = function (){
   barranav.classList.toggle('open');
   const openyes = barranav.classList.contains('open');
}