const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    },
    completado: {
        default: false,
        alias: 'c',
        desc: 'Marca como completado la tarea'
    }
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', opts)
    .command('listar', 'Lista todos los elementos de la DB')
    .command('actualizar', 'Actualiza el estado completado de una tarea', opts)
    .command('borrar', 'Borra una tarea a traves de parametro', opts)
    .help()
    .argv;

module.exports = {
    argv
}