"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cita_1 = __importDefault(require("./cita"));
const contacto_1 = __importDefault(require("./contacto"));
const contactoPersonal_1 = __importDefault(require("./contactoPersonal"));
const Doctor_1 = __importDefault(require("./Doctor"));
const Paciente_1 = __importDefault(require("./Paciente"));
const components = [
    cita_1.default,
    contacto_1.default,
    contactoPersonal_1.default,
    Doctor_1.default,
    Paciente_1.default
];
exports.default = components;
