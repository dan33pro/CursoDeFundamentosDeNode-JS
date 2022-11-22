function saludo(miNombre, miCallback) {
    setTimeout(() => {
        console.log('Hola, ' + miNombre);
        miCallback(miNombre);
    }, 1000);
}

function despedida(miNombre, otroCallback) {
    setTimeout(() => {
        console.log('Adios, ' + miNombre);
        otroCallback();
    }, 2000);
}

let nombre = 'Daniel';
console.log('Inciando proceso ...');
saludo(nombre, (nombre) => {
    despedida(nombre, () => {
        console.log('Terminando proceso ...');
    });
});