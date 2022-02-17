

var agregarPalabra = document.querySelector("#nueva-palabra");

agregarPalabra.addEventListener("click", function(event) {
    event.preventDefault();
    var input = document.querySelector("#input-nueva-palabra");
    palabrasSecretas.push(input.value);
    console.log(palabrasSecretas)
    
})
