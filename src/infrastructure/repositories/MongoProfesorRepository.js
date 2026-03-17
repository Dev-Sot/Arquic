import ProfesorRepository from "../../domain/repositories/ProfesorRepository.js";

export default class MongoProfesorRepository extends ProfesorRepository {
  constructor(client) {
    super();
    this.collection = client.db("estudiante-api").collection("profesores");
  }

  async save(profesor) {
    const existing = await this.collection.findOne({ cedula: profesor.cedula });
    if (existing) {
      await this.collection.updateOne({ cedula: profesor.cedula }, { $set: profesor });
    } else {
      await this.collection.insertOne(profesor);
    }
    return profesor;
  }

  async findAll() {
    return await this.collection.find({}, { projection: { _id: 0 } }).toArray();
  }
}
