const express = require("express");
const Router = express.Router();
const ServicioUsuarios = require('../services/usuarios.js');
const ServicioMatricula = require('../services/matricula.js');

const usuarios = new ServicioUsuarios();
const matricula = new ServicioMatricula();

// Middleware para verificar autenticación de estudiante
const autenticarEstudiante = async (req, res, next) => {
  try {
    const resultadoValidacion = await usuarios.ValidarToken(req);
    if (resultadoValidacion.error) {
      return res.status(401).json({ error: resultadoValidacion.error });
    }
    
    // Verificar si el usuario es estudiante
    if (resultadoValidacion.data !== "ESTUDIANTE") {
      return res.status(403).json({ error: "Acceso denegado. Requiere rol de estudiante" });
    }
    
    // Guardar el ID del estudiante para usarlo en los controladores
    req.estudianteId = resultadoValidacion.id;
    next();
  } catch (error) {
    return res.status(500).json({ error: "Error en la autenticación", detalle: error.message });
  }
};

// 1. Obtener cursos disponibles para matrícula
Router.get("/cursos-disponibles", autenticarEstudiante, async (req, res) => {
  try {
    const periodo = req.query.periodo;
    if (!periodo) {
      return res.status(400).json({ error: "Se requiere especificar el periodo" });
    }
    
    const cursos = await matricula.listarCursosDisponibles(periodo);
    res.json(cursos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 2. Matricularse en un curso
Router.post("/", autenticarEstudiante, async (req, res) => {
  try {
    const { cursoId, periodo } = req.body;
    
    if (!cursoId || !periodo) {
      return res.status(400).json({ error: "Se requieren cursoId y periodo" });
    }
    
    const nuevaMatricula = await matricula.agregarMatricula(
      req.estudianteId, // Usando el ID del estudiante del token
      parseInt(cursoId),
      periodo
    );
    
    res.status(201).json(nuevaMatricula);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 3. Ver mis matrículas activas
Router.get("/mis-matriculas", autenticarEstudiante, async (req, res) => {
  try {
    const misMatriculas = await matricula.listarMatriculasEstudiante(req.estudianteId);
    res.json(misMatriculas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 4. Cancelar matrícula
Router.delete("/:id", autenticarEstudiante, async (req, res) => {
  try {
    const matriculaId = parseInt(req.params.id);
    const resultado = await matricula.cancelarMatricula(matriculaId, req.estudianteId);
    res.json(resultado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = Router;