"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cita_repository_1 = __importDefault(require("./cita.repository"));
function mostrarTodoCita() {
    return cita_repository_1.default.mostrarTodoCita();
}
;
function eliminarCita(id) {
    return cita_repository_1.default.eliminarCita(id);
}
;
function BuscarCitaId(id) {
    return cita_repository_1.default.BuscarCitaId(id);
}
;
function modificarCita(id, cita) {
    return cita_repository_1.default.modificarCita(id, cita);
}
;
function agregarCita(cita) {
    // cita.descripcion = cita.descripcion.toLowerCase();
    // cita.estadoCita = cita.estadoCita.toLowerCase();
    // cita.motivoCancelacion = cita.motivoCancelacion?.toLowerCase();
    // cita.personaCancelar = cita.personaCancelar?.toLocaleLowerCase();
    // cita.fechaSolicitud = new Date();
    return cita_repository_1.default.agregarCita(cita);
}
;
// async function existeCita(id : string){
//     const cita : Cita | null =  await citaRepository.existeCita(id);
//     if(cita != null){
//         return true;
//     }else{
//         return false;
//     }
// }
exports.default = { mostrarTodoCita, BuscarCitaId, agregarCita, eliminarCita, modificarCita };
