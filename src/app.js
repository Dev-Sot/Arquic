import express                from "express";
import estudianteRoutes        from "./infrastructure/config/routes/estudianteRoutes.js";
import { buildContainer }     from "./infrastructure/config/container.js";

const app = express();
app.use(express.json());

export async function createApp() {
  const { estudianteController } = await buildContainer();
  app.use("/api", estudianteRoutes(estudianteController));
  return app;
}

export default app;
