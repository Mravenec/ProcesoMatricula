import { Component, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Docente } from '../../model/docente';
import { JsonPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-docentes',
  standalone: true,
  imports: [JsonPipe, FormsModule, DatePipe],
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.css']
})
export class DocenteComponent {
  public subtitulo = 'Listado de Docentes';
  public Docentes = signal<Docente[]>([]);

  // Propiedades para nuevo docente
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
    this.metodoGETDocentes();
  }

  // GET: Obtener todos los docentes
  public metodoGETDocentes() {
    this.http.get<Docente[]>('http://localhost/docente').subscribe({
      next: (response) => this.Docentes.set(response),
      error: (err) => console.error('Error fetching docentes:', err)
    });
  }

  // POST: Agregar docente
  public agregarDocente() {
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

    this.http.post<Docente>('http://localhost/docente', cuerpo).subscribe({
      next: (response) => {
        this.Docentes.update(docentes => [...docentes, response]);
        this.limpiarCampos();
      },
      error: (err) => console.error('Error adding docente:', err)
    });
  }

  // PUT: Modificar docente
  public modificarDocente(docente: Docente) {
    this.http.put(`http://localhost/docente/${docente.id}`, docente).subscribe({
      next: () => {
        this.Docentes.update(docentes => 
          docentes.map(d => d.id === docente.id ? docente : d)
        );
        localStorage.setItem('docentes', JSON.stringify(this.Docentes()));
      },
      error: (err) => console.error('Error updating docente:', err)
    });
  }

  // DELETE: Borrar docente
  public borrarDocente(id: number) {
    this.http.delete(`http://localhost/docente/${id}`).subscribe({
      next: () => {
        this.Docentes.update(docentes => docentes.filter(d => d.id !== id));
      },
      error: (err) => console.error('Error deleting docente:', err)
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