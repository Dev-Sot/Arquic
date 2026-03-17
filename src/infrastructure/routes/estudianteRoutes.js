import { Router } from "express";

export default function estudianteRoutes(controller) {
  const router = Router();

  router.post("/estudiantes", (req, res) => controller.create(req, res));
  router.get("/estudiantes",  (req, res) => controller.getAll(req, res));

  return router;
}
