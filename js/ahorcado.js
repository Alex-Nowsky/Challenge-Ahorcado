
var botonDeInicio = document.getElementById("iniciar-juego")
botonDeInicio.onclick = comenzarJuego;

function comenzarJuego() {
    elegirPalabraSecreta();
    dibujarMastil()
    dibujarLineaLetra();
    var input = document.querySelector("#teclas-presionadas");
    input.focus();
    
}

