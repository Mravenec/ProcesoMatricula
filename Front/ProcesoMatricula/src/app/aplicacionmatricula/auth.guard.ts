import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = new Router();
  const token = localStorage.getItem('token');
  
  if (!token) {
    router.navigate(['/login']);
    return false;
  }
  
  // Verificar expiración del token
  const tokenData = JSON.parse(atob(token.split('.')[1]));
  const expiracion = tokenData.exp * 1000;
  
  if (Date.now() > expiracion) {
    localStorage.removeItem('token');
    router.navigate(['/login']);
    return false;
  }
  
  return true;
};