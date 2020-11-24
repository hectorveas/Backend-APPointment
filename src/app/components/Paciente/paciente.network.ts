import express, {Router, Request, Response} from "express"
import { Paciente } from "../../models/paciente.model";
import responseModule from "../../modules/response.module";
import pacienteController from "./paciente.controller";


const router: Router = express.Router();

router.get("/all",async function(req: Request, res: Response){ //muestra a todos los pacientes
    
    try {
        const paciente: Paciente[] = await pacienteController.mostrarTodoPaciente();
        responseModule.success(req, res, paciente,200);
    } catch (error) {
        responseModule.error(req,res,"Error desconocido");
    }
});

router.post("/add", async function(req: Request, res: Response){ // agrega un paciente

    const paciente : Paciente = req.body;
        if( await pacienteController.existePaciente(req.body.rut) != true){
            try {
                const newPaciente = await pacienteController.agregarPaciente(paciente);
                responseModule.success(req, res, newPaciente,201);
            } catch (error) {
                responseModule.error(req,res,"Error desconocido");
            }
        }else{
            responseModule.error(req,res,"PACIENTE EXISTENTE");
        }
    
});

router.get("/rut", async function(req: Request, res: Response){ //busca al paciente por rut

    try {
        const paciente : Paciente | null = await pacienteController.BuscarPacienteRut(req.body.rut);
        if(paciente != null){
            responseModule.success(req,res,paciente,200);
        }else{
            responseModule.success(req,res,"No se encontro al paciente",200);
        }
    } catch (error) {
        responseModule.error(req,res,"Error desconocido");
    }
});

router.delete("/delete", async function(req: Request, res: Response) { //remover paciente

   try {
      const ver = await pacienteController.eliminarPaciente(req.body.rut);
      if(ver != null){
        responseModule.success(req,res,"SE ELIMINO AL PACIENTE",200);
      }else{
          responseModule.success(req,res,"NO SE ENCONTRO AL PACIENTE");
      }

   } catch (error) {
        responseModule.error(req,res,"Error desconocido");
   }
});

router.patch("/patch/nombre", async function(req: Request, res: Response) {
    
    try {
        const ver = await pacienteController.modificarNombrePaciente(req.body._id, req.body.nombrePaciente);
        if(ver != null){
          responseModule.success(req,res,"SE MODIFICO AL PACIENTE",200);
        }else{
            responseModule.success(req,res,"NO SE ENCONTRO AL PACIENTE");
        }
  
     } catch (error) {
          responseModule.error(req,res,"Error desconocido");
     }
});

router.patch("/patch/apellido", async function(req: Request, res: Response) {
    
    try {
        const ver = await pacienteController.modificarApellidoPaciente(req.body._id, req.body.apellidoPaciente);
        if(ver != null){
          responseModule.success(req,res,"SE MODIFICO AL PACIENTE",200);
        }else{
            responseModule.success(req,res,"NO SE ENCONTRO AL PACIENTE");
        }
  
     } catch (error) {
          responseModule.error(req,res,"Error desconocido");
     }
});

router.patch("/patch/mail", async function(req: Request, res: Response) {
    
    try {
        const ver = await pacienteController.modificarMailPaciente(req.body._id, req.body.email);
        if(ver != null){
          responseModule.success(req,res,"SE MODIFICO AL PACIENTE",200);
        }else{
            responseModule.success(req,res,"NO SE ENCONTRO AL PACIENTE");
        }
  
     } catch (error) {
          responseModule.error(req,res,"Error desconocido");
     }
});

router.patch("/patch/fono", async function(req: Request, res: Response) {
    
    try {
        const ver = await pacienteController.modificarFonoPaciente(req.body._id, req.body.fono);
        if(ver != null){
          responseModule.success(req,res,"SE MODIFICO AL PACIENTE",200);
        }else{
            responseModule.success(req,res,"NO SE ENCONTRO AL PACIENTE");
        }
  
     } catch (error) {
          responseModule.error(req,res,"Error desconocido");
     }
});

router.patch("/patch/rut", async function(req: Request, res: Response) {
    
    try {
        const ver = await pacienteController.modificarFonoPaciente(req.body._id, req.body.rut);
        if(ver != null){
          responseModule.success(req,res,"SE MODIFICO AL PACIENTE",200);
        }else{
            responseModule.success(req,res,"NO SE ENCONTRO AL PACIENTE");
        }
  
     } catch (error) {
          responseModule.error(req,res,"Error desconocido");
     }
});

router.patch("/patch/contrasena", async function(req: Request, res: Response) {
    
    try {
        const ver = await pacienteController.modificarFonoPaciente(req.body._id, req.body.contrasena);
        if(ver != null){
          responseModule.success(req,res,"SE MODIFICO AL PACIENTE",200);
        }else{
            responseModule.success(req,res,"NO SE ENCONTRO AL PACIENTE");
        }
  
     } catch (error) {
          responseModule.error(req,res,"Error desconocido");
     }
});

export default router;

