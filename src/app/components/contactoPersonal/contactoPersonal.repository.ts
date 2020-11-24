import { Contacto } from "../../models/contactoPersonal.model";
import cita from "../cita";
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

function modificarConfirmacion(idContacto : String, confirmacionContacto : boolean){
    return model.findByIdAndUpdate({_id : idContacto}, {confirmacion : confirmacionContacto});
};

export default {
    crearContacto, 
    eliminarContacto, 
    mostrarContactos,
    existeContacto,
    buscarContacto,
    modificarConfirmacion
};
