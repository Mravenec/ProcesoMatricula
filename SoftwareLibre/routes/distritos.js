const express = require("express");
// const { PrismaClient } = require("@prisma/client")

// const prisma = new PrismaClient();
const Router = express.Router();

const ServicioDistritos = require('../services/distritos.js');
const distritos  = new ServicioDistritos();


Router.get("/", async (solicitud, respuesta) => {
    const lista = await distritos.Listar();
    respuesta.json(lista);
  });
  
  Router.get("/:DistritoId", async (solicitud, respuesta) => {
    const distrito = await distritos.Listar(solicitud.params.DistritoId);
    respuesta.json(distrito);
  });
  
  Router.post('/', async (solicitud, respuesta) => {
    const { Distrito, CantonId } = solicitud.body;
    respuesta.json(await distritos.Agregar(Distrito, CantonId));
  });
  
  Router.delete('/:DistritoId', async (solicitud, respuesta) => {
    respuesta.json(await distritos.Borrar(solicitud.params.DistritoId));
  });
  
  Router.put('/:DistritoId', async (solicitud, respuesta) => {
    const { Distrito, CantonId, Valoracion } = solicitud.body; // Extraer todos los campos
    respuesta.json(await distritos.Actualizar(
      solicitud.params.DistritoId, 
      { Distrito, CantonId, Valoracion } // Enviar objeto con todos los campos
    ));
  });

module.exports = Router;