import Profesor from "../../domain/entities/Profesor.js";

export default class CreateProfesor {
  constructor(profesorRepository) {
    this.profesorRepository = profesorRepository;
  }

  async execute({ cedula, nombre }) {
    const profesor = new Profesor({ cedula, nombre });
    return await this.profesorRepository.save(profesor);
  }
}
