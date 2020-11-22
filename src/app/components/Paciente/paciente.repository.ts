import { Paciente } from "../../models/paciente.model";
import model,{ PacienteDoc } from "./paciente.schema";

function mostrarTodoPaciente(){
    return model.find();
};

function BuscarPacienteRut(rutPaciente : string ){
    return model.findOne({rut : rutPaciente});
};

function agregarPaciente(paciente : Paciente){
    return model.create<Paciente>(paciente);
};

function eliminarPaciente(rutPaciente : string){
     return model.findOneAndRemove({rut : rutPaciente});
}

function existePaciente(rutPaciente : string){
    return model.findOne({rut : rutPaciente});
}

export default {mostrarTodoPaciente , BuscarPacienteRut, agregarPaciente, eliminarPaciente, existePaciente}






