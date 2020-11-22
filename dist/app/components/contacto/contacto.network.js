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
const contacto_schema_1 = __importDefault(require("./contacto.schema"));
const router = express_1.default.Router();
router.get("/all", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const contactos = yield contacto_schema_1.default.find();
            response_module_1.default.success(req, res, contactos, 200);
        }
        catch (error) {
            response_module_1.default.error(req, res, "Error desconocido");
        }
    });
});
router.post("/add", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        //const body: Partial<Message> = req.body;
        const contacto = {
            nombrePaciente: req.body['nombrePaciente'],
            apellidoPaciente: req.body['apellidoPaciente'],
            rut: req.body['rut'],
            email: req.body['email'],
            descripcion: req.body['descripcion'],
            fechaSolicitud: new Date()
        };
        try {
            const newMessage = yield contacto_schema_1.default.create(contacto);
            response_module_1.default.success(req, res, newMessage, 201);
        }
        catch (error) {
            response_module_1.default.error(req, res, "Error desconocido");
        }
    });
});
exports.default = router;
