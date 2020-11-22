import { Schema, model, Document } from "mongoose";

export interface PacienteDoc extends Document{
    __id: string; // id lo crea mongo
    nombrePaciente: string;
    apellidoPaciente: string;
    rut: string;
    email: string;
    fono: string;
    contrasena: string;
    createdAt: Date;
    
};

const schema: Schema<PacienteDoc> = new Schema({
    nombrePaciente: { type: String, required: true},
    apellidoPaciente: { type: String, required: true},
    rut: { type: String, required: true},
    email: { type: String, required: true},
    fono: { type: String, required: true},
    contrasena: { type: String, required: true},
    createdAt: {type: Date}
});

export default model<PacienteDoc>('Paciente', schema, 'paciente');



