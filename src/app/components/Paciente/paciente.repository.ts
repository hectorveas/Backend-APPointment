import { Paciente } from "../../model/paciente.model";
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

export default {mostrarTodoPaciente , BuscarPacienteRut, agregarPaciente, eliminarPaciente}






