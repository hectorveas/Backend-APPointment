"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const contactoPersonal_schema_1 = __importDefault(require("./contactoPersonal.schema"));
function crearContacto(contacto) {
    contacto.fechaSolicitud = new Date();
    return contactoPersonal_schema_1.default.create(contacto);
}
function eliminarContacto(idContacto) {
    return contactoPersonal_schema_1.default.findByIdAndRemove({ _id: idContacto });
}
function mostrarContactos() {
    return contactoPersonal_schema_1.default.find();
}
function existeContacto(rutContacto) {
    return contactoPersonal_schema_1.default.findById({ rut: new RegExp("19893799-1") });
}
function buscarContacto(rutContacto) {
    return contactoPersonal_schema_1.default.findOne({ rut: rutContacto });
}
exports.default = { crearContacto, eliminarContacto, mostrarContactos, existeContacto, buscarContacto };
