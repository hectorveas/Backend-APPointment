import {Cita} from "../../models/cita.model"
import citaSchema from "./cita.schema"

async function mostrarTodoCita(): Promise<Cita[]>{
    return citaSchema.find();
}

function agregarCita(cita: Cita): Promise<Cita>{
    return citaSchema.create<Cita>(cita);
}

function BuscarCitaId(id: string){
    return citaSchema.findOne({_id: id})
}

function eliminarCita(id : string){
    return citaSchema.remove({_id : id})
}

function existeCita(id: string){
    return citaSchema.findById({_id : id})
}

export default {mostrarTodoCita , BuscarCitaId, agregarCita, eliminarCita,existeCita}