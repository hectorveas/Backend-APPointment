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
const contactoPersonal_schema_1 = __importDefault(require("./contactoPersonal.schema"));
function crearContacto(contacto) {
    contacto.fechaSolicitud = new Date();
    contacto.confirmacion = true;
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
function modificarContacto(idContacto, contactoPersonal) {
    return __awaiter(this, void 0, void 0, function* () {
        return contactoPersonal_schema_1.default.findByIdAndUpdate(idContacto, contactoPersonal);
    });
}
exports.default = {
    crearContacto,
    eliminarContacto,
    mostrarContactos,
    existeContacto,
    buscarContacto,
    modificarContacto,
};
