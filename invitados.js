// Función para obtener datos de invitados (sin inputs)
function cargarDatosInvitado() {
    const params = new URLSearchParams(window.location.search);
    const invitadoId = params.get('id');

    if (!invitadoId) {
        alert('ID de invitado no encontrado en el enlace.');
        return;
    }

    // Base de datos simulada
    const invitados = {
        '1': { nombre: 'Ana Pérez', pases: 3 },
        '2': { nombre: 'Luis García', pases: 2 },
        '3': { nombre: 'María López', pases: 4 }
    };

    const invitado = invitados[invitadoId];

    if (invitado) {
        document.getElementById('nombreInvitado').innerText = invitado.nombre;
        document.getElementById('cantidadPases').innerText = `Pases: ${invitado.pases}`;
    } else {
        alert('Invitado no encontrado.');
    }
}

// Función para confirmar la asistencia
function confirmarAsistencia(destinatario, numeroTelefono) {
    const invitado = "Ana Pérez";  // Esto lo puedes hacer dinámico si quieres
    const pases = 3;               // Igual aquí si quieres usar el dato real del invitado

    const mensaje = `Hola, soy ${invitado} y confirmo mi asistencia con ${pases} al Bautizo de Thiago.`;
    
    const enlaceWhatsapp = `https://api.whatsapp.com/send?phone=${numeroTelefono}&text=${encodeURIComponent(mensaje)}`;
    window.open(enlaceWhatsapp, '_blank');
}
