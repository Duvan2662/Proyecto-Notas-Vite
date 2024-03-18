//clase nota
export class Nota {
    //Propiedades
    id
    descripccion
    estado
    fecha

    //Constructores
    constructor(descripccion){
        this.id = 1;
        this.descripccion = descripccion;
        this.estado = false;
        this.fecha = new Date();
    }

 }