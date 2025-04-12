const { PrismaClient } = require("@prisma/client")
const bcrypt = require ('bcrypt');
const crypto = require ('crypto');
const jwt = require('jsonwebtoken');

const prisma = new PrismaClient();

class Usuarios {

  constructor() {
    this.PalabraSecreta = "strcprstskrzkrk"; 
  };
  
/*
  async Agregar(username, password, rol, estado) {
    try {
      return await prisma.usuarios.create({
        data: { username, password, rol, estado }

      });
    } catch(error) {
      console.error(`Error creando usuario: ${error}`);
    }
  }
*/

// === NUEVOS MÉTODOS (Autenticación JWT) ===
async Autenticacion(username, ClaveSinEncriptar) {
  try {
      const usuario = await prisma.usuarios.findUnique({
          where: { username: username }
      });

      if (!usuario) throw new Error("Usuario no encontrado");

      const resultado = await bcrypt.compare(ClaveSinEncriptar, usuario.password);
      if (!resultado) throw new Error("Contraseña incorrecta");

      return jwt.sign({ data: usuario.rol, id: usuario.id }, this.PalabraSecreta, { expiresIn: '1h' });

  } catch (error) {
      console.error(`Error en autenticación: ${error.message}`);
      return null;
  }
}

async ValidarToken(solicitud) {
  try {
    const token = solicitud.headers.authorization?.split(" ")[1];
    if (!token) throw new Error("Token no proporcionado");
    
    const decodificado = jwt.verify(token, this.PalabraSecreta);
    
    // Ajustar ID solo para estudiantes entre 101-200
    if (decodificado.data === "ESTUDIANTE" && decodificado.id >= 101 && decodificado.id <= 200) {
      decodificado.id -= 100; // Corregir ID
    }
    
    return decodificado;
    
  } catch (error) {
    console.error(`Error validando token: ${error.message}`);
    return { 
      error: error.message,
      detalle: error.name === 'TokenExpiredError' ? 'Token expirado' : 'Token inválido'
    };
  }
}

// === MÉTODO MODIFICADO (Agregar) ===
async Agregar(username, password, rol, estado) {
  const hash = await bcrypt.hash(password, 10); 
  try {
      return await prisma.usuarios.create({
          data: { username, password: hash, rol, estado } 
      });
  } catch (error) {
      console.error(`Error creando usuario: ${error}`);
      throw error; 
  }
}

// === MÉTODO LISTAR MODIFICADO PARA EXCLUIR CONTRASEÑAS ===
Listar(id) {
  const camposSeguros = {
    id: true,
    username: true,
    rol: true,
    estado: true,
    fecha_creacion: true,
    fecha_actualizacion: true
  };

  if (id === undefined) {
    return prisma.usuarios.findMany({
      select: camposSeguros
    });
  } else {
    const idNumero = parseInt(id);
    if (isNaN(idNumero)) {
      throw new Error("ID inválido");
    }
    return prisma.usuarios.findUnique({
      where: { id: idNumero },
      select: camposSeguros
    });
  }
}

  async Actualizar(id, datosActualizados) { 
    try {
        return await prisma.usuarios.update({
            where: { id: parseInt(id) },
            data: datosActualizados 
        });
    } catch(error) {
        console.error(`Error actualizando usuario: ${error}`);
        throw error; 
    }
}

  async Borrar(id) {
    try {
      return await prisma.usuarios.delete({
        where: { id: parseInt(id) }
      });
    } catch(error) {
      console.error(`Error eliminando usuario: ${error}`);
    }
  }
  Listar(id) {
    if (id === undefined) {
      return prisma.usuarios.findMany();
    } else {
      const idNumero = parseInt(id);
      if (isNaN(idNumero)) {
        throw new Error("ID inválido");
      }
      return prisma.usuarios.findUnique({
        where: { id: idNumero }
      });
    }
  }
}


module.exports = Usuarios;
