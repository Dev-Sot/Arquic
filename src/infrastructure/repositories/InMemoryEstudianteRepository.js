import EstudianteRepository from "../../domain/repositories/EstudianteRepository.js";

export default class InMemoryEstudianteRepository extends EstudianteRepository {
  constructor() {
    super();
    this.estudiantes = [];
  }

  async save(estudiante) {
    const index = this.estudiantes.findIndex(e => e.codigo === estudiante.codigo);
    if (index >= 0) {
      this.estudiantes[index] = estudiante;
    } else {
      this.estudiantes.push(estudiante);
    }
    return estudiante;
  }

  async findAll() {
    return this.estudiantes;
  }
}
