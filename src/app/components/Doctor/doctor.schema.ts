import { Schema, model, Document } from "mongoose";

interface doctorDoc extends Document {
    _id: string;
    nombreDoctor: string;
    apellidoDoctor: string;
    rut: string;
    email: string;
    fono: string;
    contrasena: string;
    especialidad: string;
}

const schema: Schema<doctorDoc> = new Schema({
    nombreDoctor: {type: String, required: true},
    apellidoDoctor: {type: String, required: true},
    rut: {type: String, required: true},
    email: {type: String, required: true},
    fono: {type: String, required: true},
    contrasena: {type: String, required: true},
    especialidad: {type: String, required: true}
});

export default model<doctorDoc>('Doctor', schema, 'doctor')