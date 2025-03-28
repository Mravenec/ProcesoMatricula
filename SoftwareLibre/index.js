//   POSIBLE CODIGO FINAL
const express = require("express");
const routerAPI = require('./routes/index.js');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
routerAPI(app);

app.listen(80, () => {
  console.log("Servidor iniciado en el puerto 80");
});



// const express = require("express");
// const { PrismaClient } = require("@prisma/client")

// const prisma = new PrismaClient();

// const app = express();
// app.use(express.json());

// app.get("/provincias", async (solicitud, respuesta) => {
//   const Provincias = await listadoDeProvincias(solicitud.params.ProvinciaId);
//   respuesta.json(Provincias);
// });


// app.get("/provincias/:ProvinciaId", async (solicitud, respuesta) => {
//   const Provincias = await listadoDeProvincias(solicitud.params.ProvinciaId);
//   respuesta.json(Provincias);
// });


// app.listen(80, () => {
//   console.log("Servidor iniciado en el puerto 80");
// });


// function listadoDeProvincias(ProvinciaId) {
//   let Provincias
//   if (ProvinciaId === undefined) {
//     Provincias = prisma.provincias.findMany();
//   } else {
//     Provincias = prisma.provincias.findMany({
//       where: {
//         ProvinciaId: parseInt(ProvinciaId),
//       },
//     });
//   }
//   return Provincias;
// }


// /*
// Endpoints de Provincias
// */
// /*
// app.post('/provincias', async (solicitud, respuesta) => {
//   const { Provincia } = solicitud.body;
//   let resultado;
//   try {
//     resultado = await prisma.provincias.create({
//       data: {
//         Provincia: Provincia,
//         FechaDeCreacion: new Date()
//       }
//     });
//   } catch (error) {
//     console.error("No se pudo actualizar la provincia ${ProvinciaId} debido al error: ${error}");
//   }
//   respuesta.json(resultado);
// });


// app.delete('/provincias/:ProvinciaId', async (solicitud, respuesta) => {
//   const { ProvinciaId } = solicitud.params;
//   let resultado;
//   try {
//     resultado = await prisma.provincias.delete({
//       where: {
//         ProvinciaId: parseInt(ProvinciaId),
//       },
//     });
//   } catch (error) {
//     console.error("No se pudo actualizar la provincia ${ProvinciaId} debido al error: ${error}");
//   }
//   respuesta.json(resultado);
// });


// app.put('/provincias/:ProvinciaId', async (solicitud, respuesta) => {
//   const { ProvinciaId } = solicitud.params;
//   const { Provincia } = solicitud.body;
//   let resultado;
//   try {
//     resultado = await prisma.provincias.update({
//       where: { ProvinciaId: parseInt(ProvinciaId) },
//       data: { Provincia: Provincia },
//     });
//   } catch (error) {
//     console.error("No se pudo actualizar la provincia ${ProvinciaId} debido al error: ${error}");
//   }
//   respuesta.json(resultado);
// });
// */




// /*
// ===========================
//   Endpoints de Provincias
// ===========================
// */


// app.post('/provincias', async (solicitud, respuesta) => {
//     const { Provincia } = solicitud.body;
//     let resultado;
//     try {
//       resultado = await prisma.provincias.create({
//         data: {
//           Provincia,
//           FechaDeCreacion: new Date()
//         }
//       });
//     } catch (error) {
//       console.error(`No se pudo crear la provincia debido al error: ${error}`);
//     }
//     respuesta.json(resultado);
//   });
  
//   app.delete('/provincias/:ProvinciaId', async (solicitud, respuesta) => {
//     const { ProvinciaId } = solicitud.params;
//     let resultado;
//     try {
//       resultado = await prisma.provincias.delete({
//         where: { ProvinciaId: parseInt(ProvinciaId) }
//       });
//     } catch (error) {
//       console.error(`No se pudo eliminar la provincia debido al error: ${error}`);
//     }
//     respuesta.json(resultado);
//   });
  
