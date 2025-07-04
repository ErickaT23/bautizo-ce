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
        '1': { nombre: 'Abuelito Marvin', pases: 1 },
        '2': { nombre: 'Abuelita Beny', pases: 1 },
        '3': { nombre: 'Erick Sequén, esposa e hija', pases: 3 },
        '4': { nombre: 'Ariel Ávila, esposa e hijas', pases: 4 },
        '5': { nombre: 'Carol Guerra e hijo', pases: 2 },
        '6': { nombre: 'Lorena Tajtaj', pases: 1 },
        '7': { nombre: 'Carlos José Lemus, esposa e hijas', pases: 4 },
        '8': { nombre: 'Carlos Lemus, esposa e hijos', pases: 4 },
        '9': { nombre: 'Marvin Gómez, esposa e hijas', pases: 4 },
        '10': { nombre: 'Abuelito Alejandro Ávila', pases: 1 },
        '11': { nombre: 'Miguel Gómez, esposa e hijos', pases: 4 },
        '12': { nombre: 'Fernando Juárez, esposa e hijos', pases: 4 },
        '13': { nombre: 'Evelyn Pérez y familia', pases: 4 },
        '14': { nombre: 'Rolando Sequén, esposa e hijos', pases: 5 },
        '15': { nombre: 'Hansel García, esposa e hija', pases: 3 },
        '16': { nombre: 'Teresa Hernández', pases: 1 },
        '17': { nombre: 'Misael Sequén, esposa e hija', pases: 3 },
        '18': { nombre: 'Eduardo Rodas, esposa e hijo', pases: 3 },
        '19': { nombre: 'Axel Montúfar y esposa', pases: 2 },
        '20': { nombre: 'Eladio Montúfar, señora e hijas', pases: 4 },
        '21': { nombre: 'Alex Álvarez', pases: 1 },
        '22': { nombre: 'Fabián de la Cruz', pases: 2 },
        '23': { nombre: 'María Mercedes Mora', pases: 2 },
        '24': { nombre: 'Juan Pablo Ortiz y esposa', pases: 2 },
        '25': { nombre: 'Glendi Santizo', pases: 1 },
        '26': { nombre: 'Darwin Vargas', pases: 1 },
        '27': { nombre: 'Ruvidia Torres', pases: 2 },
        '28': { nombre: 'Jorge Hernández y esposa', pases: 2 },
        '29': { nombre: 'Katherine Pivaral y esposo', pases: 2 },
        '30': { nombre: 'Shirley Velásquez, esposo e hija', pases: 3 },
        '31': { nombre: 'Carlos Gordillo y esposa', pases: 2 },
        '32': { nombre: 'Victor Molina, esposa e hija', pases: 3 },
        '33': { nombre: 'Ivone Molina e hija', pases: 2 },
        '34': { nombre: 'Julio Juárez y esposa', pases: 2 },
        '35': { nombre: 'Omar Lantan y esposa', pases: 2 },
        '36': { nombre: 'Leonor Mazariegos', pases: 1 },
        '37': { nombre: 'Yovani Polanco, esposa e hijo', pases: 3 },
        '38': { nombre: 'Lourdes Sitamul', pases: 1 },
        '39': { nombre: 'Jorge Posadas, esposa e hijos', pases: 4 },
        '40': { nombre: 'Vinicio Salguero y esposa', pases: 2 },
        '41': { nombre: 'Richard Arriola, esposa e hijos', pases: 4 },
        '42': { nombre: 'Sandra Leal', pases: 1 },
        '43': { nombre: 'Gladis Castellanos', pases: 1 },
        '44': { nombre: 'Alba Enríquez e hijo', pases: 2 },
        '45': { nombre: 'Julio Estrada y esposa', pases: 2 },
        '46': { nombre: 'Darwin Morán y esposa', pases: 2 },
        '47': { nombre: 'Edwar Tol y esposa', pases: 2 },
        '48': { nombre: 'Giovanni Sotz, esposa e hija', pases: 3 },
        '49': { nombre: 'Hugo Cúmez , esposa e hijos', pases: 4 },
        '50': { nombre: 'César Cúmez y esposa', pases: 2 },
        '51': { nombre: 'Esaú Sánchez', pases: 1 },
        '52': { nombre: 'Manuel Rodríguez', pases: 1 },
        '53': { nombre: 'Edgar Rossatti, esposa e hijo', pases: 3 },
        '54': { nombre: 'César Mux, esposa e hijo', pases: 3 },
        '55': { nombre: 'María José Mux e hijos', pases: 3 },
        '56': { nombre: 'César Mux e hijo', pases: 2 },
        '57': { nombre: 'Telma Linares', pases: 1 },
        '58': { nombre: 'Marlon Rossatti, esposa e hijo', pases: 3 },
        '59': { nombre: 'Giovanni Rossatti, esposa e hija', pases: 3 },
        '60': { nombre: 'Danilo Ramírez y esposa', pases: 2 },
        '61': { nombre: 'Danira Ramírez e hijos', pases: 4 },
        '62': { nombre: 'Leonardo Gómez, esposa e hijos', pases: 5 },
        '63': { nombre: 'Lety Salazar', pases: 1 },
        '64': { nombre: 'Yanet Herrera e hijos', pases: 6 },
        '65': { nombre: 'César Aldana, esposa e hijos', pases: 5 },
        '66': { nombre: 'Erick Casprowitz, esposa e hijo', pases: 3 },
        '67': { nombre: 'Edgar Rivas, esposa e hija', pases: 3 },
        '68': { nombre: 'Larssen Rivas y esposa', pases: 2 },
        '69': { nombre: 'Antonio Galvez y esposa', pases: 2 },
        '70': { nombre: 'Donaldo Similox, esposa e hijo', pases: 3 },
        '71': { nombre: 'Feliciano Perén y esposa', pases: 2 },
        '72': { nombre: 'Luis Paz y esposa e hijos', pases: 4 },
        '73': { nombre: 'Francisca Ramírez y Familia', pases: 11 },
        '74': { nombre: 'Carlos Salazar y esposa', pases: 2 },
        '75': { nombre: 'Danilo Aguilar, señora e hijos', pases: 5 },
        '76': { nombre: 'Wilder Castro, esposa e hijos', pases: 5 },
        '77': { nombre: 'Marianela Salazar e hijo', pases: 2 },
        '78': { nombre: 'Santos Salazar, esposa e hijos', pases: 4 },
        '79': { nombre: 'Esteban, esposa e hijos', pases: 5 },
        '80': { nombre: 'Beatriz Rivas e hijo', pases: 2 },
        '81': { nombre: 'Juanita Salazar viuda de Rivas', pases: 1 },
        '82': { nombre: 'Yolanda Rivas e hijo', pases: 2 },
        '83': { nombre: 'Rossana Rivas e hijos', pases: 3 },
        '84': { nombre: 'Jairo Gramajo, esposa e hijas', pases: 5 },
        '85': { nombre: 'Federico Mux, señora e hijos', pases: 4 },
        '86': { nombre: 'Marco Ramírez y señora', pases: 2 },
        '87': { nombre: 'Evelia Ramírez e hijos', pases: 5 },
        '88': { nombre: 'Estuardo Ralón, esposa e hijas', pases: 5 },
        '89': { nombre: 'Marco Ramírez, señora e hijo', pases: 3 },
        '90': { nombre: 'María José Ramírez e hijos', pases: 3 },
        '91': { nombre: 'Hamilton Gramajo', pases: 1 },
        '92': { nombre: 'Andrés Quiñonez', pases: 1 },
        '93': { nombre: 'José Zet', pases: 1 },
        '94': { nombre: 'Eduardo Enriquez, esposa e hijos', pases: 4 },
        '95': { nombre: 'Older Pinto y esposa', pases: 2 },
        '96': { nombre: 'Eduardo Pinto, esposa e hija', pases: 3 },
        '97': { nombre: 'Carlos Mazariegos, esposa e hijos', pases: 5 },
        '98': { nombre: 'Claudia Paniagua y familia', pases: 2 },
        '99': { nombre: 'Marvin Sipac', pases: 2 },
        '100': { nombre: 'Carmen Salazar viuda de Otzoy', pases: 1 },
        '101': { nombre: 'Allen Sequén, esposa e hijos', pases: 4 },
        '102': { nombre: 'Marco Tulio Álvarez, esposa e hijo', pases: 3 },
        '103': { nombre: 'Joseph Otzoy, esposa e hijos', pases: 4 },
        '104': { nombre: 'Marco Álvarez, esposa e hijo', pases: 3 },
        '105': { nombre: '', pases: 0  }
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
    const params = new URLSearchParams(window.location.search);
    const invitadoId = params.get('id');

    const invitados = {
        '1': { nombre: 'Abuelito Marvin', pases: 1 },
        '2': { nombre: 'Abuelita Beny', pases: 1 },
        '3': { nombre: 'Erick Sequén, esposa e hija', pases: 3 },
        '4': { nombre: 'Ariel Ávila, esposa e hijas', pases: 4 },
        '5': { nombre: 'Carol Guerra e hijo', pases: 2 },
        '6': { nombre: 'Lorena Tajtaj', pases: 1 },
        '7': { nombre: 'Carlos José Lemus, esposa e hijas', pases: 4 },
        '8': { nombre: 'Carlos Lemus, esposa e hijos', pases: 4 },
        '9': { nombre: 'Marvin Gómez, esposa e hijas', pases: 4 },
        '10': { nombre: 'Abuelito Alejandro Ávila', pases: 1 },
        '11': { nombre: 'Miguel Gómez, esposa e hijos', pases: 4 },
        '12': { nombre: 'Fernando Juárez, esposa e hijos', pases: 4 },
        '13': { nombre: 'Evelyn Pérez y familia', pases: 4 },
        '14': { nombre: 'Rolando Sequén, esposa e hijos', pases: 5 },
        '15': { nombre: 'Hansel García, esposa e hija', pases: 3 },
        '16': { nombre: 'Teresa Hernández', pases: 1 },
        '17': { nombre: 'Misael Sequén, esposa e hija', pases: 3 },
        '18': { nombre: 'Eduardo Rodas, esposa e hijo', pases: 3 },
        '19': { nombre: 'Axel Montúfar y esposa', pases: 2 },
        '20': { nombre: 'Eladio Montúfar, señora e hijas', pases: 4 },
        '21': { nombre: 'Alex Álvarez', pases: 1 },
        '22': { nombre: 'Fabián de la Cruz', pases: 2 },
        '23': { nombre: 'María Mercedes Mora', pases: 2 },
        '24': { nombre: 'Juan Pablo Ortiz y esposa', pases: 2 },
        '25': { nombre: 'Glendi Santizo', pases: 1 },
        '26': { nombre: 'Darwin Vargas', pases: 1 },
        '27': { nombre: 'Ruvidia Torres', pases: 2 },
        '28': { nombre: 'Jorge Hernández y esposa', pases: 2 },
        '29': { nombre: 'Katherine Pivaral y esposo', pases: 2 },
        '30': { nombre: 'Shirley Velásquez, esposo e hija', pases: 3 },
        '31': { nombre: 'Carlos Gordillo y esposa', pases: 2 },
        '32': { nombre: 'Victor Molina, esposa e hija', pases: 3 },
        '33': { nombre: 'Ivone Molina e hija', pases: 2 },
        '34': { nombre: 'Julio Juárez y esposa', pases: 2 },
        '35': { nombre: 'Omar Lantan y esposa', pases: 2 },
        '36': { nombre: 'Leonor Mazariegos', pases: 1 },
        '37': { nombre: 'Yovani Polanco, esposa e hijo', pases: 3 },
        '38': { nombre: 'Lourdes Sitamul', pases: 1 },
        '39': { nombre: 'Jorge Posadas, esposa e hijos', pases: 4 },
        '40': { nombre: 'Vinicio Salguero y esposa', pases: 2 },
        '41': { nombre: 'Richard Arriola, esposa e hijos', pases: 4 },
        '42': { nombre: 'Sandra Leal', pases: 1 },
        '43': { nombre: 'Gladis Castellanos', pases: 1 },
        '44': { nombre: 'Alba Enríquez e hijo', pases: 2 },
        '45': { nombre: 'Julio Estrada y esposa', pases: 2 },
        '46': { nombre: 'Darwin Morán y esposa', pases: 2 },
        '47': { nombre: 'Edwar Tol y esposa', pases: 2 },
        '48': { nombre: 'Giovanni Sotz, esposa e hija', pases: 3 },
        '49': { nombre: 'Hugo Cúmez , esposa e hijos', pases: 4 },
        '50': { nombre: 'César Cúmez y esposa', pases: 2 },
        '51': { nombre: 'Esaú Sánchez', pases: 1 },
        '52': { nombre: 'Manuel Rodríguez', pases: 1 },
        '53': { nombre: 'Edgar Rossatti, esposa e hijo', pases: 3 },
        '54': { nombre: 'César Mux, esposa e hijo', pases: 3 },
        '55': { nombre: 'María José Mux e hijos', pases: 3 },
        '56': { nombre: 'César Mux e hijo', pases: 2 },
        '57': { nombre: 'Telma Linares', pases: 1 },
        '58': { nombre: 'Marlon Rossatti, esposa e hijo', pases: 3 },
        '59': { nombre: 'Giovanni Rossatti, esposa e hija', pases: 3 },
        '60': { nombre: 'Danilo Ramírez y esposa', pases: 2 },
        '61': { nombre: 'Danira Ramírez e hijos', pases: 4 },
        '62': { nombre: 'Leonardo Gómez, esposa e hijos', pases: 5 },
        '63': { nombre: 'Lety Salazar', pases: 1 },
        '64': { nombre: 'Yanet Herrera e hijos', pases: 6 },
        '65': { nombre: 'César Aldana, esposa e hijos', pases: 5 },
        '66': { nombre: 'Erick Casprowitz, esposa e hijo', pases: 3 },
        '67': { nombre: 'Edgar Rivas, esposa e hija', pases: 3 },
        '68': { nombre: 'Larssen Rivas y esposa', pases: 2 },
        '69': { nombre: 'Antonio Galvez y esposa', pases: 2 },
        '70': { nombre: 'Donaldo Similox, esposa e hijo', pases: 3 },
        '71': { nombre: 'Feliciano Perén y esposa', pases: 2 },
        '72': { nombre: 'Luis Paz y esposa e hijos', pases: 4 },
        '73': { nombre: 'Francisca Ramírez y Familia', pases: 11 },
        '74': { nombre: 'Carlos Salazar y esposa', pases: 2 },
        '75': { nombre: 'Danilo Aguilar, señora e hijos', pases: 5 },
        '76': { nombre: 'Wilder Castro, esposa e hijos', pases: 5 },
        '77': { nombre: 'Marianela Salazar e hijo', pases: 2 },
        '78': { nombre: 'Santos Salazar, esposa e hijos', pases: 4 },
        '79': { nombre: 'Esteban, esposa e hijos', pases: 5 },
        '80': { nombre: 'Beatriz Rivas e hijo', pases: 2 },
        '81': { nombre: 'Juanita Salazar viuda de Rivas', pases: 1 },
        '82': { nombre: 'Yolanda Rivas e hijo', pases: 2 },
        '83': { nombre: 'Rossana Rivas e hijos', pases: 3 },
        '84': { nombre: 'Jairo Gramajo, esposa e hijas', pases: 5 },
        '85': { nombre: 'Federico Mux, señora e hijos', pases: 4 },
        '86': { nombre: 'Marco Ramírez y señora', pases: 2 },
        '87': { nombre: 'Evelia Ramírez e hijos', pases: 5 },
        '88': { nombre: 'Estuardo Ralón, esposa e hijas', pases: 5 },
        '89': { nombre: 'Marco Ramírez, señora e hijo', pases: 3 },
        '90': { nombre: 'María José Ramírez e hijos', pases: 3 },
        '91': { nombre: 'Hamilton Gramajo', pases: 1 },
        '92': { nombre: 'Andrés Quiñonez', pases: 1 },
        '93': { nombre: 'José Zet', pases: 1 },
        '94': { nombre: 'Eduardo Enriquez, esposa e hijos', pases: 4 },
        '95': { nombre: 'Older Pinto y esposa', pases: 2 },
        '96': { nombre: 'Eduardo Pinto, esposa e hija', pases: 3 },
        '97': { nombre: 'Carlos Mazariegos, esposa e hijos', pases: 5 },
        '98': { nombre: 'Claudia Paniagua y familia', pases: 2 },
        '99': { nombre: 'Marvin Sipac', pases: 2 },
        '100': { nombre: 'Carmen Salazar viuda de Otzoy', pases: 1 },
        '101': { nombre: 'Allen Sequén, esposa e hijos', pases: 4 },
        '102': { nombre: 'Marco Tulio Álvarez, esposa e hijo', pases: 3 },
        '103': { nombre: 'Joseph Otzoy, esposa e hijos', pases: 4 },
        '104': { nombre: 'Marco Álvarez, esposa e hijo', pases: 3 },
        '105': { nombre: '', pases: 0  }
    };

    let mensaje = "";

    if (invitadoId === '105') {
        mensaje = `Confirmo mi asistencia al Bautizo de Thiago Xavier.`;
        
        document.getElementById('confirmacion').innerText = 
            "Su presencia es muy importante para nosotros y por razones de protocolo y organización, es necesaria su confirmación lo antes posible o bien indicarnos si esta vez no podrán acompañarnos.";
    } 
    else if (invitadoId && invitados[invitadoId]) {
        const invitadoData = invitados[invitadoId];
        const invitado = invitadoData.nombre;
        const pases = invitadoData.pases;

        mensaje = `Hola, soy ${invitado} y confirmo mi asistencia con ${pases} ${pases === 1 ? 'pase' : 'pases'} al Bautizo de Thiago.`;

        document.getElementById('confirmacion').innerText = "¡Gracias por confirmar!";
    } 
    else {
        alert('Invitado no encontrado.');
        return;
    }

    const enlaceWhatsapp = `https://api.whatsapp.com/send?phone=${numeroTelefono}&text=${encodeURIComponent(mensaje)}`;
    window.open(enlaceWhatsapp, '_blank');
}

