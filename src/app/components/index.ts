import { Express } from "express";
import cita from "./cita";
import contacto from "./contacto";
import contactoPersonal from "./contactoPersonal";
import doctor from "./Doctor";
import paciente from "./Paciente";

const components: Express[] = [
  cita,
  contacto,
  contactoPersonal,
  doctor,
  paciente,
];

export default components;
