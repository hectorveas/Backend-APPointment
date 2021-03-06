"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const definition = {
    nombreDoctor: { type: String, required: true },
    apellidoDoctor: { type: String, required: true },
    rut: { type: String, required: true },
    email: { type: String, required: true },
    fono: { type: String, required: true },
    contrasena: { type: String, required: true },
    especialidad: { type: String, required: true },
};
const schema = new mongoose_1.Schema(definition);
exports.default = mongoose_1.model("Doctor", schema, "doctor");
