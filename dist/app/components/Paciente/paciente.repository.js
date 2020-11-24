"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const paciente_schema_1 = __importDefault(require("./paciente.schema"));
function mostrarTodoPaciente() {
    return paciente_schema_1.default.find();
}
;
function BuscarPacienteRut(rutPaciente) {
    return paciente_schema_1.default.findOne({ rut: rutPaciente });
}
;
function agregarPaciente(paciente) {
    return paciente_schema_1.default.create(paciente);
}
;
function eliminarPaciente(rutPaciente) {
    return paciente_schema_1.default.findOneAndRemove({ rut: rutPaciente });
}
;
function existePaciente(rutPaciente) {
    return paciente_schema_1.default.findOne({ rut: rutPaciente });
}
;
function modificarNombrePaciente(idPaciente, nombre) {
    return paciente_schema_1.default.findByIdAndUpdate({ _id: idPaciente }, { nombrePaciente: nombre });
}
;
function modificarApellidoPaciente(idPaciente, apellido) {
    return paciente_schema_1.default.findByIdAndUpdate({ _id: idPaciente }, { apellidoPaciente: apellido });
}
;
function modificarMailPaciente(idPaciente, emailPaciente) {
    return paciente_schema_1.default.findByIdAndUpdate({ _id: idPaciente }, { email: emailPaciente });
}
;
function modificarFonoPaciente(idPaciente, fonoPaciente) {
    return paciente_schema_1.default.findByIdAndUpdate({ _id: idPaciente }, { fono: fonoPaciente });
}
;
function modificarRutPaciente(idPaciente, rutPaciente) {
    return paciente_schema_1.default.findByIdAndUpdate({ _id: idPaciente }, { rut: rutPaciente });
}
;
function modificarContrasenaPaciente(idPaciente, contrasenaPaciente) {
    return paciente_schema_1.default.findByIdAndUpdate({ _id: idPaciente }, { contrasena: contrasenaPaciente });
}
;
exports.default = {
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
};
