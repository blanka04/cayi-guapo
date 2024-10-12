document.getElementById('yes').addEventListener('click', function() {
    document.body.innerHTML = '<h2>Sii, muy bien cayi uwu</h2><img src="https://raw.githubusercontent.com/tu-usuario/nombre-del-repositorio/main/nueva-imagen.jpg" alt="Sii, muy bien cayi uwu">';
});

document.getElementById('no').addEventListener('click', function() {
    const noButton = document.getElementById('no');
    
    // Reducir el tamaño del botón "No"
    let currentScale = parseFloat(noButton.style.transform.replace('scale(', '').replace(')', '')) || 1;
    currentScale *= 0.8;  // Cada clic reduce el tamaño al 80% del tamaño actual
    noButton.style.transform = `scale(${currentScale})`;
    
    // Cambiar el texto del botón "No"
    if (noButton.innerText === 'No') {
        noButton.innerText = '¿Seguro?';
    } else if (noButton.innerText === '¿Seguro?') {
        noButton.innerText = '¿Estás seguro cieguito?';
    } else if (noButton.innerText === '¿Estás seguro cieguito?') {
        noButton.innerText = 'Dale al sí bobo';
    }
    
    // Mover el botón "No" a una posición aleatoria
    const randomX = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});

