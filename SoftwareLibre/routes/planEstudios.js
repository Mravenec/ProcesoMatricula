const express = require("express");
// const { PrismaClient } = require("@prisma/client")

// const prisma = new PrismaClient();
const Router = express.Router();

const ServicioPlanEstudios = require('./../services/planEstudios.js');
const planEstudios = new ServicioPlanEstudios();

Router.get("/", async (solicitud, respuesta) => {
    const listaPlanes = await planEstudios.Listar();
    respuesta.json(listaPlanes);
  });
  
  Router.get("/:id", async (solicitud, respuesta) => {
    const plan = await planEstudios.Listar(solicitud.params.id);
    respuesta.json(plan);
  });
  
  Router.post('/', async (solicitud, respuesta) => {
    const { carrera, codigo } = solicitud.body;
    respuesta.json(await planEstudios.Agregar(carrera, codigo));
  });
  
  Router.delete('/:id', async (solicitud, respuesta) => {
    respuesta.json(await planEstudios.Borrar(solicitud.params.id));
  });
  
  Router.put('/:id', async (solicitud, respuesta) => {
    const { carrera, codigo } = solicitud.body; // Extrae ambos campos
    respuesta.json(await planEstudios.Actualizar(
        solicitud.params.id, 
        { carrera, codigo } // Envía un objeto con todos los campos
    ));
});
  
module.exports = Router;