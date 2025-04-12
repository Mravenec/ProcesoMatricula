const routerProvincias = require('./provincias.js');
const routerCantones = require('./cantones.js');
const routerDistritos = require('./distritos.js');
const routerCursos = require('./cursos.js');
const routerDocente = require('./docente.js');
const routerEstudiante = require('./estudiante.js');
const routerHistoricoAcademico = require('./historicoAcademico.js');
const routerMaterias= require('./materias.js');
const routerOfertaAcademica = require('./ofertaAcademica.js');
const routerPlanEstudios = require('./planEstudios.js');
const routerUsuarios = require('./usuarios.js');
const matriculaRouter = require("./matricula.js");



function routerAPI(app) {
  app.use('/provincias', routerProvincias);
  app.use('/cantones', routerCantones);
  app.use('/distritos', routerDistritos);

  app.use('/cursos', routerCursos);
  app.use('/docente', routerDocente);
  app.use('/estudiante', routerEstudiante);
  app.use('/historicoAcademico', routerHistoricoAcademico);
  app.use('/materias', routerMaterias);
  app.use('/ofertaAcademica', routerOfertaAcademica);
  app.use('/planEstudios', routerPlanEstudios);
  app.use('/usuarios', routerUsuarios);

  app.use("/matricula", matriculaRouter);
}

module.exports = routerAPI;
