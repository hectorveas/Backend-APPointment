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
const contactoPersonal_repository_1 = __importDefault(require("./contactoPersonal.repository"));
function crearContacto(contacto) {
    return contactoPersonal_repository_1.default.crearContacto(contacto);
}
function eliminarContacto(idContacto) {
    return contactoPersonal_repository_1.default.eliminarContacto(idContacto);
}
function mostrarContactos() {
    return contactoPersonal_repository_1.default.mostrarContactos();
}
function existeContacto(rutContacto) {
    if (contactoPersonal_repository_1.default.existeContacto(rutContacto) == null) {
        return true;
    }
    else {
        return false;
    }
}
function buscarContacto(idContacto) {
    return contactoPersonal_repository_1.default.buscarContacto(idContacto);
}
function modificarContacto(idContacto, contactoPersonal) {
    return __awaiter(this, void 0, void 0, function* () {
        return contactoPersonal_repository_1.default.modificarContacto(idContacto, contactoPersonal);
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
