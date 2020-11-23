"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const contactoPersonal_schema_1 = __importDefault(require("./contactoPersonal.schema"));
function crearContacto(contacto) {
    return contactoPersonal_schema_1.default.create(contacto);
}
function eliminarContacto(idContacto) {
    return contactoPersonal_schema_1.default.findByIdAndRemove({ _id: idContacto });
}
function mostrarContactos() {
    return contactoPersonal_schema_1.default.find();
}
exports.default = { crearContacto, eliminarContacto, mostrarContactos };
