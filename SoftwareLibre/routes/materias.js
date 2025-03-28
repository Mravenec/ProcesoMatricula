const express = require("express");
// const { PrismaClient } = require("@prisma/client")

// const prisma = new PrismaClient();
const Router = express.Router();

const ServicioMaterias = require('./../services/materias.js');
const materias = new ServicioMaterias();

Router.get("/", async (solicitud, respuesta) => {
    const listaMaterias = await materias.Listar();
    respuesta.json(listaMaterias);
  });
  
  Router.get("/:id", async (solicitud, respuesta) => {
    const materia = await materias.Listar(solicitud.params.id);
    respuesta.json(materia);
  });
  
  Router.post('/', async (solicitud, respuesta) => {
    const { nombre, nivel, codigo, creditos, horas_teoricas, horas_practicas } = solicitud.body;
    respuesta.json(await materias.Agregar(nombre, nivel, codigo, creditos, horas_teoricas, horas_practicas));
  });
  
  Router.delete('/:id', async (solicitud, respuesta) => {
    respuesta.json(await materias.Borrar(solicitud.params.id));
  });
  
  Router.put('/:id', async (solicitud, respuesta) => {
    const { nombre, nivel, codigo, creditos, horas_teoricas, horas_practicas } = solicitud.body; // Extraer todos los campos
    respuesta.json(await materias.Actualizar(
        solicitud.params.id, 
        { nombre, nivel, codigo, creditos, horas_teoricas, horas_practicas } // Enviar objeto con todos los campos
    ));
});


module.exports = Router;