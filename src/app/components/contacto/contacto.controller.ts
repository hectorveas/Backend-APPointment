import { Contacto } from "../../models/contacto.model";
import contactoRepository from "./contacto.repository";

function mostrarTodoContacto(): Promise<Contacto[]> {
  return contactoRepository.mostrarTodoContacto();
}

function agregarContacto(contacto: Contacto): Promise<Contacto> {
  contacto.fechaSolicitud = new Date();
  return contactoRepository.agregarContacto(contacto);
}

function eliminarContacto(id: string) {
  return contactoRepository.eliminarContacto(id);
}

export default { mostrarTodoContacto, agregarContacto, eliminarContacto };
