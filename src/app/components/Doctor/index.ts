import express, {Express, Router} from "express";
import router from "./doctor.network";

const doctor: Express = express();
doctor.use('/doctor', router);

export default doctor;
