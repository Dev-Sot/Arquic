import MongoEstudianteRepository from "../repositories/MongoEstudianteRepository.js";
import CreateEstudiante           from "../../application/usecases/CreateEstudiante.js";
import GetAllEstudiantes          from "../../application/usecases/GetAllEstudiantes.js";
import EstudianteController       from "../controllers/EstudianteController.js";

import MongoProfesorRepository    from "../repositories/MongoProfesorRepository.js";
import CreateProfesor             from "../../application/usecases/CreateProfesor.js";
import GetAllProfesores           from "../../application/usecases/GetAllProfesores.js";
import ProfesorController         from "../controllers/ProfesorController.js";

import { connectDB }              from "./mongodb.js";

export async function buildContainer() {
  // 1. Conexión a MongoDB
  const client = await connectDB();

  // 2. Repositorios
  const estudianteRepository = new MongoEstudianteRepository(client);
  const profesorRepository   = new MongoProfesorRepository(client);

  // 3. Use cases - Estudiante
  const createEstudiante = new CreateEstudiante(estudianteRepository);
  const getAllEstudiantes = new GetAllEstudiantes(estudianteRepository);

  // 4. Use cases - Profesor
  const createProfesor  = new CreateProfesor(profesorRepository);
  const getAllProfesores = new GetAllProfesores(profesorRepository);

  // 5. Controllers
  const estudianteController = new EstudianteController({
    createEstudiante,
    getAllEstudiantes,
  });

  const profesorController = new ProfesorController({
    createProfesor,
    getAllProfesores,
  });

  return { estudianteController, profesorController };
}
