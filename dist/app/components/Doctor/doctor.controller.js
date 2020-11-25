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
const doctor_repository_1 = __importDefault(require("./doctor.repository"));
function mostrarTodoDoctor() {
    return doctor_repository_1.default.mostrarTodoDoctor();
}
function BuscarDoctorRut(rut) {
    return doctor_repository_1.default.BuscarDoctorRut(rut);
}
function agregarDoctor(doctor) {
    return doctor_repository_1.default.agregarDoctor(doctor);
}
function eliminarDoctor(rutDoctor) {
    return doctor_repository_1.default.eliminarDoctor(rutDoctor);
}
function existeDoctor(rutDoctor) {
    return __awaiter(this, void 0, void 0, function* () {
        const doctor = yield doctor_repository_1.default.existeDoctor(rutDoctor);
        if (doctor != null) {
            return true;
        }
        else {
            return false;
        }
    });
}
function modificarDoctor(idDoctor, doctor) {
    return doctor_repository_1.default.modificarDoctor(idDoctor, doctor);
}
exports.default = {
    mostrarTodoDoctor,
    BuscarDoctorRut,
    agregarDoctor,
    eliminarDoctor,
    existeDoctor,
    modificarDoctor,
};
