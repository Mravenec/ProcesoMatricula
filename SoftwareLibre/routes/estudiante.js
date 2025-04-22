const express = require("express");
// const { PrismaClient } = require("@prisma/client")

// const prisma = new PrismaClient();
const Router = express.Router();

const ServicioEstudiante = require('./../services/estudiante.js');
const estudiante = new ServicioEstudiante();

Router.get("/", async (solicitud, respuesta) => {
    const listaEstudiantes = await estudiante.Listar();
    respuesta.json(listaEstudiantes);
  });
  
  // Corregido: nombre diferente para la variable local
Router.get("/:id", async (solicitud, respuesta) => {
  const estudianteEncontrado = await estudiante.Listar(solicitud.params.id); // 🚨 Variable renombrada
  respuesta.json(estudianteEncontrado);
});
  
  Router.post('/', async (solicitud, respuesta) => {
    const { cedula, nombre, apellido1, apellido2, fecha_nacimiento, direccion, telefono, correo, provinciaId } = solicitud.body;
    respuesta.json(await estudiante.Agregar(cedula, nombre, apellido1, apellido2, new Date(fecha_nacimiento), direccion, telefono, correo, provinciaId));
  });
  
  Router.delete('/:id', async (solicitud, respuesta) => {
    respuesta.json(await estudiante.Borrar(solicitud.params.id));
  });
  
  Router.put('/:id', async (solicitud, respuesta) => {
    const { 
        cedula, 
        nombre, 
        apellido1, 
        apellido2, 
        fecha_nacimiento, 
        direccion, 
        telefono, 
        correo, 
        provinciaId 
    } = solicitud.body;
    
    respuesta.json(await estudiante.Actualizar(
        solicitud.params.id,
        cedula,
        nombre,
        apellido1,
        apellido2,
        fecha_nacimiento ? new Date(fecha_nacimiento) : undefined,
        direccion,
        telefono,
        correo,
        provinciaId
    ));
});


module.exports = Router;