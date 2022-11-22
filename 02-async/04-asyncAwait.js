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

async function main() {
    let nombre = await saludo('Daniel');
    await hablar();
    await hablar();
    await hablar();
    await despedida(nombre);
    console.log('Terminamos');
}

console.log('Empezamos');
main();
