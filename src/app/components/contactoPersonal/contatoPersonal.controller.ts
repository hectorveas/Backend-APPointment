
import { Contacto } from "../../models/contactoPersonal.model";
import contactoPersonalRepository from "./contactoPersonal.repository";



function crearContacto(contacto : Contacto){
    return contactoPersonalRepository.crearContacto(contacto);
}

function eliminarContacto(idContacto : string){
    return contactoPersonalRepository.eliminarContacto(idContacto);
}

function mostrarContactos(){
    return contactoPersonalRepository.mostrarContactos();
}

export default {crearContacto , eliminarContacto, mostrarContactos};

