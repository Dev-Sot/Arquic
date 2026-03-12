export default class EstudianteController {
  constructor({ createEstudiante, getAllEstudiantes }) {
    this.createEstudiante = createEstudiante;
    this.getAllEstudiantes = getAllEstudiantes;
  }

  async create(req, res) {
    try {
      const estudiante = await this.createEstudiante.execute(req.body);
      res.status(201).json(estudiante);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getAll(req, res) {
    try {
      const estudiantes = await this.getAllEstudiantes.execute();
      res.status(200).json(estudiantes);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}
