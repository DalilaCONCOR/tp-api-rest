import { conexionDB } from './conexion.js';

export default class ReclamosEstados {


    // se agrega la consulta en codigo sql que se envia a la bd
    buscarTodos = async () => {
        const sql = 'SELECT * FROM reclamosestado WHERE activo = 1;';
        const [result] = await conexionDB.query(sql);
        return result
    }
}