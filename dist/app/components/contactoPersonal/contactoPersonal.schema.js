"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    nombrePaciente: { type: String, required: true },
    email: { type: String, required: true },
    contrasena: { type: String, required: true },
    telefono: { type: String, required: true },
    confirmacion: { type: String, required: false },
    fechaSolicitud: { type: Date }
});
exports.default = mongoose_1.model('ContactoPersonal', schema, 'contactoPersonal');
