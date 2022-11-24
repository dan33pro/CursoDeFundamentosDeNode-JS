const { exec, spawn } = require("child_process");

function procesosBasicos() {
    return new Promise((resolve, reject) => {
        exec("ls -la", (err, stdout, sterr) => {
            if (err) {
                console.error(err.message);
                reject(err);
            }
            console.log(stdout);
            resolve('Proceso basico listo');
        });
    });
}

function procesosConDetalle() {
    return new Promise((resolve, reject) => {
        let proceso = spawn("ls", ["-la"]);
        console.log(proceso.pid);
        console.log(proceso.connected);

        proceso.stdout.on("data", (dato) => {
            console.log(dato);
        });
        resolve('Proceso con detalle listo');
    });
}

async function main() {
    console.group('Proceso básico');
    console.log(await procesosBasicos());
    console.groupEnd('Proceso básico');

    console.group('Proceso con detalle');
    console.log(await procesosConDetalle());
    console.groupEnd('Proceso con detalle');
}

main();
