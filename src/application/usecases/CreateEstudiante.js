import Estudiante from "../../domain/entities/Estudiante.js";

export default class CreateEstudiante {
  constructor(estudianteRepository) {
    this.estudianteRepository = estudianteRepository;
  }

  async execute({ codigo, nombre }) {
    const estudiante = new Estudiante({ codigo, nombre });
    return await this.estudianteRepository.save(estudiante);
  }
}
