document.addEventListener('DOMContentLoaded', function () {
  // Seleccionar los elementos del DOM
  const botonMensual = document.querySelector('.boton:nth-child(1)');
  const botonAnual = document.querySelector('.boton:nth-child(2)');
  const preciosTexto = document.querySelectorAll('.precio-texto');

  // Precios originales mensuales
  const preciosMensuales = [30, 60];

  // Función para cambiar los precios a mensual
  function cambiarAPrecioMensual() {
    preciosTexto.forEach((precio, index) => {
      precio.textContent = `S/${preciosMensuales[index]} mensual`;
    });
    botonMensual.classList.add('boton-activo');
    botonAnual.classList.remove('boton-activo');
  }

  // Función para cambiar los precios a anual (multiplica los precios mensuales por 12)
  function cambiarAPrecioAnual() {
    preciosTexto.forEach((precio, index) => {
      precio.textContent = `S/${preciosMensuales[index] * 12} anual`;
    });
    botonAnual.classList.add('boton-activo');
    botonMensual.classList.remove('boton-activo');
  }

  // Añadir eventos de clic a los recuadros completos (botones)
  botonMensual.addEventListener('click', cambiarAPrecioMensual);
  botonAnual.addEventListener('click', cambiarAPrecioAnual);

  // Configurar para que al iniciar la página se muestren los precios mensuales
  cambiarAPrecioMensual();
});
