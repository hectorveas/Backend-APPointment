"use strict";
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
exports.default = { mostrarTodoDoctor, BuscarDoctorRut, agregarDoctor, eliminarDoctor, existeDoctor };
