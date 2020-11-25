"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const doctor_network_1 = __importDefault(require("./doctor.network"));
const doctor = express_1.default();
doctor.use("/doctor", doctor_network_1.default);
exports.default = doctor;
