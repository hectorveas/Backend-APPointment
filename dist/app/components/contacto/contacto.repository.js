"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const contacto_schema_1 = __importDefault(require("./contacto.schema"));
function mostrarTodoContacto() {
    return contacto_schema_1.default.find();
}
;
function agregarContacto(contacto) {
    return contacto_schema_1.default.create(contacto);
}
;
function eliminarContacto(id) {
    return contacto_schema_1.default.remove({ _id: id });
}
exports.default = { mostrarTodoContacto, agregarContacto, eliminarContacto };