//   app.put('/provincias/:ProvinciaId', async (solicitud, respuesta) => {
//     const { ProvinciaId } = solicitud.params;
//     const { Provincia } = solicitud.body;
//     let resultado;
//     try {
//       resultado = await prisma.provincias.update({
//         where: { ProvinciaId: parseInt(ProvinciaId) },
//         data: { Provincia }
//       });
//     } catch (error) {
//       console.error(`No se pudo actualizar la provincia debido al error: ${error}`);
//     }
//     respuesta.json(resultado);
//   });
  
//   /*
//   ===========================
//           Endpoints de Cantones
//   ===========================
//   */

//   app.get("/cantones", async (req, res) => {
//     try {
//       const cantones = await prisma.cantones.findMany();
//       res.json(cantones);
//     } catch (error) {
//       res.status(500).json({ error: "Error al obtener los cantones" });
//     }
//   });
  
//   app.get("/cantones/:CantonId", async (req, res) => {
//     try {
//       const CantonId = parseInt(req.params.CantonId);
//       const canton = await prisma.cantones.findMany({
//         where: { CantonId: CantonId }
//       });
//       res.json(canton);
//     } catch (error) {
//       res.status(500).json({ error: "Error al obtener el cantón" });
//     }
//   });

//   app.post('/cantones', async (solicitud, respuesta) => {
//     const { Canton, ProvinciaId } = solicitud.body;
//     let resultado;
//     try {
//       resultado = await prisma.cantones.create({
//         data: { 
//           Canton, 
//           ProvinciaId, 
//           FechaDeCreacion: new Date() 
//         }
//       });
//     } catch (error) {
//       console.error(`No se pudo crear el cantón debido al error: ${error}`);
//     }
//     respuesta.json(resultado);
//   });
  
//   app.delete('/cantones/:CantonId', async (solicitud, respuesta) => {
//     const { CantonId } = solicitud.params;
//     let resultado;
//     try {
//       resultado = await prisma.cantones.delete({
//         where: { CantonId: parseInt(CantonId) }
//       });
//     } catch (error) {
//       console.error(`No se pudo eliminar el cantón debido al error: ${error}`);
//     }
//     respuesta.json(resultado);
//   });
  
//   app.put('/cantones/:CantonId', async (solicitud, respuesta) => {
//     const { CantonId } = solicitud.params;
//     const { Canton } = solicitud.body;
//     let resultado;
//     try {
//       resultado = await prisma.cantones.update({
//         where: { CantonId: parseInt(CantonId) },
//         data: { Canton }
//       });
//     } catch (error) {
//       console.error(`No se pudo actualizar el cantón debido al error: ${error}`);
//     }
//     respuesta.json(resultado);
//   });
  
//   /*
//   ===========================
//          Endpoints de Distritos
//   ===========================
//   */
//   app.get("/distritos", async (req, res) => {
//     try {
//       const distritos = await prisma.distritos.findMany();
//       res.json(distritos);
//     } catch (error) {
//       res.status(500).json({ error: "Error al obtener los distritos" });
//     }
//   });
  
//   app.get("/distritos/:DistritoId", async (req, res) => {
//     try {
//       const DistritoId = parseInt(req.params.DistritoId);
//       const distrito = await prisma.distritos.findMany({
//         where: { DistritoId: DistritoId }
//       });
//       res.json(distrito);
//     } catch (error) {
//       res.status(500).json({ error: "Error al obtener el distrito" });
//     }
//   });
//   app.post('/distritos', async (solicitud, respuesta) => {
//     const { Distrito, CantonId } = solicitud.body;
//     let resultado;
//     try {
//       resultado = await prisma.distritos.create({
//         data: { 
//           Distrito, 
//           CantonId, 
//           FechaDeCreacion: new Date() 
//         }
//       });
//     } catch (error) {
//       console.error(`No se pudo crear el distrito debido al error: ${error}`);
//     }
//     respuesta.json(resultado);
//   });
  
//   app.delete('/distritos/:DistritoId', async (solicitud, respuesta) => {
//     const { DistritoId } = solicitud.params;
//     let resultado;
//     try {
//       resultado = await prisma.distritos.delete({
//         where: { DistritoId: parseInt(DistritoId) }
//       });
//     } catch (error) {
//       console.error(`No se pudo eliminar el distrito debido al error: ${error}`);
//     }
//     respuesta.json(resultado);
//   });
  
