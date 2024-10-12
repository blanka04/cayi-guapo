let noClickCount = 0;

document.getElementById('no').addEventListener('click', function() {
  const noButton = document.getElementById('no');
  const message = document.getElementById('message');

  noClickCount++;
  noButton.style.transform = 'scale(0.8)'; // Hacer el botón más pequeño

  if (noClickCount === 1) {
    message.textContent = '¿Seguro?';
  } else if (noClickCount === 2) {
    message.textContent = '¿Estás seguro ciegito?';
  } else if (noClickCount === 3) {
    message.textContent = 'Dale al sí, bobo';
    noClickCount = 0; // Reiniciar el contador
  }
});

document.getElementById('yes').addEventListener('click', function() {
  const message = document.getElementById('message');
  const imageContainer = document.getElementById('imageContainer');

  message.textContent = 'Sii, muy bien cayi uwu';
  
  // Mostrar una imagen al final
  imageContainer.innerHTML = '<img src="Picsart_24-10-12_02-53-20-901.jpg" alt="Imagen final" width="300">';
});
