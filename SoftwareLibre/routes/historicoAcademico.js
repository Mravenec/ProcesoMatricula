const express = require("express");
const Router = express.Router();

const ServicioHistoricoAcademico = require('./../services/historicoAcademico.js');
const historicoAcademico = new ServicioHistoricoAcademico(); // Nombre correcto

Router.get("/", async (solicitud, respuesta) => {
    const listado = await historicoAcademico.Listar(); // Cambiado aquí
    respuesta.json(listado);
});
  
Router.get("/:id", async (solicitud, respuesta) => {
    const registro = await historicoAcademico.Listar(solicitud.params.id); // Cambiado aquí
    respuesta.json(registro);
});
  
Router.post('/', async (solicitud, respuesta) => {
    const { estudianteId, cursoId, nota_obtenida, periodo } = solicitud.body;
    respuesta.json(await historicoAcademico.Agregar(estudianteId, cursoId, nota_obtenida, periodo)); // Cambiado aquí
});
  
Router.delete('/:id', async (solicitud, respuesta) => {
    respuesta.json(await historicoAcademico.Borrar(solicitud.params.id)); // Cambiado aquí
});
  
Router.put('/:id', async (solicitud, respuesta) => {
    const { estudianteId, cursoId, nota_obtenida, periodo } = solicitud.body;
    respuesta.json(await historicoAcademico.Actualizar(
        solicitud.params.id, 
        { estudianteId, cursoId, nota_obtenida, periodo } // Envía un objeto con todos los campos
    )); 
});

module.exports = Router;