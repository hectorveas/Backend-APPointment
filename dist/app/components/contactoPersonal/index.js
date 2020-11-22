"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const contactoPersonal_network_1 = __importDefault(require("./contactoPersonal.network"));
const contactoPersonal = express_1.default();
contactoPersonal.use('/contactoPersonal', contactoPersonal_network_1.default);
exports.default = contactoPersonal;
