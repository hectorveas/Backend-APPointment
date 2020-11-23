import express, {Router, Request, Response} from "express"
import { Doctor } from "../../models/doctor.model";
import responseModule from "../../modules/response.module";
import doctorController from "./doctor.controller";

const router: Router = express.Router();

router.get("/all",async function(req: Request, res: Response){ //muestra a todos los doctors
    
    try {
        const doctor: Doctor[] = await doctorController.mostrarTodoDoctor();
        responseModule.success(req, res, doctor,200);
    } catch (error) {
        responseModule.error(req,res,"Error desconocido");
    }
});

router.post("/add", async function(req: Request, res: Response){ // agrega un doctor

    const doctor : Doctor = req.body;
        if( await doctorController.existeDoctor(req.body.rut) != true){
            try {
                const newDoctor = await doctorController.agregarDoctor(doctor);
                responseModule.success(req, res, newDoctor,201);
            } catch (error) {
                responseModule.error(req,res,"Error desconocido");
            }
        }else{
            responseModule.error(req,res,"DOCTOR EXISTENTE");
        }
});

router.get("/rut", async function(req: Request, res: Response){ //busca al doctor por rut

    try {
        const doctor : Doctor | null = await doctorController.BuscarDoctorRut(req.body.rut);
        if(doctor != null){
            responseModule.success(req,res,doctor,200);
        }else{
            responseModule.success(req,res,"No se encontro al doctor",200);
        }
    } catch (error) {
        responseModule.error(req,res,"Error desconocido");
    }
});

router.delete("/delete", async function(req: Request, res: Response) { //remover doctor

   try {
      const ver = await doctorController.eliminarDoctor(req.body.rut);
      if(ver != null){
        responseModule.success(req,res,"SE ELIMINO AL DOCTOR",200);
      }else{
          responseModule.success(req,res,"NO SE ENCONTRO AL DOCTOR");
      }
      
     
   } catch (error) {
        responseModule.error(req,res,"Error desconocido");
   }
});

router.patch("/patch/nombre", async function(req: Request, res: Response) {
    
    try {
        const ver = await doctorController.modificarNombreDoctor(req.body._id, req.body.nombreDoctor);
        if(ver != null){
          responseModule.success(req,res,"SE MODIFICO AL DOCTOR",200);
        }else{
            responseModule.success(req,res,"NO SE ENCONTRO AL DOCTOR");
        }
  
     } catch (error) {
          responseModule.error(req,res,"Error desconocido");
     }
});

router.patch("/patch/apellido", async function(req: Request, res: Response) {
    
    try {
        const ver = await doctorController.modificarApellidoDoctor(req.body._id, req.body.apellidoDoctor);
        if(ver != null){
          responseModule.success(req,res,"SE MODIFICO AL DOCTOR",200);
        }else{
            responseModule.success(req,res,"NO SE ENCONTRO AL DOCTOR");
        }
  
     } catch (error) {
          responseModule.error(req,res,"Error desconocido");
     }
});

router.patch("/patch/mail", async function(req: Request, res: Response) {
    
    try {
        const ver = await doctorController.modificarMailDoctor(req.body._id, req.body.email);
        if(ver != null){
          responseModule.success(req,res,"SE MODIFICO AL DOCTOR",200);
        }else{
            responseModule.success(req,res,"NO SE ENCONTRO AL DOCTOR");
        }
  
     } catch (error) {
          responseModule.error(req,res,"Error desconocido");
     }
});

router.patch("/patch/fono", async function(req: Request, res: Response) {
    
    try {
        const ver = await doctorController.modificarFonoDoctor(req.body._id, req.body.fono);
        if(ver != null){
          responseModule.success(req,res,"SE MODIFICO AL DOCTOR",200);
        }else{
            responseModule.success(req,res,"NO SE ENCONTRO AL DOCTOR");
        }
  
     } catch (error) {
          responseModule.error(req,res,"Error desconocido");
     }
});

router.patch("/patch/rut", async function(req: Request, res: Response) {
    
    try {
        const ver = await doctorController.modificarFonoDoctor(req.body._id, req.body.rut);
        if(ver != null){
          responseModule.success(req,res,"SE MODIFICO AL DOCTOR",200);
        }else{
            responseModule.success(req,res,"NO SE ENCONTRO AL DOCTOR");
        }
  
     } catch (error) {
          responseModule.error(req,res,"Error desconocido");
     }
});

router.patch("/patch/contrasena", async function(req: Request, res: Response) {
    
    try {
        const ver = await doctorController.modificarFonoDoctor(req.body._id, req.body.contrasena);
        if(ver != null){
          responseModule.success(req,res,"SE MODIFICO AL DOCTOR",200);
        }else{
            responseModule.success(req,res,"NO SE ENCONTRO AL DOCTOR");
        }
  
     } catch (error) {
          responseModule.error(req,res,"Error desconocido");
     }
});

router.patch("/patch/especialidad", async function(req: Request, res: Response) {
    
    try {
        const ver = await doctorController.modificarEspecialidadDoctor(req.body._id, req.body.especialidad);
        if(ver != null){
          responseModule.success(req,res,"SE MODIFICO AL DOCTOR",200);
        }else{
            responseModule.success(req,res,"NO SE ENCONTRO AL DOCTOR");
        }
  
     } catch (error) {
          responseModule.error(req,res,"Error desconocido");
     }
});





export default router;


