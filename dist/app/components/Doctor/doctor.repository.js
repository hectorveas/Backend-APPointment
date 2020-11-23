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
function modificarNombreDoctor(idDoctor, nombre) {
    return doctor_schema_1.default.findByIdAndUpdate({ _id: idDoctor }, { nombreDoctor: nombre });
}
;
function modificarApellidoDoctor(idDoctor, apellido) {
    return doctor_schema_1.default.findByIdAndUpdate({ _id: idDoctor }, { apellidoDoctor: apellido });
}
;
function modificarMailDoctor(idDoctor, emailDoctor) {
    return doctor_schema_1.default.findByIdAndUpdate({ _id: idDoctor }, { email: emailDoctor });
}
;
function modificarFonoDoctor(idDoctor, fonoDoctor) {
    return doctor_schema_1.default.findByIdAndUpdate({ _id: idDoctor }, { fono: fonoDoctor });
}
;
function modificarRutDoctor(idDoctor, rutDoctor) {
    return doctor_schema_1.default.findByIdAndUpdate({ _id: idDoctor }, { rut: rutDoctor });
}
;
function modificarContrasenaDoctor(idDoctor, contrasenaDoctor) {
    return doctor_schema_1.default.findByIdAndUpdate({ _id: idDoctor }, { contrasena: contrasenaDoctor });
}
;
function modificarEspecialidadDoctor(idDoctor, especialidadDoctor) {
    return doctor_schema_1.default.findByIdAndUpdate({ _id: idDoctor }, { especialidad: especialidadDoctor });
}
;
exports.default = {
    mostrarTodoDoctor,
    BuscarDoctorRut,
    agregarDoctor,
    eliminarDoctor,
    existeDoctor,
    modificarNombreDoctor,
    modificarApellidoDoctor,
    modificarMailDoctor,
    modificarFonoDoctor,
    modificarRutDoctor,
    modificarContrasenaDoctor,
    modificarEspecialidadDoctor
};
