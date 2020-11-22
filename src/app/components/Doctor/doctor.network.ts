import express, {Router, Request, Response} from "express"
import responseModule from "../../modules/response.module";
import doctorSchema from "./doctor.schema";

interface doctorDoc{
    _id?: string;
    nombreDoctor: string;
    apellidoDoctor: string;
    rut: string;
    email: string;
    fono: string;
    contrasena: string;
    especialidad: string;
  }

const router: Router = express.Router();

router.get("/all",async function(req: Request, res: Response){
    
    try {
        const doctor: doctorDoc[] = await doctorSchema.find();
        responseModule.success(req, res, doctor,200);
    } catch (error) {
        responseModule.error(req,res,"Error desconocido");
    }
});

router.post("/add", async function(req: Request, res: Response){

    //const body: Partial<Message> = req.body;

    const doctor: Partial<doctorDoc> = {

        nombreDoctor: req.body['nombreDoctor'],
        apellidoDoctor: req.body['apellidoDoctor'],
        rut: req.body['rut'],
        email: req.body['email'],
        fono: req.body['fono'],
        contrasena: req.body['contrasena'],
        especialidad: req.body['especialidad']
    };

    try {
        const newMessage = await doctorSchema.create<Partial<doctorDoc>>(doctor);
        responseModule.success(req, res, newMessage,201);

    } catch (error) {
        responseModule.error(req,res,"Error desconocido");
    }
    
});

export default router;


