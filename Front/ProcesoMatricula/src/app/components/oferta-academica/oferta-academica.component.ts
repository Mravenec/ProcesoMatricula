// oferta-academica.component.ts
import { Component, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OfertaAcademica } from '../../model/oferta-academica';

@Component({
  selector: 'app-oferta-academica',
  standalone: true,
  imports: [JsonPipe, FormsModule],
  templateUrl: './oferta-academica.component.html',
  styleUrls: ['./oferta-academica.component.css']
})
export class OfertaAcademicaComponent {
  public subtitulo = 'Gestión de Ofertas Académicas';
  public OfertasAcademicas = signal<OfertaAcademica[]>([]);
  
  // Propiedades para nueva oferta
  public nuevoPeriodo: string = '';

  constructor(private http: HttpClient) {
    this.cargarDesdeLocalStorage();
    this.metodoGETOfertas();
  }

  private cargarDesdeLocalStorage() {
    const datosGuardados = localStorage.getItem('ofertasAcademicas');
    if (datosGuardados) {
      this.OfertasAcademicas.set(JSON.parse(datosGuardados));
    }
  }

  public metodoGETOfertas() {
    this.http.get<OfertaAcademica[]>('http://localhost/ofertaAcademica').subscribe({
      next: (response) => {
        this.OfertasAcademicas.set(response);
        localStorage.setItem('ofertasAcademicas', JSON.stringify(response));
      },
      error: (err) => console.error('Error obteniendo ofertas:', err)
    });
  }

  public agregarOferta() {
    if (!this.nuevoPeriodo.trim()) return;
    
    const cuerpo = {
      periodo: this.nuevoPeriodo
    };

    this.http.post<OfertaAcademica>('http://localhost/ofertaAcademica', cuerpo).subscribe({
      next: (nuevaOferta) => {
        this.OfertasAcademicas.update(ofertas => {
          const nuevasOfertas = [...ofertas, nuevaOferta];
          localStorage.setItem('ofertasAcademicas', JSON.stringify(nuevasOfertas));
          return nuevasOfertas;
        });
        this.nuevoPeriodo = '';
      },
      error: (err) => console.error('Error agregando oferta:', err)
    });
  }

  public modificarOferta(oferta: OfertaAcademica) {
    this.http.put(`http://localhost/ofertaAcademica/${oferta.id}`, oferta).subscribe({
      next: () => {
        this.OfertasAcademicas.update(ofertas => {
          const actualizadas = ofertas.map(o => 
            o.id === oferta.id ? {...oferta} : o
          );
          localStorage.setItem('ofertasAcademicas', JSON.stringify(actualizadas));
          return actualizadas;
        });
      },
      error: (err) => console.error('Error actualizando oferta:', err)
    });
  }

  public borrarOferta(id: number) {
    this.http.delete(`http://localhost/ofertaAcademica/${id}`).subscribe({
      next: () => {
        this.OfertasAcademicas.update(ofertas => {
          const filtradas = ofertas.filter(o => o.id !== id);
          localStorage.setItem('ofertasAcademicas', JSON.stringify(filtradas));
          return filtradas;
        });
      },
      error: (err) => console.error('Error eliminando oferta:', err)
    });
  }
}

