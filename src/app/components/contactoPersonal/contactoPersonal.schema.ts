import { Schema, model, Document } from "mongoose";

interface contactoPersonalDoc extends Document {
  _id: string;
  nombrePaciente: string;
  rut: string;
  email: string;
  contrasena: string;
  telefono: string;
  confirmacion: boolean;
  fechaSolicitud: Date;
}

const schema: Schema<contactoPersonalDoc> = new Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  rut: { type: String, required: true },
  mail: { type: String, required: true },
  contrasena: { type: String, required: false },
  telefono: { type: String, required: false },
  confirmacion: { type: String, required: false },
  fechaSolicitud: { type: Date },
});

export default model<contactoPersonalDoc>(
  "ContactoPersonal",
  schema,
  "contactoPersonal"
);
