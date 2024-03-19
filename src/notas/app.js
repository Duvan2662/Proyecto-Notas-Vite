import html from '../notas/app.html?raw';
import notaStore from '../store/nota.store';
import { renderNota } from '../notas/use-cases/index';

//Nombres de los elementos HTML
const ElementosIDs = {
    ListaNotas : `.todo-list`,
    NuevaNota : `.new-todo`
}

/**
 * 
 * @param {string} elementoHtml  Donde se renderiza la pagina
 */

export const App = (elementoHtml) =>{

    const displayNotas = () => {
        const notas = notaStore.obtenerNotas(notaStore.notasFiltro());//Obtinene todas las notas del contenedor de notas 
        renderNota(ElementosIDs.ListaNotas,notas);
    }

    (()=> {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementoHtml).append(app);
        displayNotas();        
    })();

    //Referencias al DOM
    const nuevaDescripcion = document.querySelector(ElementosIDs.NuevaNota);
    const listaNotas = document.querySelector(ElementosIDs.ListaNotas);

    //Eventos

    //Evento para insertar una nueva nota  
    nuevaDescripcion.addEventListener('keyup', (evento) => { //Escucha cada ve que se oprime una tecla 
        if(evento.keyCode !== 13){//Verifica si el usuario ha presiona la tecla enter y se detiene si es asi
            return
        }
        if(evento.target.value.trim().length === 0){//Verifica que el usuario alla escrito algo 
            return;
        }
        notaStore.anadirNota(evento.target.value);//Se añade la nueva nota
        displayNotas();//Se vuelve a llamar para que cargue la nueva nota
        evento.target.value = ''//Se deja en blanco el imput para escribir una nueva nota 
    })

    //Evento para marcar la nota realizada o no 
    listaNotas.addEventListener('click', (evento) =>{
        const elemento = evento.target.closest('[data-id]'); //al darle click Busca el elemento mas cercano que tenga el atributo "data-id"
        notaStore.modificarEstadoNota(elemento.getAttribute(`data-id`))//elemento.getAttribute accede al id de la nota y este se pasa al cambio de estado
        displayNotas();//Se vuelve a llamar para que cargue la modificacion
    })

    //Evento para eliminar una nota

    listaNotas.addEventListener('click', (evento) =>{       
        if(evento.target.className === 'destroy'){// Si se oprime la x elimina la nota 
            const elemento = evento.target.closest('[data-id]'); //al darle click Busca el elemento mas cercano que tenga el atributo "data-id"
            notaStore.eliminarNota(elemento.getAttribute(`data-id`))//elemento.getAttribute accede al id de la nota y este se pasa al cambio de estado
            displayNotas();//Se vuelve a llamar para que cargue la modificacio
        }
        return;    
   })

}