// Sincrono
function falla(num) {
    return num + sum;
}

function sumar(num) {
    falla(num);
}

try {
    sumar();
} catch (error) {
    console.error('Algo fallo en sincrono: ' + error.message);
}

// Asincrono
function sumAsync(num) {
    setTimeout(() => {
        try {
            return num + sum;
        } catch (error) {
            console.error('Algo fallo en asincrono: ' + error.message);
        }
    }, 1000);
}

sumAsync(5);

