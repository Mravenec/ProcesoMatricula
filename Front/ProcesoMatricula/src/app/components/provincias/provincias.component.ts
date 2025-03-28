// provincias.component.ts
import { Component, signal } from '@angular/core';
import { Provincia } from '../../model/provincia';
import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-provincias',
  standalone: true,
  imports: [JsonPipe, FormsModule],
  templateUrl: './provincias.component.html',
  styleUrls: ['./provincias.component.css']
})
export class ProvinciasComponent {
  public subtitulo = 'Listado de Provincias';
  public Provincias = signal<Provincia[]>([]);
  public nuevoNombreProvincia: string = '';

  constructor(private http: HttpClient) {
    this.cargarDesdeLocalStorage();
    this.metodoGETProvincias(); 
  }

  private cargarDesdeLocalStorage() {
    const datosGuardados = localStorage.getItem('provincias');
    if (datosGuardados) {
      this.Provincias.set(JSON.parse(datosGuardados));
    }
  }

  private guardarEnLocalStorage() {
    localStorage.setItem('provincias', JSON.stringify(this.Provincias()));
  }

  public metodoGETProvincias() {
    this.http.get<Provincia[]>('http://localhost/provincias').subscribe({
      next: (response) => {
        this.Provincias.set(response);
        this.guardarEnLocalStorage();
      },
      error: (err) => console.error('Error fetching provincias:', err)
    });
  }

  public agregarProvinvia() {
    if (!this.nuevoNombreProvincia.trim()) return;
  
    const cuerpo = { Provincia: this.nuevoNombreProvincia };
    
    this.http.post<Provincia>('http://localhost/provincias', cuerpo).subscribe({
      next: (nuevaProvincia) => {
        const provinciaCompleta = {
          ...nuevaProvincia,
          ProvinciaId: nuevaProvincia.ProvinciaId,
          Provincia: this.nuevoNombreProvincia
        };
        this.Provincias.update(provincias => [...provincias, provinciaCompleta]);
        this.guardarEnLocalStorage();
        this.nuevoNombreProvincia = '';
      },
      error: (err) => console.error('Error agregando provincia:', err)
    });
  }

  public modificarProvinvia(provincia: Provincia) {
    if (!provincia.ProvinciaId) return;

    this.http.put<Provincia>(`http://localhost/provincias/${provincia.ProvinciaId}`, provincia).subscribe({
      next: () => {
        this.Provincias.update(provincias => 
          provincias.map(p => p.ProvinciaId === provincia.ProvinciaId ? provincia : p)
        );
        this.guardarEnLocalStorage();
      },
      error: (err) => console.error('Error actualizando provincia:', err)
    });
  }

  public borrarProvinvia(id: number | undefined) {
    if (!id) return;

    const provinciaEliminada = this.Provincias().find(p => p.ProvinciaId === id);
    
    this.Provincias.update(provincias => provincias.filter(p => p.ProvinciaId !== id));
    this.guardarEnLocalStorage();

    this.http.delete(`http://localhost/provincias/${id}`).subscribe({
      next: () => {
      },
      error: (err) => {
        console.error('Error eliminando provincia:', err);
        
        if (provinciaEliminada) {
          this.Provincias.update(provincias => [...provincias, provinciaEliminada]);
          this.guardarEnLocalStorage();
        }
      }
    });
  }
}