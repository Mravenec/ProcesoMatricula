const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();

class PlanEstudios {

  constructor() {

  };

  async Agregar(carrera, codigo) {
    try {
      return await prisma.planEstudios.create({
        data: { carrera, codigo }
      });
    } catch(error) {
      console.error(`Error creando plan de estudios: ${error}`);
    }
  }

  async Actualizar(id, datosActualizados) { // Recibe un objeto con ambos campos
    try {
      return await prisma.planEstudios.update({
        where: { id: parseInt(id) },
        data: datosActualizados // Actualiza ambos campos
      });
    } catch(error) {
      console.error(`Error actualizando plan de estudios: ${error}`);
      throw error; // Opcional: Propagar el error para manejo centralizado
    }
  }

  async Borrar(id) {
    try {
      return await prisma.planEstudios.delete({
        where: { id: parseInt(id) }
      });
    } catch(error) {
      console.error(`Error eliminando plan de estudios: ${error}`);
    }
  }

  Listar(id) {
    return id === undefined 
      ? prisma.planEstudios.findMany()
      : prisma.planEstudios.findMany({ where: { id: parseInt(id) }});
  }
}

module.exports = PlanEstudios;
