var botonDeInicio = document.getElementById("iniciar-juego")
botonDeInicio.onclick = comenzarJuego;

var palabrasSecretas = ["CASA", "TERMO", "RACING", "ALURA","DAMIAN", "CONSTANTINOPLA"];

function comenzarJuego() {
    elegirPalabraSecreta();
    dibujarMastil()
    dibujarLineaLetra();
}
function elegirPalabraSecreta() {
    var palabraAveriguar = palabrasSecretas[aleatorio(min, max, palabrasSecretas.length)];
    
    return palabraAveriguar;
}
var min = 0;
var max = palabrasSecretas.length;

function aleatorio(min, max, nroDePalabras) {
    var nroAleatorio = Math.floor(Math.random() * (max - min) + min);
    if (nroAleatorio <= nroDePalabras) {
        return nroAleatorio;
    }
}



