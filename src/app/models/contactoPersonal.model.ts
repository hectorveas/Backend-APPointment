export interface ContactoPersonal {
  _id: string;
  nombrePaciente: string;
  rut: string;
  email: string;
  contrasena: string;
  telefono: string;
  confirmacion?: boolean;
  fechaSolicitud: Date;
}
