import express, { Router, Request, Response } from "express";
import { Contacto } from "../../models/contactoPersonal.model";
import responseModule from "../../modules/response.module";
import contatoPersonalController from "./contatoPersonal.controller";

const router: Router = express.Router();

router.get("/all", async function (req: Request, res: Response) {
  //muestra a todos los contactos

  try {
    const contacto: Contacto[] = await contatoPersonalController.mostrarContactos();
    responseModule.success(req, res, contacto, 200);
  } catch (error) {
    responseModule.error(req, res, "Error desconocido");
  }
});

router.post("/add", async function (req: Request, res: Response) {
  // agrega un contacto

  // if( contatoPersonalController.existeContacto(req.body.rut) == true){ va ??
  try {
    const contacto = await contatoPersonalController.crearContacto(req.body);
    responseModule.success(req, res, contacto, 201);
  } catch (error) {
    responseModule.error(req, res, "Error desconocido");
  }
});

router.get("/rut", async function (req: Request, res: Response) {
  //busca al contacto por rut
  try {
    console.log(await contatoPersonalController.buscarContacto(req.body.rut));
    let contacto: Contacto | null = await contatoPersonalController.buscarContacto(
      req.body.rut
    );

    if (contacto != null) {
      responseModule.success(req, res, contacto, 200);
    } else {
      responseModule.success(
        req,
        res,
        "NO SE ENCONTRARON CONTACTOS ASOCIADOS",
        200
      );
    }
  } catch (error) {
    responseModule.error(req, res, "Error desconocido");
  }
});

router.delete("/delete", async function (req: Request, res: Response) {
  //remover contacto

  try {
    const ver = await contatoPersonalController.eliminarContacto(req.body._id);
    if (ver != null) {
      responseModule.success(req, res, "SE ELIMINO EL CONTACTO", 200);
    } else {
      responseModule.success(req, res, "NO SE ENCONTRO EL CONTACTO");
    }
  } catch (error) {
    responseModule.error(req, res, "Error desconocido");
  }
});

router.patch("/:id", async function (req: Request, res: Response) {
  const { id } = req.params;

  try {
    const modDoctor = await contatoPersonalController.modificarContacto(
      id,
      req.body
    );
    if (modDoctor != null) {
      responseModule.success(req, res, modDoctor, 200);
    } else {
      responseModule.success(req, res, "NO SE ENCONTRO AL DOCTOR");
    }
  } catch (error) {
    responseModule.error(req, res, "Error desconocido");
  }
});

export default router;
