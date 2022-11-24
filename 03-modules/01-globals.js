let i = 0;
let intervalo = setInterval(() => {
    console.log('interval ' + i);
    if ( i == 3 ) {
        clearInterval(intervalo);
    }
    i++;
}, 1000);

setImmediate(() => {
    console.log('Hi');
})

const adios = () => console.log('Byee');
setTimeout(adios, 5000);