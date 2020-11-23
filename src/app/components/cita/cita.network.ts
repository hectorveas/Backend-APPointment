import express, {Router, Request, Response} from "express"
import responseModule from "../../modules/response.module";
import citaSchema from "./cita.schema";

interface citaDoc{
    _id?: string;
    nombrePaciente: string;
    fechaSolicitud: Date;
    descripcion: string;
    estadoCita: string;
    motivoCancelacion?: string;
    personaCancelar?: string;
  }

const router: Router = express.Router();

router.get("/all",async function(req: Request, res: Response){
    
    try {
        const citas: citaDoc[] = await citaSchema.find();
        responseModule.success(req, res, citas,200);
    } catch (error) {
        responseModule.error(req,res,"Error desconocido");
    }
});

router.post("/add", async function(req: Request, res: Response){

    //const body: Partial<Message> = req.body;

    const cita: Partial<citaDoc> = {
        nombrePaciente: req.body['nombrePaciente'],
        descripcion: req.body['descripcion'],
        estadoCita: req.body['estadoCita'],
        motivoCancelacion: req.body['motivoCancelacion'],
        personaCancelar: req.body['personaCancelar'],
        fechaSolicitud: new Date()
    };

    try {
        const newMessage = await citaSchema.create<Partial<citaDoc>>(cita);
        responseModule.success(req, res, newMessage,201);

    } catch (error) {
        responseModule.error(req,res,"Error desconocido");
    }

});



export default router;