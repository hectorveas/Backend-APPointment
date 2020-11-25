import mongooseModule from "./modules/mongoose.module";
import express, { Express, Request, Response } from "express";
import components from "./components";
import morgan from "morgan";
import cors from "cors";

async function main() {
  const server: Express = express(); // new Express();
  const port: number = 29341;

  server.use(express.json()); // que mande y llegue todo en json
  server.use(cors);
  server.use(morgan("dev"));

  server.use("/api", ...components); // '...components' es equivalente a for i < components.length
  try {
    await mongooseModule.connect();
    console.log("conexión exitosa");
    server.listen(port, () => {
      console.log("Servidor escuchando en: http://localhost:" + port);
    });
  } catch (error) {
    console.log("conexion fallida");
  }
}

export default { main };
