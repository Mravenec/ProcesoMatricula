const express = require("express");
// const { PrismaClient } = require("@prisma/client")

// const prisma = new PrismaClient();
const Router = express.Router();

const ServicioOfertaAcademica = require('./../services/ofertaAcademica.js');
const ofertaAcademica = new ServicioOfertaAcademica();

Router.get("/", async (solicitud, respuesta) => {
    const listaOfertas = await ofertaAcademica.Listar();
    respuesta.json(listaOfertas);
  });
  
  Router.get("/:id", async (solicitud, respuesta) => {
    const oferta = await ofertaAcademica.Listar(solicitud.params.id);
    respuesta.json(oferta);
  });
  
  Router.post('/', async (solicitud, respuesta) => {
    const { periodo } = solicitud.body;
    respuesta.json(await ofertaAcademica.Agregar(periodo));
  });
  
  Router.delete('/:id', async (solicitud, respuesta) => {
    respuesta.json(await ofertaAcademica.Borrar(solicitud.params.id));
  });
  
  Router.put('/:id', async (solicitud, respuesta) => {
    const { periodo } = solicitud.body;
    respuesta.json(await ofertaAcademica.Actualizar(solicitud.params.id, periodo));
  });


module.exports = Router;