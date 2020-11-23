import { Cita } from "../../models/cita.model";
import citaRepository from "./cita.repository"

function mostrarTodoCita(): Promise<Cita[]>{
    return citaRepository.mostrarTodoCita();
};

function BuscarCitaId(id : string){
    return citaRepository.BuscarCitaId(id);
};

function agregarCita(cita : Cita): Promise<Cita>{
    cita.descripcion = cita.descripcion.toLowerCase();
    cita.estadoCita = cita.estadoCita.toLowerCase();
    cita.motivoCancelacion = cita.motivoCancelacion?.toLowerCase();
    cita.personaCancelar = cita.personaCancelar?.toLocaleLowerCase();
    cita.fechaSolicitud = new Date();
    return citaRepository.agregarCita(cita);
    
};

function eliminarCita(id : string){
    return citaRepository.eliminarCita(id);
}

async function existeCita(id : string){
    const cita : Cita | null =  await citaRepository.existeCita(id);
    if(cita != null){
        return true;
    }else{
        return false;
    }
}


export default {mostrarTodoCita , BuscarCitaId, agregarCita, eliminarCita,existeCita}