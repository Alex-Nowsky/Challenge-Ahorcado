


var tablero = document.getElementById("ahorcado");
var pincel = tablero.getContext("2d"); 

function juegoAhorcado() {
    dibujarBaseDelMastil()
    dibujarMastil();
    dibujarCuerpoHumano();
}
function dibujarCuerpoHumano() {
    dibujarCabeza(550,340, 40);
    dibujarLinea("black", 550, 380, 550, 500); // cuerpo
    dibujarBrazoIzq();
    dibujarBrazoDer();
    dibujarPiernaIzq();
    dibujarPiernaDer();
}

function dibujarBrazoIzq() {
    dibujarLinea("black", 550, 400, 470, 450); // brazo izq
}
function dibujarBrazoDer() {
    dibujarLinea("black", 550, 400, 630, 450); // brazo der 
}
function dibujarPiernaIzq() {
    dibujarLinea("black", 550, 500, 470, 550); // pierna izq
}
function dibujarPiernaDer() {
    dibujarLinea("black", 550, 500, 630, 550); // pierna der 
}
function dibujarCabeza(x,y,radio){
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.arc(x,y,radio,0,2*Math.PI);
    pincel.fill();
} 

function dibujarMastil() {
    // cuerpo del mástil
    dibujarLinea("black", 300, 700, 300, 250); 
    dibujarLinea("black", 300, 250, 550, 250); 
    dibujarLinea("black", 550, 250, 550, 300); 
}

function dibujarBaseDelMastil(){
    dibujarLinea("black", 200, 700, 400, 700); // base
}

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal){
    pincel.beginPath();
    pincel.strokeStyle = color;
    pincel.moveTo(xInicial, yInicial);
    pincel.lineTo(xFinal, yFinal);
    pincel.stroke();
    pincel.closePath();
}

juegoAhorcado()
