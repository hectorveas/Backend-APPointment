export interface Contacto{
    _id: string;
    nombrePaciente: string;
    email: string;
    contrasena: string;
    telefono: string;
    confirmacion?: boolean;
    fechaSolicitud: Date;
}