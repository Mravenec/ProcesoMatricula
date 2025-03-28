const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();

class OfertaAcademica  {

  constructor() {

  };

  async Agregar(periodo) {
    try {
      return await prisma.ofertaAcademica.create({
        data: { periodo }
      });
    } catch(error) {
      console.error(`Error creando oferta: ${error}`);
    }
  }

  async Actualizar(id, periodo) {
    try {
      return await prisma.ofertaAcademica.update({
        where: { id: parseInt(id) },
        data: { periodo }
      });
    } catch(error) {
      console.error(`Error actualizando oferta: ${error}`);
    }
  }

  async Borrar(id) {
    try {
      return await prisma.ofertaAcademica.delete({
        where: { id: parseInt(id) }
      });
    } catch(error) {
      console.error(`Error eliminando oferta: ${error}`);
    }
  }
  Listar(id) {
    return id === undefined 
      ? prisma.ofertaAcademica.findMany()
      : prisma.ofertaAcademica.findMany({ where: { id: parseInt(id) }});
  }
}

module.exports = OfertaAcademica ;
