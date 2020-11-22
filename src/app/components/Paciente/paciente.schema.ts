import { Schema, model, Document } from "mongoose";

interface pacienteDoc extends Document {
    _id: string;
    nombrePaciente: string;
    apellidoPaciente: string;
    rut: string;
    email: string;
    fono: string;
    contrasena: string;
}

const schema: Schema<pacienteDoc> = new Schema({
    nombrePaciente: {type: String, required: true},
    apellidoPaciente: {type: String, required: true},
    rut: {type: String, required: true},
    email: {type: String, required: true},
    fono: {type: String, required: true},
    contrasena: {type: String, required: true},
});

export default model<pacienteDoc>('Paciente', schema, 'paciente')