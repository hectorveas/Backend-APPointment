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
  nombrePaciente: { type: String, required: true },
  rut: { type: String, required: true },
  email: { type: String, required: true },
  contrasena: { type: String, required: true },
  telefono: { type: String, required: true },
  confirmacion: { type: String, required: false },
  fechaSolicitud: { type: Date },
});

export default model<contactoPersonalDoc>(
  "ContactoPersonal",
  schema,
  "contactoPersonal"
);
