export interface Estudiante {
    id: number;
    cedula: string;
    nombre: string;
    apellido1: string;
    apellido2: string;
    fecha_nacimiento: string;
    direccion: string;
    telefono: string;
    correo: string;
    provinciaId: number;
    FechaDeCreacion?: string;
    ActualizadoEn?: string;
  }

  /*
export interface Estudiante {
  id: number;
  cedula: string;
  nombre: string;
  apellido1: string;
  apellido2: string;
  fecha_nacimiento: string;
  direccion: string;
  telefono: string;
  correo: string;
  provinciaId: number;
  FechaDeCreacion?: string;
  ActualizadoEn?: string;
}
  */