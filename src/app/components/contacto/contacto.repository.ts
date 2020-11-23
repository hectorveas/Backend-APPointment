import { Contacto } from "../../models/contacto.model";
import model from "./contacto.schema";

function mostrarTodoContacto(){
    return model.find();
};

function agregarContacto(contacto : Contacto){
    return model.create<Contacto>(contacto);
};

function eliminarContacto(id : string){
     return model.remove({_id : id});
}


export default {mostrarTodoContacto, agregarContacto, eliminarContacto}






