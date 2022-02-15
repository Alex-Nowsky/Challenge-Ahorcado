

var palabraSecreta = elegirPalabraSecreta();
console.log(palabraSecreta);
function dibujarLineaLetra() {
    var xInicial = 650;
    var xFinal = 675;
    for(var i = 0; i < palabraSecreta.length; i++) {
        dibujarLinea("Red", xInicial, 650, xFinal, 650); // xInicial y xFinal + 35
        xInicial = xInicial + 35;
        xFinal = xFinal + 35;
    }   
}

