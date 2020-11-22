export interface Paciente{
    __id?: string; // id lo crea mongo
    nombrePaciente: string;
    apellidoPaciente: string;
    rut: string;
    email: string;
    fono: string;
    contrasena: string;
    createdAt: Date;
    
};