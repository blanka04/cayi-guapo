document.getElementById('yes').addEventListener('click', function() {
    // Cambia el contenido del body al hacer clic en "Sí"
    document.body.innerHTML = '<h2>Sii, muy bien cayi uwu</h2>';
    
    // Mostrar la imagen final al seleccionar "Sí"
    document.body.innerHTML += '<img src="https://raw.githubusercontent.com/blanka04/cayi-guapo/main/Picsart_24-10-12_02-53-20-901.jpg" alt="Imagen final" style="max-width: 100%; height: auto;">';
});

document.getElementById('no').addEventListener('click', function() {
    const noButton = document.getElementById('no');
    const yesButton = document.getElementById('yes');

    // Reducir el tamaño del botón "No"
    let currentScale = parseFloat(noButton.style.transform.replace('scale(', '').replace(')', '')) || 1;
    currentScale *= 0.8;  // Cada clic reduce el tamaño al 80% del tamaño actual
    noButton.style.transform = `scale(${currentScale})`;
    
    // Cambiar el texto del botón "No"
    if (noButton.innerText === 'No') {
        noButton.innerText = '¿Seguro?';
    } else if (noButton.innerText === '¿Seguro?') {
        noButton.innerText = '¿Estás seguro ciegito?';
    } else if (noButton.innerText === '¿Estás seguro ciegito?') {
        noButton.innerText = 'Dale al sí bobo';
    }
    
    // Mover el botón "No" a una posición aleatoria que no se superponga con "Sí"
    let randomX, randomY, overlap;
    do {
        randomX = Math.random() * (window.innerWidth - noButton.offsetWidth);
        randomY = Math.random() * (window.innerHeight - noButton.offsetHeight);
        
        // Verificar si se superpone con el botón "Sí"
        const yesRect = yesButton.getBoundingClientRect();
        const noRect = { left: randomX, top: randomY, right: randomX + noButton.offsetWidth, bottom: randomY + noButton.offsetHeight };
        
        overlap = !(noRect.right < yesRect.left || 
                    noRect.left > yesRect.right || 
                    noRect.bottom < yesRect.top || 
                    noRect.top > yesRect.bottom);
        
    } while (overlap);  // Repetir hasta que no haya superposición

    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});
