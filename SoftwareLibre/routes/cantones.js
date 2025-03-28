const express = require("express");
const Router = express.Router();

const ServicioCantones = require('../services/cantones.js');
const Cantones = new ServicioCantones();

Router.get("/", async (solicitud, respuesta) => {
  const cantones = await listadoDeCantones(solicitud.params.CantonId);
  respuesta.json(cantones);
});

Router.get("/:CantonId", async (solicitud, respuesta) => {
  const cantones = await listadoDeCantones(solicitud.params.CantonId);
  respuesta.json(cantones);
});

Router.post('/', async (solicitud, respuesta) => {
  respuesta.json(Cantones.Agregar(solicitud.body.Canton, solicitud.body.ProvinciaId));
});

Router.delete('/:CantonId', async (solicitud, respuesta) => {
  respuesta.json(Cantones.Borrar(solicitud.params.CantonId));
});

Router.put('/:CantonId', async (solicitud, respuesta) => {
  const { CantonId } = solicitud.params;
  const { Canton, ProvinciaId } = solicitud.body; // Extrae ambos campos
  respuesta.json(await Cantones.Actualizar(CantonId, Canton, ProvinciaId)); // Envía ambos
});

function listadoDeCantones(CantonId) {
  return Cantones.Listar(CantonId);
}

module.exports = Router;