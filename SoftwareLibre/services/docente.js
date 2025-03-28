const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();

class Docente{

  constructor() {

  };

  async Agregar(cedula, nombre, apellido1, apellido2, direccion, fecha_nacimiento, telefono, correo, provinciaId) {
    try {
      return await prisma.docente.create({
        data: {
          cedula,
          nombre,
          apellido1,
          apellido2,
          direccion,
          fecha_nacimiento: new Date(fecha_nacimiento),
          telefono,
          correo,
          provinciaId: parseInt(provinciaId)
        }
      });
    } catch(error) {
      console.error(`Error creando docente: ${error}`);
    }
  }

  async Actualizar(id, datosActualizados) { // Recibe un objeto con todos los campos
    try {
      return await prisma.docente.update({
        where: { id: parseInt(id) },
        data: {
          cedula: datosActualizados.cedula,
          nombre: datosActualizados.nombre,
          apellido1: datosActualizados.apellido1,
          apellido2: datosActualizados.apellido2,
          direccion: datosActualizados.direccion,
          fecha_nacimiento: new Date(datosActualizados.fecha_nacimiento), // Conversión a Date
          telefono: datosActualizados.telefono,
          correo: datosActualizados.correo,
          provinciaId: parseInt(datosActualizados.provinciaId) // Conversión a entero
        }
      });
    } catch(error) {
      console.error(`Error actualizando docente: ${error}`);
      throw error; // Propaga el error para manejo centralizado
    }
  }

  async Borrar(id) {
    try {
      return await prisma.docente.delete({
        where: { id: parseInt(id) }
      });
    } catch(error) {
      console.error(`Error eliminando docente: ${error}`);
    }
  }
  Listar(id) {
    return id === undefined 
      ? prisma.docente.findMany()
      : prisma.docente.findMany({ where: { id: parseInt(id) }});
  }
}

module.exports = Docente;
