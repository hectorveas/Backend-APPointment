"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
function connect() {
    const mongoUri = 'mongodb+srv://Appointment:aE9qUF1gAgre4bVb@cluster0.qrd8g.mongodb.net/'; //'mongodb+srv://user:1234@cluster0-emxsf.mongodb.net/backend-ay'
    const nameDB = 'APPointmentOficial';
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    };
    return mongoose_1.default.connect(mongoUri + nameDB, options);
}
exports.default = { connect };
