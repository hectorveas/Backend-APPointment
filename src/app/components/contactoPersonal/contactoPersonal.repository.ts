import { Contacto } from "../../models/contactoPersonal.model";
import model from "./contactoPersonal.schema";


function crearContacto(contacto : Contacto){
    contacto.fechaSolicitud = new Date();
    return model.create<Contacto>(contacto);
}

function eliminarContacto(idContacto : string){
    return model.findByIdAndRemove({_id: idContacto})
}

function mostrarContactos(){
    return model.find();
}

function existeContacto(rutContacto : string){
    return model.findById({rut: new RegExp("19893799-1")});
    
}

function buscarContacto(rutContacto : string){
    return model.findOne({rut : rutContacto});
}

export default {crearContacto , eliminarContacto, mostrarContactos,existeContacto,buscarContacto};
