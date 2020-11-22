import { Schema, model, Document } from "mongoose";

interface contactoDoc extends Document {
    _id: string;
    nombrePaciente: string;
    apellidoPaciente: string;
    rut: string;
    email: string;
    descripcion: string;
    fechaSolicitud: Date;
  }

const schema: Schema<contactoDoc> = new Schema({
    nombrePaciente: {type: String, required: true},
    apellidoPaciente: {type: String, required: true},
    rut: {type: String, required: true},
    email: {type: String, required: true},
    descripcion: {type: String, required: true},
    fechaSolicitud: {type: Date}
});

export default model<contactoDoc>('Contacto', schema, 'contacto')