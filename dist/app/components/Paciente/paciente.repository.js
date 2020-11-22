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
function existePaciente(rutPaciente) {
    return paciente_schema_1.default.findOne({ rut: rutPaciente });
}
exports.default = { mostrarTodoPaciente, BuscarPacienteRut, agregarPaciente, eliminarPaciente, existePaciente };
