import e from "express";
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

async function existePaciente(rutPaciente : string){
    const paciente : Paciente | null =  await pacienteRepository.existePaciente(rutPaciente);
    if(paciente != null){
        return true;
    }else{
        return false;
    }
}


export default {mostrarTodoPaciente , BuscarPacienteRut, agregarPaciente, eliminarPaciente,existePaciente}