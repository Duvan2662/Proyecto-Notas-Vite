import { Nota } from "../models/notas.models";
/**
 * Funcion que me permite crear el li oara cada nota para visualizarla en pantalla 
 * @param {Nota} nota Objeto nota 
 * @returns {HTMLElement} Retorna un elemento html de tipo li con la nota en ese li
*/

export const crearNotaHtml = (nota) =>{
    
    let  checar = '';//Me permite marcar o no marcar el chulo en la nota 
    const {descripccion,estado,id} = nota; //Destructuracion de un objeto 

    if (!nota) {
        throw new Error ('El objeto nota es necesario para crearlo');
    }

    //Si el estado es true osea realizada la nota entonces se marca si no se deja vacio  
    if(estado){
        checar = 'checked'
    }else{
        checar = ''
    }

    const html = `
        <div class="view">
            <input class="toggle" type="checkbox" ${checar}>
            <label>${descripccion}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    `; //Lo que se va a añadir en este caso la nota

    const liElemento = document.createElement('li')//creacion de un elemento li
    liElemento.innerHTML = html;//añade la nota en el elemento li
    liElemento.setAttribute(`data-id`,id)//añade el atributo del id de la nota a cada li 

    if(estado){ //Si el estado es true osea realizada la nota entonces se le coloca esta clase para que aparezca subrayada
        liElemento.classList.add('completed');
    }

    return liElemento; //Retorna el elemento li con la nota
}