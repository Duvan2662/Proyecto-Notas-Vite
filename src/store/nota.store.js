import { Nota } from "../notas/models/notas.models";

//Estados de las notas 
const Filtros = {
    Todo       : 'Todo',
    Completado : 'Completado',
    Pendiente  : 'Pendiente'
}


const contenedor = {
    notas : [
        new Nota('Hacer desayuno'),
        new Nota('Hacer almuerzo'),
        new Nota('Hacer comida'),
    ],
    filtros : Filtros.Todo
}

const iniciarStore = () =>{
    console.log('Iniciar store');
    console.log(contenedor);
}

export default {
    iniciarStore
}