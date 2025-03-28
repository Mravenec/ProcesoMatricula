const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();

class Distritos{

  constructor() {

  };

  async Agregar(Distrito, CantonId) {
    try {
      return await prisma.distritos.create({
        data: { 
          Distrito, 
          CantonId: parseInt(CantonId), 
          FechaDeCreacion: new Date() 
        }
      });
    } catch(error) {
      console.error(`Error creando distrito: ${error}`);
    }
  }

  async Actualizar(DistritoId, datosActualizados) {
    try {
      return await prisma.distritos.update({
        where: { DistritoId: parseInt(DistritoId) },
        data: { 
          Distrito: datosActualizados.Distrito,
          CantonId: parseInt(datosActualizados.CantonId), // Convertir a número
          Valoracion: datosActualizados.Valoracion // Agregar Valoracion
        }
      });
    } catch(error) {
      console.error(`Error actualizando distrito: ${error}`);
      throw error;
    }
  }

  async Borrar(DistritoId) {
    try {
      return await prisma.distritos.delete({
        where: { DistritoId: parseInt(DistritoId) }
      });
    } catch(error) {
      console.error(`Error eliminando distrito: ${error}`);
    }
  }
  Listar(DistritoId) {
    return DistritoId === undefined 
      ? prisma.distritos.findMany()
      : prisma.distritos.findMany({ where: { DistritoId: parseInt(DistritoId) }});
  }
}

module.exports = Distritos;
