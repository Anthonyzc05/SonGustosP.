document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            alert(`Iniciando sesión como: ${username}`);
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('newUsername').value;
            const password = document.getElementById('newPassword').value;
            alert(`Cuenta creada para: ${username}`);
        });
    }
});

function showDetails(element) {
    const detailsDiv = document.getElementById('details');
    const largeImage = document.getElementById('largeImage');
    const largeImageInfo = document.getElementById('largeImageInfo');

    // Establecer la imagen ampliada
    const img = element.querySelector('img');
    largeImage.src = img.src;

    // Establecer información adicional
    largeImageInfo.textContent = element.querySelector('p').textContent + ' - Más información sobre el plato.';

    // Mostrar el div de detalles
    detailsDiv.style.display = 'flex';
}

// Ocultar detalles al hacer clic en la imagen ampliada
document.getElementById('details').addEventListener('click', function() {
    this.style.display = 'none';
});

