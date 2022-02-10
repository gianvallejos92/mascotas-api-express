const faker = require('faker');

class MascotaService {

  constructor () {
    this.mascotas = [];
    this.generate();
  }

  generate () {
    const limit = 100;
    for (let ind = 0; ind < limit; ind++) {
      this.mascotas.push({
        id: faker.datatype.uuid(),
        name: faker.name.firstName(),
        Tipo: faker.animal.type(),
        Imagen: faker.image.animals(),
        Ciudad: faker.address.city(),
      });
    }
  }

  create (data) {
    const nuevaMascota = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.mascotas.push(nuevaMascota);
    return nuevaMascota;
  }

  find () {
    return this.mascotas;
  }

  findOne (id) {
    const mascotas = this.mascotas.find(item => item.id === id);
    if (!mascotas) {
      throw new Error('No hay mascotas disponibles');
    }
    return mascotas;
  }

  update (id, data) {
    const index = this.mascotas.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('Mascota no encontrada');
    }
    const mascota = this.mascotas[index];
    this.mascotas[index] = {
      ...mascota,
      ...data
    };
    return this.mascotas[index];
  }

  delete (id) {
    const index = this.mascotas.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('Mascota no encontrada');
    }
    this.mascotas.splice(index, 1);
    return { id };
  }
}

module.exports = MascotaService;
