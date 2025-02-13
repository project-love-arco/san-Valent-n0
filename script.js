function validarLogin() {
    const nombre = document.getElementById('nombre').value;
    const password = document.getElementById('password').value;
    const fecha = document.getElementById('fecha').value;
    
    if (nombre === 'Hilary' && password === 'gringito' && fecha === '30/01/2025') {
        alert('Inicio de sesión exitoso');
    } else {
        alert('Datos incorrectos, intenta nuevamente');
    }
}

function mostrarDatos() {
    document.getElementById('contenidoSobre').style.display = 'block';
}
