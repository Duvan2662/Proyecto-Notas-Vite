import { Nota } from "../models/notas.models";
import { crearNotaHtml } from "../use-cases/index";
/**
 * Funcion que me permite crear y mostrar todas las notas del usuario en el html 
 * @param {string} elementoId 
 * @param {array <Nota>} notas 
*/

let elemento;

export const renderNota = (elementoId, notas = []) =>{
    //TODO referencia al DOM
    
    if(!elemento){ //Si el elemento no existe se crea 
        elemento = document.querySelector(elementoId);
    }
    if(!elemento){ //si el idElento no exite se envia el error 
        throw new Error (`Elemento no encontrado ${elementoId}`)
    }

    elemento.innerHTML = '';//Se limpia por si no llega a existit el elemento 
    notas.forEach(nota => {
        elemento.append(crearNotaHtml(nota));
    })
}