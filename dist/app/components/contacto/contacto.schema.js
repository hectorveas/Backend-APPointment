"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const definition = {
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    rut: { type: String, required: true },
    mail: { type: String, required: true },
    consulta: { type: String, required: true },
    fechaSolicitud: { type: Date }
};
const schema = new mongoose_1.Schema(definition);
exports.default = mongoose_1.model('Contacto', schema, 'contacto');
