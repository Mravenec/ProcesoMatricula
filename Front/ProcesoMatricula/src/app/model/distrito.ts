export interface Distrito {
  DistritoId: number;
  Distrito: string;
  CantonId: number;
  FechaDeCreacion?: string;
  ActualizadoEn?: string;
  Valoracion: string; 
}

/*
export interface Distrito {
  DistritoId: number;
  Distrito: string;
  CantonId: number;
  FechaDeCreacion?: string;
  ActualizadoEn?: string;
  Valoracion: string; // Este es de tipo enum en el modelo de Prisma (Excelente, Bueno, Regular)
}
*/