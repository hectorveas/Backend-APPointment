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
const cita_repository_1 = __importDefault(require("./cita.repository"));
function mostrarTodoCita() {
    return cita_repository_1.default.mostrarTodoCita();
}
;
function BuscarCitaId(id) {
    return cita_repository_1.default.BuscarCitaId(id);
}
;
function agregarCita(cita) {
    var _a, _b;
    cita.descripcion = cita.descripcion.toLowerCase();
    cita.estadoCita = cita.estadoCita.toLowerCase();
    cita.motivoCancelacion = (_a = cita.motivoCancelacion) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    cita.personaCancelar = (_b = cita.personaCancelar) === null || _b === void 0 ? void 0 : _b.toLocaleLowerCase();
    cita.fechaSolicitud = new Date();
    return cita_repository_1.default.agregarCita(cita);
}
;
function eliminarCita(id) {
    return cita_repository_1.default.eliminarCita(id);
}
function existeCita(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const cita = yield cita_repository_1.default.existeCita(id);
        if (cita != null) {
            return true;
        }
        else {
            return false;
        }
    });
}
exports.default = { mostrarTodoCita, BuscarCitaId, agregarCita, eliminarCita, existeCita };