//   app.put('/distritos/:DistritoId', async (solicitud, respuesta) => {
//     const { DistritoId } = solicitud.params;
//     const { Distrito } = solicitud.body;
//     let resultado;
//     try {
//       resultado = await prisma.distritos.update({
//         where: { DistritoId: parseInt(DistritoId) },
//         data: { Distrito }
//       });
//     } catch (error) {
//       console.error(`No se pudo actualizar el distrito debido al error: ${error}`);
//     }
//     respuesta.json(resultado);
//   });
  
//   /*
//   ===========================
//           Endpoints de Usuarios
//   ===========================
//   */

//   app.get("/usuarios", async (req, res) => {
//     try {
//       const usuarios = await prisma.usuarios.findMany();
//       res.json(usuarios);
//     } catch (error) {
//       res.status(500).json({ error: "Error al obtener los usuarios" });
//     }
//   });
  
//   app.get("/usuarios/:id", async (req, res) => {
//     try {
//       const id = parseInt(req.params.id);
//       const usuario = await prisma.usuarios.findMany({
//         where: { id: id }
//       });
//       res.json(usuario);
//     } catch (error) {
//       res.status(500).json({ error: "Error al obtener el usuario" });
//     }
//   });

//   app.post('/usuarios', async (solicitud, respuesta) => {
//     const { username, password, rol, estado } = solicitud.body;
//     let resultado;
//     try {
//       resultado = await prisma.usuarios.create({
//         data: { username, password, rol, estado }
//       });
//     } catch (error) {
//       console.error(`No se pudo crear el usuario debido al error: ${error}`);
//     }
//     respuesta.json(resultado);
//   });
  
//   app.delete('/usuarios/:id', async (solicitud, respuesta) => {
//     const { id } = solicitud.params;
//     let resultado;
//     try {
//       resultado = await prisma.usuarios.delete({
//         where: { id: parseInt(id) }
//       });
//     } catch (error) {
//       console.error(`No se pudo eliminar el usuario debido al error: ${error}`);
//     }
//     respuesta.json(resultado);
//   });
  
//   app.put('/usuarios/:id', async (solicitud, respuesta) => {
//     const { id } = solicitud.params;
//     // En este ejemplo actualizamos el username; puedes incluir otros campos según lo requieras.
//     const { username } = solicitud.body;
//     let resultado;
//     try {
//       resultado = await prisma.usuarios.update({
//         where: { id: parseInt(id) },
//         data: { username }
//       });
//     } catch (error) {
//       console.error(`No se pudo actualizar el usuario debido al error: ${error}`);
//     }
//     respuesta.json(resultado);
//   });
  
//   /*
//   ===========================
//         Endpoints de Auditoria
//   ===========================
//   */
//   app.get("/auditoria", async (req, res) => {
//     try {
//       const auditoria = await prisma.auditoria.findMany();
//       res.json(auditoria);
//     } catch (error) {
//       res.status(500).json({ error: "Error al obtener la auditoría" });
//     }
//   });
  
//   app.get("/auditoria/:id", async (req, res) => {
//     try {
//       const id = parseInt(req.params.id);
//       const auditoriaEntry = await prisma.auditoria.findMany({
//         where: { id: id }
//       });
//       res.json(auditoriaEntry);
//     } catch (error) {
//       res.status(500).json({ error: "Error al obtener el registro de auditoría" });
//     }
//   });
//   app.post('/auditoria', async (solicitud, respuesta) => {
//     const { usuarioId, accion, modulo_afectado } = solicitud.body;
//     let resultado;
//     try {
//       resultado = await prisma.auditoria.create({
//         data: { 
//           usuarioId, 
//           accion, 
//           modulo_afectado, 
//           fecha_hora: new Date() 
//         }
//       });
//     } catch (error) {
//       console.error(`No se pudo crear el registro de auditoria debido al error: ${error}`);
//     }
//     respuesta.json(resultado);
//   });
  
