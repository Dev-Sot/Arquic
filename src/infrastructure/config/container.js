import MongoEstudianteRepository from "../repositories/MongoEstudianteRepository.js";
import CreateEstudiante           from "../../application/usecases/CreateEstudiante.js";
import GetAllEstudiantes          from "../../application/usecases/GetAllEstudiantes.js";
import EstudianteController       from "../controllers/EstudianteController.js";
import { connectDB }              from "./mongodb.js";

export async function buildContainer() {
  // 1. Conexión a MongoDB
  const client = await connectDB();

  // 2. Repositorio
  const repository = new MongoEstudianteRepository(client);

  // 3. Use cases
  const createEstudiante = new CreateEstudiante(repository);
  const getAllEstudiantes = new GetAllEstudiantes(repository);

  // 4. Controller
  const estudianteController = new EstudianteController({
    createEstudiante,
    getAllEstudiantes,
  });

  return { estudianteController };
}
