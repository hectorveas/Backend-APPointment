"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const paciente_repository_1 = __importDefault(require("./paciente.repository"));
function mostrarTodoPaciente() {
    return paciente_repository_1.default.mostrarTodoPaciente();
}
;
function BuscarPacienteRut(rut) {
    return paciente_repository_1.default.BuscarPacienteRut(rut);
}
;
function agregarPaciente(paciente) {
    paciente.createdAt = new Date();
    return paciente_repository_1.default.agregarPaciente(paciente);
}
;
function eliminarPaciente(rutPaciente) {
    return paciente_repository_1.default.eliminarPaciente(rutPaciente);
}
exports.default = { mostrarTodoPaciente, BuscarPacienteRut, agregarPaciente, eliminarPaciente };