//   app.delete('/auditoria/:id', async (solicitud, respuesta) => {
//     const { id } = solicitud.params;
//     let resultado;
//     try {
//       resultado = await prisma.auditoria.delete({
//         where: { id: parseInt(id) }
//       });
//     } catch (error) {
//       console.error(`No se pudo eliminar el registro de auditoria debido al error: ${error}`);
//     }
//     respuesta.json(resultado);
//   });
  
//   app.put('/auditoria/:id', async (solicitud, respuesta) => {
//     const { id } = solicitud.params;
//     // Actualizamos el campo 'accion'; puedes modificar según lo requieras.
//     const { accion } = solicitud.body;
//     let resultado;
//     try {
//       resultado = await prisma.auditoria.update({
//         where: { id: parseInt(id) },
//         data: { accion }
//       });
//     } catch (error) {
//       console.error(`No se pudo actualizar el registro de auditoria debido al error: ${error}`);
//     }
//     respuesta.json(resultado);
//   });
  
//   /*
//   ===========================
//            Endpoints de Docente
//   ===========================
//   */

//   app.get("/docente", async (req, res) => {
//     try {
//       const docentes = await prisma.docente.findMany();
//       res.json(docentes);
//     } catch (error) {
//       res.status(500).json({ error: "Error al obtener los docentes" });
//     }
//   });
  
//   app.get("/docente/:id", async (req, res) => {
//     try {
//       const id = parseInt(req.params.id);
//       const docente = await prisma.docente.findMany({
//         where: { id: id }
//       });
//       res.json(docente);
//     } catch (error) {
//       res.status(500).json({ error: "Error al obtener el docente" });
//     }
//   });

//   app.post('/docente', async (solicitud, respuesta) => {
//     const { cedula, nombre, apellido1, apellido2, direccion, fecha_nacimiento, telefono, correo, provinciaId } = solicitud.body;
//     let resultado;
//     try {
//       resultado = await prisma.docente.create({
//         data: {
//           cedula,
//           nombre,
//           apellido1,
//           apellido2,
//           direccion,
//           // Asegúrate de enviar la fecha en un formato válido o convertirla:
//           fecha_nacimiento: new Date(fecha_nacimiento),
//           telefono,
//           correo,
//           provinciaId
//         }
//       });
//     } catch (error) {
//       console.error(`No se pudo crear el docente debido al error: ${error}`);
//     }
//     respuesta.json(resultado);
//   });
  
//   app.delete('/docente/:id', async (solicitud, respuesta) => {
//     const { id } = solicitud.params;
//     let resultado;
//     try {
//       resultado = await prisma.docente.delete({
//         where: { id: parseInt(id) }
//       });
//     } catch (error) {
//       console.error(`No se pudo eliminar el docente debido al error: ${error}`);
//     }
//     respuesta.json(resultado);
//   });
  
//   app.put('/docente/:id', async (solicitud, respuesta) => {
//     const { id } = solicitud.params;
//     // En este ejemplo actualizamos solo el nombre; ajusta según necesites.
//     const { nombre } = solicitud.body;
//     let resultado;
//     try {
//       resultado = await prisma.docente.update({
//         where: { id: parseInt(id) },
//         data: { nombre }
//       });
//     } catch (error) {
//       console.error(`No se pudo actualizar el docente debido al error: ${error}`);
//     }
//     respuesta.json(resultado);
//   });
  
//   /*
//   ===========================
//           Endpoints de Estudiante
//   ===========================
//   */
//   app.get("/estudiante", async (req, res) => {
//     try {
//       const estudiantes = await prisma.estudiante.findMany();
//       res.json(estudiantes);
//     } catch (error) {
//       res.status(500).json({ error: "Error al obtener los estudiantes" });
//     }
//   });
  
//   app.get("/estudiante/:id", async (req, res) => {
//     try {
//       const id = parseInt(req.params.id);
//       const estudiante = await prisma.estudiante.findMany({
//         where: { id: id }
//       });
//       res.json(estudiante);
//     } catch (error) {
//       res.status(500).json({ error: "Error al obtener el estudiante" });
//     }
//   });
//   app.post('/estudiante', async (solicitud, respuesta) => {
//     const { cedula, nombre, apellido1, apellido2, fecha_nacimiento, direccion, telefono, correo, provinciaId } = solicitud.body;
//     let resultado;
//     try {
//       resultado = await prisma.estudiante.create({
//         data: {
//           cedula,
//           nombre,
//           apellido1,
//           apellido2,
//           fecha_nacimiento: new Date(fecha_nacimiento),
//           direccion,
//           telefono,
//           correo,
//           provinciaId
//         }
//       });
//     } catch (error) {
//       console.error(`No se pudo crear el estudiante debido al error: ${error}`);
//     }
//     respuesta.json(resultado);
//   });
  
