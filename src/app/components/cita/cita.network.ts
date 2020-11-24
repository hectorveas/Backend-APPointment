import express, {Router, Request, Response} from "express"
import { Cita } from "../../models/cita.model";
import responseModule from "../../modules/response.module";
import citaController from "./cita.controller";


const router: Router = express.Router();

router.get("/all",async (req: Request, res: Response) =>{
    
    try {
        const citas: Cita[] = await citaController.mostrarTodoCita();
        responseModule.success(req, res, citas,200);
    } catch (error) {
        responseModule.error(req,res,"Error desconocido");
    }
});

router.post("/add", async (req: Request, res: Response) =>{

        const cita : Cita = req.body;
        try {
            const newCita = await citaController.agregarCita(cita);
            responseModule.success(req, res, newCita,201);
        } catch (error) {
            responseModule.error(req,res,"Error desconocido");
        }  
});


router.delete("/delete", async function(req: Request, res: Response) { 

    try {
       const ver = await citaController.eliminarCita(req.body._id);
       if(ver != null){
         responseModule.success(req,res,"SE ELIMINO CITA",200);
       }else{
           responseModule.success(req,res,"NO SE ENCONTRO LA CITA");
       }
       
      
    } catch (error) {
         responseModule.error(req,res,"Error desconocido");
    }
 });

 router.patch("/patch", async function(req: Request, res: Response) {
    
    const {_id} = req.params;
    
    try {
        const modCita = await citaController.modificarCita(_id,req.body);
        if(modCita != null){
          responseModule.success(req,res,modCita,200);
        }else{
            responseModule.success(req,res,"NO SE ENCONTRO LA CITA");
        }
  
     } catch (error) {
          responseModule.error(req,res,"Error desconocido");
     }
});



export default router

