import { Routes } from '@angular/router';
import { DocenteComponent } from './components/docente/docente.component';
import { EstudiantesComponent } from './components/estudiante/estudiante.component';
import { MateriasComponent } from './components/materias/materias.component';
import { PlanEstudiosComponent } from './components/plan-estudios/plan-estudios.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { OfertaAcademicaComponent } from './components/oferta-academica/oferta-academica.component';
import { HistoricoAcademicoComponent } from './components/historico-academico/historico-academico.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { ProvinciasComponent } from './components/provincias/provincias.component';
import { CantonesComponent } from './components/canton/canton.component';
import { DistritosComponent } from './components/distrito/distrito.component'; 


export const routes: Routes = [
    { path: 'docente', component: DocenteComponent },
    { path: 'estudiante', component: EstudiantesComponent  },
    { path: 'materias', component: MateriasComponent },
    { path: 'plan-estudios', component: PlanEstudiosComponent },
    { path: 'cursos', component: CursosComponent },
    { path: 'oferta-academica', component: OfertaAcademicaComponent },
    { path: 'historico-academico', component: HistoricoAcademicoComponent },
    { path: 'usuarios', component: UsuariosComponent },
    { path: 'provincias', component:ProvinciasComponent},
    { path: 'cantones', component:CantonesComponent},
    { path:'distritos', component:DistritosComponent},
];