//   app.delete('/estudiante/:id', async (solicitud, respuesta) => {
//     const { id } = solicitud.params;
//     let resultado;
//     try {
//       resultado = await prisma.estudiante.delete({
//         where: { id: parseInt(id) }
//       });
//     } catch (error) {
//       console.error(`No se pudo eliminar el estudiante debido al error: ${error}`);
//     }
//     respuesta.json(resultado);
//   });
  
//   app.put('/estudiante/:id', async (solicitud, respuesta) => {
//     const { id } = solicitud.params;
//     // Actualizamos el campo 'nombre' como ejemplo.
//     const { nombre } = solicitud.body;
//     let resultado;
//     try {
//       resultado = await prisma.estudiante.update({
//         where: { id: parseInt(id) },
//         data: { nombre }
//       });
//     } catch (error) {
//       console.error(`No se pudo actualizar el estudiante debido al error: ${error}`);
//     }
//     respuesta.json(resultado);
//   });
  
//   /*
//   ===========================
//            Endpoints de Materias
//   ===========================
//   */
//   app.get("/materias", async (req, res) => {
//     try {
//       const materias = await prisma.materias.findMany();
//       res.json(materias);
//     } catch (error) {
//       res.status(500).json({ error: "Error al obtener las materias" });
//     }
//   });
  
//   app.get("/materias/:id", async (req, res) => {
//     try {
//       const id = parseInt(req.params.id);
//       const materia = await prisma.materias.findMany({
//         where: { id: id }
//       });
//       res.json(materia);
//     } catch (error) {
//       res.status(500).json({ error: "Error al obtener la materia" });
//     }
//   });
//   app.post('/materias', async (solicitud, respuesta) => {
//     const { nombre, nivel, codigo, creditos, horas_teoricas, horas_practicas } = solicitud.body;
//     let resultado;
//     try {
//       resultado = await prisma.materias.create({
//         data: { nombre, nivel, codigo, creditos, horas_teoricas, horas_practicas }
//       });
//     } catch (error) {
//       console.error(`No se pudo crear la materia debido al error: ${error}`);
//     }
//     respuesta.json(resultado);
//   });
  
//   app.delete('/materias/:id', async (solicitud, respuesta) => {
//     const { id } = solicitud.params;
//     let resultado;
//     try {
//       resultado = await prisma.materias.delete({
//         where: { id: parseInt(id) }
//       });
//     } catch (error) {
//       console.error(`No se pudo eliminar la materia debido al error: ${error}`);
//     }
//     respuesta.json(resultado);
//   });
  
//   app.put('/materias/:id', async (solicitud, respuesta) => {
//     const { id } = solicitud.params;
//     // Actualizamos el campo 'nombre' como ejemplo.
//     const { nombre } = solicitud.body;
//     let resultado;
//     try {
//       resultado = await prisma.materias.update({
//         where: { id: parseInt(id) },
//         data: { nombre }
//       });
//     } catch (error) {
//       console.error(`No se pudo actualizar la materia debido al error: ${error}`);
//     }
//     respuesta.json(resultado);
//   });
  
//   /*
//   ===========================
//          Endpoints de PlanEstudios
//   ===========================
//   */
//   app.get("/planEstudios", async (req, res) => {
//     try {
//       const planEstudios = await prisma.planEstudios.findMany();
//       res.json(planEstudios);
//     } catch (error) {
//       res.status(500).json({ error: "Error al obtener los planes de estudio" });
//     }
//   });
  
//   app.get("/planEstudios/:id", async (req, res) => {
//     try {
//       const id = parseInt(req.params.id);
//       const planEstudio = await prisma.planEstudios.findMany({
//         where: { id: id }
//       });
//       res.json(planEstudio);
//     } catch (error) {
//       res.status(500).json({ error: "Error al obtener el plan de estudios" });
//     }
//   });
  
