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
const cita_schema_1 = __importDefault(require("./cita.schema"));
function mostrarTodoCita() {
    return __awaiter(this, void 0, void 0, function* () {
        return cita_schema_1.default.find();
    });
}
function agregarCita(cita) {
    return cita_schema_1.default.create(cita);
}
function BuscarCitaId(id) {
    return cita_schema_1.default.findOne({ _id: id });
}
function eliminarCita(id) {
    return cita_schema_1.default.remove({ _id: id });
}
function existeCita(id) {
    return cita_schema_1.default.findById({ _id: id });
}
function modificarCita(_id, cita) {
    return __awaiter(this, void 0, void 0, function* () {
        return cita_schema_1.default.findByIdAndUpdate(_id, cita);
    });
}
;
exports.default = { mostrarTodoCita, BuscarCitaId, agregarCita, eliminarCita, existeCita, modificarCita };
