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
const mongoose_module_1 = __importDefault(require("./modules/mongoose.module"));
const express_1 = __importDefault(require("express"));
const components_1 = __importDefault(require("./components"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const server = express_1.default(); // new Express();
        const port = 29341;
        server.use(express_1.default.json()); // que mande y llegue todo en json
        server.use(cors_1.default());
        server.use(morgan_1.default("dev"));
        server.use("/api", ...components_1.default); // '...components' es equivalente a for i < components.length
        try {
            yield mongoose_module_1.default.connect();
            console.log("conexión exitosa");
            server.listen(port, () => {
                console.log("Servidor escuchando en: http://localhost:" + port);
            });
        }
        catch (error) {
            console.log("conexion fallida");
        }
    });
}
exports.default = { main };
