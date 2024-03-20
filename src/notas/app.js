import html from '../notas/app.html?raw';
import notaStore, { Filtros } from '../store/nota.store';
import { renderNota } from '../notas/use-cases/index';

//Nombres de los elementos HTML
const ElementosIDs = {
    limpiarNotas :`.clear-completed`,
    ListaNotas : `.todo-list`,
    NuevaNota : `.new-todo`, 
    NotaFiltro : `.filtro`
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
    const limpiarNotas = document.querySelector(ElementosIDs.limpiarNotas);
    const filtroSeleccionado = document.querySelectorAll(ElementosIDs.NotaFiltro);
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
    });

    //Evento para marcar la nota realizada o no 
    listaNotas.addEventListener('click', (evento) =>{
        const elemento = evento.target.closest('[data-id]'); //al darle click Busca el elemento mas cercano que tenga el atributo "data-id"
        notaStore.modificarEstadoNota(elemento.getAttribute(`data-id`))//elemento.getAttribute accede al id de la nota y este se pasa al cambio de estado
        displayNotas();//Se vuelve a llamar para que cargue la modificacion
    });


    //Evento para eliminar una nota
    listaNotas.addEventListener('click', (evento) =>{       
        if(evento.target.className === 'destroy'){// Si se oprime la x elimina la nota 
            const elemento = evento.target.closest('[data-id]'); //al darle click Busca el elemento mas cercano que tenga el atributo "data-id"
            notaStore.eliminarNota(elemento.getAttribute(`data-id`))//elemento.getAttribute accede al id de la nota y este se pasa al cambio de estado
            displayNotas();//Se vuelve a llamar para que cargue la modificacio
        }
        return;    
   });

   //Evento para eliminar varias notas al tiempo 
   limpiarNotas.addEventListener('click',(evento)=>{
    notaStore.borrarCompletados();
    displayNotas();
   });

   //Eventos para los filtros de las notas
   filtroSeleccionado.forEach(elemento => {//Recorre toda la lista de elementos del html que tienen la clase 'filtro'
        elemento.addEventListener('click', (evento)=>{//A cada elemento se le pone un evento de click
        
            filtroSeleccionado.forEach(elm =>{//Recorre toda la lista de elementos del html que tienen la clase 'filtro'
                elm.classList.remove('selected');//Se les quita el select (La parte que brilla alrededor del boton)
            });

            evento.target.classList.add('selected');//Se le agrega el select al que se oprimio (La parte que brilla alrededor del boton)

            switch (evento.target.text) {//Tomamos el valor(texto) que ahi en el elemento seleccionado 
                case 'Todos':
                    notaStore.establecerFiltro(Filtros.Todas);//Establece el filtro que selecciono el usuario
                    break;
                case 'Pendientes':
                    notaStore.establecerFiltro(Filtros.Pendiente);
                    break;    
                case 'Completados':
                    notaStore.establecerFiltro(Filtros.Completado);
                    break;    
            }
            displayNotas();
        })
    });


}