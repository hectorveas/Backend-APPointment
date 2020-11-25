import { Contacto } from "../../models/contactoPersonal.model";
import contactoPersonalRepository from "./contactoPersonal.repository";

function crearContacto(contacto: Contacto) {
  return contactoPersonalRepository.crearContacto(contacto);
}

function eliminarContacto(idContacto: string) {
  return contactoPersonalRepository.eliminarContacto(idContacto);
}

function mostrarContactos() {
  return contactoPersonalRepository.mostrarContactos();
}

function existeContacto(rutContacto: string) {
  if (contactoPersonalRepository.existeContacto(rutContacto) == null) {
    return true;
  } else {
    return false;
  }
}

function buscarContacto(idContacto: string) {
  return contactoPersonalRepository.buscarContacto(idContacto);
}

async function modificarContacto(
  idContacto: string,
  contactoPersonal: Partial<Contacto>
): Promise<Partial<Contacto | null>> {
  return contactoPersonalRepository.modificarContacto(
    idContacto,
    contactoPersonal
  );
}

export default {
  crearContacto,
  eliminarContacto,
  mostrarContactos,
  existeContacto,
  buscarContacto,
  modificarContacto,
};
