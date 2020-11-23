export interface Cita{
    _id?: string;
    nombrePaciente: string;
    fechaSolicitud: Date;
    descripcion: string;
    estadoCita: string;
    motivoCancelacion?: string;
    personaCancelar?: string;
}