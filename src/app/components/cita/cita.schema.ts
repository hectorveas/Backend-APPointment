import { Schema, model, Document } from "mongoose";
import { Cita } from "../../models/cita.model";

const definition: Partial<Record<keyof Cita, any>> = {
  paciente: { type: String, required: true },
  descripcion: { type: String, required: true },
  estadoCita: { type: String, required: true, default: "reciente" },
  motivoCancelacion: { type: String, required: false },
  personaCancelar: { type: String, required: false },
  fechaConsulta: { type: Date },
};

const schema: Schema<Cita> = new Schema(definition);

export default model<Cita & Document>("Cita", schema, "cita");