//   app.post('/planEstudios', async (solicitud, respuesta) => {
//     const { carrera, codigo } = solicitud.body;
//     let resultado;
//     try {
//       resultado = await prisma.planEstudios.create({
//         data: { carrera, codigo }
//       });
//     } catch (error) {
//       console.error(`No se pudo crear el plan de estudios debido al error: ${error}`);
//     }
//     respuesta.json(resultado);
//   });
  
//   app.delete('/planEstudios/:id', async (solicitud, respuesta) => {
//     const { id } = solicitud.params;
//     let resultado;
//     try {
//       resultado = await prisma.planEstudios.delete({
//         where: { id: parseInt(id) }
//       });
//     } catch (error) {
//       console.error(`No se pudo eliminar el plan de estudios debido al error: ${error}`);
//     }
//     respuesta.json(resultado);
//   });
  
//   app.put('/planEstudios/:id', async (solicitud, respuesta) => {
//     const { id } = solicitud.params;
//     // Actualizamos el campo 'carrera' como ejemplo.
//     const { carrera } = solicitud.body;
//     let resultado;
//     try {
//       resultado = await prisma.planEstudios.update({
//         where: { id: parseInt(id) },
//         data: { carrera }
//       });
//     } catch (error) {
//       console.error(`No se pudo actualizar el plan de estudios debido al error: ${error}`);
//     }
//     respuesta.json(resultado);
//   });
  
//   /*
//   ===========================
//         Endpoints de OfertaAcademica
//   ===========================
//   */
//   app.get("/ofertaAcademica", async (req, res) => {
//     try {
//       const ofertas = await prisma.ofertaAcademica.findMany();
//       res.json(ofertas);
//     } catch (error) {
//       res.status(500).json({ error: "Error al obtener la oferta académica" });
//     }
//   });
  
//   app.get("/ofertaAcademica/:id", async (req, res) => {
//     try {
//       const id = parseInt(req.params.id);
//       const ofertaEntry = await prisma.ofertaAcademica.findMany({
//         where: { id: id }
//       });
//       res.json(ofertaEntry);
//     } catch (error) {
//       res.status(500).json({ error: "Error al obtener la oferta académica" });
//     }
//   });
//   app.post('/ofertaAcademica', async (solicitud, respuesta) => {
//     const { periodo } = solicitud.body;
//     let resultado;
//     try {
//       resultado = await prisma.ofertaAcademica.create({
//         data: { periodo }
//       });
//     } catch (error) {
//       console.error(`No se pudo crear la oferta académica debido al error: ${error}`);
//     }
//     respuesta.json(resultado);
//   });
  
//   app.delete('/ofertaAcademica/:id', async (solicitud, respuesta) => {
//     const { id } = solicitud.params;
//     let resultado;
//     try {
//       resultado = await prisma.ofertaAcademica.delete({
//         where: { id: parseInt(id) }
//       });
//     } catch (error) {
//       console.error(`No se pudo eliminar la oferta académica debido al error: ${error}`);
//     }
//     respuesta.json(resultado);
//   });
  
//   app.put('/ofertaAcademica/:id', async (solicitud, respuesta) => {
//     const { id } = solicitud.params;
//     // Actualizamos el campo 'periodo' como ejemplo.
//     const { periodo } = solicitud.body;
//     let resultado;
//     try {
//       resultado = await prisma.ofertaAcademica.update({
//         where: { id: parseInt(id) },
//         data: { periodo }
//       });
//     } catch (error) {
//       console.error(`No se pudo actualizar la oferta académica debido al error: ${error}`);
//     }
//     respuesta.json(resultado);
//   });
  
//   /*
//   ===========================
//             Endpoints de Cursos
//   ===========================
//   */
//   app.get("/cursos", async (req, res) => {
//     try {
//       const cursos = await prisma.cursos.findMany();
//       res.json(cursos);
//     } catch (error) {
//       res.status(500).json({ error: "Error al obtener los cursos" });
//     }
//   });
  
