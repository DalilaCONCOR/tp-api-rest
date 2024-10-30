import ReclamosEstado from '../DB/reclamosEstados.js';



export default class ReclamosEstadoService {
    constructor (){
        this.ReclamosEstado = new ReclamosEstado();
    }   

    // lo servicios realizan la conexion entre la base de datos y el controler
    buscar = () => {
        return this.ReclamosEstado.buscar();
    }
}