import { Schema, model, Document } from "mongoose";
import  {Contacto} from "../../models/contactoPersonal.model";

const definition: Partial<Record<keyof Contacto, any>> = {
  nombrePaciente: { type: String, required: true },
  rut: { type: String, required: true },
  email: { type: String, required: true },
  contrasena: { type: String, required: false },
  telefono: { type: String, required: false },
  confirmacion: { type: String, required: false },
  fechaSolicitud: { type: Date },
};

const schema: Schema<Contacto> = new Schema(definition);

export default model<Contacto & Document>("Contacto", schema, "contacto");
