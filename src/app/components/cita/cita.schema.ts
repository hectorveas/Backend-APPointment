import { Schema, model, Document } from "mongoose";

interface citaDoc extends Document {
    _id: string;
    nombrePaciente: string;
    fechaSolicitud: Date;
    descripcion: string;
    estadoCita: string;
    motivoCancelacion?: string;
    personaCancelar?: string;
  }

const schema: Schema<citaDoc> = new Schema({
    nombrePaciente: {type: String, required: true},
    descripcion: {type: String, required: true},
    estadoCita: {type: String, required: true},
    motivoCancelacion: {type: String, required: false},
    personaCancelar: {type: String, required: false},
    fechaSolicitud: {type: Date}
});

export default model<citaDoc>('Cita', schema, 'cita')