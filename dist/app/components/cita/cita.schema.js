"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    nombrePaciente: { type: String, required: true },
    descripcion: { type: String, required: true },
    estadoCita: { type: String, required: true },
    motivoCancelacion: { type: String, required: false },
    personaCancelar: { type: String, required: false },
    fechaSolicitud: { type: Date }
});
exports.default = mongoose_1.model('Cita', schema, 'cita');