//   app.get("/cursos/:id", async (req, res) => {
//     try {
//       const id = parseInt(req.params.id);
//       const curso = await prisma.cursos.findMany({
//         where: { id: id }
//       });
//       res.json(curso);
//     } catch (error) {
//       res.status(500).json({ error: "Error al obtener el curso" });
//     }
//   });
  
//   app.post('/cursos', async (solicitud, respuesta) => {
//     const { planEstudioId, nombre, codigo, docenteId, horario, aula, periodo, ofertaAcademicaid } = solicitud.body;
//     let resultado;
//     try {
//       resultado = await prisma.cursos.create({
//         data: { planEstudioId, nombre, codigo, docenteId, horario, aula, periodo, ofertaAcademicaid }
//       });
//     } catch (error) {
//       console.error(`No se pudo crear el curso debido al error: ${error}`);
//     }
//     respuesta.json(resultado);
//   });
  
//   app.delete('/cursos/:id', async (solicitud, respuesta) => {
//     const { id } = solicitud.params;
//     let resultado;
//     try {
//       resultado = await prisma.cursos.delete({
//         where: { id: parseInt(id) }
//       });
//     } catch (error) {
//       console.error(`No se pudo eliminar el curso debido al error: ${error}`);
//     }
//     respuesta.json(resultado);
//   });
  
//   app.put('/cursos/:id', async (solicitud, respuesta) => {
//     const { id } = solicitud.params;
//     // Actualizamos el campo 'nombre' como ejemplo.
//     const { nombre } = solicitud.body;
//     let resultado;
//     try {
//       resultado = await prisma.cursos.update({
//         where: { id: parseInt(id) },
//         data: { nombre }
//       });
//     } catch (error) {
//       console.error(`No se pudo actualizar el curso debido al error: ${error}`);
//     }
//     respuesta.json(resultado);
//   });
  
//   /*
//   ===========================
//       Endpoints de HistoricoAcademico
//   ===========================
//   */
//   app.get("/historicoAcademico", async (req, res) => {
//     try {
//       const historico = await prisma.historicoAcademico.findMany();
//       res.json(historico);
//     } catch (error) {
//       res.status(500).json({ error: "Error al obtener el histórico académico" });
//     }
//   });
  
//   app.get("/historicoAcademico/:id", async (req, res) => {
//     try {
//       const id = parseInt(req.params.id);
//       const historicoEntry = await prisma.historicoAcademico.findMany({
//         where: { id: id }
//       });
//       res.json(historicoEntry);
//     } catch (error) {
//       res.status(500).json({ error: "Error al obtener el registro del histórico académico" });
//     }
//   });
//   app.post('/historicoAcademico', async (solicitud, respuesta) => {
//     const { estudianteId, cursoId, nota_obtenida, periodo } = solicitud.body;
//     let resultado;
//     try {
//       resultado = await prisma.historicoAcademico.create({
//         data: { estudianteId, cursoId, nota_obtenida, periodo }
//       });
//     } catch (error) {
//       console.error(`No se pudo crear el histórico académico debido al error: ${error}`);
//     }
//     respuesta.json(resultado);
//   });
  
//   app.delete('/historicoAcademico/:id', async (solicitud, respuesta) => {
//     const { id } = solicitud.params;
//     let resultado;
//     try {
//       resultado = await prisma.historicoAcademico.delete({
//         where: { id: parseInt(id) }
//       });
//     } catch (error) {
//       console.error(`No se pudo eliminar el histórico académico debido al error: ${error}`);
//     }
//     respuesta.json(resultado);
//   });
  
//   app.put('/historicoAcademico/:id', async (solicitud, respuesta) => {
//     const { id } = solicitud.params;
//     // Actualizamos el campo 'nota_obtenida' como ejemplo.
//     const { nota_obtenida } = solicitud.body;
//     let resultado;
//     try {
//       resultado = await prisma.historicoAcademico.update({
//         where: { id: parseInt(id) },
//         data: { nota_obtenida }
//       });
//     } catch (error) {
//       console.error(`No se pudo actualizar el histórico académico debido al error: ${error}`);
//     }
//     respuesta.json(resultado);
//   });
  