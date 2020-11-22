"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
;
const schema = new mongoose_1.Schema({
    nombrePaciente: { type: String, required: true },
    apellidoPaciente: { type: String, required: true },
    rut: { type: String, required: true },
    email: { type: String, required: true },
    fono: { type: String, required: true },
    contrasena: { type: String, required: true },
    createdAt: { type: Date }
});
exports.default = mongoose_1.model('Paciente', schema, 'paciente');
