"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
function existePaciente(rutPaciente) {
    return __awaiter(this, void 0, void 0, function* () {
        const paciente = yield paciente_repository_1.default.existePaciente(rutPaciente);
        if (paciente != null) {
            return true;
        }
        else {
            return false;
        }
    });
}
function modificarPaciente(idPaciente, paciente) {
    return __awaiter(this, void 0, void 0, function* () {
        return paciente_repository_1.default.modificarPaciente(idPaciente, paciente);
    });
}
;
exports.default = {
    mostrarTodoPaciente,
    BuscarPacienteRut,
    agregarPaciente,
    eliminarPaciente,
    existePaciente,
    modificarPaciente
};
