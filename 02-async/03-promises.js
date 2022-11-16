function saludo(miNombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Hola, ' + miNombre);
            resolve(miNombre);
        }, 1000);
    });
}

function hablar(miNombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Bla bla bla...');
            resolve(miNombre);
        }, 1000);
    })
}

function despedida(miNombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Adios, ' + miNombre);
            resolve(miNombre);
        }, 2000);
    });
}

let myName = "Santi";
console.log('Iniciando Proceso...');
saludo(myName)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(despedida)
    .catch((error) => console.log('Fallo : ' + error)) 
.finally(() => {
    console.log('Terminando Proceso');
})