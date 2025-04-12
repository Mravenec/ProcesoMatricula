import { Component, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Estudiante } from '../../model/estudiante';
import { JsonPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-estudiantes',
  standalone: true,
  imports: [JsonPipe, FormsModule, DatePipe],
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudiantesComponent {
  public subtitulo = 'Listado de Estudiantes';
  public Estudiantes = signal<Estudiante[]>([]);
  public userRole: string = localStorage.getItem('userRole')!;
  public userId: string = localStorage.getItem('userId')!;

  // Propiedades para nuevo estudiante
  public nuevaCedula: string = '';
  public nuevoNombre: string = '';
  public nuevoApellido1: string = '';
  public nuevoApellido2: string = '';
  public nuevaDireccion: string = '';
  public nuevaFechaNacimiento: string = '';
  public nuevoTelefono: string = '';
  public nuevoCorreo: string = '';
  public nuevaProvinciaId: number | null = null;

  constructor(private http: HttpClient) {
    this.metodoGETEstudiantes();
  }
  /*
  public metodoGETEstudiantes() {
    this.http.get<Estudiante[]>('http://localhost/estudiante').subscribe({
      next: (response) => this.Estudiantes.set(response),
      error: (err) => console.error('Error fetching estudiantes:', err)
    });
  }
  */
  public metodoGETEstudiantes() {
    this.http.get<Estudiante[]>('http://localhost/estudiante').subscribe({
      next: (response) => {
        // Si es ESTUDIANTE, filtrar solo sus datos
        if (this.userRole === 'ESTUDIANTE') {
          const filtered = response.filter(e => e.id === Number(this.userId));
          this.Estudiantes.set(filtered);
        } else {
          this.Estudiantes.set(response);
        }
      },
      error: (err) => console.error('Error fetching estudiantes:', err)
    });
  }
  public agregarEstudiante() {
    const cuerpo = {
      cedula: this.nuevaCedula,
      nombre: this.nuevoNombre,
      apellido1: this.nuevoApellido1,
      apellido2: this.nuevoApellido2,
      direccion: this.nuevaDireccion,
      fecha_nacimiento: new Date(this.nuevaFechaNacimiento).toISOString(),
      telefono: this.nuevoTelefono,
      correo: this.nuevoCorreo,
      provinciaId: Number(this.nuevaProvinciaId)
    };

    this.http.post<Estudiante>('http://localhost/estudiante', cuerpo).subscribe({
      next: (response) => {
        this.Estudiantes.update(estudiantes => [...estudiantes, response]);
        this.limpiarCampos();
      },
      error: (err) => console.error('Error adding estudiante:', err)
    });
  }

  public modificarEstudiante(estudiante: Estudiante) {
    this.http.put(`http://localhost/estudiante/${estudiante.id}`, estudiante).subscribe({
      next: () => {
        this.Estudiantes.update(estudiantes => 
          estudiantes.map(e => e.id === estudiante.id ? estudiante : e)
        );
        localStorage.setItem('estudiantes', JSON.stringify(this.Estudiantes()));
      },
      error: (err) => console.error('Error updating estudiante:', err)
    });
  }

  public borrarEstudiante(id: number) {
    this.http.delete(`http://localhost/estudiante/${id}`).subscribe({
      next: () => {
        this.Estudiantes.update(estudiantes => estudiantes.filter(e => e.id !== id));
        localStorage.setItem('estudiantes', JSON.stringify(this.Estudiantes()));
      },
      error: (err) => console.error('Error deleting estudiante:', err)
    });
  }

  private limpiarCampos() {
    this.nuevaCedula = '';
    this.nuevoNombre = '';
    this.nuevoApellido1 = '';
    this.nuevoApellido2 = '';
    this.nuevaDireccion = '';
    this.nuevaFechaNacimiento = '';
    this.nuevoTelefono = '';
    this.nuevoCorreo = '';
    this.nuevaProvinciaId = null;
  }
}