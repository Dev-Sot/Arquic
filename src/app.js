import express                from "express";
import estudianteRoutes        from "./infrastructure/config/routes/estudianteRoutes.js";
import profesorRoutes          from "./infrastructure/config/routes/profesorRoutes.js";
import { buildContainer }     from "./infrastructure/config/container.js";

const app = express();
app.use(express.json());

export async function createApp() {
  const { estudianteController, profesorController } = await buildContainer();
  app.use("/api", estudianteRoutes(estudianteController));
  app.use("/api", profesorRoutes(profesorController));
  return app;
}

export default app;
