import { Nota } from "../models/notas.models";

/**
 * Funcion que me permite crear el li oara cada nota para visualizarla en pantalla 
 * @param {Nota} nota Objeto nota 
 * @returns {HTMLElement} Retorna un elemento html de tipo li con la nota en ese li
 */

export const crearNotaHtml = (nota) =>{
    if (!nota) {
        throw new Error ('El objeto nota es necesario para crearlo');
    }
    const html = `<h1> ${nota.descripccion}</h1>`; //Lo que se va a añadir en este caso la nota
    const liElemento = document.createElement('li')//creacion de un elemento li
    liElemento.innerHTML = html;//añade la nota en el elemento lis

    return liElemento; //Retorna el elemento li con la nota
}