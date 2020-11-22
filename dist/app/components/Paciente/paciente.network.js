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
const paciente_controller_1 = __importDefault(require("./paciente.controller"));
const router = express_1.default.Router();
router.get("/all", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const paciente = yield paciente_controller_1.default.mostrarTodoPaciente();
            response_module_1.default.success(req, res, paciente, 200);
        }
        catch (error) {
            response_module_1.default.error(req, res, "Error desconocido");
        }
    });
});
router.post("/add", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const paciente = req.body;
        try {
            const newPaciente = yield paciente_controller_1.default.agregarPaciente(paciente);
            response_module_1.default.success(req, res, newPaciente, 201);
        }
        catch (error) {
            response_module_1.default.error(req, res, "Error desconocido");
        }
    });
});
router.get("/rut", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const paciente = yield paciente_controller_1.default.BuscarPacienteRut(req.body.rut);
            response_module_1.default.success(req, res, paciente, 200);
        }
        catch (error) {
            response_module_1.default.error(req, res, "Error desconocido");
        }
    });
});
router.get("/delete", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const ver = yield paciente_controller_1.default.eliminarPaciente(req.body.rut);
            if (ver != null) {
                response_module_1.default.success(req, res, "SE ELIMINO AL PACIENTE", 200);
            }
            else {
                response_module_1.default.success(req, res, "NO SE ENCONTRO AL PACIENTE");
            }
        }
        catch (error) {
            response_module_1.default.error(req, res, "Error desconocido");
        }
    });
});
exports.default = router;
