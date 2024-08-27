
document.getElementById("nuevoBtn").addEventListener("click", function(){
    let valorNuevo = document.getElementById("valorNuevo").value;

    if(valorNuevo !== ""){
        document.getElementById("resultadonuevo").innerText ="Valor ingresado: " + valorNuevo;

        numeroAleatorio();
    } else {
        document.getElementById("resultadonuevo").innerText = "por favor, ingresa un valor.";
    }
});

function numeroAleatorio(){
    let numero = 0 
    for (i = 0; i == numero; i--){
        console.log(i)
    }
}

// js/script.js
document.getElementById("enviarBtn").addEventListener("click", function() {
    // Obtener el valor del input
    let valorIngresado = document.getElementById("valorInput").value;
    
    // Verificar si el usuario ingresó un valor
    if (valorIngresado !== "") {
        // Mostrar el valor ingresado en el párrafo con id "resultado"
        document.getElementById("resultado").innerText = "Valor ingresado: " + valorIngresado;
        
        // Iniciar el cambio de fases
        iniciarCambioDeFases();
    } else {
        document.getElementById("resultado").innerText = "Por favor, ingresa un valor.";
    }
});

function iniciarCambioDeFases() {
    let fases = document.querySelectorAll(".phase");
    let indiceFaseActual = 0;
    let mensajeFinal = document.getElementById("mensajeFinal");

        // Elementos de audio
     let sounds = [
        document.getElementById("sound1"),
        document.getElementById("sound2"),
        document.getElementById("sound3")
        ];

    function cambiarFase() {
        if (indiceFaseActual > 0) {
            fases[indiceFaseActual - 1].classList.remove("active");
        }

        if (indiceFaseActual < fases.length) {
            fases[indiceFaseActual].classList.add("active");
            sounds[indiceFaseActual].play();
            indiceFaseActual++;
            setTimeout(cambiarFase, 2000); // Cambiar de fase cada 2 segundos
        } else {
            // Mostrar el mensaje final
            mensajeFinal.innerText = "Pedido entregado";
        }
    }

    cambiarFase();
}

