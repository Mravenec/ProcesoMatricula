const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();

class HistoricoAcademico  {

  constructor() {

  };

  async Agregar(estudianteId, cursoId, nota_obtenida, periodo) {
    try {
      return await prisma.historicoAcademico.create({
        data: { estudianteId, cursoId, nota_obtenida, periodo }
      });
    } catch(error) {
      console.error(`Error creando registro histórico: ${error}`);
    }
  }

  async Actualizar(id, datosActualizados) { 
    try {
        return await prisma.historicoAcademico.update({
            where: { id: parseInt(id) },
            data: datosActualizados 
        });
    } catch(error) {
        console.error(`Error actualizando histórico: ${error}`);
        throw error; 
    }
}

  async Borrar(id) {
    try {
      return await prisma.historicoAcademico.delete({
        where: { id: parseInt(id) }
      });
    } catch(error) {
      console.error(`Error eliminando registro: ${error}`);
    }
  }
  Listar(id) {
    return id === undefined 
      ? prisma.historicoAcademico.findMany()
      : prisma.historicoAcademico.findMany({ where: { id: parseInt(id) }});
  }
}

module.exports = HistoricoAcademico;
