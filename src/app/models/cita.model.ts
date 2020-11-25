export interface Cita {
  _id?: string;
  paciente: string;
  fechaConsulta: Date;
  descripcion: string;
  estadoCita: string;
  motivoCancelacion?: string;
  personaCancelar?: string;
}
