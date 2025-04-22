const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class Matricula {
  constructor() {}

  // Listar cursos disponibles para matrícula
  async listarCursosDisponibles(periodo) {
    try {
      // Validar oferta académica activa
      const ofertaActiva = await prisma.ofertaAcademica.findFirst({
        where: {
          periodo: periodo
          // Quitamos los campos fechaInicio y fechaFin que no existen en el modelo
        }
      });

      if (!ofertaActiva) throw new Error("Periodo no disponible para matrícula");

      return await prisma.cursos.findMany({
        where: {
          periodo: periodo,
          ofertaAcademicaid: ofertaActiva.id // Solo cursos de ofertas activas
        },
        include: {
          planEstudio: { 
            include: { 
              materias: true 
            } 
          },
          docente: true
        }
      });

    } catch (error) {
      throw new Error(`Error al listar cursos: ${error.message}`);
    }
  }

  // Matricular estudiante en curso
  async agregarMatricula(estudianteId, cursoId, periodo) {
    return await prisma.$transaction(async (prisma) => {
      try {
        // Validar curso
        const curso = await prisma.cursos.findUnique({
          where: { id: cursoId },
          include: { 
            planEstudio: { 
              include: { materias: true } 
            } 
          }
        });

        if (!curso) throw new Error("Curso no encontrado");
        
        // Calcular créditos del curso (suma de créditos de sus materias)
        const creditosCurso = curso.planEstudio.materias.reduce(
          (sum, materia) => sum + materia.creditos, 0
        );

        // Obtener créditos matriculados activos
        const matriculasActivas = await prisma.matricula.findMany({
          where: { 
            estudianteId: estudianteId,
            estado: "ACTIVA"
          },
          include: { 
            curso: { 
              include: { 
                planEstudio: { 
                  include: { materias: true } 
                } 
              } 
            } 
          }
        });

        const creditosMatriculados = matriculasActivas.reduce((sum, matricula) => 
          sum + matricula.curso.planEstudio.materias.reduce((s, m) => s + m.creditos, 0), 0
        );

        // Validar límite de créditos
        if (creditosMatriculados + creditosCurso > 20) {
          throw new Error("Límite de 20 créditos excedido");
        }

        // Evitar matrícula duplicada
        const existeMatricula = await prisma.matricula.findFirst({
          where: { 
            estudianteId: estudianteId,
            cursoId: cursoId,
            periodo: periodo,
            estado: "ACTIVA"
          }
        });

        if (existeMatricula) throw new Error("Matrícula duplicada");

        // Crear matrícula
        return await prisma.matricula.create({
          data: {
            estudianteId: estudianteId,
            cursoId: cursoId,
            periodo: periodo,
            estado: "ACTIVA"
          },
          include: { curso: true }
        });

      } catch (error) {
        throw new Error(`Error al matricular: ${error.message}`);
      }
    });
  }

  // Listar matrículas activas del estudiante
  async listarMatriculasEstudiante(estudianteId) {
    try {
      return await prisma.matricula.findMany({
        where: { 
          estudianteId: estudianteId,
          estado: "ACTIVA"
        },
        include: { 
          curso: {
            include: {
              docente: true,
              planEstudio: true
            }
          } 
        }
      });
    } catch (error) {
      throw new Error(`Error al listar matrículas: ${error.message}`);
    }
  }

  // Cancelar matrícula
  async cancelarMatricula(matriculaId, estudianteId) {
    return await prisma.$transaction(async (prisma) => {
      try {
        const matricula = await prisma.matricula.findUnique({
          where: { id: matriculaId }
        });

        if (!matricula) throw new Error("Matrícula no encontrada");
        if (matricula.estudianteId !== estudianteId) throw new Error("No autorizado");

        return await prisma.matricula.update({
          where: { id: matriculaId },
          data: { estado: "CANCELADA" }
        });

      } catch (error) {
        throw new Error(`Error al cancelar matrícula: ${error.message}`);
      }
    });
  }
}

module.exports = Matricula;