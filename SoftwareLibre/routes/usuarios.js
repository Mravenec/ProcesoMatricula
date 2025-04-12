const express = require("express");
// const { PrismaClient } = require("@prisma/client")

// const prisma = new PrismaClient();
const Router = express.Router();

const ServicioUsuarios = require('./../services/usuarios.js');
const usuarios = new ServicioUsuarios();


// === NUEVAS RUTAS ===
Router.post("/autenticar", async (solicitud, respuesta) => {
  const { username, password } = solicitud.body;
  const token = await usuarios.Autenticacion(username, password);

  if (!token) return respuesta.status(401).json({ error: "Credenciales inválidas" });
  respuesta.json({ token });
});

Router.get("/validarToken", async (solicitud, respuesta) => {
  const resultado = await usuarios.ValidarToken(solicitud);
  if (resultado.error) return respuesta.status(401).json(resultado);
  respuesta.json({ valido: true, datos: resultado });
});
// === NUEVAS RUTAS ===
/*
Router.get("/", async (solicitud, respuesta) => {
  const listaUsuarios = await usuario.Listar();
  respuesta.json(listaUsuarios);
});
*/
Router.get("/:id", async (solicitud, respuesta) => {
  try {
    const usuario = await usuarios.Listar(solicitud.params.id);
    if (!usuario) {
      return respuesta.status(404).json({ error: "Usuario no encontrado" });
    }
    respuesta.json(usuario);
  } catch (error) {
    respuesta.status(400).json({ error: error.message });
  }
});
/*
Router.get("/:id", async (solicitud, respuesta) => {
  const usuario = await usuarios.Listar(solicitud.params.id);
  respuesta.json(usuario);
});
*/
Router.delete('/:id', async (solicitud, respuesta) => {
  respuesta.json(await usuarios.Borrar(solicitud.params.id));
});

Router.put('/:id', async (solicitud, respuesta) => {
  const { username, password, rol, estado } = solicitud.body;
  respuesta.json(await usuarios.Actualizar(
    solicitud.params.id,
    { username, password, rol, estado }
  ));
});

Router.post('/', async (solicitud, respuesta) => {
  const { username, password, rol, estado } = solicitud.body;
  respuesta.json(await usuarios.Agregar(username, password, rol, estado));
});

// === RUTA MODIFICADA PARA LISTAR USUARIOS ===
Router.get("/", async (solicitud, respuesta) => {
  try {
    // Validar token
    const resultadoValidacion = await usuarios.ValidarToken(solicitud);
    if (resultadoValidacion.error) {
      return respuesta.status(401).json(resultadoValidacion);
    }

    // Verificar rol de administrador
    if (resultadoValidacion.data !== "ADMINISTRADOR") {
      return respuesta.status(403).json({ 
        error: "Acceso denegado. Requiere rol de administrador" 
      });
    }

    // Obtener y enviar lista de usuarios
    const listaUsuarios = await usuarios.Listar();
    respuesta.json(listaUsuarios);
    
  } catch (error) {
    respuesta.status(500).json({ 
      error: "Error interno del servidor",
      detalle: error.message 
    });
  }
});

module.exports = Router;