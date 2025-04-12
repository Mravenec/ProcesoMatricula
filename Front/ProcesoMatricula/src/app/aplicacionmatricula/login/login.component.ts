import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  iniciarSesion() {
    this.http.post<any>('http://localhost/usuarios/autenticar', {
      username: this.username,
      password: this.password
    }).subscribe({
      next: (response) => {
        const token = response.token;
        localStorage.setItem('token', token);

        this.http.get<any>('http://localhost/usuarios/validarToken', {
          headers: { Authorization: `Bearer ${token}` }
        }).subscribe({
          next: (val) => {
            const role = val.datos.data;
            const userId = val.datos.id;
            localStorage.setItem('userRole', role);
            localStorage.setItem('userId', userId);
            // Navegar sin recargar
            this.router.navigate(['/']);
          },
          error: () => {
            alert('Error validando token');
          }
        });
      },
      error: () => alert('Credenciales incorrectas')
    });
  }
}
