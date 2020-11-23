import { Schema, model, Document } from "mongoose";
import { Cita } from "../../models/cita.model";


const definition: Partial<Record<keyof Cita, any>> ={
  nombrePaciente: {type: String, required: true},
  descripcion: {type: String, required: true},
  estadoCita: {type: String, required: true},
  motivoCancelacion: {type: String, required: false},
  personaCancelar: {type: String, required: false},
  fechaSolicitud: {type: Date}
};

const schema: Schema<Cita> = new Schema(definition);

export default model<Cita & Document>('Cita',schema,'cita');

