import { Router } from "express";

export default function profesorRoutes(controller) {
  const router = Router();

  router.post("/profesores", (req, res) => controller.create(req, res));
  router.get("/profesores",  (req, res) => controller.getAll(req, res));

  return router;
}
