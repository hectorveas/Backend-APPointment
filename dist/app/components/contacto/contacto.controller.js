"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const contacto_repository_1 = __importDefault(require("./contacto.repository"));
function mostrarTodoContacto() {
    return contacto_repository_1.default.mostrarTodoContacto();
}
function agregarContacto(contacto) {
    contacto.fechaSolicitud = new Date();
    return contacto_repository_1.default.agregarContacto(contacto);
}
function eliminarContacto(id) {
    return contacto_repository_1.default.eliminarContacto(id);
}
exports.default = { mostrarTodoContacto, agregarContacto, eliminarContacto };
