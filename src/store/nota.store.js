import { Nota } from "../notas/models/notas.models";

//Estados de las notas 
const Filtros = {
    Todo       : 'Todo',
    Completado : 'Completado',
    Pendiente  : 'Pendiente'
}


const contenedorNotas = {
    notas : [
        new Nota('Hacer desayuno'),
        new Nota('Hacer almuerzo'),
        new Nota('Hacer comida'),
    ],
    filtros : Filtros.Todo
}

const iniciarNotas = () =>{
    console.log('Iniciar notas');
    console.log(contenedorNotas);
}

const cargarNotas = () => {
    throw new Error ('No implementado');
}

const anadirNota = (descripccion) => {
    throw new Error ('No implementado');
}

const modificarNota = (notaId) => {
    throw new Error ('No implementado');
}
const eliminarNota = (notaId) => {
    throw new Error ('No implementado');
}

const borrarCompletados = () =>{
    throw new Error ('No implementado');

}

const establecerFiltro = (nuevoFiltro = Filtros.Todo) =>{
    throw new Error ('No implementado');
}

const notasFiltro = () => {
    throw new Error ('No implementado');

}


export default {
    iniciarNotas,
    cargarNotas,
    anadirNota,
    modificarNota,
    eliminarNota,
    borrarCompletados,
    establecerFiltro,
    notasFiltro
}