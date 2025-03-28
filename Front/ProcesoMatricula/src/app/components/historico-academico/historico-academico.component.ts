import { Component, signal } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HistoricoAcademico } from '../../model/historico-academico';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-historico-academico',
  standalone: true,
  imports: [JsonPipe, FormsModule],
  templateUrl: './historico-academico.component.html',
  styleUrls: ['./historico-academico.component.css']
})
export class HistoricoAcademicoComponent {
  public subtitulo = 'Gestión de Histórico Académico';
  public HistoricosAcademicos = signal<HistoricoAcademico[]>([]);

  public nuevoEstudianteId: number | null = null;
  public nuevoCursoId: number | null = null;
  public nuevaNota: number | null = null;
  public nuevoPeriodo: string = '';

  constructor(private http: HttpClient) {
    const savedData = localStorage.getItem('historicos');
    if (savedData) this.HistoricosAcademicos.set(JSON.parse(savedData));
    this.metodoGETHistoricos();
  }

  public metodoGETHistoricos() {
    this.http.get<HistoricoAcademico[]>('http://localhost/historicoAcademico').subscribe({
      next: (response) => {
        this.HistoricosAcademicos.set(response);
        localStorage.setItem('historicos', JSON.stringify(response));
      },
      error: (err) => console.error('Error obteniendo histórico:', err)
    });
  }

  public agregarHistorico() {
    if (!this.nuevoEstudianteId || !this.nuevoCursoId || !this.nuevaNota || !this.nuevoPeriodo) return;

    const cuerpo = {
      estudianteId: this.nuevoEstudianteId,
      cursoId: this.nuevoCursoId,
      nota_obtenida: this.nuevaNota,
      periodo: this.nuevoPeriodo
    };
    
    this.http.post<HistoricoAcademico>('http://localhost/historicoAcademico', cuerpo).subscribe({
      next: (nuevoHistorico) => {
        this.HistoricosAcademicos.update(historicos => [...historicos, nuevoHistorico]);
        localStorage.setItem('historicos', JSON.stringify(this.HistoricosAcademicos()));
        this.limpiarCampos();
      },
      error: (err) => console.error('Error agregando histórico:', err)
    });
  }

  public modificarNota(historico: HistoricoAcademico) {
    this.http.put(`http://localhost/historicoAcademico/${historico.id}`, historico).subscribe({
      next: () => {
        this.HistoricosAcademicos.update(historicos => 
          historicos.map(h => h.id === historico.id ? historico : h)
        );
        localStorage.setItem('historicos', JSON.stringify(this.HistoricosAcademicos()));
      },
      error: (err) => console.error('Error actualizando nota:', err)
    });
  }

  public borrarHistorico(id: number) {
    this.http.delete(`http://localhost/historicoAcademico/${id}`).subscribe({
      next: () => {
        this.HistoricosAcademicos.update(historicos => 
          historicos.filter(historico => historico.id !== id)
        );
        localStorage.setItem('historicos', JSON.stringify(this.HistoricosAcademicos()));
      },
      error: (err) => console.error('Error eliminando histórico:', err)
    });
  }

  private limpiarCampos() {
    this.nuevoEstudianteId = null;
    this.nuevoCursoId = null;
    this.nuevaNota = null;
    this.nuevoPeriodo = '';
  }
}