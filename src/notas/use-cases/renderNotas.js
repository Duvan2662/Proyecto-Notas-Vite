import { Nota } from "../models/notas.models";
import { crearNotaHtml } from "../use-cases/index";
/**
 * Funcion que me permite crear y mostrar todas las notas del usuario en el html 
 * @param {string} elementoId 
 * @param {array <Nota>} notas 
*/

export const renderNota = (elementoId, notas = []) =>{
    //TODO referencia al DOM
    const elemento = document.querySelector(elementoId);
    notas.forEach(nota => {
        elemento.append(crearNotaHtml(nota));
    })
}