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
const contacto_controller_1 = __importDefault(require("./contacto.controller"));
const router = express_1.default.Router();
router.get("/all", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const contactos = yield contacto_controller_1.default.mostrarTodoContacto();
            response_module_1.default.success(req, res, contactos, 200);
        }
        catch (error) {
            response_module_1.default.error(req, res, "Error desconocido");
        }
    });
});
router.post("/add", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const contacto = req.body;
        try {
            const newContacto = yield contacto_controller_1.default.agregarContacto(contacto);
            response_module_1.default.success(req, res, newContacto, 201);
        }
        catch (error) {
            response_module_1.default.error(req, res, "Error desconocido");
        }
    });
});
router.delete("/delete", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const ver = yield contacto_controller_1.default.eliminarContacto(req.body._id);
            if (ver != null) {
                response_module_1.default.success(req, res, "SE ELIMINO CONTACTO", 200);
            }
            else {
                response_module_1.default.success(req, res, "NO SE ENCONTRO LA CONTACTO");
            }
        }
        catch (error) {
            response_module_1.default.error(req, res, "Error desconocido");
        }
    });
});
exports.default = router;
