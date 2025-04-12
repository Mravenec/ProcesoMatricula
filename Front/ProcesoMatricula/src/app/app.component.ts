import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  isLoggedIn: boolean = false;
  isLoginRoute: boolean = false;
  userRole: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.isLoginRoute = event.url.includes('/login');
        this.checkAuthentication(); // volver a evaluar auth al cambiar ruta
      });

    this.checkAuthentication(); // inicial
  }

  private checkAuthentication(): void {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('userRole');
    const expired = token ? this.tokenExpirado(token) : true;

    if (!token || expired) {
      this.isLoggedIn = false;
      localStorage.removeItem('token');
      localStorage.removeItem('userRole');
      this.router.navigate(['/login']);
      return;
    }

    // Token válido, y ya teníamos rol guardado
    if (role) {
      this.userRole = role;
      this.isLoggedIn = true;
    } else {
      // Validar token para obtener rol
      this.http.get<any>('http://localhost/usuarios/validarToken', {
        headers: { Authorization: `Bearer ${token}` }
      }).subscribe({
        next: (response) => {
          this.userRole = response.datos.data;
          this.isLoggedIn = true;
          localStorage.setItem('userRole', this.userRole);
        },
        error: () => {
          this.isLoggedIn = false;
          localStorage.removeItem('token');
          localStorage.removeItem('userRole');
          this.router.navigate(['/login']);
        }
      });
    }
  }

  private tokenExpirado(token: string): boolean {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return (payload.exp * 1000) < Date.now();
    } catch (error) {
      return true;
    }
  }

  cerrarSesion(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}
