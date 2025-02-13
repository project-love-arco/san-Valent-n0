function validarLogin() {
    const nombre = document.getElementById('nombre').value;
    const password = document.getElementById('password').value;
    const fecha = document.getElementById('fecha').value;
    
    if (nombre === 'Hilary' && password === 'gringito' && fecha === '30/01/2025') {
        alert('Inicio de sesión exitoso');
        window.location.href = 'bienvenida.html';  // Redirige a la página de bienvenida
    } else {
        alert('Datos incorrectos, intenta nuevamente');
    }
}

function mostrarDatos() {
    const contenido = document.getElementById('contenidoSobre');
    contenido.style.display = 'block';
    contenido.style.opacity = 1;
}
