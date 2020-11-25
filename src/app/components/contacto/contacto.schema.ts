import { Schema, model, Document } from "mongoose";
import { Contacto } from "../../models/contacto.model";

const definition: Partial<Record<keyof Contacto, any>> = {
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  rut: { type: String, required: true },
  mail: { type: String, required: true },
  consulta: { type: String, required: true },
  fechaSolicitud: { type: Date },
};

const schema: Schema<Contacto> = new Schema(definition);

export default model<Contacto & Document>("Contacto", schema, "contacto");
