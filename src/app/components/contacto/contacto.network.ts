import express, {Router, Request, Response} from "express"
import responseModule from "../../modules/response.module";
import {Contacto} from "../../models/contacto.model";
import contactoController from "./contacto.controller"

const router: Router = express.Router();

router.get("/all",async function(req: Request, res: Response){
    
    try {
        const contactos: Contacto[] = await contactoController.mostrarTodoContacto();
        responseModule.success(req, res, contactos,200);
    } catch (error) {
        responseModule.error(req,res,"Error desconocido");
    }
});

router.post("/add", async function(req: Request, res: Response){

    const contacto : Contacto = req.body;
            try {
                const newContacto = await contactoController.agregarContacto(contacto);
                responseModule.success(req, res, newContacto,201);
            } catch (error) {
                responseModule.error(req,res,"Error desconocido");
            }  
});

router.delete("/delete", async function(req: Request, res: Response) { 

    try {
       const ver = await contactoController.eliminarContacto(req.body._id);
       if(ver != null){
         responseModule.success(req,res,"SE ELIMINO CONTACTO",200);
       }else{
           responseModule.success(req,res,"NO SE ENCONTRO LA CONTACTO");
       }
       
      
    } catch (error) {
         responseModule.error(req,res,"Error desconocido");
    }
 });

export default router;