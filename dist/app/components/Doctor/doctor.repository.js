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
const doctor_schema_1 = __importDefault(require("./doctor.schema"));
function mostrarTodoDoctor() {
    return doctor_schema_1.default.find();
}
;
function BuscarDoctorRut(rutDoctor) {
    return doctor_schema_1.default.findOne({ rut: rutDoctor });
}
;
function agregarDoctor(doctor) {
    return doctor_schema_1.default.create(doctor);
}
;
function eliminarDoctor(rutDoctor) {
    return doctor_schema_1.default.findOneAndRemove({ rut: rutDoctor });
}
function existeDoctor(rutDoctor) {
    return doctor_schema_1.default.findOne({ rut: rutDoctor });
}
function modificarDoctor(idDoctor, doctor) {
    return __awaiter(this, void 0, void 0, function* () {
        return doctor_schema_1.default.findByIdAndUpdate(idDoctor, doctor);
    });
}
;
exports.default = {
    mostrarTodoDoctor,
    BuscarDoctorRut,
    agregarDoctor,
    eliminarDoctor,
    existeDoctor,
    modificarDoctor
};
