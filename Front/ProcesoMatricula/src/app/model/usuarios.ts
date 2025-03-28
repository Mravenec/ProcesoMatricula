export interface Usuario {
  id: number;
  username: string;
  password: string;
  rol: string;  
  estado: boolean;
}


/*
export interface Usuario {
  id: number;
  username: string;
  password: string;
  rol: string; // Este es de tipo enum en el modelo de Prisma (ADMINISTRADOR, DOCENTE, ESTUDIANTE)
  estado: boolean;
}
*/