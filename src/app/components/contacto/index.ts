import express, {Express, Router} from "express";
import router from "./contacto.network";

const contacto: Express = express();
contacto.use('/contacto', router);

export default contacto;