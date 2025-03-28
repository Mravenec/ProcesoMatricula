import { Component, signal } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { PlanEstudios } from '../../model/plan-estudios';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-plan-estudios',
  standalone: true,
  imports: [JsonPipe, FormsModule],
  templateUrl: './plan-estudios.component.html',
  styleUrls: ['./plan-estudios.component.css']
})
export class PlanEstudiosComponent {
  public subtitulo = 'Gestión de Planes de Estudio';
  public PlanesEstudios = signal<PlanEstudios[]>([]);
  
  public nuevaCarrera: string = '';
  public nuevoCodigoPlan: string = '';

  constructor(private http: HttpClient) {
    this.metodoGETPlanEstudios();
  }

  public metodoGETPlanEstudios() {
    this.http.get<PlanEstudios[]>('http://localhost/planEstudios').subscribe({
      next: (response) => this.PlanesEstudios.set(response),
      error: (err) => console.error('Error fetching planes:', err)
    });
  }

  public agregarPlanEstudio() {
    if (!this.nuevaCarrera || !this.nuevoCodigoPlan) return;

    const cuerpo = {
      carrera: this.nuevaCarrera,
      codigo: this.nuevoCodigoPlan
    };
    
    this.http.post<PlanEstudios>('http://localhost/planEstudios', cuerpo).subscribe({
      next: (nuevoPlan) => {
        this.PlanesEstudios.update(planes => [...planes, nuevoPlan]);
        this.nuevaCarrera = '';
        this.nuevoCodigoPlan = '';
      },
      error: (err) => console.error('Error agregando plan:', err)
    });
  }

  public modificarPlanEstudio(plan: PlanEstudios) {
    this.http.put(`http://localhost/planEstudios/${plan.id}`, plan).subscribe({
      next: () => {
        this.PlanesEstudios.update(planes => 
          planes.map(p => p.id === plan.id ? plan : p)
        );
        localStorage.setItem('planesEstudios', JSON.stringify(this.PlanesEstudios()));
      },
      error: (err) => console.error('Error actualizando plan:', err)
    });
  }

  public borrarPlanEstudio(id: number) {
    this.http.delete(`http://localhost/planEstudios/${id}`).subscribe({
      next: () => {
        this.PlanesEstudios.update(planes => 
          planes.filter(plan => plan.id !== id)
        );
        localStorage.setItem('planesEstudios', JSON.stringify(this.PlanesEstudios()));
      },
      error: (err) => console.error('Error eliminando plan:', err)
    });
  }
}