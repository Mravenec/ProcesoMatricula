const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();

class Provincas {

  constructor() {

  };

  async Agregar(Provincia) {
    let resultado;
    try {
      resultado = await prisma.provincias.create({
        data: {
          Provincia: Provincia,
          FechaDeCreacion: new Date()
        }
      });
    } catch (error) {
      console.error(`No se pudo insertar la provincia ${Provincia} debido al error: ${error}`);
    }
    return resultado;
  };

  async Actualizar(ProvinciaId, Provincia) {
    let resultado;
    try {
        // Validar que la provincia exista
        const provinciaExistente = await prisma.provincias.findUnique({
            where: { ProvinciaId: parseInt(ProvinciaId) },
        });
        if (!provinciaExistente) {
            throw new Error("Provincia no encontrada");
        }

        // Actualizar
        resultado = await prisma.provincias.update({
            where: { ProvinciaId: parseInt(ProvinciaId) },
            data: { Provincia: Provincia },
        });

    } catch (error) {
        console.error(`No se pudo actualizar la provincia ${ProvinciaId}: ${error}`);
        throw error; // Propaga el error para manejarlo en el router
    }
    return resultado;
};

  async Borrar(ProvinciaId) {
    let resultado;
    try {
      resultado = await prisma.provincias.delete({
        where: {
          ProvinciaId: parseInt(ProvinciaId),
        },
      });
    } catch (error) {
      console.error(`No se pudo borrar la provincia ${ProvinciaId} debido al error: ${error}`);
    }
    return resultado;
  };

  Listar(ProvinciaId) {
    let Provincias;
    if (ProvinciaId === undefined) {
      Provincias = prisma.provincias.findMany();
    } else {
      Provincias = prisma.provincias.findMany({
        where: {
          ProvinciaId: parseInt(ProvinciaId),
        },
      });
    }
    return Provincias;
  };
}

module.exports = Provincas;
