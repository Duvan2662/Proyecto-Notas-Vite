import { Nota } from "../notas/models/notas.models";

//Estados de las notas 
const Filtros = {
    Todas       : 'Todas',
    Completado : 'Completado',
    Pendiente  : 'Pendiente'
}


const contenedorNotas = {
    notas : [
        new Nota('Hacer desayuno'),
        new Nota('Hacer almuerzo'),
        new Nota('Hacer comida'),
        new Nota('Hacer tareas'),
        new Nota('Ir a trabajar'),

    ],
    filtros : Filtros.Todas
}



//Inicia la app
const iniciarNotas = () =>{
    cargarStorage();
    console.log(contenedorNotas);
}

//Funcion que guarda las modificaciones que se le hagan a las notas (Es como un historial)
const guardarStateLocalStorage = () => {
    localStorage.setItem('contenedorNotas', JSON.stringify(contenedorNotas));//Agrega al localstorage de la aplicacion es el contenedor de notas  en un json de string (Estos dos valores siempre tienen que ser string)
} 

//Carga el storage en la web (La ultima informacion guardada)
const cargarStorage = () => {
    if(!localStorage.getItem('contenedorNotas')){// SI el local storage esta vacio
        return;
    }
    const {notas = [],filtros = Filtros.Todas} = JSON.parse(localStorage.getItem('contenedorNotas'))//Destructuracion de objetos y parsea el Json para volver el contenedor de notas a su estado original (Objeto) 
    contenedorNotas.notas = notas;//Le asigna el valor de notas 
    contenedorNotas.filtros = filtros;//Le asigna el valor al filtro  
}


//Funcion que me ayuda a mostrar las notas segun sus filtros 
const obtenerNotas = (filtro = Filtros.Todas) =>{
    switch (filtro) {
        case Filtros.Todas:
            return  [...contenedorNotas.notas];//Muestra todas las notas
        case Filtros.Completado:
            return contenedorNotas.notas.filter(nota => nota.estado)//Devuelve las notas que el estado sea true
        case Filtros.Pendiente:
            return contenedorNotas.notas.filter(nota => !nota.estado)//Devuelve las notas que el estado sea false    
        default:
            throw new Error (`El filtro ${filtro} no esta disponible`);   
    }
    guardarStateLocalStorage();
}

//Funcion para añadir notas
const anadirNota = (descripccion) => {
    if(!descripccion){
        throw new Error ('No implementado');
    }
    contenedorNotas.notas.push(new Nota(descripccion));
    guardarStateLocalStorage();
}
//Funcion para modificar notas
const modificarEstadoNota = (notaId) => {
    contenedorNotas.notas = contenedorNotas.notas.map(nota =>{
        if(nota.id === notaId){
            nota.estado = !nota.estado //Cambia el estado si es true pasa a false, si es false pasa a true 
        }
        return nota;
    })
    guardarStateLocalStorage();
}
//Funcion para eliminar una nota
const eliminarNota = (notaId) => {
    contenedorNotas.notas = contenedorNotas.notas.filter(nota => nota.id !== notaId); //Devuelve el arreglo de la notas con id diferente al ingresado
    guardarStateLocalStorage();
}

//Funcion para borrar una nota
const borrarCompletados = () =>{
    contenedorNotas.notas = contenedorNotas.notas.filter(nota => !nota.estado); //Devuelve el arreglo de la notas con el estado No completado = false
    guardarStateLocalStorage();
}

//Funcion para establecer un nuevo filtro en el contenedor
const establecerFiltro = (nuevoFiltro = Filtros.Todas) =>{
    contenedorNotas.filtros = nuevoFiltro;
    guardarStateLocalStorage();
}

//Funcion que me devulve un arreglo con un determinado filtro 
const notasFiltro = () => {
    return contenedorNotas.filtros
}



export default {
    iniciarNotas,
    obtenerNotas,
    cargarNotas: cargarStorage,
    anadirNota,
    modificarEstadoNota,
    eliminarNota,
    borrarCompletados,
    establecerFiltro,
    notasFiltro
}