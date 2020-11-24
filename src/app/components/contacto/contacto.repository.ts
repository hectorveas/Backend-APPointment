import { Contacto } from "../../models/contacto.model";
import contactoSchema from "./contacto.schema";

async function mostrarTodoContacto() :Promise<Contacto[]> {
    return contactoSchema.find();
};

function agregarContacto(contacto : Contacto): Promise<Contacto>{
    return contactoSchema.create<Contacto>(contacto);
};

function eliminarContacto(id : string){
     return contactoSchema.remove({_id : id});
}


export default {mostrarTodoContacto, agregarContacto, eliminarContacto}






