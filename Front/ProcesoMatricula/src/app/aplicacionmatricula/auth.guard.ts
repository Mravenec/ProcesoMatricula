import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = new Router();
  const token = localStorage.getItem('token');
  
  // Verificar token existente y válido
  if (!token) {
    router.navigate(['/login']);
    return false;
  }

  // Verificar expiración del token
  try {
    const tokenData = JSON.parse(atob(token.split('.')[1]));
    const expiracion = tokenData.exp * 1000;
    
    if (Date.now() > expiracion) {
      localStorage.removeItem('token');
      router.navigate(['/login']);
      return false;
    }

    
    const userRole = localStorage.getItem('userRole');
    if (route.url[0]?.path === 'matricula' && userRole !== 'ESTUDIANTE') {
      router.navigate(['/']);
      return false;
    }

    return true;

  } catch (error) {
    localStorage.removeItem('token');
    router.navigate(['/login']);
    return false;
  }
};


