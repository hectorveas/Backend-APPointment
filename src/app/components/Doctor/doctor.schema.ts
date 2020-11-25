import { Schema, model, Document } from "mongoose";
import { Doctor } from "../../models/doctor.model";

const definition: Partial<Record<keyof Doctor, any>> = {
  nombreDoctor: { type: String, required: true },
  apellidoDoctor: { type: String, required: true },
  rut: { type: String, required: true },
  email: { type: String, required: true },
  fono: { type: String, required: true },
  contrasena: { type: String, required: true },
  especialidad: { type: String, required: true },
};

const schema: Schema<Doctor> = new Schema(definition);

export default model<Doctor & Document>("Doctor", schema, "doctor");
