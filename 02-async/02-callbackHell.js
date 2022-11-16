function saludo(miNombre, miCallback) {
    setTimeout(() => {
        console.log('Hola, ' + miNombre);
        miCallback(miNombre);
    }, 1000);
}

function hablar(callbackHablar) {
    setTimeout(() => {
        console.log('Bla bla bla...');
        callbackHablar();
    }, 1000);
}

function despedida(miNombre, otroCallback) {
    setTimeout(() => {
        console.log('Adios, ' + miNombre);
        otroCallback();
    }, 2000);
}

let nombre = 'Daniel';

// Esto es un callback hell
{/*
console.log('Inciando proceso ...');
saludo(nombre, (nombre) => {
    hablar(() => {
        hablar(() => {
            hablar(() => {
                despedida(nombre, () => {
                    console.log('Terminando proceso ...');
                });
            });
        });
    });
});
*/}


// En su lugar
function conversacion(nombre, veces, callback) {
    if (veces > 0 ) {
        hablar(() => {
            conversacion(nombre, --veces, callback);
        });
    } else {
        despedida(nombre, callback);
    }
}


nombre = 'Dann';
console.log('Inciando proceso ...');
saludo(nombre, (nombre) => {
    conversacion(nombre, 3, () => {
        console.log('Proceso terminado...');
    });
});






