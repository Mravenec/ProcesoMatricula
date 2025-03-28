const express = require("express");
// const { PrismaClient } = require("@prisma/client")

// const prisma = new PrismaClient();
const Router = express.Router();

const ServicioCursos  = require('./../services/cursos.js');
const cursos  = new ServicioCursos();

Router.get("/", async (solicitud, respuesta) => {
    const listaCursos = await cursos.Listar();
    respuesta.json(listaCursos);
  });
  
  Router.get("/:id", async (solicitud, respuesta) => {
    const curso = await cursos.Listar(solicitud.params.id);
    respuesta.json(curso);
  });
  
  Router.post('/', async (solicitud, respuesta) => {
    const { planEstudioId, nombre, codigo, docenteId, horario, aula, periodo, ofertaAcademicaid } = solicitud.body;
    respuesta.json(await cursos.Agregar(planEstudioId, nombre, codigo, docenteId, horario, aula, periodo, ofertaAcademicaid));
  });
  
  Router.delete('/:id', async (solicitud, respuesta) => {
    respuesta.json(await cursos.Borrar(solicitud.params.id));
  });
  
  // ... código anterior ...

Router.put('/:id', async (solicitud, respuesta) => {
  // Extrae todos los campos del body
  const { planEstudioId, nombre, codigo, docenteId, horario, aula, periodo, ofertaAcademicaid } = solicitud.body;
  
  // Envía un objeto con todos los campos al servicio
  respuesta.json(await cursos.Actualizar(
      solicitud.params.id, 
      { planEstudioId, nombre, codigo, docenteId, horario, aula, periodo, ofertaAcademicaid }
  ));
});

// ... código posterior ...


module.exports = Router;