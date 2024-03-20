import notaStore, { Filtros } from "../../store/nota.store";
/**
 * Funcion que sirve para contar las notas pendientes y colocarlo en el HTML
 * @param {string} elementoId Lugar donde se va a colocar el valor en el HTML 
*/

let elemento;
export const contNotasPendientes = (elementoId,)=>{
    if(!elemento){ //Si el elemento no existe se crea 
        elemento = document.querySelector(elementoId);
    }
    if(!elemento){ //si el idElento no exite se envia el error 
        throw new Error (`Elemento no encontrado ${elementoId}`)
    }
    elemento.innerHTML = notaStore.obtenerNotas(Filtros.Pendiente).length; //Cuenta la cantidad de notas pendientes por realizar y lo coloca en el HTML
}