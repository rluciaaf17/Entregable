document.getElementById('formularioRegistro').addEventListener('submit', function(evento) {
    evento.preventDefault(); 
   
    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const carrera = document.getElementById('carrera').value;

    
    let formularioValido = true;

    // Validar Nombre
    if (nombre === "") {
        document.getElementById('errNombre').classList.remove('d-none');
        formularioValido = false;
    } else {
        document.getElementById('errNombre').classList.add('d-none');
    }

    // Validar Correo 
    if (correo === "" || !correo.includes('@')) {
        document.getElementById('errCorreo').classList.remove('d-none');
        formularioValido = false;
    } else {
        document.getElementById('errCorreo').classList.add('d-none');
    }

    // Validar Teléfono 
    if (telefono.length !== 9) {
        document.getElementById('errTelefono').classList.remove('d-none');
        formularioValido = false;
    } else {
        document.getElementById('errTelefono').classList.add('d-none');
    }

    // Validar Lista Desplegable de Carreras
    if (carrera === "") {
        document.getElementById('errCarrera').classList.remove('d-none');
        formularioValido = false;
    } else {
        document.getElementById('errCarrera').classList.add('d-none');
    }

    
    if (formularioValido) {
        document.getElementById('mensajeExito').classList.remove('d-none');
        document.getElementById('formularioRegistro').reset(); // Limpia los campos del formulario
    }
});
