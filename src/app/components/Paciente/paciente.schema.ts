import { Schema, model, Document } from "mongoose";
import { Paciente } from "../../models/paciente.model";


const definition: Partial<Record<keyof Paciente, any>> =({
    nombrePaciente: { type: String, required: true},
    apellidoPaciente: { type: String, required: true},
    rut: { type: String, required: true},
    email: { type: String, required: true},
    fono: { type: String, required: true},
    contrasena: { type: String, required: true},
    createdAt: {type: Date}
});

const schema: Schema<Paciente> = new Schema(definition);

export default model<Paciente & Document>('Paciente', schema, 'paciente')


