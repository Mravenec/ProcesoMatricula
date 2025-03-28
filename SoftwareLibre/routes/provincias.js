const express = require("express");
// const { PrismaClient } = require("@prisma/client")

// const prisma = new PrismaClient();
const Router = express.Router();

const ServicioProvincias = require('./../services/provincias.js');
const Provincias = new ServicioProvincias();

Router.get("/", async (solicitud, respuesta) => {
  const Provincias = await listadoDeProvincias(solicitud.params.ProvinciaId);
  respuesta.json(Provincias);
});

Router.get("/:ProvinciaId", async (solicitud, respuesta) => {
  const Provincias = await listadoDeProvincias(solicitud.params.ProvinciaId);
  respuesta.json(Provincias);
});

function listadoDeProvincias(ProvinciaId) {
  return Provincias.Listar(ProvinciaId);
  // let Provincias;
  // if (ProvinciaId === undefined) {
  //   Provincias = prisma.provincias.findMany();
  // } else {
  //   Provincias = prisma.provincias.findMany({
  //     where: {
  //       ProvinciaId: parseInt(ProvinciaId),
  //     },
  //   });
  // }
  // return Provincias;
}

Router.post('/', async (solicitud, respuesta) => {
  respuesta.json(Provincias.Agregar(solicitud.body.Provincia));
  // const { Provincia } = solicitud.body.Provincia;
  // let resultado;
  // try {
  //   resultado = await prisma.provincias.create({
  //     data: {
  //       Provincia: Provincia,
  //       FechaDeCreacion: new Date()
  //     }
  //   });
  // } catch (error) {
  //   console.error(`No se pudo insertar la provincia ${Provincia} debido al error: ${error}`);
  // }
  // respuesta.json(resultado);
});

Router.delete('/:ProvinciaId', async (solicitud, respuesta) => {
  respuesta.json(Provincias.Borrar(solicitud.params.ProvinciaId));
  // const { ProvinciaId } = solicitud.body;
  // let resultado;
  // try {
  //   resultado = await prisma.provincias.delete({
  //     where: {
  //       ProvinciaId: parseInt(ProvinciaId),
  //     },
  //   });
  // } catch (error) {
  //   console.error(`No se pudo borrar la provincia ${ProvinciaId} debido al error: ${error}`);
  // }
  // respuesta.json(resultado);
});
/*
Router.put('/:ProvinciaId', async (solicitud, respuesta) => {
  const { ProvinciaId } = solicitud.params;
  const { Provincia } = solicitud.body;
  respuesta.json(Provincias.Actualizar(ProvinciaId, Provincia));
  // let resultado;
  // try {
  //   resultado = await prisma.provincias.update({
  //     where: { ProvinciaId: parseInt(ProvinciaId) },
  //     data: { Provincia: Provincia },
  //   });
  // } catch (error) {
  //   console.error(`No se pudo actualizar la provincia ${ProvinciaId} debido al error: ${error}`);
  // }
  // respuesta.json(resultado);
});
*/
Router.put('/:ProvinciaId', async (solicitud, respuesta) => {
  const { ProvinciaId } = solicitud.params;
  const { Provincia } = solicitud.body; // Extrae "Provincia" del body

  respuesta.json(await Provincias.Actualizar(ProvinciaId, Provincia));
});

module.exports = Router;
