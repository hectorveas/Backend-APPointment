import express, {Router, Request, Response} from "express"
import responseModule from "../../modules/response.module";
import contactoSchema from "./contacto.schema";

interface contactoDoc{
    _id?: string;
    nombrePaciente: string;
    apellidoPaciente: string;
    rut: string;
    email: string;
    descripcion: string;
    fechaSolicitud: Date;
  }

const router: Router = express.Router();

router.get("/all",async function(req: Request, res: Response){
    
    try {
        const contactos: contactoDoc[] = await contactoSchema.find();
        responseModule.success(req, res, contactos,200);
    } catch (error) {
        responseModule.error(req,res,"Error desconocido");
    }
});

router.post("/add", async function(req: Request, res: Response){

    //const body: Partial<Message> = req.body;

    const contacto: Partial<contactoDoc> = {
        nombrePaciente: req.body['nombrePaciente'],
        apellidoPaciente: req.body['apellidoPaciente'],
        rut: req.body['rut'],
        email: req.body['email'],
        descripcion: req.body['descripcion'],
        fechaSolicitud: new Date()
    };

    try {
        const newMessage = await contactoSchema.create<Partial<contactoDoc>>(contacto);
        responseModule.success(req, res, newMessage,201);

    } catch (error) {
        responseModule.error(req,res,"Error desconocido");
    }
    
});

export default router;