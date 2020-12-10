import express, {Express, Router} from "express";
import router from "./contactoPersonal.network";

const contactoPersonal: Express = express();
contactoPersonal.use('/contactoPersonal', router);

export default contactoPersonal; 
