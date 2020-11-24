import { Schema, model, Document } from "mongoose";

interface contactoDoc extends Document {
    _id: string;
    nombre: string;
    apellido: string;
    rut: string;
    mail: string;
    descripcion: string;
    fechaSolicitud: Date;
  }

const schema: Schema<contactoDoc> = new Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    rut: {type: String, required: true},
    mail: {type: String, required: true},
    descripcion: {type: String, required: true},
    fechaSolicitud: {type: Date}
});

export default model<contactoDoc>('Contacto', schema, 'contacto')