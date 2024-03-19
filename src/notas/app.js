import html from '../notas/app.html?raw';
import notaStore from '../store/nota.store';
import { renderNota } from '../notas/use-cases/index';

//Nombres de los elementos HTML
const ElementIDs = {
    NotaList : `.todo-list`
}

/**
 * 
 * @param {string} elementoHtml  Donde se renderiza la pagina
 */

export const App = (elementoHtml) =>{

    const displayNotas = () => {
        const notas = notaStore.obtenerNotas(notaStore.notasFiltro());//Obtinene todas las notas del contenedor de notas 
        renderNota(ElementIDs.NotaList,notas);
    }

    (()=> {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementoHtml).append(app);
        displayNotas();        
    })();
}