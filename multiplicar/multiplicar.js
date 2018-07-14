const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('============================'.green);
    console.log(`Tabla de ${base}`.red);
    console.log('============================'.green);

    for (let j = 1; j <= limite; j++) {
        console.log(`${base} * ${j} = ${base * j}`);
    }
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base)) {
            reject(`El valor ingresado ${base} no es un número`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor ingresado ${limite} no es un número`);
            return;
        }

        for (let i = 0; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`);
        });
    });
}



module.exports = {
    crearArchivo,
    listarTabla
}