import { Component, signal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // <-- Añadir HttpHeaders
import { Router } from '@angular/router'; // <-- Añadir Router
import { JsonPipe } from '@angular/common';
import { Usuario } from '../../model/usuarios'; 
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [JsonPipe, FormsModule],
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  public subtitulo = 'Gestión de Usuarios';
  public Usuarios = signal<Usuario[]>([]);
  public rolesPermitidos = ['ADMINISTRADOR', 'DOCENTE', 'ESTUDIANTE'];
  
  
  public nuevoUsername: string = '';
  public nuevoPassword: string = '';
  public nuevoRol: string = 'ESTUDIANTE';

  constructor(
    private http: HttpClient,
    private router: Router // <-- Inyectar Router
  ) {
    this.metodoGETUsuarios();
  }

  public metodoGETUsuarios() {
    const token = localStorage.getItem('token'); // <-- Obtener token
    if (!token) {
      this.router.navigate(['/login']); // <-- Redirigir si no hay token
      return;
    }

    // Configurar headers con el token
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.get<Usuario[]>('http://localhost/usuarios', { headers }).subscribe({
      next: (response) => this.Usuarios.set(response),
      error: (err) => {
        console.error('Error fetching usuarios:', err);
        if (err.status === 401 || err.status === 403) { // <-- Manejar errores de autenticación
          localStorage.removeItem('token');
          this.router.navigate(['/login']);
        }
      }
    });
  }


  public agregarUsuario() {
    const cuerpo = { 
      username: this.nuevoUsername, 
      password: this.nuevoPassword, 
      rol: this.nuevoRol, 
      estado: true 
    };
    
    this.http.post<Usuario>('http://localhost/usuarios', cuerpo).subscribe({
      next: (nuevoUsuario) => {
        this.Usuarios.update(users => [...users, nuevoUsuario]);
        // Resetear campos
        this.nuevoUsername = '';
        this.nuevoPassword = '';
        this.nuevoRol = 'ESTUDIANTE';
      },
      error: (err) => console.error('Error agregando usuario:', err)
    });
  }

  public modificarUsuario(usuario: Usuario) {
    this.http.put(`http://localhost/usuarios/${usuario.id}`, usuario).subscribe({
      next: () => {
        this.Usuarios.update(users => 
          users.map(u => u.id === usuario.id ? usuario : u)
        );
      },
      error: (err) => console.error('Error actualizando usuario:', err)
    });
  }

  public borrarUsuario(id: number) {
    this.http.delete(`http://localhost/usuarios/${id}`).subscribe({
      next: () => this.Usuarios.update(users => users.filter(user => user.id !== id)),
      error: (err) => console.error('Error eliminando usuario:', err)
    });
  }
}

