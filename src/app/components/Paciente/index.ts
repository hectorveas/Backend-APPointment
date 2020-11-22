import express, {Express, Router} from "express";
import router from "./paciente.network";

const paciente: Express = express();
paciente.use('/paciente', router);

export default paciente;