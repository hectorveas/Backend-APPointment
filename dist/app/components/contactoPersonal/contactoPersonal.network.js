"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const response_module_1 = __importDefault(require("../../modules/response.module"));
const contatoPersonal_controller_1 = __importDefault(require("./contatoPersonal.controller"));
const router = express_1.default.Router();
router.get("/all", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        //muestra a todos los contactos
        try {
            const contacto = yield contatoPersonal_controller_1.default.mostrarContactos();
            response_module_1.default.success(req, res, contacto, 200);
        }
        catch (error) {
            response_module_1.default.error(req, res, "Error desconocido");
        }
    });
});
router.post("/add", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // agrega un contacto
        // if( contatoPersonalController.existeContacto(req.body.rut) == true){ va ??
        try {
            const contacto = yield contatoPersonal_controller_1.default.crearContacto(req.body);
            response_module_1.default.success(req, res, contacto, 201);
        }
        catch (error) {
            response_module_1.default.error(req, res, "Error desconocido");
        }
    });
});
router.get("/rut", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        //busca al contacto por rut
        try {
            console.log(yield contatoPersonal_controller_1.default.buscarContacto(req.body.rut));
            let contacto = yield contatoPersonal_controller_1.default.buscarContacto(req.body.rut);
            if (contacto != null) {
                response_module_1.default.success(req, res, contacto, 200);
            }
            else {
                response_module_1.default.success(req, res, "NO SE ENCONTRARON CONTACTOS ASOCIADOS", 200);
            }
        }
        catch (error) {
            response_module_1.default.error(req, res, "Error desconocido");
        }
    });
});
router.delete("/delete", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        //remover contacto
        try {
            const ver = yield contatoPersonal_controller_1.default.eliminarContacto(req.body._id);
            if (ver != null) {
                response_module_1.default.success(req, res, "SE ELIMINO EL CONTACTO", 200);
            }
            else {
                response_module_1.default.success(req, res, "NO SE ENCONTRO EL CONTACTO");
            }
        }
        catch (error) {
            response_module_1.default.error(req, res, "Error desconocido");
        }
    });
});
router.patch("/:id", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const modDoctor = yield contatoPersonal_controller_1.default.modificarContacto(id, req.body);
            if (modDoctor != null) {
                response_module_1.default.success(req, res, modDoctor, 200);
            }
            else {
                response_module_1.default.success(req, res, "NO SE ENCONTRO AL DOCTOR");
            }
        }
        catch (error) {
            response_module_1.default.error(req, res, "Error desconocido");
        }
    });
});
exports.default = router;
