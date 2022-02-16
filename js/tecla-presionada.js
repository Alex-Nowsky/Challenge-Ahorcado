



var letrasPermitidas = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
var letrasIncorrectas = []
function onKeyDownHandler(event) {
    
    var codigo = event.which || event.keyCode;
        
    for(var i = 0; i < letrasPermitidas.length; i++) {
        if((String.fromCharCode(codigo) == letrasPermitidas[i])  ) { //compara si la letra ingresada está en letrasPermitidas
            console.log(letrasPermitidas[i]);
            
            if(compararLetraConPalabraSecreta(palabraSecreta, letrasPermitidas[i])) {
                dibujarLetraCorrecta(letrasPermitidas[i]);  

            } else {
                letrasIncorrectas.push(letrasPermitidas[i]);
                dibujarLetraIncorrecta(letrasIncorrectas);
                dibujarCuerpoHumano() 
            }
        } 
            
    }
             
} 
function compararLetraConPalabraSecreta(palabraSecreta, letraPermitida) {
    var palabraComparar = palabraSecreta;
    for (i = 0; i < palabraComparar.length; i++) {
        if(palabraComparar[i] == letraPermitida) {
            return true;
        }
    }
    
}       