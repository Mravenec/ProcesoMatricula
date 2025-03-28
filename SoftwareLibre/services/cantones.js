const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();

class Cantones{

  constructor() {

  };
  
  async Agregar(Canton, ProvinciaId) {
    let resultado;
    try {
      resultado = await prisma.cantones.create({
        data: { 
          Canton, 
          ProvinciaId: parseInt(ProvinciaId), 
          FechaDeCreacion: new Date()
        }
      });
    } catch (error) {
      console.error(`Error al crear cantón: ${error}`);
    }
    return resultado;
  };

  async Actualizar(CantonId, Canton, ProvinciaId) { // Recibe ambos campos
    let resultado;
    try {
      resultado = await prisma.cantones.update({
        where: { CantonId: parseInt(CantonId) },
        data: { 
          Canton,
          ProvinciaId: parseInt(ProvinciaId) // Asegura que sea número
        }
      });
    } catch (error) {
      console.error(`Error al actualizar cantón: ${error}`);
    }
    return resultado;
  };

  async Borrar(CantonId) {
    let resultado;
    try {
      resultado = await prisma.cantones.delete({
        where: { CantonId: parseInt(CantonId) }
      });
    } catch (error) {
      console.error(`Error al eliminar cantón: ${error}`);
    }
    return resultado;
  };

  Listar(CantonId) {
    let cantones;
    if (CantonId === undefined) {
      cantones = prisma.cantones.findMany();
    } else {
      cantones = prisma.cantones.findMany({
        where: { CantonId: parseInt(CantonId) }
      });
    }
    return cantones;
  };
}




module.exports = Cantones;
