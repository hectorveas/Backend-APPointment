import { Contacto } from "../../models/contactoPersonal.model";
import model from "./contactoPersonal.schema";


function crearContacto(contacto : Contacto){
    return model.create<Contacto>(contacto);
}

function eliminarContacto(idContacto : string){
    return model.findByIdAndRemove({_id: idContacto})
}

function mostrarContactos(){
    return model.find();
}

export default {crearContacto , eliminarContacto, mostrarContactos}
