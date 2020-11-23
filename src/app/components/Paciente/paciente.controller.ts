
import { Paciente } from "../../models/paciente.model";
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

function modificarNombrePaciente(idPaciente : String, nombre : string){
    return pacienteRepository.modificarNombrePaciente(idPaciente,nombre);
};

function modificarApellidoPaciente(idPaciente : String, apellido : string){
    return pacienteRepository.modificarApellidoPaciente(idPaciente, apellido);
};

function modificarMailPaciente(idPaciente : String, emailPaciente : string){
    return pacienteRepository.modificarMailPaciente(idPaciente, emailPaciente);
};

function modificarFonoPaciente(idPaciente : String, fonoPaciente : string){
    return pacienteRepository.modificarFonoPaciente(idPaciente, fonoPaciente);
};

function modificarRutPaciente(idPaciente : String, rutPaciente : string){
    return pacienteRepository.modificarRutPaciente(idPaciente, rutPaciente);
};

function modificarContrasenaPaciente(idPaciente : String, contrasenaPaciente : string){
    return pacienteRepository.modificarContrasenaPaciente(idPaciente, contrasenaPaciente);
};


export default {
    mostrarTodoPaciente, 
    BuscarPacienteRut, 
    agregarPaciente, 
    eliminarPaciente,
    existePaciente,
    modificarNombrePaciente,
    modificarApellidoPaciente,
    modificarMailPaciente,
    modificarFonoPaciente,
    modificarRutPaciente,
    modificarContrasenaPaciente,
    
}