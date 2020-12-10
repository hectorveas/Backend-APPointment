import { ContactoPersonal } from "../../models/contactoPersonal.model";
import model from "./contactoPersonal.schema";

function crearContacto(contacto: ContactoPersonal) {
  contacto.fechaSolicitud = new Date();
  contacto.confirmacion = true;
  return model.create<ContactoPersonal>(contacto);
}

function eliminarContacto(idContacto: string) {
  return model.findByIdAndRemove({ _id: idContacto });
}

function mostrarContactos() {
  return model.find();
}

function existeContacto(rutContacto: string) {
  return model.findById({ rut: new RegExp("19893799-1") });
}

function buscarContacto(rutContacto: string) {
  return model.findOne({ rut: rutContacto });
}

async function modificarContacto(
  idContacto: string,
  contactoPersonal: Partial<ContactoPersonal>
): Promise<Partial<ContactoPersonal | null>> {
  return model.findByIdAndUpdate(idContacto, contactoPersonal);
}

export default {
  crearContacto,
  eliminarContacto,
  mostrarContactos,
  existeContacto,
  buscarContacto,
  modificarContacto,
};
