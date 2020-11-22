import express, {Router, Request, Response} from "express"
import responseModule from "../../modules/response.module";
import contactoPersonalSchema from "./contactoPersonal.schema";

interface contactoPersonalDoc{
    _id?: string;
    nombrePaciente: string;
    email: string;
    contrasena: string;
    telefono: string;
    confirmacion?: boolean;
    fechaSolicitud: Date;
  }

const router: Router = express.Router();

router.get("/all",async function(req: Request, res: Response){
    
    try {
        const contactosPersonal: contactoPersonalDoc[] = await contactoPersonalSchema.find();
        responseModule.success(req, res, contactosPersonal,200);
    } catch (error) {
        responseModule.error(req,res,"Error desconocido");
    }
});

router.post("/add", async function(req: Request, res: Response){

    //const body: Partial<Message> = req.body;

    const contactoPersonal: Partial<contactoPersonalDoc> = {
        nombrePaciente: req.body['nombrePaciente'],
        email: req.body['email'],
        contrasena: req.body['contrasena'],
        telefono: req.body['telefono'],
        confirmacion: req.body['confirmacion'],
        fechaSolicitud: new Date()
    };

    try {
        const newMessage = await contactoPersonalSchema.create<Partial<contactoPersonalDoc>>(contactoPersonal);
        responseModule.success(req, res, newMessage,201);

    } catch (error) {
        responseModule.error(req,res,"Error desconocido");
    }
    
});

export default router;