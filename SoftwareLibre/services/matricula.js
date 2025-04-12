// Archivo: services/matricula.js
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class Matricula {
  constructor() {}

  async listarCursosDisponibles(periodo) {
    return await prisma.cursos.findMany({
      where: {
        periodo: periodo,
        ofertaAcademica: { periodo: periodo }
      },
      include: {
        planEstudio: {
          include: { materias: true }
        },
        docente: true
      }
    });
  }

  async agregarMatricula(estudianteId, cursoId, periodo) {
    // Validar existencia del curso
    const curso = await prisma.cursos.findUnique({ 
      where: { id: cursoId },
      include: { ofertaAcademica: true }
    });
    
    if (!curso || curso.ofertaAcademica.periodo !== periodo) {
      throw new Error("Curso no disponible para este periodo");
    }

    // Evitar doble matrícula
    const existeMatricula = await prisma.historicoAcademico.findFirst({
      where: { 
        estudianteId: estudianteId,
        cursoId: cursoId,
        periodo: periodo
      }
    });

    if (existeMatricula) throw new Error("Ya estás matriculado en este curso");

    return await prisma.historicoAcademico.create({
      data: {
        estudianteId: estudianteId,
        cursoId: cursoId,
        periodo: periodo,
        nota_obtenida: null
      }
    });
  }

  async listarMatriculasEstudiante(estudianteId) {
    return await prisma.historicoAcademico.findMany({
      where: { 
        estudianteId: estudianteId,
        nota_obtenida: null 
      },
      include: { curso: true }
    });
  }

  async cancelarMatricula(matriculaId, estudianteId) {
    const matricula = await prisma.historicoAcademico.findUnique({
      where: { id: matriculaId }
    });

    if (!matricula || matricula.estudianteId !== estudianteId) {
      throw new Error("Matrícula no encontrada o no autorizada");
    }

    return await prisma.historicoAcademico.delete({
      where: { id: matriculaId }
    });
  }
}

module.exports = Matricula;