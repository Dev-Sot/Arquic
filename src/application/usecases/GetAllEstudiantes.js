export default class GetAllEstudiantes {
  constructor(estudianteRepository) {
    this.estudianteRepository = estudianteRepository;
  }

  async execute() {
    return await this.estudianteRepository.findAll();
  }
}
