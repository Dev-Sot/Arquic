export default class GetAllProfesores {
  constructor(profesorRepository) {
    this.profesorRepository = profesorRepository;
  }

  async execute() {
    return await this.profesorRepository.findAll();
  }
}
