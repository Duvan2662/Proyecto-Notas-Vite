import { v4 as idAletorio } from "uuid";

//clase notas
export class Nota {
    //Propiedades
    id
    descripccion
    estado
    fecha

    //Constructores
    constructor(descripccion){
        this.id = idAletorio();
        this.descripccion = descripccion;
        this.estado = false;
        this.fecha = new Date();
    }

}