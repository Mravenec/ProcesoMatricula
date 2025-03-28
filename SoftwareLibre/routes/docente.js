const express = require("express");
// const { PrismaClient } = require("@prisma/client")

// const prisma = new PrismaClient();
const Router = express.Router();

const ServicioDocente = require('./../services/docente.js');
const docente = new ServicioDocente();

Router.get("/", async (solicitud, respuesta) => {
    const listaDocentes = await docente.Listar();
    respuesta.json(listaDocentes);
  });
  
  Router.get("/:id", async (solicitud, respuesta) => {
    const docenteEncontrado = await docente.Listar(solicitud.params.id);
    respuesta.json(docenteEncontrado);
  });
  
  Router.post('/', async (solicitud, respuesta) => {
    const { cedula, nombre, apellido1, apellido2, direccion, fecha_nacimiento, telefono, correo, provinciaId } = solicitud.body;
    respuesta.json(await docente.Agregar(cedula, nombre, apellido1, apellido2, direccion, fecha_nacimiento, telefono, correo, provinciaId));
  });
  
  Router.delete('/:id', async (solicitud, respuesta) => {
    respuesta.json(await docente.Borrar(solicitud.params.id));
  });
  
  Router.put('/:id', async (solicitud, respuesta) => {
    // Extrae TODOS los campos del body
    const { 
        cedula, 
        nombre, 
        apellido1, 
        apellido2, 
        direccion, 
        fecha_nacimiento, 
        telefono, 
        correo, 
        provinciaId 
    } = solicitud.body;

    // Envía un objeto con todos los campos al servicio
    respuesta.json(await docente.Actualizar(
        solicitud.params.id, 
        { 
            cedula, 
            nombre, 
            apellido1, 
            apellido2, 
            direccion, 
            fecha_nacimiento, 
            telefono, 
            correo, 
            provinciaId 
        }
    ));
});



module.exports = Router;