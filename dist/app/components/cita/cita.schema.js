"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const definition = {
    nombrePaciente: { type: String, required: true },
    descripcion: { type: String, required: true },
    estadoCita: { type: String, required: true },
    motivoCancelacion: { type: String, required: false },
    personaCancelar: { type: String, required: false },
    fechaSolicitud: { type: Date },
};
const schema = new mongoose_1.Schema(definition);
exports.default = mongoose_1.model("Cita", schema, "cita");
