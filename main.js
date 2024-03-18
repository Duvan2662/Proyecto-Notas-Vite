import './style.css'
import { App } from './src/notas/app';
import notaStore from "./src/store/nota.store";


notaStore.iniciarStore();
App('#app');
