

var tamañoPalabra = elegirPalabraSecreta();
console.log(tamañoPalabra);
function dibujarLineaLetra() {
    var xInicial = 650;
    var xFinal = 675;
    for(var i = 0; i < tamañoPalabra.length; i++) {
        dibujarLinea("Red", xInicial, 650, xFinal, 650); // xInicial y xFinal + 35
        xInicial = xInicial + 35;
        xFinal = xFinal + 35;
    }   
}

