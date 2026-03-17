export default class ProfesorController {
  constructor({ createProfesor, getAllProfesores }) {
    this.createProfesor  = createProfesor;
    this.getAllProfesores = getAllProfesores;
  }

  async create(req, res) {
    try {
      const profesor = await this.createProfesor.execute(req.body);
      res.status(201).json(profesor);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getAll(req, res) {
    try {
      const profesores = await this.getAllProfesores.execute();
      res.status(200).json(profesores);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}
