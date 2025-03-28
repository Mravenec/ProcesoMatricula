import { Component, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Materia } from '../../model/materias';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-materias',
  standalone: true,
  imports: [JsonPipe, FormsModule],
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent {
  public subtitulo = 'Listado de Materias';
  public Materias = signal<Materia[]>([]);

  // Propiedades para nueva materia
  public nuevoNombre: string = '';
  public nuevoNivel: number | null = null;
  public nuevoCodigo: string = '';
  public nuevoCreditos: number | null = null;
  public nuevoHorasTeoricas: number | null = null;
  public nuevoHorasPracticas: number | null = null;

  constructor(private http: HttpClient) {
    this.metodoGETMaterias();
  }

  public metodoGETMaterias() {
    this.http.get<Materia[]>('http://localhost/materias').subscribe({
      next: (response) => {
        this.Materias.set(response);
        localStorage.setItem('materias', JSON.stringify(response));
      },
      error: (err) => console.error('Error fetching materias:', err)
    });
  }

  public agregarMateria() {
    const cuerpo = {
      nombre: this.nuevoNombre,
      nivel: Number(this.nuevoNivel),
      codigo: this.nuevoCodigo,
      creditos: Number(this.nuevoCreditos),
      horas_teoricas: Number(this.nuevoHorasTeoricas),
      horas_practicas: Number(this.nuevoHorasPracticas)
    };

    this.http.post<Materia>('http://localhost/materias', cuerpo).subscribe({
      next: (response) => {
        this.Materias.update(materias => [...materias, response]);
        localStorage.setItem('materias', JSON.stringify(this.Materias()));
        this.resetForm();
      },
      error: (err) => console.error('Error adding materia:', err)
    });
  }

  public modificarMateria(materia: Materia) {
    this.http.put(`http://localhost/materias/${materia.id}`, materia).subscribe({
      next: () => {
        this.Materias.update(materias => 
          materias.map(m => m.id === materia.id ? materia : m)
        );
        localStorage.setItem('materias', JSON.stringify(this.Materias()));
      },
      error: (err) => console.error('Error updating materia:', err)
    });
  }

  public borrarMateria(id: number) {
    this.http.delete(`http://localhost/materias/${id}`).subscribe({
      next: () => {
        this.Materias.update(materias => materias.filter(m => m.id !== id));
        localStorage.setItem('materias', JSON.stringify(this.Materias()));
      },
      error: (err) => console.error('Error deleting materia:', err)
    });
  }

  private resetForm() {
    this.nuevoNombre = '';
    this.nuevoNivel = null;
    this.nuevoCodigo = '';
    this.nuevoCreditos = null;
    this.nuevoHorasTeoricas = null;
    this.nuevoHorasPracticas = null;
  }
}