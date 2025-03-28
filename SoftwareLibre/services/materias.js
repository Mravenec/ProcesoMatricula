const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();

class Materias  {

  constructor() {

  };

  async Agregar(nombre, nivel, codigo, creditos, horas_teoricas, horas_practicas) {
    try {
      return await prisma.materias.create({
        data: { nombre, nivel, codigo, creditos, horas_teoricas, horas_practicas }
      });
    } catch(error) {
      console.error(`Error creando materia: ${error}`);
    }
  }

  async Actualizar(id, datosActualizados) { // Recibir objeto con todos los campos
    try {
      return await prisma.materias.update({
        where: { id: parseInt(id) },
        data: datosActualizados // Actualizar todos los campos
      });
    } catch(error) {
      console.error(`Error actualizando materia: ${error}`);
      throw error; // Propagar error para manejo centralizado
    }
  }

  async Borrar(id) {
    try {
      return await prisma.materias.delete({
        where: { id: parseInt(id) }
      });
    } catch(error) {
      console.error(`Error eliminando materia: ${error}`);
    }
  }
  
  Listar(id) {
    return id === undefined 
      ? prisma.materias.findMany()
      : prisma.materias.findMany({ where: { id: parseInt(id) }});
  }

}

module.exports = Materias;
