function asincrona(callback) {
    setTimeout(() => {
        try {
            let a = 5 + x;
            callback(null, a);
        } catch (error) {
            callback(error);
        }
    }, 1000);
}

asincrona((err, dato) => {
    if (err) {
        console.error('Tenemos un error');
        console.error(err);
        return false;
    }

    console.log('Todo está en orden, el dato es: ' + dato);
});