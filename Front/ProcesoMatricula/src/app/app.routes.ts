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
import { authGuard } from './aplicacionmatricula/auth.guard'; // Importar el guardia
import { LoginComponent } from './aplicacionmatricula/login/login.component'; // Importar componente de login

export const routes: Routes = [
    // Ruta de login (pública)
    {
      path: 'login',
      component: LoginComponent
    },
  
    // Rutas protegidas por el authGuard
    {
      path: 'docente',
      component: DocenteComponent,
      canActivate: [authGuard]
    },
    {
      path: 'estudiante',
      component: EstudiantesComponent,
      canActivate: [authGuard]
    },
    {
      path: 'materias',
      component: MateriasComponent,
      canActivate: [authGuard]
    },
    {
      path: 'plan-estudios',
      component: PlanEstudiosComponent,
      canActivate: [authGuard]
    },
    {
      path: 'cursos',
      component: CursosComponent,
      canActivate: [authGuard]
    },
    {
      path: 'oferta-academica',
      component: OfertaAcademicaComponent,
      canActivate: [authGuard]
    },
    {
      path: 'historico-academico',
      component: HistoricoAcademicoComponent,
      canActivate: [authGuard]
    },
    {
      path: 'usuarios',
      component: UsuariosComponent,
      canActivate: [authGuard]
    },
    {
      path: 'provincias',
      component: ProvinciasComponent,
      canActivate: [authGuard]
    },
    {
      path: 'cantones',
      component: CantonesComponent,
      canActivate: [authGuard]
    },
    {
      path: 'distritos',
      component: DistritosComponent,
      canActivate: [authGuard]
    },
  
    // Redirección por defecto si está logueado
    {
      path: '',
      redirectTo: '/materias',
      pathMatch: 'full'
    },
  
    // Ruta comodín
    {
      path: '**',
      redirectTo: '/login'
    }
  ];
  