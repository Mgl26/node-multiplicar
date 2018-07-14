const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    },
    crear: {
        alias: 'c',
        default: 10
    }
}


const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de muktiplicar', opts)
    .command('crear', 'Crear un archivo que muestra la tabla de multiplica según los valores proporcionados', opts)
    .help()
    .argv;

module.exports = {
    argv
}