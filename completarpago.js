// Selecciona los botones "Comenzar ahora"
const botonesComenzar = document.querySelectorAll('.boton-principal');

// Añade el evento de clic a cada botón
botonesComenzar.forEach(boton => {
  boton.addEventListener('click', function() {
    window.location.href = 'completar-pago.html'; // Redirige a la página de pago
  });
});
