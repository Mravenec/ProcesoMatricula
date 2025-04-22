const express = require("express");
const Router = express.Router();

const ServicioMaterias = require('../services/materias.js');
const materias = new ServicioMaterias();

// GET: Listar todas las materias
Router.get("/", async (solicitud, respuesta) => {
  try {
    const listaMaterias = await materias.Listar();
    respuesta.json(listaMaterias);
  } catch (error) {
    respuesta.status(500).json({ 
      error: "Error al listar materias",
      detalle: error.message 
    });
  }
});

// GET: Obtener materia por ID
Router.get("/:id", async (solicitud, respuesta) => {
  try {
    const materia = await materias.Listar(solicitud.params.id);
    if (!materia) {
      return respuesta.status(404).json({ error: "Materia no encontrada" });
    }
    respuesta.json(materia);
  } catch (error) {
    respuesta.status(500).json({ 
      error: "Error al obtener materia",
      detalle: error.message 
    });
  }
});

// POST: Crear nueva materia
Router.post('/', async (solicitud, respuesta) => {
  try {
    const { nombre, nivel, codigo, creditos, horas_teoricas, horas_practicas } = solicitud.body;
    const nuevaMateria = await materias.Agregar(
      nombre, 
      nivel, 
      codigo, 
      creditos, 
      horas_teoricas, 
      horas_practicas
    );
    respuesta.status(201).json(nuevaMateria);
  } catch (error) {
    respuesta.status(400).json({ 
      error: "Error al crear materia",
      detalle: error.message 
    });
  }
});

// DELETE: Eliminar materia
Router.delete('/:id', async (solicitud, respuesta) => {
  try {
    await materias.Borrar(solicitud.params.id);
    respuesta.status(204).end();
  } catch (error) {
    respuesta.status(400).json({ 
      error: "Error al eliminar materia",
      detalle: error.message 
    });
  }
});

// PUT: Actualizar materia (actualización parcial permitida)
Router.put('/:id', async (solicitud, respuesta) => {
  try {
    const datosActualizados = solicitud.body;
    const materiaActualizada = await materias.Actualizar(
      solicitud.params.id, 
      datosActualizados
    );
    respuesta.json(materiaActualizada);
  } catch (error) {
    respuesta.status(400).json({ 
      error: "Error al actualizar materia",
      detalle: error.message 
    });
  }
});

module.exports = Router;