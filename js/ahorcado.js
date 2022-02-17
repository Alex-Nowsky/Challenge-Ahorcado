
var botonDeInicio = document.getElementById("iniciar-juego")
botonDeInicio.onclick = comenzarJuego;

function comenzarJuego() {
   
    dibujarMastil()
    elegirPalabraSecreta();
    dibujarLineaLetra();
    var input = document.querySelector("#teclas-presionadas");
    input.focus();
    
}


