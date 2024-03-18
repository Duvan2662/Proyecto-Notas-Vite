import html from '../notas/app.html?raw';
/**
 * 
 * @param {string} elementoHtml  Donde se renderiza la pagina
 */
export const App = (elementoHtml) =>{

    (()=> {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementoHtml).append(app);        
    })();
}