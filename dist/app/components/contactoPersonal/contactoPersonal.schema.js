"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    rut: { type: String, required: true },
    mail: { type: String, required: true },
    contrasena: { type: String, required: false },
    telefono: { type: String, required: false },
    confirmacion: { type: String, required: false },
    fechaSolicitud: { type: Date },
});
exports.default = mongoose_1.model("ContactoPersonal", schema, "contactoPersonal");
