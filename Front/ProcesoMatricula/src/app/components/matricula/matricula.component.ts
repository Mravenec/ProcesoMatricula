import { Component, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-matricula',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container">
      <!-- Sección de Cursos Disponibles -->
      <div class="section">
        <h2>Cursos Disponibles</h2>
        <div class="periodo-selector">
          <select [(ngModel)]="periodoSeleccionado">
            <option *ngFor="let periodo of periodos" [value]="periodo">{{ periodo }}</option>
          </select>
          <button (click)="cargarCursosDisponibles()">Buscar</button>
        </div>
        
        <div *ngIf="cursosDisponibles().length > 0" class="grid-cursos">
          <div class="curso-card" *ngFor="let curso of cursosDisponibles()">
            <h3>{{ curso.nombre }}</h3>
            <p>Código: {{ curso.codigo }}</p>
            <p>Docente: {{ curso.docente.nombre }} {{ curso.docente.apellido1 }}</p>
            <p>Créditos: {{ calcularCreditos(curso) }}</p>
            <button (click)="matricularCurso(curso.id)">Matricular</button>
          </div>
        </div>
      </div>

      <!-- Matrículas Activas -->
      <div class="section">
        <h2>Mis Matrículas Activas</h2>

        <div *ngIf="matriculasActivas().length === 0" class="empty-state">
          No tienes matrículas activas
        </div>

        <!-- Botón para descargar reporte PDF -->
        <div *ngIf="matriculasActivas().length > 0" style="margin-bottom: 1rem;">
          <button (click)="generarPDF()">Descargar Reporte PDF</button>
        </div>

        <div class="matricula-list">
          <div *ngFor="let matricula of matriculasActivas()" class="matricula-item">
            <div class="matricula-info">
              <h3>{{ matricula.curso.nombre }}</h3>
              <p>Estado: {{ matricula.estado }}</p>
              <p>Periodo: {{ matricula.periodo }}</p>
            </div>
            <button class="cancel-btn" (click)="cancelarMatricula(matricula.id)">Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./matricula.component.css']
})
export class MatriculaComponent {
  cursosDisponibles = signal<any[]>([]);
  matriculasActivas = signal<any[]>([]);
  periodos: string[] = ['2024-Q1', '2024-Q2', '2025-Q1'];
  periodoSeleccionado = '2025-Q1';

  constructor(private http: HttpClient) {
    this.cargarMatriculasActivas();
  }

  calcularCreditos(curso: any): number {
    return curso.planEstudio.materias.reduce((sum: number, materia: any) => sum + materia.creditos, 0);
  }

  cargarCursosDisponibles() {
    this.http.get<any[]>(
      `http://localhost/matricula/cursos-disponibles?periodo=${this.periodoSeleccionado}`,
      { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
    ).subscribe({
      next: (response) => this.cursosDisponibles.set(response),
      error: (err) => alert('Error: ' + (err.error?.error || 'No se pudieron cargar los cursos'))
    });
  }

  matricularCurso(cursoId: number) {
    this.http.post(
      'http://localhost/matricula',
      { cursoId: cursoId, periodo: this.periodoSeleccionado },
      { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
    ).subscribe({
      next: () => {
        alert('Matrícula exitosa!');
        this.cargarMatriculasActivas();
        this.cargarCursosDisponibles();
      },
      error: (err) => alert('Error: ' + (err.error?.error || 'No se pudo completar la matrícula'))
    });
  }

  cargarMatriculasActivas() {
    this.http.get<any[]>('http://localhost/matricula/mis-matriculas', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    }).subscribe({
      next: (response) => this.matriculasActivas.set(response),
      error: (err) => console.error('Error cargando matrículas:', err)
    });
  }

  cancelarMatricula(matriculaId: number) {
    if (confirm('¿Seguro que deseas cancelar esta matrícula?')) {
      this.http.delete(
        `http://localhost/matricula/${matriculaId}`,
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      ).subscribe({
        next: () => {
          this.cargarMatriculasActivas();
          this.cargarCursosDisponibles();
        },
        error: (err) => alert('Error: ' + (err.error?.error || 'No se pudo cancelar'))
      });
    }
  }

  generarPDF() {
    const doc = new jsPDF();
    const matriculas = this.matriculasActivas();

    // Encabezado
    doc.setFontSize(16);
    doc.text("Reporte de Matrículas Activas", 10, 10);
    doc.setFontSize(12);
    doc.text("Fecha: " + new Date().toLocaleDateString(), 10, 20);

    // Contenido
    let startY = 30;
    matriculas.forEach((matricula, index) => {
      if (startY > 280) {
        doc.addPage();
        startY = 20;
      }
      doc.text(`Matrícula ${index + 1}`, 10, startY);
      doc.text(`Curso: ${matricula.curso.nombre}`, 10, startY + 10);
      doc.text(`Periodo: ${matricula.periodo}`, 10, startY + 20);
      doc.text(`Estado: ${matricula.estado}`, 10, startY + 30);
      startY += 40;
    });

    // Guardar PDF
    doc.save("reporte-matriculas.pdf");
  }
}
