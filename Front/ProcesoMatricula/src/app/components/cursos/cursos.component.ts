import { Component, signal } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Cursos } from '../../model/cursos'; 
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [JsonPipe, FormsModule],
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
  public subtitulo = 'Gestión de Cursos';
  public Cursos = signal<Cursos[]>([]);

  // Propiedades para nuevo curso
  public nuevoPlanEstudioId: number | null = null;
  public nuevoNombre: string = '';
  public nuevoCodigo: string = '';
  public nuevoDocenteId: number | null = null;
  public nuevoHorario: string = '';
  public nuevoAula: string = '';
  public nuevoPeriodo: string = '';
  public nuevoOfertaId: number | null = null;

  constructor(private http: HttpClient) {
    this.metodoGETCursos();
  }

  public metodoGETCursos() {
    this.http.get<Cursos[]>('http://localhost/cursos').subscribe({
      next: (response) => this.Cursos.set(response),
      error: (err) => console.error('Error fetching cursos:', err)
    });
  }

  public agregarCurso() {
    // Validar código único antes de enviar
    if (this.Cursos().some(c => c.codigo === this.nuevoCodigo)) {
      alert('¡El código del curso ya existe!');
      return;
    }

    const cuerpo = {
      planEstudioId: Number(this.nuevoPlanEstudioId),
      nombre: this.nuevoNombre,
      codigo: this.nuevoCodigo,
      docenteId: Number(this.nuevoDocenteId),
      horario: this.nuevoHorario,
      aula: this.nuevoAula,
      periodo: this.nuevoPeriodo,
      ofertaAcademicaid: this.nuevoOfertaId ? Number(this.nuevoOfertaId) : null
    };

    this.http.post<Cursos>('http://localhost/cursos', cuerpo).subscribe({
      next: (nuevoCurso) => {
        this.Cursos.update(cursos => [...cursos, nuevoCurso]);
        this.limpiarCampos();
      },
      error: (err) => {
        console.error('Error adding curso:', err);
        if (err.error?.code === 'P2002') {
          alert('Error: El código del curso ya existe en el sistema');
        }
      }
    });
  }

  public modificarCurso(curso: Cursos) {
    this.http.put(`http://localhost/cursos/${curso.id}`, curso).subscribe({
      next: () => {
        this.Cursos.update(cursos => 
          cursos.map(c => c.id === curso.id ? curso : c)
        );
      },
      error: (err) => console.error('Error updating curso:', err)
    });
  }

  public borrarCurso(id: number) {
    this.http.delete(`http://localhost/cursos/${id}`).subscribe({
      next: () => {
        this.Cursos.update(cursos => cursos.filter(curso => curso.id !== id));
      },
      error: (err) => console.error('Error deleting curso:', err)
    });
  }

  private limpiarCampos() {
    this.nuevoPlanEstudioId = null;
    this.nuevoNombre = '';
    this.nuevoCodigo = '';
    this.nuevoDocenteId = null;
    this.nuevoHorario = '';
    this.nuevoAula = '';
    this.nuevoPeriodo = '';
    this.nuevoOfertaId = null;
  }
}