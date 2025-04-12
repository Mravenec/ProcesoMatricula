// Archivo: routes/matricula.js
const express = require("express");
const Router = express.Router();
const ServicioUsuarios = require('../services/usuarios');
const ServicioMatricula = require('../services/matricula');

const usuarios = new ServicioUsuarios();
const matricula = new ServicioMatricula();

// Middleware de autenticación para estudiante
const validarEstudiante = async (solicitud, respuesta, next) => {
  try {
    const tokenData = await usuarios.ValidarToken(solicitud);
    
    if (tokenData.error || tokenData.data !== "ESTUDIANTE") {
      return respuesta.status(403).json({ 
        error: "Acceso denegado. Requiere rol de estudiante" 
      });
    }
    
    solicitud.estudianteId = tokenData.id;
    next();
  } catch (error) {
    respuesta.status(401).json({ error: error.message });
  }
};

// Obtener cursos disponibles
Router.get("/cursos-disponibles", validarEstudiante, async (solicitud, respuesta) => {
  try {
    const cursos = await matricula.listarCursosDisponibles("2025-1");
    respuesta.json(cursos);
  } catch (error) {
    respuesta.status(500).json({ error: error.message });
  }
});

// Crear nueva matrícula
Router.post("/", validarEstudiante, async (solicitud, respuesta) => {
  try {
    const { cursoId, periodo } = solicitud.body;
    const nuevaMatricula = await matricula.agregarMatricula(
      solicitud.estudianteId,
      cursoId,
      periodo
    );
    respuesta.json(nuevaMatricula);
  } catch (error) {
    respuesta.status(400).json({ error: error.message });
  }
});

// Listar matrículas activas
Router.get("/mis-matriculas", validarEstudiante, async (solicitud, respuesta) => {
  try {
    const matriculas = await matricula.listarMatriculasEstudiante(solicitud.estudianteId);
    respuesta.json(matriculas);
  } catch (error) {
    respuesta.status(500).json({ error: error.message });
  }
});

// Cancelar matrícula
Router.delete("/:id", validarEstudiante, async (solicitud, respuesta) => {
  try {
    const resultado = await matricula.cancelarMatricula(
      parseInt(solicitud.params.id),
      solicitud.estudianteId
    );
    respuesta.json(resultado);
  } catch (error) {
    respuesta.status(400).json({ error: error.message });
  }
});

module.exports = Router;