import { Component, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Canton } from '../../model/Canton';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-cantones',
  standalone: true,
  imports: [JsonPipe, FormsModule],
  templateUrl: './canton.component.html',
  styleUrls: ['./canton.component.css']
})
export class CantonesComponent {
  public subtitulo = 'Administración de Cantones';
  public Cantones = signal<Canton[]>([]);
  private apiUrl = 'http://localhost/cantones';
  private storageKey = 'cantones';

  // Variables para nuevo cantón
  public nuevoCantonNombre: string = '';
  public nuevoProvinciaId: number | null = null;

  constructor(private http: HttpClient) {
    this.cargarDesdeLocalStorage();
    this.metodoGETCantones();
  }

  private cargarDesdeLocalStorage() {
    const datosLocales = localStorage.getItem(this.storageKey);
    if (datosLocales) {
      this.Cantones.set(JSON.parse(datosLocales));
    }
  }

  public metodoGETCantones() {
    this.http.get<Canton[]>(this.apiUrl).subscribe({
      next: (response) => {
        this.Cantones.set(response);
        localStorage.setItem(this.storageKey, JSON.stringify(response));
      },
      error: (err) => console.error('Error fetching cantones:', err)
    });
  }

  public agregarCanton() {
    if (!this.nuevoCantonNombre || this.nuevoProvinciaId === null) return;

    const cuerpo = {
      Canton: this.nuevoCantonNombre,
      ProvinciaId: this.nuevoProvinciaId
    };

    this.http.post<Canton>(this.apiUrl, cuerpo).subscribe({
      next: (response) => {
        this.Cantones.update(cantones => {
          const nuevos = [...cantones, response];
          localStorage.setItem(this.storageKey, JSON.stringify(nuevos)); // Actualiza localStorage
          return nuevos;
        });
        this.nuevoCantonNombre = '';
        this.nuevoProvinciaId = null;
      },
      error: (err) => console.error('Error adding canton:', err)
    });
  }

  public modificarCanton(canton: Canton) {
    const cuerpoActualizado = {
      Canton: canton.Canton,
      ProvinciaId: canton.ProvinciaId
    };

    this.http.put<Canton>(`${this.apiUrl}/${canton.CantonId}`, cuerpoActualizado).subscribe({
      next: (response) => {
        this.Cantones.update(cantones => 
          cantones.map(c => c.CantonId === response.CantonId ? response : c)
        );
        localStorage.setItem(this.storageKey, JSON.stringify(this.Cantones())); // Actualización directa
      },
      error: (err) => console.error('Error updating canton:', err)
    });
  }

  public borrarCanton(id: number) {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe({
      next: () => {
        this.Cantones.update(cantones => 
          cantones.filter(c => c.CantonId !== id)
        );
        localStorage.setItem(this.storageKey, JSON.stringify(this.Cantones())); // Actualización directa
      },
      error: (err) => console.error('Error deleting canton:', err)
    });
  }
}