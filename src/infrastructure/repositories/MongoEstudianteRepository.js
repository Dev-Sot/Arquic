import EstudianteRepository from "../../domain/repositories/EstudianteRepository.js";

export default class MongoEstudianteRepository extends EstudianteRepository {
  constructor(client) {
    super();
    this.collection = client.db("estudiante-api").collection("estudiantes");
  }

  async save(estudiante) {
    const existing = await this.collection.findOne({ codigo: estudiante.codigo });
    if (existing) {
      await this.collection.updateOne({ codigo: estudiante.codigo }, { $set: estudiante });
    } else {
      await this.collection.insertOne(estudiante);
    }
    return estudiante;
  }

  async findAll() {
    return await this.collection.find({}, { projection: { _id: 0 } }).toArray();
  }
}
