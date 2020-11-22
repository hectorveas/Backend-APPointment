import { Paciente } from "../../model/paciente.model";
import pacienteRepository from "./paciente.repository"

function mostrarTodoPaciente(){
    return pacienteRepository.mostrarTodoPaciente();
};

function BuscarPacienteRut(rut : string){
    return pacienteRepository.BuscarPacienteRut(rut);
};

function agregarPaciente(paciente : Paciente){
    paciente.createdAt = new Date();
    return pacienteRepository.agregarPaciente(paciente);
    
};

function eliminarPaciente(rutPaciente : string){
    return pacienteRepository.eliminarPaciente(rutPaciente);
}


export default {mostrarTodoPaciente , BuscarPacienteRut, agregarPaciente, eliminarPaciente}