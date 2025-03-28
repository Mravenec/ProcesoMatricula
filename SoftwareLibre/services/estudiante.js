const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();

class Estudiante   {

  constructor() {

  };


  async Agregar(cedula, nombre, apellido1, apellido2, fecha_nacimiento, direccion, telefono, correo, provinciaId) {
    try {
      return await prisma.estudiante.create({
        data: {
          cedula,
          nombre,
          apellido1,
          apellido2,
          fecha_nacimiento,
          direccion,
          telefono,
          correo,
          provinciaId
        }
      });
    } catch(error) {
      console.error(`Error creando estudiante: ${error}`);
    }
  }

  async Actualizar(id, cedula, nombre, apellido1, apellido2, fecha_nacimiento, direccion, telefono, correo, provinciaId) {
    return await prisma.estudiante.update({
        where: { id: Number(id) },
        data: {
            cedula,
            nombre,
            apellido1,
            apellido2,
            fecha_nacimiento,
            direccion,
            telefono,
            correo,
            provinciaId
        }
    });
}

  async Borrar(id) {
    try {
      return await prisma.estudiante.delete({
        where: { id: parseInt(id) }
      });
    } catch(error) {
      console.error(`Error eliminando estudiante: ${error}`);
    }
  }
  Listar(id) {
    return id === undefined 
      ? prisma.estudiante.findMany()
      : prisma.estudiante.findMany({ where: { id: parseInt(id) }});
  }

}

module.exports = Estudiante;
