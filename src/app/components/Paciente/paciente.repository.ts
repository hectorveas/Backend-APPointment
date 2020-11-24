import { Paciente } from "../../models/paciente.model";
import model from "./paciente.schema";

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
};

function existePaciente(rutPaciente : string){
    return model.findOne({rut : rutPaciente});
};

function modificarNombrePaciente(idPaciente : String, nombre : string){
    return model.findByIdAndUpdate({_id : idPaciente}, {nombrePaciente : nombre});
};

function modificarApellidoPaciente(idPaciente : String, apellido : string){
    return model.findByIdAndUpdate({_id : idPaciente}, {apellidoPaciente : apellido});
};

function modificarMailPaciente(idPaciente : String, emailPaciente : string){
    return model.findByIdAndUpdate({_id : idPaciente}, {email : emailPaciente});
};

function modificarFonoPaciente(idPaciente : String, fonoPaciente : string){
    return model.findByIdAndUpdate({_id : idPaciente}, {fono : fonoPaciente});
};

function modificarRutPaciente(idPaciente : String, rutPaciente : string){
    return model.findByIdAndUpdate({_id : idPaciente}, {rut: rutPaciente});
};

function modificarContrasenaPaciente(idPaciente : String, contrasenaPaciente : string){
    return model.findByIdAndUpdate({_id : idPaciente}, {contrasena : contrasenaPaciente});
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






