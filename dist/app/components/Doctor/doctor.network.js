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
const doctor_controller_1 = __importDefault(require("./doctor.controller"));
const router = express_1.default.Router();
router.get("/all", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const doctor = yield doctor_controller_1.default.mostrarTodoDoctor();
            response_module_1.default.success(req, res, doctor, 200);
        }
        catch (error) {
            response_module_1.default.error(req, res, "Error desconocido");
        }
    });
});
router.post("/add", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const doctor = req.body;
        if ((yield doctor_controller_1.default.existeDoctor(req.body.rut)) != true) {
            try {
                const newDoctor = yield doctor_controller_1.default.agregarDoctor(doctor);
                response_module_1.default.success(req, res, newDoctor, 201);
            }
            catch (error) {
                response_module_1.default.error(req, res, "Error desconocido");
            }
        }
        else {
            response_module_1.default.error(req, res, "DOCTOR EXISTENTE");
        }
    });
});
router.get("/rut", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const doctor = yield doctor_controller_1.default.BuscarDoctorRut(req.body.rut);
            if (doctor != null) {
                response_module_1.default.success(req, res, doctor, 200);
            }
            else {
                response_module_1.default.success(req, res, "No se encontro al doctor", 200);
            }
        }
        catch (error) {
            response_module_1.default.error(req, res, "Error desconocido");
        }
    });
});
router.delete("/delete", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const ver = yield doctor_controller_1.default.eliminarDoctor(req.body.rut);
            if (ver != null) {
                response_module_1.default.success(req, res, "SE ELIMINO AL DOCTOR", 200);
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
router.patch("/patch/nombre", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const ver = yield doctor_controller_1.default.modificarNombreDoctor(req.body._id, req.body.nombreDoctor);
            if (ver != null) {
                response_module_1.default.success(req, res, "SE MODIFICO AL DOCTOR", 200);
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
router.patch("/patch/apellido", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const ver = yield doctor_controller_1.default.modificarApellidoDoctor(req.body._id, req.body.apellidoDoctor);
            if (ver != null) {
                response_module_1.default.success(req, res, "SE MODIFICO AL DOCTOR", 200);
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
router.patch("/patch/mail", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const ver = yield doctor_controller_1.default.modificarMailDoctor(req.body._id, req.body.email);
            if (ver != null) {
                response_module_1.default.success(req, res, "SE MODIFICO AL DOCTOR", 200);
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
router.patch("/patch/fono", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const ver = yield doctor_controller_1.default.modificarFonoDoctor(req.body._id, req.body.fono);
            if (ver != null) {
                response_module_1.default.success(req, res, "SE MODIFICO AL DOCTOR", 200);
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
router.patch("/patch/rut", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const ver = yield doctor_controller_1.default.modificarFonoDoctor(req.body._id, req.body.rut);
            if (ver != null) {
                response_module_1.default.success(req, res, "SE MODIFICO AL DOCTOR", 200);
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
router.patch("/patch/contrasena", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const ver = yield doctor_controller_1.default.modificarFonoDoctor(req.body._id, req.body.contrasena);
            if (ver != null) {
                response_module_1.default.success(req, res, "SE MODIFICO AL DOCTOR", 200);
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
router.patch("/patch/especialidad", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const ver = yield doctor_controller_1.default.modificarEspecialidadDoctor(req.body._id, req.body.especialidad);
            if (ver != null) {
                response_module_1.default.success(req, res, "SE MODIFICO AL DOCTOR", 200);
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
