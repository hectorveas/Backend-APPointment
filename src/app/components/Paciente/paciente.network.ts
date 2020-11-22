import express, {Router, Request, Response} from "express"
import responseModule from "../../modules/response.module";
import pacienteSchema from "./paciente.schema";

interface pacienteDoc{
    _id?: string;
    nombrePaciente: string;
    apellidoPaciente: string;
    rut: string;
    email: string;
    fono: string;
    contrasena: string;
  }

const router: Router = express.Router();

router.get("/all",async function(req: Request, res: Response){
    
    try {
        const pacientes: pacienteDoc[] = await pacienteSchema.find();
        responseModule.success(req, res, pacientes,200);
    } catch (error) {
        responseModule.error(req,res,"Error desconocido");
    }
});

router.post("/add", async function(req: Request, res: Response){

    //const body: Partial<Message> = req.body;

    const paciente: Partial<pacienteDoc> = {

        nombrePaciente: req.body['nombrePaciente'],
        apellidoPaciente: req.body['apellidoPaciente'],
        rut: req.body['rut'],
        email: req.body['email'],
        fono: req.body['fono'],
        contrasena: req.body['contrasena'],
    };

    try {
        const newMessage = await pacienteSchema.create<Partial<pacienteDoc>>(paciente);
        responseModule.success(req, res, newMessage,201);

    } catch (error) {
        responseModule.error(req,res,"Error desconocido");
    }
    
});

export default router;
