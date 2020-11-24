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
const cita_controller_1 = __importDefault(require("./cita.controller"));
const router = express_1.default.Router();
router.get("/all", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const citas = yield cita_controller_1.default.mostrarTodoCita();
        response_module_1.default.success(req, res, citas, 200);
    }
    catch (error) {
        response_module_1.default.error(req, res, "Error desconocido");
    }
}));
router.post("/add", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cita = req.body;
    try {
        const newContacto = yield cita_controller_1.default.agregarCita(cita);
        response_module_1.default.success(req, res, newContacto, 201);
    }
    catch (error) {
        response_module_1.default.error(req, res, "Error desconocido");
    }
}));
router.delete("/delete", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const ver = yield cita_controller_1.default.eliminarCita(req.body._id);
            if (ver != null) {
                response_module_1.default.success(req, res, "SE ELIMINO CITA", 200);
            }
            else {
                response_module_1.default.success(req, res, "NO SE ENCONTRO LA CITA");
            }
        }
        catch (error) {
            response_module_1.default.error(req, res, "Error desconocido");
        }
    });
});
exports.default = router;
