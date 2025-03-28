import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Distrito } from '../../model/distrito';
import { FormsModule } from '@angular/forms';
import { catchError, of, tap } from 'rxjs';

@Component({
  selector: 'app-distritos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './distrito.component.html',
  styleUrls: ['./distrito.component.css']
})
export class DistritosComponent {
  private http = inject(HttpClient);
  
  public subtitulo = 'Gestión de Distritos';
  public Distritos = signal<Distrito[]>([]);
  private apiUrl = 'http://localhost/distritos';
  public loading = signal(false);
  public errorMessage = signal<string | null>(null);

  // Propiedades para nuevo distrito
  public nuevoDistrito = signal<Partial<Distrito>>({
    Distrito: '',
    CantonId: undefined,
    Valoracion: ''
  });

  constructor() {
    this.cargarDistritos();
  }

  public cargarDistritos() {
    this.loading.set(true);
    this.http.get<Distrito[]>(this.apiUrl).pipe(
      tap(() => this.loading.set(false)),
      catchError((error: Error) => {
        this.errorMessage.set('Error cargando distritos: ' + error.message);
        this.loading.set(false);
        return of([]);
      })
    ).subscribe((response: Distrito[]) => {
      this.Distritos.set(response);
      localStorage.setItem('distritos', JSON.stringify(response)); 
    });
  }

  public agregarDistrito() {
    if (!this.validarNuevoDistrito()) return;

    this.loading.set(true);
    this.http.post<Distrito>(this.apiUrl, this.nuevoDistrito()).pipe(
      tap(() => this.loading.set(false)),
      catchError((error: Error) => {
        this.errorMessage.set('Error creando distrito: ' + error.message);
        this.loading.set(false);
        return of(null);
      })
    ).subscribe((response: Distrito | null) => {
      if (response) {
        this.Distritos.update(distritos => [...distritos, response]);
        this.nuevoDistrito.set({ 
          Distrito: '', 
          CantonId: undefined, 
          Valoracion: '' 
        });
        localStorage.setItem('distritos', JSON.stringify(this.Distritos())); 
      }
    });
  }

  public modificarDistrito(distrito: Distrito) {
    this.loading.set(true);
    this.http.put<Distrito>(`${this.apiUrl}/${distrito.DistritoId}`, distrito).pipe(
      tap(() => this.loading.set(false)),
      catchError((error: Error) => {
        this.errorMessage.set('Error actualizando distrito: ' + error.message);
        this.loading.set(false);
        return of(null);
      })
    ).subscribe((updated: Distrito | null) => {
      if (updated) {
        this.Distritos.update(distritos => 
          distritos.map(d => d.DistritoId === updated.DistritoId ? updated : d)
        );
        localStorage.setItem('distritos', JSON.stringify(this.Distritos())); 
      }
    });
  }

  public borrarDistrito(id: number) {
    if (!confirm('¿Está seguro de eliminar este distrito?')) return;
    
    this.loading.set(true);
    this.http.delete(`${this.apiUrl}/${id}`).pipe(
      tap(() => this.loading.set(false)),
      catchError((error: Error) => {
        this.errorMessage.set('Error eliminando distrito: ' + error.message);
        this.loading.set(false);
        return of(null);
      })
    ).subscribe(() => {
      this.Distritos.update(distritos => 
        distritos.filter(d => d.DistritoId !== id)
      );
      localStorage.setItem('distritos', JSON.stringify(this.Distritos())); 
    });
  }

  private validarNuevoDistrito(): boolean {
    const nuevo = this.nuevoDistrito();
    if (!nuevo.Distrito || !nuevo.CantonId) {
      this.errorMessage.set('Nombre y Canton ID son requeridos');
      return false;
    }
    this.errorMessage.set(null);
    return true;
  }
}