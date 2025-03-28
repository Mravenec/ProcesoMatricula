const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();

class Cursos{

  constructor() {

  };
    
    
  
    async Agregar(planEstudioId, nombre, codigo, docenteId, horario, aula, periodo, ofertaAcademicaid) {
      try {
        return await prisma.cursos.create({
          data: { planEstudioId, nombre, codigo, docenteId, horario, aula, periodo, ofertaAcademicaid }
        });
      } catch(error) {
        console.error(`Error creando curso: ${error}`);
      }
    }
  


    async Actualizar(id, datosActualizados) {  // Recibe un objeto con todos los campos
      try {
        return await prisma.cursos.update({
          where: { id: parseInt(id) },
          data: datosActualizados  // Actualiza todos los campos
        });
      } catch(error) {
        console.error(`Error actualizando curso: ${error}`);
        throw error;  // Propaga el error para manejo centralizado
      }
    }


  
    async Borrar(id) {
      try {
        return await prisma.cursos.delete({
          where: { id: parseInt(id) }
        });
      } catch(error) {
        console.error(`Error eliminando curso: ${error}`);
      }
    }
    Listar(id) {
      return id === undefined 
        ? prisma.cursos.findMany()
        : prisma.cursos.findMany({ where: { id: parseInt(id) }});
    }
}

module.exports = Cursos;
