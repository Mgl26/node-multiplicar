// requierds
const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('C:/Admin_VMWare/Nodejs/03-bases.node/multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('Crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}

// const multiplicar = require('C:/Admin_VMWare/Nodejs/03-bases.node/multiplicar/multiplicar');


// console.log(process.argv);
// console.log(argv.base);
// console.log(argv.limite);


// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];