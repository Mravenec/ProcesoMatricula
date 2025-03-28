import { PrismaClient, Rol  } from '@prisma/client'


const prisma = new PrismaClient({ log: ["query"] })

async function seedSanJose() {
  await prisma.provincias.create({
    data: {
      Provincia: 'San José',
      FechaDeCreacion: new Date(),
      Cantones: {
        create: [
          {
            Canton: 'Cantón Central',
            Distritos: {
              create: [
                { Distrito: 'Carmen' },
                { Distrito: 'Merced' },
                { Distrito: 'Hospital' },
                { Distrito: 'Catedral' },
                { Distrito: 'Zapote' },
                { Distrito: 'San Francisco de Dos Ríos' },
                { Distrito: 'Uruca' },
                { Distrito: 'Mata Redonda' },
                { Distrito: 'Pavas' },
                { Distrito: 'Hatillo' },
                { Distrito: 'San Sebastián' }
              ]
            }
          },
          {
            Canton: 'Escazú',
            Distritos: {
              create: [
                { Distrito: 'Escazú' },
                { Distrito: 'San Antonio' },
                { Distrito: 'San Rafael' }
              ]
            }
          },
          {
            Canton: 'Desamparados',
            Distritos: {
              create: [
                { Distrito: 'Desamparados' },
                { Distrito: 'San Miguel' },
                { Distrito: 'San Juan de Dios' },
                { Distrito: 'San Rafael Arriba' },
                { Distrito: 'San Antonio' },
                { Distrito: 'Frailes' },
                { Distrito: 'Patarrá' },
                { Distrito: 'San Cristóbal' },
                { Distrito: 'Rosario' },
                { Distrito: 'Damas' },
                { Distrito: 'San Rafael Abajo' },
                { Distrito: 'Gravilias' },
                { Distrito: 'Los Guido' }
              ]
            }
          },
          {
            Canton: 'Puriscal',
            Distritos: {
              create: [
                { Distrito: 'Santiago' },
                { Distrito: 'Mercedes Sur' },
                { Distrito: 'Barbacoas' },
                { Distrito: 'Grifo Alto' },
                { Distrito: 'San Rafael' },
                { Distrito: 'Candelaria' },
                { Distrito: 'Desamparaditos' },
                { Distrito: 'San Antonio' },
                { Distrito: 'Chires' }
              ]
            }
          },
          {
            Canton: 'Tarrazú',
            Distritos: {
              create: [
                { Distrito: 'San Marcos' },
                { Distrito: 'San Lorenzo' },
                { Distrito: 'San Carlos' }
              ]
            }
          },
          {
            Canton: 'Aserrí',
            Distritos: {
              create: [
                { Distrito: 'Aserrí' },
                { Distrito: 'Tarbaca' },
                { Distrito: 'Vuelta de Jorco' },
                { Distrito: 'San Gabriel' },
                { Distrito: 'Legua' },
                { Distrito: 'Monterrey' },
                { Distrito: 'Salitrillos' }
              ]
            }
          },
          {
            Canton: 'Mora',
            Distritos: {
              create: [
                { Distrito: 'Colón' },
                { Distrito: 'Guayabo' },
                { Distrito: 'Tabarcia' },
                { Distrito: 'Piedras Negras' },
                { Distrito: 'Picagres' },
                { Distrito: 'Jaris' }
              ]
            }
          },
          {
            Canton: 'Goicoechea',
            Distritos: {
              create: [
                { Distrito: 'Guadalupe' },
                { Distrito: 'Calle Blancos' },
                { Distrito: 'Mata de Plátano' },
                { Distrito: 'Ipís' },
                { Distrito: 'Rancho Redondo' },
                { Distrito: 'Purral' }
              ]
            }
          },
          {
            Canton: 'Santa Ana',
            Distritos: {
              create: [
                { Distrito: 'Santa Ana' },
                { Distrito: 'Salitral' },
                { Distrito: 'Pozos' },
                { Distrito: 'Uruca' },
                { Distrito: 'Piedades' },
                { Distrito: 'Brasil' }
              ]
            }
          },
          {
            Canton: 'Alajuelita',
            Distritos: {
              create: [
                { Distrito: 'Alajuelita' },
                { Distrito: 'San Josecito' },
                { Distrito: 'San Antonio' },
                { Distrito: 'Concepción' },
                { Distrito: 'San Felipe' }
              ]
            }
          },
          {
            Canton: 'Vázquez de Coronado',
            Distritos: {
              create: [
                { Distrito: 'San Isidro' },
                { Distrito: 'San Rafael' },
                { Distrito: 'Dulce Nombre de Jesús' },
                { Distrito: 'Patalillo' },
                { Distrito: 'Cascajal' }
              ]
            }
          },
          {
            Canton: 'Acosta',
            Distritos: {
              create: [
                { Distrito: 'San Ignacio' },
                { Distrito: 'Guaitil' },
                { Distrito: 'Palmichal' },
                { Distrito: 'Cangrejal' },
                { Distrito: 'Sabanillas' }
              ]
            }
          },
          {
            Canton: 'Tibás',
            Distritos: {
              create: [
                { Distrito: 'San Juan' },
                { Distrito: 'Cinco Esquinas' },
                { Distrito: 'León XIII' },
                { Distrito: 'Colima' }
              ]
            }
          },
          {
            Canton: 'Moravia',
            Distritos: {
              create: [
                { Distrito: 'San Vicente' },
                { Distrito: 'San Jerónimo' },
                { Distrito: 'La Trinidad' }
              ]
            }
          },
          {
            Canton: 'Montes de Oca',
            Distritos: {
              create: [
                { Distrito: 'San Pedro' },
                { Distrito: 'Sabanilla' },
                { Distrito: 'Mercedes' },
                { Distrito: 'San Rafael' }
              ]
            }
          },
          {
            Canton: 'Turrubares',
            Distritos: {
              create: [
                { Distrito: 'San Pablo' },
                { Distrito: 'San Pedro' },
                { Distrito: 'San Juan de Mata' },
                { Distrito: 'San Luis' },
                { Distrito: 'Carara' }
              ]
            }
          },
          {
            Canton: 'Dota',
            Distritos: {
              create: [
                { Distrito: 'Santa María' },
                { Distrito: 'Jardín' },
                { Distrito: 'Copey' }
              ]
            }
          },
          {
            Canton: 'Curridabat',
            Distritos: {
              create: [
                { Distrito: 'Curridabat' },
                { Distrito: 'Granadilla' },
                { Distrito: 'Sánchez' },
                { Distrito: 'Tirrases' }
              ]
            }
          },
          {
            Canton: 'Pérez Zeledón',
            Distritos: {
              create: [
                { Distrito: 'San Isidro de El General' },
                { Distrito: 'General' },
                { Distrito: 'Daniel Flores' },
                { Distrito: 'Rivas' },
                { Distrito: 'San Pedro' },
                { Distrito: 'Platanares' },
                { Distrito: 'Pejibaye' },
                { Distrito: 'Cajón' },
                { Distrito: 'Barú' },
                { Distrito: 'Río Nuevo' },
                { Distrito: 'Páramo' },
                { Distrito: 'La Amistad' }
              ]
            }
          },
          {
            Canton: 'León Cortés Castro',
            Distritos: {
              create: [
                { Distrito: 'San Pablo' },
                { Distrito: 'San Andrés' },
                { Distrito: 'Llano Bonito' },
                { Distrito: 'San Isidro' },
                { Distrito: 'Santa Cruz' },
                { Distrito: 'San Antonio' }
              ]
            }
          }
        ]
      }
    }
  })
}

async function seedOtherProvincias() {
  // Se omite San José ya que se agregó con seedSanJose.
  await prisma.provincias.createMany({
    data: [
      { Provincia: 'Alajuela' },
      { Provincia: 'Cartago' },
      { Provincia: 'Heredia' },
      { Provincia: 'Guanacaste' },
      { Provincia: 'Puntarenas' },
      { Provincia: 'Limón' },
    ],
  })
}

async function seedCantones() {
  const alajuela = await prisma.provincias.findFirst({ where: { Provincia: 'Alajuela' } })
  const cartago = await prisma.provincias.findFirst({ where: { Provincia: 'Cartago' } })
  const heredia = await prisma.provincias.findFirst({ where: { Provincia: 'Heredia' } })
  const guanacaste = await prisma.provincias.findFirst({ where: { Provincia: 'Guanacaste' } })
  const puntarenas = await prisma.provincias.findFirst({ where: { Provincia: 'Puntarenas' } })
  const limon = await prisma.provincias.findFirst({ where: { Provincia: 'Limón' } })

  if (alajuela) {
    await prisma.cantones.createMany({
      data: [
        { ProvinciaId: alajuela.ProvinciaId, Canton: 'Cantón Central' },
        { ProvinciaId: alajuela.ProvinciaId, Canton: 'San Ramón' },
        { ProvinciaId: alajuela.ProvinciaId, Canton: 'Grecia' },
        { ProvinciaId: alajuela.ProvinciaId, Canton: 'San Mateo' },
        { ProvinciaId: alajuela.ProvinciaId, Canton: 'Atenas' },
        { ProvinciaId: alajuela.ProvinciaId, Canton: 'Naranjo' },
        { ProvinciaId: alajuela.ProvinciaId, Canton: 'Palmares' },
        { ProvinciaId: alajuela.ProvinciaId, Canton: 'Poás' },
        { ProvinciaId: alajuela.ProvinciaId, Canton: 'Orotina' },
        { ProvinciaId: alajuela.ProvinciaId, Canton: 'San Carlos' },
        { ProvinciaId: alajuela.ProvinciaId, Canton: 'Zarcero' },
        { ProvinciaId: alajuela.ProvinciaId, Canton: 'Sarchí' },
        { ProvinciaId: alajuela.ProvinciaId, Canton: 'Upala' },
        { ProvinciaId: alajuela.ProvinciaId, Canton: 'Los Chiles' },
        { ProvinciaId: alajuela.ProvinciaId, Canton: 'Guatuso' },
        { ProvinciaId: alajuela.ProvinciaId, Canton: 'Río Cuarto' },
      ],
    })
  }

  if (cartago) {
    await prisma.cantones.createMany({
      data: [
        { ProvinciaId: cartago.ProvinciaId, Canton: 'Cantón Central' },
        { ProvinciaId: cartago.ProvinciaId, Canton: 'Paraíso' },
        { ProvinciaId: cartago.ProvinciaId, Canton: 'La Unión' },
        { ProvinciaId: cartago.ProvinciaId, Canton: 'Jiménez' },
        { ProvinciaId: cartago.ProvinciaId, Canton: 'Turrialba' },
        { ProvinciaId: cartago.ProvinciaId, Canton: 'Alvarado' },
        { ProvinciaId: cartago.ProvinciaId, Canton: 'Oreamuno' },
        { ProvinciaId: cartago.ProvinciaId, Canton: 'El Guarco' },
      ],
    })
  }

  if (heredia) {
    await prisma.cantones.createMany({
      data: [
        { ProvinciaId: heredia.ProvinciaId, Canton: 'Cantón Central' },
        { ProvinciaId: heredia.ProvinciaId, Canton: 'Barva' },
        { ProvinciaId: heredia.ProvinciaId, Canton: 'Santo Domingo' },
        { ProvinciaId: heredia.ProvinciaId, Canton: 'Santa Bárbara' },
        { ProvinciaId: heredia.ProvinciaId, Canton: 'San Rafael' },
        { ProvinciaId: heredia.ProvinciaId, Canton: 'San Isidro' },
        { ProvinciaId: heredia.ProvinciaId, Canton: 'Belén' },
        { ProvinciaId: heredia.ProvinciaId, Canton: 'Flores' },
        { ProvinciaId: heredia.ProvinciaId, Canton: 'San Pablo' },
        { ProvinciaId: heredia.ProvinciaId, Canton: 'Sarapiquí' },
      ],
    })
  }

  if (guanacaste) {
    await prisma.cantones.createMany({
      data: [
        { ProvinciaId: guanacaste.ProvinciaId, Canton: 'Liberia' },
        { ProvinciaId: guanacaste.ProvinciaId, Canton: 'Nicoya' },
        { ProvinciaId: guanacaste.ProvinciaId, Canton: 'Santa Cruz' },
        { ProvinciaId: guanacaste.ProvinciaId, Canton: 'Bagaces' },
        { ProvinciaId: guanacaste.ProvinciaId, Canton: 'Carrillo' },
        { ProvinciaId: guanacaste.ProvinciaId, Canton: 'Cañas' },
        { ProvinciaId: guanacaste.ProvinciaId, Canton: 'Abangares' },
        { ProvinciaId: guanacaste.ProvinciaId, Canton: 'Tilarán' },
        { ProvinciaId: guanacaste.ProvinciaId, Canton: 'Nandayure' },
        { ProvinciaId: guanacaste.ProvinciaId, Canton: 'La Cruz' },
        { ProvinciaId: guanacaste.ProvinciaId, Canton: 'Hojancha' },
      ],
    })
  }

  if (puntarenas) {
    await prisma.cantones.createMany({
      data: [
        { ProvinciaId: puntarenas.ProvinciaId, Canton: 'Cantón Central' },
        { ProvinciaId: puntarenas.ProvinciaId, Canton: 'Esparza' },
        { ProvinciaId: puntarenas.ProvinciaId, Canton: 'Buenos Aires' },
        { ProvinciaId: puntarenas.ProvinciaId, Canton: 'Montes de Oro' },
        { ProvinciaId: puntarenas.ProvinciaId, Canton: 'Osa' },
        { ProvinciaId: puntarenas.ProvinciaId, Canton: 'Quepos' },
        { ProvinciaId: puntarenas.ProvinciaId, Canton: 'Golfito' },
        { ProvinciaId: puntarenas.ProvinciaId, Canton: 'Coto Brus' },
        { ProvinciaId: puntarenas.ProvinciaId, Canton: 'Parrita' },
        { ProvinciaId: puntarenas.ProvinciaId, Canton: 'Corredores' },
        { ProvinciaId: puntarenas.ProvinciaId, Canton: 'Garabito' },
        { ProvinciaId: puntarenas.ProvinciaId, Canton: 'Monteverde' },
        { ProvinciaId: puntarenas.ProvinciaId, Canton: 'Puerto Jiménez' },
      ],
    })
  }

  if (limon) {
    await prisma.cantones.createMany({
      data: [
        { ProvinciaId: limon.ProvinciaId, Canton: 'Cantón Central' },
        { ProvinciaId: limon.ProvinciaId, Canton: 'Pococí' },
        { ProvinciaId: limon.ProvinciaId, Canton: 'Siquirres' },
        { ProvinciaId: limon.ProvinciaId, Canton: 'Talamanca' },
        { ProvinciaId: limon.ProvinciaId, Canton: 'Matina' },
        { ProvinciaId: limon.ProvinciaId, Canton: 'Guácimo' },
      ],
    })
  }
}

async function seedDistritos() {
  // ALAJUELA
  const alajuelaId = (await prisma.provincias.findFirst({ where: { Provincia: 'Alajuela' } }))?.ProvinciaId
  if (alajuelaId) {
    const alajuelaCentral = await prisma.cantones.findFirst({ where: { Canton: 'Cantón Central', ProvinciaId: alajuelaId } })
    if (alajuelaCentral) {
      await prisma.distritos.createMany({
        data: [
          { CantonId: alajuelaCentral.CantonId, Distrito: 'Alajuela' },
          { CantonId: alajuelaCentral.CantonId, Distrito: 'San José' },
          { CantonId: alajuelaCentral.CantonId, Distrito: 'Carrizal' },
          { CantonId: alajuelaCentral.CantonId, Distrito: 'San Antonio' },
          { CantonId: alajuelaCentral.CantonId, Distrito: 'Guácima' },
          { CantonId: alajuelaCentral.CantonId, Distrito: 'San Isidro' },
          { CantonId: alajuelaCentral.CantonId, Distrito: 'Sabanilla' },
          { CantonId: alajuelaCentral.CantonId, Distrito: 'San Rafael' },
          { CantonId: alajuelaCentral.CantonId, Distrito: 'Río Segundo' },
          { CantonId: alajuelaCentral.CantonId, Distrito: 'Desamparados' },
          { CantonId: alajuelaCentral.CantonId, Distrito: 'Turrúcares' },
          { CantonId: alajuelaCentral.CantonId, Distrito: 'Tambor' },
          { CantonId: alajuelaCentral.CantonId, Distrito: 'La Garita' },
        ],
      })
    }

    const sanRamon = await prisma.cantones.findFirst({ where: { Canton: 'San Ramón', ProvinciaId: alajuelaId } })
    if (sanRamon) {
      await prisma.distritos.createMany({
        data: [
          { CantonId: sanRamon.CantonId, Distrito: 'San Ramón' },
          { CantonId: sanRamon.CantonId, Distrito: 'Santiago' },
          { CantonId: sanRamon.CantonId, Distrito: 'San Juan' },
          { CantonId: sanRamon.CantonId, Distrito: 'Piedades Norte' },
          { CantonId: sanRamon.CantonId, Distrito: 'Piedades Sur' },
          { CantonId: sanRamon.CantonId, Distrito: 'San Rafael' },
          { CantonId: sanRamon.CantonId, Distrito: 'San Isidro' },
          { CantonId: sanRamon.CantonId, Distrito: 'Ángeles' },
          { CantonId: sanRamon.CantonId, Distrito: 'Alfaro' },
          { CantonId: sanRamon.CantonId, Distrito: 'Volio' },
          { CantonId: sanRamon.CantonId, Distrito: 'Concepción' },
          { CantonId: sanRamon.CantonId, Distrito: 'Zapotal' },
          { CantonId: sanRamon.CantonId, Distrito: 'Peñas Blancas' },
        ],
      })
    }

    const grecia = await prisma.cantones.findFirst({ where: { Canton: 'Grecia', ProvinciaId: alajuelaId } })
    if (grecia) {
      await prisma.distritos.createMany({
        data: [
          { CantonId: grecia.CantonId, Distrito: 'Grecia' },
          { CantonId: grecia.CantonId, Distrito: 'San Isidro' },
          { CantonId: grecia.CantonId, Distrito: 'San José' },
          { CantonId: grecia.CantonId, Distrito: 'San Roque' },
          { CantonId: grecia.CantonId, Distrito: 'Tacares' },
          { CantonId: grecia.CantonId, Distrito: 'Río Cuarto' },
          { CantonId: grecia.CantonId, Distrito: 'Puente de Piedra' },
          { CantonId: grecia.CantonId, Distrito: 'Bolívar' },
        ],
      })
    }

    const sanMateo = await prisma.cantones.findFirst({ where: { Canton: 'San Mateo', ProvinciaId: alajuelaId } })
    if (sanMateo) {
      await prisma.distritos.createMany({
        data: [
          { CantonId: sanMateo.CantonId, Distrito: 'San Mateo' },
          { CantonId: sanMateo.CantonId, Distrito: 'Desmonte' },
          { CantonId: sanMateo.CantonId, Distrito: 'Jesús María' },
          { CantonId: sanMateo.CantonId, Distrito: 'Labrador' },
        ],
      })
    }

    const atenas = await prisma.cantones.findFirst({ where: { Canton: 'Atenas', ProvinciaId: alajuelaId } })
    if (atenas) {
      await prisma.distritos.createMany({
        data: [
          { CantonId: atenas.CantonId, Distrito: 'Atenas' },
          { CantonId: atenas.CantonId, Distrito: 'Jesús' },
          { CantonId: atenas.CantonId, Distrito: 'Mercedes' },
          { CantonId: atenas.CantonId, Distrito: 'San Isidro' },
          { CantonId: atenas.CantonId, Distrito: 'Concepción' },
          { CantonId: atenas.CantonId, Distrito: 'San José' },
          { CantonId: atenas.CantonId, Distrito: 'Santa Eulalia' },
          { CantonId: atenas.CantonId, Distrito: 'Escobal' },
        ],
      })
    }

    const naranjo = await prisma.cantones.findFirst({ where: { Canton: 'Naranjo', ProvinciaId: alajuelaId } })
    if (naranjo) {
      await prisma.distritos.createMany({
        data: [
          { CantonId: naranjo.CantonId, Distrito: 'Naranjo' },
          { CantonId: naranjo.CantonId, Distrito: 'San Miguel' },
          { CantonId: naranjo.CantonId, Distrito: 'San José' },
          { CantonId: naranjo.CantonId, Distrito: 'Cirrí Sur' },
          { CantonId: naranjo.CantonId, Distrito: 'San Jerónimo' },
          { CantonId: naranjo.CantonId, Distrito: 'San Juan' },
          { CantonId: naranjo.CantonId, Distrito: 'El Rosario' },
          { CantonId: naranjo.CantonId, Distrito: 'Palmitos' },
        ],
      })
    }

    const palmares = await prisma.cantones.findFirst({ where: { Canton: 'Palmares', ProvinciaId: alajuelaId } })
    if (palmares) {
      await prisma.distritos.createMany({
        data: [
          { CantonId: palmares.CantonId, Distrito: 'Palmares' },
          { CantonId: palmares.CantonId, Distrito: 'Zaragoza' },
          { CantonId: palmares.CantonId, Distrito: 'Buenos Aires' },
          { CantonId: palmares.CantonId, Distrito: 'Santiago' },
          { CantonId: palmares.CantonId, Distrito: 'Candelaria' },
          { CantonId: palmares.CantonId, Distrito: 'Esquipulas' },
          { CantonId: palmares.CantonId, Distrito: 'La Granja' },
        ],
      })
    }

    const poas = await prisma.cantones.findFirst({ where: { Canton: 'Poás', ProvinciaId: alajuelaId } })
    if (poas) {
      await prisma.distritos.createMany({
        data: [
          { CantonId: poas.CantonId, Distrito: 'San Pedro' },
          { CantonId: poas.CantonId, Distrito: 'San Juan' },
          { CantonId: poas.CantonId, Distrito: 'San Rafael' },
          { CantonId: poas.CantonId, Distrito: 'Carrillos' },
          { CantonId: poas.CantonId, Distrito: 'Sabana Redonda' },
        ],
      })
    }

    const orotina = await prisma.cantones.findFirst({ where: { Canton: 'Orotina', ProvinciaId: alajuelaId } })
    if (orotina) {
      await prisma.distritos.createMany({
        data: [
          { CantonId: orotina.CantonId, Distrito: 'Orotina' },
          { CantonId: orotina.CantonId, Distrito: 'El Mastate' },
          { CantonId: orotina.CantonId, Distrito: 'Hacienda Vieja' },
          { CantonId: orotina.CantonId, Distrito: 'Coyolar' },
          { CantonId: orotina.CantonId, Distrito: 'La Ceiba' },
        ],
      })
    }

    const sanCarlos = await prisma.cantones.findFirst({ where: { Canton: 'San Carlos', ProvinciaId: alajuelaId } })
    if (sanCarlos) {
      await prisma.distritos.createMany({
        data: [
          { CantonId: sanCarlos.CantonId, Distrito: 'Ciudad Quesada' },
          { CantonId: sanCarlos.CantonId, Distrito: 'Florencia' },
          { CantonId: sanCarlos.CantonId, Distrito: 'Buenavista' },
          { CantonId: sanCarlos.CantonId, Distrito: 'Aguas Zarcas' },
          { CantonId: sanCarlos.CantonId, Distrito: 'Venecia' },
          { CantonId: sanCarlos.CantonId, Distrito: 'Pital' },
          { CantonId: sanCarlos.CantonId, Distrito: 'Fortuna' },
          { CantonId: sanCarlos.CantonId, Distrito: 'Tigra' },
          { CantonId: sanCarlos.CantonId, Distrito: 'Palmera' },
          { CantonId: sanCarlos.CantonId, Distrito: 'Venado' },
          { CantonId: sanCarlos.CantonId, Distrito: 'Cutris' },
          { CantonId: sanCarlos.CantonId, Distrito: 'Monterrey' },
          { CantonId: sanCarlos.CantonId, Distrito: 'Pocosol' },
        ],
      })
    }

    const zarcero = await prisma.cantones.findFirst({ where: { Canton: 'Zarcero', ProvinciaId: alajuelaId } })
    if (zarcero) {
      await prisma.distritos.createMany({
        data: [
          { CantonId: zarcero.CantonId, Distrito: 'Zarcero' },
          { CantonId: zarcero.CantonId, Distrito: 'Laguna' },
          { CantonId: zarcero.CantonId, Distrito: 'Tapezco' },
          { CantonId: zarcero.CantonId, Distrito: 'Guadalupe' },
          { CantonId: zarcero.CantonId, Distrito: 'Palmira' },
          { CantonId: zarcero.CantonId, Distrito: 'Zapote' },
          { CantonId: zarcero.CantonId, Distrito: 'Brisas' },
        ],
      })
    }

    const sarchi = await prisma.cantones.findFirst({ where: { Canton: 'Sarchí', ProvinciaId: alajuelaId } })
    if (sarchi) {
      await prisma.distritos.createMany({
        data: [
          { CantonId: sarchi.CantonId, Distrito: 'Sarchí Norte' },
          { CantonId: sarchi.CantonId, Distrito: 'Sarchí Sur' },
          { CantonId: sarchi.CantonId, Distrito: 'Toro Amarillo' },
          { CantonId: sarchi.CantonId, Distrito: 'San Pedro' },
          { CantonId: sarchi.CantonId, Distrito: 'Rodríguez' },
        ],
      })
    }

    const upala = await prisma.cantones.findFirst({ where: { Canton: 'Upala', ProvinciaId: alajuelaId } })
    if (upala) {
      await prisma.distritos.createMany({
        data: [
          { CantonId: upala.CantonId, Distrito: 'Upala' },
          { CantonId: upala.CantonId, Distrito: 'Aguas Claras' },
          { CantonId: upala.CantonId, Distrito: 'San José' },
          { CantonId: upala.CantonId, Distrito: 'Bijagua' },
          { CantonId: upala.CantonId, Distrito: 'Delicias' },
          { CantonId: upala.CantonId, Distrito: 'Dos Ríos' },
          { CantonId: upala.CantonId, Distrito: 'Yolillal' },
        ],
      })
    }

    const losChiles = await prisma.cantones.findFirst({ where: { Canton: 'Los Chiles', ProvinciaId: alajuelaId } })
    if (losChiles) {
      await prisma.distritos.createMany({
        data: [
          { CantonId: losChiles.CantonId, Distrito: 'Los Chiles' },
          { CantonId: losChiles.CantonId, Distrito: 'Caño Negro' },
          { CantonId: losChiles.CantonId, Distrito: 'El Amparo' },
          { CantonId: losChiles.CantonId, Distrito: 'San Jorge' },
        ],
      })
    }

    const guatuso = await prisma.cantones.findFirst({ where: { Canton: 'Guatuso', ProvinciaId: alajuelaId } })
    if (guatuso) {
      await prisma.distritos.createMany({
        data: [
          { CantonId: guatuso.CantonId, Distrito: 'San Rafael' },
          { CantonId: guatuso.CantonId, Distrito: 'Buenavista' },
          { CantonId: guatuso.CantonId, Distrito: 'Cote' },
          { CantonId: guatuso.CantonId, Distrito: 'Katira' },
        ],
      })
    }

    const rioCuarto = await prisma.cantones.findFirst({ where: { Canton: 'Río Cuarto', ProvinciaId: alajuelaId } })
    if (rioCuarto) {
      await prisma.distritos.createMany({
        data: [
          { CantonId: rioCuarto.CantonId, Distrito: 'Río Cuarto' },
          { CantonId: rioCuarto.CantonId, Distrito: 'Santa Rita' },
          { CantonId: rioCuarto.CantonId, Distrito: 'Santa Isabel' },
        ],
      })
    }
  }

  // CARTAGO
  const cartagoId = (await prisma.provincias.findFirst({ where: { Provincia: 'Cartago' } }))?.ProvinciaId
  if (cartagoId) {
    const cartagoCentral = await prisma.cantones.findFirst({ where: { Canton: 'Cantón Central', ProvinciaId: cartagoId } })
    if (cartagoCentral) {
      await prisma.distritos.createMany({
        data: [
          { CantonId: cartagoCentral.CantonId, Distrito: 'Oriental' },
          { CantonId: cartagoCentral.CantonId, Distrito: 'Occidental' },
          { CantonId: cartagoCentral.CantonId, Distrito: 'Carmen' },
          { CantonId: cartagoCentral.CantonId, Distrito: 'San Nicolás' },
          { CantonId: cartagoCentral.CantonId, Distrito: 'Aguacaliente' },
          { CantonId: cartagoCentral.CantonId, Distrito: 'Guadalupe' },
          { CantonId: cartagoCentral.CantonId, Distrito: 'Corralillo' },
          { CantonId: cartagoCentral.CantonId, Distrito: 'Tierra Blanca' },
          { CantonId: cartagoCentral.CantonId, Distrito: 'Dulce Nombre' },
          { CantonId: cartagoCentral.CantonId, Distrito: 'Llano Grande' },
          { CantonId: cartagoCentral.CantonId, Distrito: 'Quebradilla' },
        ],
      })
    }

    const paraiso = await prisma.cantones.findFirst({ where: { Canton: 'Paraíso', ProvinciaId: cartagoId } })
    if (paraiso) {
      await prisma.distritos.createMany({
        data: [
          { CantonId: paraiso.CantonId, Distrito: 'Paraíso' },
          { CantonId: paraiso.CantonId, Distrito: 'Santiago' },
          { CantonId: paraiso.CantonId, Distrito: 'Orosi' },
          { CantonId: paraiso.CantonId, Distrito: 'Cachí' },
          { CantonId: paraiso.CantonId, Distrito: 'Llanos de Santa Lucía' },
        ],
      })
    }

    const laUnion = await prisma.cantones.findFirst({ where: { Canton: 'La Unión', ProvinciaId: cartagoId } })
    if (laUnion) {
      await prisma.distritos.createMany({
        data: [
          { CantonId: laUnion.CantonId, Distrito: 'Tres Ríos' },
          { CantonId: laUnion.CantonId, Distrito: 'San Diego' },
          { CantonId: laUnion.CantonId, Distrito: 'Río Azul' },
          { CantonId: laUnion.CantonId, Distrito: 'Concepción' },
          { CantonId: laUnion.CantonId, Distrito: 'Dulce Nombre' },
          { CantonId: laUnion.CantonId, Distrito: 'San Ramón' },
          { CantonId: laUnion.CantonId, Distrito: 'Río Torres' },
        ],
      })
    }

    const jimenez = await prisma.cantones.findFirst({ where: { Canton: 'Jiménez', ProvinciaId: cartagoId } })
    if (jimenez) {
      await prisma.distritos.createMany({
        data: [
          { CantonId: jimenez.CantonId, Distrito: 'Juan Viñas' },
          { CantonId: jimenez.CantonId, Distrito: 'Tucurrique' },
          { CantonId: jimenez.CantonId, Distrito: 'Pejibaye' },
        ],
      })
    }

    const turrialba = await prisma.cantones.findFirst({ where: { Canton: 'Turrialba', ProvinciaId: cartagoId } })
    if (turrialba) {
      await prisma.distritos.createMany({
        data: [
          { CantonId: turrialba.CantonId, Distrito: 'Turrialba' },
          { CantonId: turrialba.CantonId, Distrito: 'La Suiza' },
          { CantonId: turrialba.CantonId, Distrito: 'Peralta' },
          { CantonId: turrialba.CantonId, Distrito: 'Santa Cruz' },
          { CantonId: turrialba.CantonId, Distrito: 'Santa Teresita' },
          { CantonId: turrialba.CantonId, Distrito: 'Pavones' },
          { CantonId: turrialba.CantonId, Distrito: 'Tuis' },
          { CantonId: turrialba.CantonId, Distrito: 'Tayutic' },
          { CantonId: turrialba.CantonId, Distrito: 'Santa Rosa' },
          { CantonId: turrialba.CantonId, Distrito: 'Tres Equis' },
          { CantonId: turrialba.CantonId, Distrito: 'La Isabel' },
        ],
      })
    }

    const alvarado = await prisma.cantones.findFirst({ where: { Canton: 'Alvarado', ProvinciaId: cartagoId } })
    if (alvarado) {
      await prisma.distritos.createMany({
        data: [
          { CantonId: alvarado.CantonId, Distrito: 'Pacayas' },
          { CantonId: alvarado.CantonId, Distrito: 'Cervantes' },
          { CantonId: alvarado.CantonId, Distrito: 'Capellades' },
        ],
      })
    }

    const oreamuno = await prisma.cantones.findFirst({ where: { Canton: 'Oreamuno', ProvinciaId: cartagoId } })
    if (oreamuno) {
      await prisma.distritos.createMany({
        data: [
          { CantonId: oreamuno.CantonId, Distrito: 'San Rafael' },
          { CantonId: oreamuno.CantonId, Distrito: 'Cot' },
          { CantonId: oreamuno.CantonId, Distrito: 'Potrero Cerrado' },
          { CantonId: oreamuno.CantonId, Distrito: 'Cipreses' },
          { CantonId: oreamuno.CantonId, Distrito: 'Santa Rosa' },
        ],
      })
    }

    const elGuarco = await prisma.cantones.findFirst({ where: { Canton: 'El Guarco', ProvinciaId: cartagoId } })
    if (elGuarco) {
      await prisma.distritos.createMany({
        data: [
          { CantonId: elGuarco.CantonId, Distrito: 'El Tejar' },
          { CantonId: elGuarco.CantonId, Distrito: 'San Isidro' },
          { CantonId: elGuarco.CantonId, Distrito: 'Tobosi' },
          { CantonId: elGuarco.CantonId, Distrito: 'Patio de Agua' },
        ],
      })
    }
  }

  // HEREDIA
  const herediaId = (await prisma.provincias.findFirst({ where: { Provincia: 'Heredia' } }))?.ProvinciaId
  if (herediaId) {
    const herediaCentral = await prisma.cantones.findFirst({ where: { Canton: 'Cantón Central', ProvinciaId: herediaId } })
    if (herediaCentral) {
      await prisma.distritos.createMany({
        data: [
          { CantonId: herediaCentral.CantonId, Distrito: 'Heredia' },
          { CantonId: herediaCentral.CantonId, Distrito: 'Mercedes' },
          { CantonId: herediaCentral.CantonId, Distrito: 'San Francisco' },
          { CantonId: herediaCentral.CantonId, Distrito: 'Ulloa' },
          { CantonId: herediaCentral.CantonId, Distrito: 'Varablanca' },
        ],
      })
    }

    const barva = await prisma.cantones.findFirst({ where: { Canton: 'Barva', ProvinciaId: herediaId } })
    if (barva) {
      await prisma.distritos.createMany({
        data: [
          { CantonId: barva.CantonId, Distrito: 'Barva' },
          { CantonId: barva.CantonId, Distrito: 'San Pedro' },
          { CantonId: barva.CantonId, Distrito: 'San Pablo' },
          { CantonId: barva.CantonId, Distrito: 'San Roque' },
          { CantonId: barva.CantonId, Distrito: 'Santa Lucía' },
        ],
      })
    }

    const santoDomingo = await prisma.cantones.findFirst({ where: { Canton: 'Santo Domingo', ProvinciaId: herediaId } })
    if (santoDomingo) {
      await prisma.distritos.createMany({
        data: [
          { CantonId: santoDomingo.CantonId, Distrito: 'Santo Domingo' },
          { CantonId: santoDomingo.CantonId, Distrito: 'San Vicente' },
          { CantonId: santoDomingo.CantonId, Distrito: 'San Miguel' },
          { CantonId: santoDomingo.CantonId, Distrito: 'Paracito' },
          { CantonId: santoDomingo.CantonId, Distrito: 'Santo Tomás' },
          { CantonId: santoDomingo.CantonId, Distrito: 'Santa Rosa' },
          { CantonId: santoDomingo.CantonId, Distrito: 'Tures' },
          { CantonId: santoDomingo.CantonId, Distrito: 'Pará' },
        ],
      })
    }

    const santaBarbara = await prisma.cantones.findFirst({ where: { Canton: 'Santa Bárbara', ProvinciaId: herediaId } })
    if (santaBarbara) {
      await prisma.distritos.createMany({
        data: [
          { CantonId: santaBarbara.CantonId, Distrito: 'Santa Bárbara' },
          { CantonId: santaBarbara.CantonId, Distrito: 'San Pedro' },
          { CantonId: santaBarbara.CantonId, Distrito: 'San Juan' },
          { CantonId: santaBarbara.CantonId, Distrito: 'Jesús' },
          { CantonId: santaBarbara.CantonId, Distrito: 'Santo Domingo' },
        ],
      })
    }

    const sanRafael = await prisma.cantones.findFirst({ where: { Canton: 'San Rafael', ProvinciaId: herediaId } })
    if (sanRafael) {
      await prisma.distritos.createMany({
        data: [
          { CantonId: sanRafael.CantonId, Distrito: 'San Rafael' },
          { CantonId: sanRafael.CantonId, Distrito: 'San Josecito' },
          { CantonId: sanRafael.CantonId, Distrito: 'Santiago' },
          { CantonId: sanRafael.CantonId, Distrito: 'Ángeles' },
          { CantonId: sanRafael.CantonId, Distrito: 'Concepción' },
        ],
      })
    }

    const sanIsidro = await prisma.cantones.findFirst({ where: { Canton: 'San Isidro', ProvinciaId: herediaId } })
    if (sanIsidro) {
      await prisma.distritos.createMany({
        data: [
          { CantonId: sanIsidro.CantonId, Distrito: 'San Isidro' },
          { CantonId: sanIsidro.CantonId, Distrito: 'San José' },
        ],
      })
    }

    const belen = await prisma.cantones.findFirst({ where: { Canton: 'Belén', ProvinciaId: herediaId } })
    if (belen) {
      await prisma.distritos.createMany({
        data: [
          { CantonId: belen.CantonId, Distrito: 'San Antonio' },
          { CantonId: belen.CantonId, Distrito: 'La Ribera' },
          { CantonId: belen.CantonId, Distrito: 'La Asunción' },
        ],
      })
    }

    const flores = await prisma.cantones.findFirst({ where: { Canton: 'Flores', ProvinciaId: herediaId } })
    if (flores) {
      await prisma.distritos.createMany({
        data: [
          { CantonId: flores.CantonId, Distrito: 'San Joaquín' },
          { CantonId: flores.CantonId, Distrito: 'Barrantes' },
          { CantonId: flores.CantonId, Distrito: 'Llorente' },
        ],
      })
    }

    const sanPablo = await prisma.cantones.findFirst({ where: { Canton: 'San Pablo', ProvinciaId: herediaId } })
    if (sanPablo) {
      await prisma.distritos.createMany({
        data: [
          { CantonId: sanPablo.CantonId, Distrito: 'San Pablo' },
          { CantonId: sanPablo.CantonId, Distrito: 'Rincón de Sabanilla' },
        ],
      })
    }

    const sarapiqui = await prisma.cantones.findFirst({ where: { Canton: 'Sarapiquí', ProvinciaId: herediaId } })
    if (sarapiqui) {
      await prisma.distritos.createMany({
        data: [
          { CantonId: sarapiqui.CantonId, Distrito: 'Puerto Viejo' },
          { CantonId: sarapiqui.CantonId, Distrito: 'La Virgen' },
          { CantonId: sarapiqui.CantonId, Distrito: 'Las Horquetas' },
          { CantonId: sarapiqui.CantonId, Distrito: 'Llanuras del Gaspar' },
          { CantonId: sarapiqui.CantonId, Distrito: 'Cureña' },
        ],
      })
    }
  }

  // GUANACASTE
  const guanacasteId = (await prisma.provincias.findFirst({ where: { Provincia: 'Guanacaste' } }))?.ProvinciaId
  if (guanacasteId) {
    const liberia = await prisma.cantones.findFirst({ where: { Canton: 'Liberia', ProvinciaId: guanacasteId } })
    if (liberia) {
      await prisma.distritos.createMany({
        data: [
          { CantonId: liberia.CantonId, Distrito: 'Liberia' },
          { CantonId: liberia.CantonId, Distrito: 'Cañas Dulces' },
          { CantonId: liberia.CantonId, Distrito: 'Mayorga' },
          { CantonId: liberia.CantonId, Distrito: 'Nacascolo' },
          { CantonId: liberia.CantonId, Distrito: 'Curubandé' },
        ],
      })
    }

    const nicoya = await prisma.cantones.findFirst({ where: { Canton: 'Nicoya', ProvinciaId: guanacasteId } })
    if (nicoya) {
      await prisma.distritos.createMany({
        data: [
          { CantonId: nicoya.CantonId, Distrito: 'Nicoya' },
          { CantonId: nicoya.CantonId, Distrito: 'Mansión' },
          { CantonId: nicoya.CantonId, Distrito: 'San Antonio' },
          { CantonId: nicoya.CantonId, Distrito: 'Quebrada Honda' },
          { CantonId: nicoya.CantonId, Distrito: 'Sámara' },
          { CantonId: nicoya.CantonId, Distrito: 'Nosara' },
          { CantonId: nicoya.CantonId, Distrito: 'Belén' },
        ],
      })
    }

    const santaCruz = await prisma.cantones.findFirst({ where: { Canton: 'Santa Cruz', ProvinciaId: guanacasteId } })
    if (santaCruz) {
      await prisma.distritos.createMany({
        data: [
          { CantonId: santaCruz.CantonId, Distrito: 'Santa Cruz' },
          { CantonId: santaCruz.CantonId, Distrito: 'Bolsón' },
          { CantonId: santaCruz.CantonId, Distrito: 'Veintisiete de Abril' },
          { CantonId: santaCruz.CantonId, Distrito: 'Tempate' },
          { CantonId: santaCruz.CantonId, Distrito: 'Cartagena' },
          { CantonId: santaCruz.CantonId, Distrito: 'Cuajiniquil' },
          { CantonId: santaCruz.CantonId, Distrito: 'Diriá' },
          { CantonId: santaCruz.CantonId, Distrito: 'Cabo Velas' },
          { CantonId: santaCruz.CantonId, Distrito: 'Tamarindo' },
        ],
      })
    }

    const bagaces = await prisma.cantones.findFirst({ where: { Canton: 'Bagaces', ProvinciaId: guanacasteId } })
    if (bagaces) {
      await prisma.distritos.createMany({
        data: [
          { CantonId: bagaces.CantonId, Distrito: 'Bagaces' },
          { CantonId: bagaces.CantonId, Distrito: 'Fortuna' },
          { CantonId: bagaces.CantonId, Distrito: 'Mogote' },
          { CantonId: bagaces.CantonId, Distrito: 'Río Naranjo' },
        ],
      })
    }

    const carrillo = await prisma.cantones.findFirst({ where: { Canton: 'Carrillo', ProvinciaId: guanacasteId } })
    if (carrillo) {
      await prisma.distritos.createMany({
        data: [
          { CantonId: carrillo.CantonId, Distrito: 'Filadelfia' },
          { CantonId: carrillo.CantonId, Distrito: 'Palmira' },
          { CantonId: carrillo.CantonId, Distrito: 'Sardinal' },
          { CantonId: carrillo.CantonId, Distrito: 'Belén' },
        ],
      })
    }

    const canas = await prisma.cantones.findFirst({ where: { Canton: 'Cañas', ProvinciaId: guanacasteId } })
    if (canas) {
      await prisma.distritos.createMany({
        data: [
          { CantonId: canas.CantonId, Distrito: 'Cañas' },
          { CantonId: canas.CantonId, Distrito: 'Palmira' },
          { CantonId: canas.CantonId, Distrito: 'San Miguel' },
          { CantonId: canas.CantonId, Distrito: 'Bebedero' },
          { CantonId: canas.CantonId, Distrito: 'Porozal' },
        ],
      })
    }

    const abangares = await prisma.cantones.findFirst({ where: { Canton: 'Abangares', ProvinciaId: guanacasteId } })
    if (abangares) {
      await prisma.distritos.createMany({
        data: [
          { CantonId: abangares.CantonId, Distrito: 'Las Juntas' },
          { CantonId: abangares.CantonId, Distrito: 'Sierra' },
          { CantonId: abangares.CantonId, Distrito: 'San Juan' },
          { CantonId: abangares.CantonId, Distrito: 'Colorado' },
        ],
      })
    }

    const tilaran = await prisma.cantones.findFirst({ where: { Canton: 'Tilarán', ProvinciaId: guanacasteId } })
    if (tilaran) {
      await prisma.distritos.createMany({
        data: [
          { CantonId: tilaran.CantonId, Distrito: 'Tilarán' },
          { CantonId: tilaran.CantonId, Distrito: 'Quebrada Grande' },
          { CantonId: tilaran.CantonId, Distrito: 'Tronadora' },
          { CantonId: tilaran.CantonId, Distrito: 'Santa Rosa' },
          { CantonId: tilaran.CantonId, Distrito: 'Líbano' },
          { CantonId: tilaran.CantonId, Distrito: 'Tierras Morenas' },
          { CantonId: tilaran.CantonId, Distrito: 'Arenal' },
        ],
      })
    }

    const nandayure = await prisma.cantones.findFirst({ where: { Canton: 'Nandayure', ProvinciaId: guanacasteId } })
    if (nandayure) {
      await prisma.distritos.createMany({
        data: [
          { CantonId: nandayure.CantonId, Distrito: 'Carmona' },
          { CantonId: nandayure.CantonId, Distrito: 'Santa Rita' },
          { CantonId: nandayure.CantonId, Distrito: 'Zapotal' },
          { CantonId: nandayure.CantonId, Distrito: 'San Pablo' },
          { CantonId: nandayure.CantonId, Distrito: 'Porvenir' },
          { CantonId: nandayure.CantonId, Distrito: 'Bejuco' },
        ],
      })
    }

    const laCruz = await prisma.cantones.findFirst({ where: { Canton: 'La Cruz', ProvinciaId: guanacasteId } })
    if (laCruz) {
      await prisma.distritos.createMany({
        data: [
          { CantonId: laCruz.CantonId, Distrito: 'La Cruz' },
          { CantonId: laCruz.CantonId, Distrito: 'Santa Cecilia' },
          { CantonId: laCruz.CantonId, Distrito: 'Garita' },
          { CantonId: laCruz.CantonId, Distrito: 'Santa Elena' },
        ],
      })
    }

    const hojancha = await prisma.cantones.findFirst({ where: { Canton: 'Hojancha', ProvinciaId: guanacasteId } })
    if (hojancha) {
      await prisma.distritos.createMany({
        data: [
          { CantonId: hojancha.CantonId, Distrito: 'Hojancha' },
          { CantonId: hojancha.CantonId, Distrito: 'Monte Romo' },
          { CantonId: hojancha.CantonId, Distrito: 'Puerto Carrillo' },
          { CantonId: hojancha.CantonId, Distrito: 'Huacas' },
        ],
      })
    }
  }

  // PUNTARENAS
  const puntarenasId = (await prisma.provincias.findFirst({ where: { Provincia: 'Puntarenas' } }))?.ProvinciaId
  if (puntarenasId) {
    const puntarenasCentral = await prisma.cantones.findFirst({ where: { Canton: 'Cantón Central', ProvinciaId: puntarenasId } })
    if (puntarenasCentral) {
      await prisma.distritos.createMany({
        data: [
          { CantonId: puntarenasCentral.CantonId, Distrito: 'Puntarenas' },
          { CantonId: puntarenasCentral.CantonId, Distrito: 'Pitahaya' },
          { CantonId: puntarenasCentral.CantonId, Distrito: 'Chomes' },
          { CantonId: puntarenasCentral.CantonId, Distrito: 'Lepanto' },
          { CantonId: puntarenasCentral.CantonId, Distrito: 'Paquera' },
          { CantonId: puntarenasCentral.CantonId, Distrito: 'Manzanillo' },
          { CantonId: puntarenasCentral.CantonId, Distrito: 'Guacimal' },
          { CantonId: puntarenasCentral.CantonId, Distrito: 'Barranca' },
          { CantonId: puntarenasCentral.CantonId, Distrito: 'Monte Verde' },
          { CantonId: puntarenasCentral.CantonId, Distrito: 'Isla del Coco' },
          { CantonId: puntarenasCentral.CantonId, Distrito: 'Cóbano' },
          { CantonId: puntarenasCentral.CantonId, Distrito: 'Chacarita' },
          { CantonId: puntarenasCentral.CantonId, Distrito: 'Chira' },
          { CantonId: puntarenasCentral.CantonId, Distrito: 'Acapulco' },
          { CantonId: puntarenasCentral.CantonId, Distrito: 'El Roble' },
          { CantonId: puntarenasCentral.CantonId, Distrito: 'Arancibia' },
        ],
      })
    }

    const esparza = await prisma.cantones.findFirst({ where: { Canton: 'Esparza', ProvinciaId: puntarenasId } })
    if (esparza) {
      await prisma.distritos.createMany({
        data: [
          { CantonId: esparza.CantonId, Distrito: 'Espíritu Santo' },
          { CantonId: esparza.CantonId, Distrito: 'San Juan Grande' },
          { CantonId: esparza.CantonId, Distrito: 'Macacona' },
          { CantonId: esparza.CantonId, Distrito: 'San Rafael' },
          { CantonId: esparza.CantonId, Distrito: 'San Jerónimo' },
        ],
      })
    }

    const buenosAires = await prisma.cantones.findFirst({ where: { Canton: 'Buenos Aires', ProvinciaId: puntarenasId } })
    if (buenosAires) {
      await prisma.distritos.createMany({
        data: [
          { CantonId: buenosAires.CantonId, Distrito: 'Buenos Aires' },
          { CantonId: buenosAires.CantonId, Distrito: 'Volcán' },
          { CantonId: buenosAires.CantonId, Distrito: 'Potrero Grande' },
          { CantonId: buenosAires.CantonId, Distrito: 'Boruca' },
          { CantonId: buenosAires.CantonId, Distrito: 'Pilas' },
          { CantonId: buenosAires.CantonId, Distrito: 'Colinas' },
          { CantonId: buenosAires.CantonId, Distrito: 'Chánguena' },
          { CantonId: buenosAires.CantonId, Distrito: 'Biolley' },
          { CantonId: buenosAires.CantonId, Distrito: 'Brunka' },
        ],
      })
    }

    const montesDeOro = await prisma.cantones.findFirst({ where: { Canton: 'Montes de Oro', ProvinciaId: puntarenasId } })
    if (montesDeOro) {
      await prisma.distritos.createMany({
        data: [
          { CantonId: montesDeOro.CantonId, Distrito: 'Miramar' },
          { CantonId: montesDeOro.CantonId, Distrito: 'La Unión' },
          { CantonId: montesDeOro.CantonId, Distrito: 'San Isidro' },
        ],
      })
    }

    const osa = await prisma.cantones.findFirst({ where: { Canton: 'Osa', ProvinciaId: puntarenasId } })
    if (osa) {
      await prisma.distritos.createMany({
        data: [
          { CantonId: osa.CantonId, Distrito: 'Ciudad Cortés' },
          { CantonId: osa.CantonId, Distrito: 'Palmar' },
          { CantonId: osa.CantonId, Distrito: 'Bahía Ballena' },
          { CantonId: osa.CantonId, Distrito: 'Piedras Blancas' },
          { CantonId: osa.CantonId, Distrito: 'Sierpe' },
          { CantonId: osa.CantonId, Distrito: 'Bahía Drake' },
        ],
      })
    }

    const quepos = await prisma.cantones.findFirst({ where: { Canton: 'Quepos', ProvinciaId: puntarenasId } })
    if (quepos) {
      await prisma.distritos.createMany({
        data: [
          { CantonId: quepos.CantonId, Distrito: 'Quepos' },
          { CantonId: quepos.CantonId, Distrito: 'Savegre' },
          { CantonId: quepos.CantonId, Distrito: 'Naranjito' },
        ],
      })
    }

    const golfito = await prisma.cantones.findFirst({ where: { Canton: 'Golfito', ProvinciaId: puntarenasId } })
    if (golfito) {
      await prisma.distritos.createMany({
        data: [
          { CantonId: golfito.CantonId, Distrito: 'Golfito' },
          { CantonId: golfito.CantonId, Distrito: 'Puerto Jiménez' },
          { CantonId: golfito.CantonId, Distrito: 'Guaycará' },
          { CantonId: golfito.CantonId, Distrito: 'Pavón' },
        ],
      })
    }

    const cotoBrus = await prisma.cantones.findFirst({ where: { Canton: 'Coto Brus', ProvinciaId: puntarenasId } })
    if (cotoBrus) {
      await prisma.distritos.createMany({
        data: [
          { CantonId: cotoBrus.CantonId, Distrito: 'San Vito' },
          { CantonId: cotoBrus.CantonId, Distrito: 'Sabalito' },
          { CantonId: cotoBrus.CantonId, Distrito: 'Agua Buena' },
          { CantonId: cotoBrus.CantonId, Distrito: 'Limoncito' },
          { CantonId: cotoBrus.CantonId, Distrito: 'Pittier' },
        ],
      })
    }

    const parrita = await prisma.cantones.findFirst({ where: { Canton: 'Parrita', ProvinciaId: puntarenasId } })
    if (parrita) {
      await prisma.distritos.create({ data: { CantonId: parrita.CantonId, Distrito: 'Parrita' } })
    }

    const corredores = await prisma.cantones.findFirst({ where: { Canton: 'Corredores', ProvinciaId: puntarenasId } })
    if (corredores) {
      await prisma.distritos.createMany({
        data: [
          { CantonId: corredores.CantonId, Distrito: 'Ciudad Neily' },
          { CantonId: corredores.CantonId, Distrito: 'Corredor' },
          { CantonId: corredores.CantonId, Distrito: 'La Cuesta' },
          { CantonId: corredores.CantonId, Distrito: 'Paso Canoas' },
          { CantonId: corredores.CantonId, Distrito: 'Laurel' },
        ],
      })
    }

    const garabito = await prisma.cantones.findFirst({ where: { Canton: 'Garabito', ProvinciaId: puntarenasId } })
    if (garabito) {
      await prisma.distritos.createMany({
        data: [
          { CantonId: garabito.CantonId, Distrito: 'Jacó' },
          { CantonId: garabito.CantonId, Distrito: 'Tárcoles' },
        ],
      })
    }

    const monteverde = await prisma.cantones.findFirst({ where: { Canton: 'Monteverde', ProvinciaId: puntarenasId } })
    if (monteverde) {
      await prisma.distritos.create({ data: { CantonId: monteverde.CantonId, Distrito: 'Monteverde' } })
    }

    const puertoJimenez = await prisma.cantones.findFirst({ where: { Canton: 'Puerto Jiménez', ProvinciaId: puntarenasId } })
    if (puertoJimenez) {
      await prisma.distritos.createMany({
        data: [
          { CantonId: puertoJimenez.CantonId, Distrito: 'Puerto Jiménez' },
          { CantonId: puertoJimenez.CantonId, Distrito: 'La Palma' },
          { CantonId: puertoJimenez.CantonId, Distrito: 'Río Claro' },
        ],
      })
    }
  }

  // LIMÓN
  const limonId = (await prisma.provincias.findFirst({ where: { Provincia: 'Limón' } }))?.ProvinciaId
  if (limonId) {
    const limonCentral = await prisma.cantones.findFirst({ where: { Canton: 'Cantón Central', ProvinciaId: limonId } })
    if (limonCentral) {
      await prisma.distritos.createMany({
        data: [
          { CantonId: limonCentral.CantonId, Distrito: 'Limón' },
          { CantonId: limonCentral.CantonId, Distrito: 'Valle La Estrella' },
          { CantonId: limonCentral.CantonId, Distrito: 'Río Blanco' },
          { CantonId: limonCentral.CantonId, Distrito: 'Matama' },
        ],
      })
    }

    const pococi = await prisma.cantones.findFirst({ where: { Canton: 'Pococí', ProvinciaId: limonId } })
    if (pococi) {
      await prisma.distritos.createMany({
        data: [
          { CantonId: pococi.CantonId, Distrito: 'Guápiles' },
          { CantonId: pococi.CantonId, Distrito: 'Jiménez' },
          { CantonId: pococi.CantonId, Distrito: 'Rita' },
          { CantonId: pococi.CantonId, Distrito: 'Roxana' },
          { CantonId: pococi.CantonId, Distrito: 'Cariari' },
          { CantonId: pococi.CantonId, Distrito: 'Colorado' },
          { CantonId: pococi.CantonId, Distrito: 'La Colonia' },
        ],
      })
    }

    const siquirres = await prisma.cantones.findFirst({ where: { Canton: 'Siquirres', ProvinciaId: limonId } })
    if (siquirres) {
      await prisma.distritos.createMany({
        data: [
          { CantonId: siquirres.CantonId, Distrito: 'Siquirres' },
          { CantonId: siquirres.CantonId, Distrito: 'Pacuarito' },
          { CantonId: siquirres.CantonId, Distrito: 'Florida' },
          { CantonId: siquirres.CantonId, Distrito: 'Germania' },
          { CantonId: siquirres.CantonId, Distrito: 'Cairo' },
          { CantonId: siquirres.CantonId, Distrito: 'Alegría' },
        ],
      })
    }

    const talamanca = await prisma.cantones.findFirst({ where: { Canton: 'Talamanca', ProvinciaId: limonId } })
    if (talamanca) {
      await prisma.distritos.createMany({
        data: [
          { CantonId: talamanca.CantonId, Distrito: 'Bratsi' },
          { CantonId: talamanca.CantonId, Distrito: 'Sixaola' },
          { CantonId: talamanca.CantonId, Distrito: 'Cahuita' },
          { CantonId: talamanca.CantonId, Distrito: 'Telire' },
        ],
      })
    }

    const matina = await prisma.cantones.findFirst({ where: { Canton: 'Matina', ProvinciaId: limonId } })
    if (matina) {
      await prisma.distritos.createMany({
        data: [
          { CantonId: matina.CantonId, Distrito: 'Matina' },
          { CantonId: matina.CantonId, Distrito: 'Batán' },
          { CantonId: matina.CantonId, Distrito: 'Carrandi' },
        ],
      })
    }

    const guacimo = await prisma.cantones.findFirst({ where: { Canton: 'Guácimo', ProvinciaId: limonId } })
    if (guacimo) {
      await prisma.distritos.createMany({
        data: [
          { CantonId: guacimo.CantonId, Distrito: 'Guácimo' },
          { CantonId: guacimo.CantonId, Distrito: 'Mercedes' },
          { CantonId: guacimo.CantonId, Distrito: 'Pocora' },
          { CantonId: guacimo.CantonId, Distrito: 'Río Jiménez' },
          { CantonId: guacimo.CantonId, Distrito: 'Duacarí' },
        ],
      })
    }
  }
}



const docentesData = [
  { cedula: '6234567892', nombre: 'Carlos', apellido1: 'González', apellido2: 'Mendoza', direccion: 'Avenida Central, San José', fecha_nacimiento: new Date('1985-05-20'), telefono: '88887777', correo: 'carlos.gonzalez@email.com', provinciaId: 1 },
  { cedula: '5987654323', nombre: 'Ana', apellido1: 'Rodríguez', apellido2: 'Morales', direccion: 'Calle 15, Alajuela', fecha_nacimiento: new Date('1990-07-14'), telefono: '77778888', correo: 'ana.rodriguez@email.com', provinciaId: 2 },
  { cedula: '4876543214', nombre: 'José', apellido1: 'Martínez', apellido2: 'Fernández', direccion: 'Barrio El Carmen, Cartago', fecha_nacimiento: new Date('1982-11-22'), telefono: '66667777', correo: 'jose.martinez@email.com', provinciaId: 3 },
  { cedula: '3112233445', nombre: 'Luis', apellido1: 'Pérez', apellido2: 'Torres', direccion: 'Calle 7, Heredia', fecha_nacimiento: new Date('1995-03-05'), telefono: '55556666', correo: 'luis.perez@email.com', provinciaId: 4 },
  { cedula: '2233445566', nombre: 'Sofía', apellido1: 'Gómez', apellido2: 'Vargas', direccion: 'Avenida Central, Guanacaste', fecha_nacimiento: new Date('1987-09-30'), telefono: '44445555', correo: 'sofia.gomez@email.com', provinciaId: 5 },
  { cedula: '1344556677', nombre: 'Roberto', apellido1: 'López', apellido2: 'Jiménez', direccion: 'Barrio El Roble, Puntarenas', fecha_nacimiento: new Date('1992-01-15'), telefono: '33334444', correo: 'roberto.lopez@email.com', provinciaId: 6 },
  { cedula: '8455667788', nombre: 'Patricia', apellido1: 'Sánchez', apellido2: 'Ramírez', direccion: 'Calle 8, San José', fecha_nacimiento: new Date('1983-12-10'), telefono: '22223333', correo: 'patricia.sanchez@email.com', provinciaId: 1 },
  { cedula: '9566778899', nombre: 'Pedro', apellido1: 'Hernández', apellido2: 'Loaiza', direccion: 'Avenida 10, Alajuela', fecha_nacimiento: new Date('1988-06-18'), telefono: '11112222', correo: 'pedro.hernandez@email.com', provinciaId: 2 },
  { cedula: '4677889910', nombre: 'María', apellido1: 'Martínez', apellido2: 'Sánchez', direccion: 'Avenida 6, Cartago', fecha_nacimiento: new Date('1991-02-25'), telefono: '00001111', correo: 'maria.martinez@email.com', provinciaId: 3 },
  { cedula: '3788990011', nombre: 'David', apellido1: 'Castro', apellido2: 'Rodríguez', direccion: 'Calle 11, Heredia', fecha_nacimiento: new Date('1986-10-14'), telefono: '99990000', correo: 'david.castro@email.com', provinciaId: 4 },
  { cedula: '2899001122', nombre: 'Luisa', apellido1: 'Vázquez', apellido2: 'González', direccion: 'Calle 12, Guanacaste', fecha_nacimiento: new Date('1980-07-30'), telefono: '88887777', correo: 'luisa.vazquez@email.com', provinciaId: 5 },
  { cedula: '1900112233', nombre: 'Julio', apellido1: 'Pérez', apellido2: 'Chaves', direccion: 'Barrio San Francisco, Puntarenas', fecha_nacimiento: new Date('1994-05-10'), telefono: '77776666', correo: 'julio.perez@email.com', provinciaId: 6 },
  { cedula: '2001122334', nombre: 'Isabel', apellido1: 'Rojas', apellido2: 'Torres', direccion: 'Calle 20, San José', fecha_nacimiento: new Date('1989-08-25'), telefono: '66667777', correo: 'isabel.rojas@email.com', provinciaId: 1 },
  { cedula: '9122334455', nombre: 'Antonio', apellido1: 'Salazar', apellido2: 'Jiménez', direccion: 'Calle 17, Alajuela', fecha_nacimiento: new Date('1984-02-02'), telefono: '55558888', correo: 'antonio.salazar@email.com', provinciaId: 2 },
  { cedula: '7233445566', nombre: 'Eva', apellido1: 'Cabrera', apellido2: 'López', direccion: 'Calle 9, Cartago', fecha_nacimiento: new Date('1990-09-12'), telefono: '44449999', correo: 'eva.cabrera@email.com', provinciaId: 3 },
  { cedula: '6344556677', nombre: 'Jorge', apellido1: 'Hernández', apellido2: 'Vargas', direccion: 'Barrio Las Acacias, Heredia', fecha_nacimiento: new Date('1987-11-05'), telefono: '33334444', correo: 'jorge.hernandez@email.com', provinciaId: 4 },
  { cedula: '5455667788', nombre: 'Mariana', apellido1: 'Jiménez', apellido2: 'Alvarado', direccion: 'Calle 3, Guanacaste', fecha_nacimiento: new Date('1981-04-19'), telefono: '22223333', correo: 'mariana.jimenez@email.com', provinciaId: 5 },
  { cedula: '9566778893', nombre: 'Luis', apellido1: 'Ramos', apellido2: 'González', direccion: 'Calle 14, Puntarenas', fecha_nacimiento: new Date('1992-12-30'), telefono: '11112222', correo: 'luis.ramos@email.com', provinciaId: 6 },
  { cedula: '4677889909', nombre: 'Gabriela', apellido1: 'Serrano', apellido2: 'Pérez', direccion: 'Barrio Los Laureles, San José', fecha_nacimiento: new Date('1989-01-17'), telefono: '00001111', correo: 'gabriela.serrano@email.com', provinciaId: 1 },
  { cedula: '3788990012', nombre: 'Fernando', apellido1: 'Suárez', apellido2: 'López', direccion: 'Calle 21, Alajuela', fecha_nacimiento: new Date('1993-04-25'), telefono: '22223333', correo: 'fernando.suarez@email.com', provinciaId: 2 },
  { cedula: '2899001124', nombre: 'Carolina', apellido1: 'Núñez', apellido2: 'González', direccion: 'Barrio Santa Fe, Cartago', fecha_nacimiento: new Date('1986-07-07'), telefono: '33334444', correo: 'carolina.nunez@email.com', provinciaId: 3 },
  { cedula: '1900112234', nombre: 'Luis', apellido1: 'Flores', apellido2: 'Salazar', direccion: 'Calle 2, Heredia', fecha_nacimiento: new Date('1991-09-11'), telefono: '44445555', correo: 'luis.flores@email.com', provinciaId: 4 },
  { cedula: '9001122334', nombre: 'Paola', apellido1: 'Rivas', apellido2: 'Rodríguez', direccion: 'Calle 13, Guanacaste', fecha_nacimiento: new Date('1983-12-18'), telefono: '55556666', correo: 'paola.rivas@email.com', provinciaId: 5 },
  { cedula: '2122334455', nombre: 'Ricardo', apellido1: 'Martínez', apellido2: 'Serrano', direccion: 'Barrio El Jazmín, Puntarenas', fecha_nacimiento: new Date('1995-02-16'), telefono: '66667777', correo: 'ricardo.martinez@email.com', provinciaId: 6 },
  { cedula: '7233445567', nombre: 'Laura', apellido1: 'García', apellido2: 'Lozano', direccion: 'Avenida Central, San José', fecha_nacimiento: new Date('1982-08-09'), telefono: '77778888', correo: 'laura.garcia@email.com', provinciaId: 1 },
  { cedula: '6344556678', nombre: 'Cristian', apellido1: 'Vargas', apellido2: 'Zúñiga', direccion: 'Calle 5, Alajuela', fecha_nacimiento: new Date('1994-11-01'), telefono: '88889999', correo: 'cristian.vargas@email.com', provinciaId: 2 },
  { cedula: '5455667789', nombre: 'Beatriz', apellido1: 'Mendoza', apellido2: 'Morales', direccion: 'Calle 18, Cartago', fecha_nacimiento: new Date('1988-03-19'), telefono: '99990000', correo: 'beatriz.mendoza@email.com', provinciaId: 3 },
  { cedula: '9566772899', nombre: 'Andrés', apellido1: 'Jiménez', apellido2: 'Herrera', direccion: 'Avenida 4, Heredia', fecha_nacimiento: new Date('1980-01-09'), telefono: '55557777', correo: 'andres.jimenez@email.com', provinciaId: 4 },
  { cedula: '4673889910', nombre: 'José', apellido1: 'Álvarez', apellido2: 'Morales', direccion: 'Calle 11, Guanacaste', fecha_nacimiento: new Date('1992-06-21'), telefono: '44443333', correo: 'jose.alvarez@email.com', provinciaId: 5 },
  { cedula: '3788990013', nombre: 'Marcos', apellido1: 'Salazar', apellido2: 'Vega', direccion: 'Calle 22, Puntarenas', fecha_nacimiento: new Date('1983-12-11'), telefono: '33332222', correo: 'marcos.salazar@email.com', provinciaId: 6 },
  { cedula: '2899001125', nombre: 'Mónica', apellido1: 'López', apellido2: 'Chávez', direccion: 'Calle 7, San José', fecha_nacimiento: new Date('1989-05-18'), telefono: '22221111', correo: 'monica.lopez@email.com', provinciaId: 1 },
  { cedula: '1900112235', nombre: 'Héctor', apellido1: 'Méndez', apellido2: 'Pérez', direccion: 'Calle 8, Alajuela', fecha_nacimiento: new Date('1990-10-14'), telefono: '11110000', correo: 'hector.mendez@email.com', provinciaId: 2 },
  { cedula: '2001122335', nombre: 'Esteban', apellido1: 'Díaz', apellido2: 'Mora', direccion: 'Barrio San Vicente, Cartago', fecha_nacimiento: new Date('1982-08-04'), telefono: '99997777', correo: 'esteban.diaz@email.com', provinciaId: 3 },
  { cedula: '9122334456', nombre: 'Fernanda', apellido1: 'Ruiz', apellido2: 'Ramírez', direccion: 'Avenida 5, Heredia', fecha_nacimiento: new Date('1987-11-25'), telefono: '88889999', correo: 'fernanda.ruiz@email.com', provinciaId: 4 },
  { cedula: '7233445568', nombre: 'Guillermo', apellido1: 'Torres', apellido2: 'Zamora', direccion: 'Calle 14, Guanacaste', fecha_nacimiento: new Date('1994-03-16'), telefono: '77778888', correo: 'guillermo.torres@email.com', provinciaId: 5 },
  { cedula: '6344556679', nombre: 'Gloria', apellido1: 'Navarro', apellido2: 'Martínez', direccion: 'Calle 17, Puntarenas', fecha_nacimiento: new Date('1980-06-15'), telefono: '66667777', correo: 'gloria.navarro@email.com', provinciaId: 6 },
  { cedula: '5455667790', nombre: 'Diego', apellido1: 'Campos', apellido2: 'Soto', direccion: 'Avenida 2, San José', fecha_nacimiento: new Date('1984-04-12'), telefono: '55554444', correo: 'diego.campos@email.com', provinciaId: 1 },
  { cedula: '9566778399', nombre: 'Daniela', apellido1: 'Rojas', apellido2: 'Fuentes', direccion: 'Calle 19, Alajuela', fecha_nacimiento: new Date('1993-02-28'), telefono: '44443333', correo: 'daniela.rojas@email.com', provinciaId: 2 },
  { cedula: '4677189910', nombre: 'Sebastián', apellido1: 'Villalobos', apellido2: 'Gutiérrez', direccion: 'Barrio La Florida, Cartago', fecha_nacimiento: new Date('1981-09-03'), telefono: '33332222', correo: 'sebastian.villalobos@email.com', provinciaId: 3 },
  { cedula: '3788990014', nombre: 'Valeria', apellido1: 'Solís', apellido2: 'Hernández', direccion: 'Calle 10, Heredia', fecha_nacimiento: new Date('1989-07-22'), telefono: '22221111', correo: 'valeria.solis@email.com', provinciaId: 4 },
  { cedula: '2899001126', nombre: 'Manuel', apellido1: 'Arce', apellido2: 'Castillo', direccion: 'Avenida 8, Guanacaste', fecha_nacimiento: new Date('1996-11-15'), telefono: '11110000', correo: 'manuel.arce@email.com', provinciaId: 5 },
  { cedula: '1900112236', nombre: 'Lucía', apellido1: 'Espinoza', apellido2: 'Morales', direccion: 'Calle 16, Puntarenas', fecha_nacimiento: new Date('1985-03-10'), telefono: '99998888', correo: 'lucia.espinoza@email.com', provinciaId: 6 },
  { cedula: '9001122335', nombre: 'Mateo', apellido1: 'León', apellido2: 'Vargas', direccion: 'Barrio El Carmen, San José', fecha_nacimiento: new Date('1991-05-25'), telefono: '88887777', correo: 'mateo.leon@email.com', provinciaId: 1 },
  { cedula: '9122334457', nombre: 'Camila', apellido1: 'Barrantes', apellido2: 'Gómez', direccion: 'Calle 23, Alajuela', fecha_nacimiento: new Date('1983-12-18'), telefono: '77776666', correo: 'camila.barrantes@email.com', provinciaId: 2 },
  { cedula: '7233445569', nombre: 'Emilio', apellido1: 'Alfaro', apellido2: 'López', direccion: 'Barrio San Juan, Cartago', fecha_nacimiento: new Date('1988-08-05'), telefono: '66665555', correo: 'emilio.alfaro@email.com', provinciaId: 3 },
  { cedula: '6344556680', nombre: 'Renata', apellido1: 'Quesada', apellido2: 'Jiménez', direccion: 'Calle 4, Heredia', fecha_nacimiento: new Date('1992-06-14'), telefono: '55554444', correo: 'renata.quesada@email.com', provinciaId: 4 },
  { cedula: '5455667791', nombre: 'Adrián', apellido1: 'Vega', apellido2: 'Rodríguez', direccion: 'Avenida 12, Guanacaste', fecha_nacimiento: new Date('1980-01-09'), telefono: '44443333', correo: 'adrian.vega@email.com', provinciaId: 5 },
  { cedula: '9566778400', nombre: 'Valentina', apellido1: 'Chacón', apellido2: 'Sánchez', direccion: 'Calle 24, Puntarenas', fecha_nacimiento: new Date('1987-04-22'), telefono: '33332222', correo: 'valentina.chacon@email.com', provinciaId: 6 },
  { cedula: '4677289911', nombre: 'Felipe', apellido1: 'Castillo', apellido2: 'Pérez', direccion: 'Barrio Los Ángeles, San José', fecha_nacimiento: new Date('1994-10-11'), telefono: '22221111', correo: 'felipe.castillo@email.com', provinciaId: 1 },
  { cedula: '3788990015', nombre: 'Isabella', apellido1: 'Herrera', apellido2: 'Gutiérrez', direccion: 'Calle 13, Alajuela', fecha_nacimiento: new Date('1982-07-07'), telefono: '11110000', correo: 'isabella.herrera@email.com', provinciaId: 2 },
  { cedula: '2899001127', nombre: 'Samuel', apellido1: 'Morales', apellido2: 'Vargas', direccion: 'Barrio El Centro, Cartago', fecha_nacimiento: new Date('1990-09-19'), telefono: '99998888', correo: 'samuel.morales@email.com', provinciaId: 3 },
  { cedula: '1900112237', nombre: 'Victoria', apellido1: 'Ramírez', apellido2: 'López', direccion: 'Calle 6, Heredia', fecha_nacimiento: new Date('1986-02-14'), telefono: '88887777', correo: 'victoria.ramirez@email.com', provinciaId: 4 },
  { cedula: '7001122336', nombre: 'Leonardo', apellido1: 'Gutiérrez', apellido2: 'Hernández', direccion: 'Avenida 7, Guanacaste', fecha_nacimiento: new Date('1984-11-28'), telefono: '77776666', correo: 'leonardo.gutierrez@email.com', provinciaId: 5 },
  { cedula: '6122334455', nombre: 'Sara', apellido1: 'Fernández', apellido2: 'Jiménez', direccion: 'Calle 25, Puntarenas', fecha_nacimiento: new Date('1993-03-15'), telefono: '66665555', correo: 'sara.fernandez@email.com', provinciaId: 6 },
  { cedula: '5233445570', nombre: 'Tomás', apellido1: 'Peralta', apellido2: 'Rodríguez', direccion: 'Barrio El Prado, San José', fecha_nacimiento: new Date('1981-08-20'), telefono: '55554444', correo: 'tomas.peralta@email.com', provinciaId: 1 },
  { cedula: '4344556681', nombre: 'Amelia', apellido1: 'Villalobos', apellido2: 'Sánchez', direccion: 'Calle 9, Alajuela', fecha_nacimiento: new Date('1989-05-05'), telefono: '44443333', correo: 'amelia.villalobos@email.com', provinciaId: 2 },
  { cedula: '9455667792', nombre: 'Matías', apellido1: 'Araya', apellido2: 'Pérez', direccion: 'Barrio San Rafael, Cartago', fecha_nacimiento: new Date('1995-01-22'), telefono: '33332222', correo: 'matias.araya@email.com', provinciaId: 3 },
  { cedula: '3566778899', nombre: 'Lucas', apellido1: 'Castro', apellido2: 'Gutiérrez', direccion: 'Calle 14, Heredia', fecha_nacimiento: new Date('1980-07-10'), telefono: '22221111', correo: 'lucas.castro@email.com', provinciaId: 4 },
  { cedula: '2677889910', nombre: 'Emma', apellido1: 'Hernández', apellido2: 'Vargas', direccion: 'Avenida 9, Guanacaste', fecha_nacimiento: new Date('1988-04-18'), telefono: '11110000', correo: 'emma.hernandez@email.com', provinciaId: 5 },
  { cedula: '1788990011', nombre: 'Daniel', apellido1: 'Mora', apellido2: 'López', direccion: 'Calle 26, Puntarenas', fecha_nacimiento: new Date('1992-12-03'), telefono: '99998888', correo: 'daniel.mora@email.com', provinciaId: 6 },
  { cedula: '7899001122', nombre: 'Olivia', apellido1: 'Solano', apellido2: 'Jiménez', direccion: 'Barrio El Bosque, San José', fecha_nacimiento: new Date('1983-09-25'), telefono: '88887777', correo: 'olivia.solano@email.com', provinciaId: 1 },
  { cedula: '6900112233', nombre: 'Benjamín', apellido1: 'Alvarado', apellido2: 'Rodríguez', direccion: 'Calle 11, Alajuela', fecha_nacimiento: new Date('1986-06-12'), telefono: '77776666', correo: 'benjamin.alvarado@email.com', provinciaId: 2 },
  { cedula: '5001122334', nombre: 'Miguel', apellido1: 'Gómez', apellido2: 'Sánchez', direccion: 'Barrio El Progreso, Cartago', fecha_nacimiento: new Date('1991-03-01'), telefono: '66665555', correo: 'miguel.gomez@email.com', provinciaId: 3 },
  { cedula: '4122334456', nombre: 'Santiago', apellido1: 'Vargas', apellido2: 'Pérez', direccion: 'Calle 15, Heredia', fecha_nacimiento: new Date('1982-10-17'), telefono: '55554444', correo: 'santiago.vargas@email.com', provinciaId: 4 },
  { cedula: '3233445571', nombre: 'Valeria', apellido1: 'Herrera', apellido2: 'Gutiérrez', direccion: 'Avenida 10, Guanacaste', fecha_nacimiento: new Date('1989-08-04'), telefono: '44443333', correo: 'valeria.herrera@email.com', provinciaId: 5 },
  { cedula: '9344556682', nombre: 'Javier', apellido1: 'Morales', apellido2: 'Vargas', direccion: 'Calle 27, Puntarenas', fecha_nacimiento: new Date('1994-05-20'), telefono: '33332222', correo: 'javier.morales@email.com', provinciaId: 6 },
  { cedula: '2455667793', nombre: 'Abril', apellido1: 'Ramírez', apellido2: 'López', direccion: 'Barrio El Sol, San José', fecha_nacimiento: new Date('1980-12-09'), telefono: '22221111', correo: 'abril.ramirez@email.com', provinciaId: 1 },
  { cedula: '1566778900', nombre: 'Iker', apellido1: 'Gutiérrez', apellido2: 'Hernández', direccion: 'Calle 12, Alajuela', fecha_nacimiento: new Date('1988-02-25'), telefono: '11110000', correo: 'iker.gutierrez@email.com', provinciaId: 2 },
  { cedula: '7677889911', nombre: 'Clara', apellido1: 'Fernández', apellido2: 'Jiménez', direccion: 'Barrio El Paraíso, Cartago', fecha_nacimiento: new Date('1993-07-13'), telefono: '99998888', correo: 'clara.fernandez@email.com', provinciaId: 3 },
  { cedula: '6788990012', nombre: 'Alejandro', apellido1: 'Peralta', apellido2: 'Rodríguez', direccion: 'Calle 16, Heredia', fecha_nacimiento: new Date('1981-04-19'), telefono: '88887777', correo: 'alejandro.peralta@email.com', provinciaId: 4 },
  { cedula: '5899001123', nombre: 'Natalia', apellido1: 'Villalobos', apellido2: 'Sánchez', direccion: 'Avenida 11, Guanacaste', fecha_nacimiento: new Date('1989-09-06'), telefono: '77776666', correo: 'natalia.villalobos@email.com', provinciaId: 5 },
  { cedula: '4900112234', nombre: 'Bruno', apellido1: 'Araya', apellido2: 'Pérez', direccion: 'Calle 28, Puntarenas', fecha_nacimiento: new Date('1995-01-23'), telefono: '66665555', correo: 'bruno.araya@email.com', provinciaId: 6 },
  { cedula: '3001122335', nombre: 'Paula', apellido1: 'Castro', apellido2: 'Gutiérrez', direccion: 'Barrio El Carmen, San José', fecha_nacimiento: new Date('1980-08-11'), telefono: '55554444', correo: 'paula.castro@email.com', provinciaId: 1 },
  { cedula: '2122334457', nombre: 'Eduardo', apellido1: 'Hernández', apellido2: 'Vargas', direccion: 'Calle 13, Alajuela', fecha_nacimiento: new Date('1988-05-29'), telefono: '44443333', correo: 'eduardo.hernandez@email.com', provinciaId: 2 },
  { cedula: '1233445572', nombre: 'Ismael', apellido1: 'Mora', apellido2: 'López', direccion: 'Barrio El Centro, Cartago', fecha_nacimiento: new Date('1992-12-16'), telefono: '33332222', correo: 'ismael.mora@email.com', provinciaId: 3 },
  { cedula: '7344556683', nombre: 'Regina', apellido1: 'Solano', apellido2: 'Jiménez', direccion: 'Calle 17, Heredia', fecha_nacimiento: new Date('1983-09-26'), telefono: '22221111', correo: 'regina.solano@email.com', provinciaId: 4 },
  { cedula: '6455667794', nombre: 'Agustín', apellido1: 'Alvarado', apellido2: 'Rodríguez', direccion: 'Avenida 12, Guanacaste', fecha_nacimiento: new Date('1986-06-13'), telefono: '11110000', correo: 'agustin.alvarado@email.com', provinciaId: 5 },
  { cedula: '5566778901', nombre: 'Elena', apellido1: 'Gómez', apellido2: 'Sánchez', direccion: 'Calle 29, Puntarenas', fecha_nacimiento: new Date('1991-03-02'), telefono: '99998888', correo: 'elena.gomez@email.com', provinciaId: 6 },
  { cedula: '4677839912', nombre: 'Ian', apellido1: 'Vargas', apellido2: 'Pérez', direccion: 'Barrio El Prado, San José', fecha_nacimiento: new Date('1982-10-18'), telefono: '88887777', correo: 'ian.vargas@email.com', provinciaId: 1 },
  { cedula: '3788990017', nombre: 'Carla', apellido1: 'Herrera', apellido2: 'Gutiérrez', direccion: 'Calle 14, Alajuela', fecha_nacimiento: new Date('1989-08-05'), telefono: '77776666', correo: 'carla.herrera@email.com', provinciaId: 2 },
  { cedula: '2899001129', nombre: 'Martín', apellido1: 'Morales', apellido2: 'Vargas', direccion: 'Barrio El Bosque, Cartago', fecha_nacimiento: new Date('1994-05-21'), telefono: '66665555', correo: 'martin.morales@email.com', provinciaId: 3 },
  { cedula: '1900112238', nombre: 'Rebeca', apellido1: 'Ramírez', apellido2: 'López', direccion: 'Calle 18, Heredia', fecha_nacimiento: new Date('1980-12-10'), telefono: '55554444', correo: 'rebeca.ramirez@email.com', provinciaId: 4 },
  { cedula: '9001122337', nombre: 'Lorenzo', apellido1: 'Gutiérrez', apellido2: 'Hernández', direccion: 'Avenida 13, Guanacaste', fecha_nacimiento: new Date('1988-02-26'), telefono: '44443333', correo: 'lorenzo.gutierrez@email.com', provinciaId: 5 },
  { cedula: '8000000001', nombre: 'Andrés', apellido1: 'Soler', apellido2: 'Martínez', direccion: 'Calle Nueva 1, San José', fecha_nacimiento: new Date('1970-01-01'), telefono: '88880001', correo: 'andres.soler@docente.com', provinciaId: 1 },
  { cedula: '8000000002', nombre: 'Beatriz', apellido1: 'Cruz', apellido2: 'López', direccion: 'Avenida Central 45, Alajuela', fecha_nacimiento: new Date('1972-03-15'), telefono: '88880002', correo: 'beatriz.cruz@docente.com', provinciaId: 2 },
  { cedula: '8000000003', nombre: 'Carlos', apellido1: 'Molina', apellido2: 'Ramírez', direccion: 'Calle 5, Cartago', fecha_nacimiento: new Date('1968-07-20'), telefono: '88880003', correo: 'carlos.molina@docente.com', provinciaId: 3 },
  { cedula: '8000000004', nombre: 'Diana', apellido1: 'Paredes', apellido2: 'Gómez', direccion: 'Boulevard 10, Heredia', fecha_nacimiento: new Date('1975-11-05'), telefono: '88880004', correo: 'diana.paredes@docente.com', provinciaId: 4 },
  { cedula: '8000000005', nombre: 'Eduardo', apellido1: 'Vidal', apellido2: 'Castillo', direccion: 'Calle Real 23, Guanacaste', fecha_nacimiento: new Date('1965-05-30'), telefono: '88880005', correo: 'eduardo.vidal@docente.com', provinciaId: 5 },
  { cedula: '8000000006', nombre: 'Fabiola', apellido1: 'Reyes', apellido2: 'Ortiz', direccion: 'Avenida 7, Puntarenas', fecha_nacimiento: new Date('1978-09-12'), telefono: '88880006', correo: 'fabiola.reyes@docente.com', provinciaId: 6 },
  { cedula: '8000000007', nombre: 'Gabriel', apellido1: 'Moreno', apellido2: 'Díaz', direccion: 'Calle Sol 12, San José', fecha_nacimiento: new Date('1971-02-17'), telefono: '88880007', correo: 'gabriel.moreno@docente.com', provinciaId: 1 },
  { cedula: '8000000008', nombre: 'Helena', apellido1: 'Fuentes', apellido2: 'Pérez', direccion: 'Avenida Libertad 34, Alajuela', fecha_nacimiento: new Date('1969-06-25'), telefono: '88880008', correo: 'helena.fuentes@docente.com', provinciaId: 2 },
  { cedula: '8000000009', nombre: 'Ignacio', apellido1: 'Sánchez', apellido2: 'Cordero', direccion: 'Calle Luna 8, Cartago', fecha_nacimiento: new Date('1973-12-03'), telefono: '88880009', correo: 'ignacio.sanchez@docente.com', provinciaId: 3 },
  { cedula: '8000000010', nombre: 'Julieta', apellido1: 'Vargas', apellido2: 'Méndez', direccion: 'Boulevard del Valle 56, Heredia', fecha_nacimiento: new Date('1976-04-10'), telefono: '88880010', correo: 'julieta.vargas@docente.com', provinciaId: 4 },
  { cedula: '8000000011', nombre: 'Kevin', apellido1: 'Ortiz', apellido2: 'Navarro', direccion: 'Calle Primavera 3, Guanacaste', fecha_nacimiento: new Date('1974-08-19'), telefono: '88880011', correo: 'kevin.ortiz@docente.com', provinciaId: 5 },
  { cedula: '8000000012', nombre: 'Lorena', apellido1: 'Guzmán', apellido2: 'Rivas', direccion: 'Avenida del Río 78, Puntarenas', fecha_nacimiento: new Date('1970-10-05'), telefono: '88880012', correo: 'lorena.guzman@docente.com', provinciaId: 6 },
  { cedula: '8000000013', nombre: 'Manuel', apellido1: 'Cabrera', apellido2: 'Salinas', direccion: 'Calle Industrial 15, San José', fecha_nacimiento: new Date('1967-03-28'), telefono: '88880013', correo: 'manuel.cabrera@docente.com', provinciaId: 1 },
  { cedula: '8000000014', nombre: 'Norma', apellido1: 'Alfaro', apellido2: 'Peña', direccion: 'Avenida del Sol 89, Alajuela', fecha_nacimiento: new Date('1972-07-11'), telefono: '88880014', correo: 'norma.alfaro@docente.com', provinciaId: 2 },
  { cedula: '8000000015', nombre: 'Óscar', apellido1: 'Duarte', apellido2: 'Miranda', direccion: 'Calle Los Pinos 27, Cartago', fecha_nacimiento: new Date('1969-11-30'), telefono: '88880015', correo: 'oscar.duarte@docente.com', provinciaId: 3 },
  { cedula: '8000000016', nombre: 'Patricia', apellido1: 'Rincón', apellido2: 'Silva', direccion: 'Boulevard Central 50, Heredia', fecha_nacimiento: new Date('1975-05-05'), telefono: '88880016', correo: 'patricia.rincon@docente.com', provinciaId: 4 },
  { cedula: '8000000017', nombre: 'Roberto', apellido1: 'Leiva', apellido2: 'Cruz', direccion: 'Avenida Occidental 66, Guanacaste', fecha_nacimiento: new Date('1973-09-09'), telefono: '88880017', correo: 'roberto.leiva@docente.com', provinciaId: 5 },
 
];

//DOCENTES
async function seedDocentes() {
  await prisma.docente.createMany({
    data: docentesData,
  })
}

// ESTUDIANTES
const estudiantesData = [
  { cedula: '1122334455', nombre: 'Juan', apellido1: 'Pérez', apellido2: 'Gómez', fecha_nacimiento: new Date('2000-05-15'), direccion: 'Calle 123, San José', telefono: '88889999', correo: 'juan.perez@est.com', provinciaId: 1 },
  { cedula: '2233445560', nombre: 'María', apellido1: 'Rodríguez', apellido2: 'Hernández', fecha_nacimiento: new Date('2001-08-22'), direccion: 'Avenida 456, Alajuela', telefono: '77776666', correo: 'maria.rodriguez@est.com', provinciaId: 2 },
  { cedula: '3344556677', nombre: 'Carlos', apellido1: 'González', apellido2: 'Martínez', fecha_nacimiento: new Date('2002-03-10'), direccion: 'Calle 789, Cartago', telefono: '66665555', correo: 'carlos.gonzalez@est.com', provinciaId: 3 },
  { cedula: '4455667788', nombre: 'Ana', apellido1: 'López', apellido2: 'Sánchez', fecha_nacimiento: new Date('2003-07-18'), direccion: 'Avenida 101, Heredia', telefono: '55554444', correo: 'ana.lopez@est.com', provinciaId: 4 },
  { cedula: '5566778899', nombre: 'Luis', apellido1: 'Ramírez', apellido2: 'Fernández', fecha_nacimiento: new Date('2004-11-25'), direccion: 'Calle 202, Guanacaste', telefono: '44443333', correo: 'luis.ramirez@est.com', provinciaId: 5 },
  { cedula: '6677889900', nombre: 'Laura', apellido1: 'Morales', apellido2: 'Gutiérrez', fecha_nacimiento: new Date('2005-02-14'), direccion: 'Avenida 303, Puntarenas', telefono: '33332222', correo: 'laura.morales@est.com', provinciaId: 6 },
  { cedula: '7788990011', nombre: 'Pedro', apellido1: 'Hernández', apellido2: 'Vargas', fecha_nacimiento: new Date('2006-06-30'), direccion: 'Calle 404, San José', telefono: '22221111', correo: 'pedro.hernandez@est.com', provinciaId: 1 },
  { cedula: '8899001122', nombre: 'Sofía', apellido1: 'Díaz', apellido2: 'Torres', fecha_nacimiento: new Date('2007-09-12'), direccion: 'Avenida 505, Alajuela', telefono: '11110000', correo: 'sofia.diaz@est.com', provinciaId: 2 },
  { cedula: '9900112233', nombre: 'Diego', apellido1: 'Castro', apellido2: 'Mendoza', fecha_nacimiento: new Date('2008-04-05'), direccion: 'Calle 606, Cartago', telefono: '99998888', correo: 'diego.castro@est.com', provinciaId: 3 },
  { cedula: '0011223344', nombre: 'Valeria', apellido1: 'Rojas', apellido2: 'Guerrero', fecha_nacimiento: new Date('2009-01-20'), direccion: 'Avenida 707, Heredia', telefono: '88887777', correo: 'valeria.rojas@est.com', provinciaId: 4 },
  { cedula: '1122334456', nombre: 'Javier', apellido1: 'Vega', apellido2: 'Ríos', fecha_nacimiento: new Date('2010-08-15'), direccion: 'Calle 808, Guanacaste', telefono: '77776666', correo: 'javier.vega@est.com', provinciaId: 5 },
  { cedula: '2233445567', nombre: 'Camila', apellido1: 'Méndez', apellido2: 'Cruz', fecha_nacimiento: new Date('2011-05-22'), direccion: 'Avenida 909, Puntarenas', telefono: '66665555', correo: 'camila.mendez@est.com', provinciaId: 6 },
  { cedula: '3344556678', nombre: 'Andrés', apellido1: 'Pérez', apellido2: 'Ortiz', fecha_nacimiento: new Date('2012-03-18'), direccion: 'Calle 1010, San José', telefono: '55554444', correo: 'andres.perez@est.com', provinciaId: 1 },
  { cedula: '4455667789', nombre: 'Lucía', apellido1: 'Gómez', apellido2: 'Navarro', fecha_nacimiento: new Date('2013-07-25'), direccion: 'Avenida 1111, Alajuela', telefono: '44443333', correo: 'lucia.gomez@est.com', provinciaId: 2 },
  { cedula: '5566778890', nombre: 'Mateo', apellido1: 'Soto', apellido2: 'Miranda', fecha_nacimiento: new Date('2014-11-30'), direccion: 'Calle 1212, Cartago', telefono: '33332222', correo: 'mateo.soto@est.com', provinciaId: 3 },
  { cedula: '6677889901', nombre: 'Isabella', apellido1: 'Fernández', apellido2: 'Cortés', fecha_nacimiento: new Date('2015-02-14'), direccion: 'Avenida 1313, Heredia', telefono: '22221111', correo: 'isabella.fernandez@est.com', provinciaId: 4 },
  { cedula: '7788990012', nombre: 'Daniel', apellido1: 'Gutiérrez', apellido2: 'Rojas', fecha_nacimiento: new Date('2016-06-30'), direccion: 'Calle 1414, Guanacaste', telefono: '11110000', correo: 'daniel.gutierrez@est.com', provinciaId: 5 },
  { cedula: '8899001123', nombre: 'Valentina', apellido1: 'Herrera', apellido2: 'Vargas', fecha_nacimiento: new Date('2017-09-12'), direccion: 'Avenida 1515, Puntarenas', telefono: '99998888', correo: 'valentina.herrera@est.com', provinciaId: 6 },
  { cedula: '9900112234', nombre: 'Sebastián', apellido1: 'López', apellido2: 'Mora', fecha_nacimiento: new Date('2018-04-05'), direccion: 'Calle 1616, San José', telefono: '88887777', correo: 'sebastian.lopez@est.com', provinciaId: 1 },
  { cedula: '0011223345', nombre: 'Emma', apellido1: 'Ramírez', apellido2: 'Pacheco', fecha_nacimiento: new Date('2019-01-20'), direccion: 'Avenida 1717, Alajuela', telefono: '77776666', correo: 'emma.ramirez@est.com', provinciaId: 2 },
  { cedula: '1122334457', nombre: 'Nicolás', apellido1: 'Morales', apellido2: 'Jiménez', fecha_nacimiento: new Date('2020-08-15'), direccion: 'Calle 1818, Cartago', telefono: '66665555', correo: 'nicolas.morales@est.com', provinciaId: 3 },
  { cedula: '2233445568', nombre: 'Sara', apellido1: 'Díaz', apellido2: 'Castro', fecha_nacimiento: new Date('2021-05-22'), direccion: 'Avenida 1919, Heredia', telefono: '55554444', correo: 'sara.diaz@est.com', provinciaId: 4 },
  { cedula: '3344556679', nombre: 'Alejandro', apellido1: 'Vega', apellido2: 'Ríos', fecha_nacimiento: new Date('2022-03-18'), direccion: 'Calle 2020, Guanacaste', telefono: '44443333', correo: 'alejandro.vega@est.com', provinciaId: 5 },
  { cedula: '4455667780', nombre: 'Mariana', apellido1: 'Méndez', apellido2: 'Cruz', fecha_nacimiento: new Date('2023-07-25'), direccion: 'Avenida 2121, Puntarenas', telefono: '33332222', correo: 'mariana.mendez@est.com', provinciaId: 6 },
  { cedula: '5566778891', nombre: 'Adrián', apellido1: 'Pérez', apellido2: 'Ortiz', fecha_nacimiento: new Date('2000-11-30'), direccion: 'Calle 2222, San José', telefono: '22221111', correo: 'adrian.perez@est.com', provinciaId: 1 },
  { cedula: '6677889902', nombre: 'Renata', apellido1: 'Gómez', apellido2: 'Navarro', fecha_nacimiento: new Date('2001-02-14'), direccion: 'Avenida 2323, Alajuela', telefono: '11110000', correo: 'renata.gomez@est.com', provinciaId: 2 },
  { cedula: '7788990013', nombre: 'Emilio', apellido1: 'Soto', apellido2: 'Miranda', fecha_nacimiento: new Date('2002-06-30'), direccion: 'Calle 2424, Cartago', telefono: '99998888', correo: 'emilio.soto@est.com', provinciaId: 3 },
  { cedula: '8899001124', nombre: 'Victoria', apellido1: 'Fernández', apellido2: 'Cortés', fecha_nacimiento: new Date('2003-09-12'), direccion: 'Avenida 2525, Heredia', telefono: '88887777', correo: 'victoria.fernandez@est.com', provinciaId: 4 },
  { cedula: '9900112235', nombre: 'Leonardo', apellido1: 'Gutiérrez', apellido2: 'Rojas', fecha_nacimiento: new Date('2004-04-05'), direccion: 'Calle 2626, Guanacaste', telefono: '77776666', correo: 'leonardo.gutierrez@est.com', provinciaId: 5 },
  { cedula: '0011223346', nombre: 'Paula', apellido1: 'Herrera', apellido2: 'Vargas', fecha_nacimiento: new Date('2005-01-20'), direccion: 'Avenida 2727, Puntarenas', telefono: '66665555', correo: 'paula.herrera@est.com', provinciaId: 6 },
  { cedula: '1122334458', nombre: 'Tomás', apellido1: 'López', apellido2: 'Mora', fecha_nacimiento: new Date('2006-08-15'), direccion: 'Calle 2828, San José', telefono: '55554444', correo: 'tomas.lopez@est.com', provinciaId: 1 },
  { cedula: '2233445569', nombre: 'Amelia', apellido1: 'Ramírez', apellido2: 'Pacheco', fecha_nacimiento: new Date('2007-05-22'), direccion: 'Avenida 2929, Alajuela', telefono: '44443333', correo: 'amelia.ramirez@est.com', provinciaId: 2 },
  { cedula: '3344556680', nombre: 'Bruno', apellido1: 'Morales', apellido2: 'Jiménez', fecha_nacimiento: new Date('2008-03-18'), direccion: 'Calle 3030, Cartago', telefono: '33332222', correo: 'bruno.morales@est.com', provinciaId: 3 },
  { cedula: '4455667781', nombre: 'Clara', apellido1: 'Díaz', apellido2: 'Castro', fecha_nacimiento: new Date('2009-07-25'), direccion: 'Avenida 3131, Heredia', telefono: '22221111', correo: 'clara.diaz@est.com', provinciaId: 4 },
  { cedula: '5566778892', nombre: 'Felipe', apellido1: 'Vega', apellido2: 'Ríos', fecha_nacimiento: new Date('2010-11-30'), direccion: 'Calle 3232, Guanacaste', telefono: '11110000', correo: 'felipe.vega@est.com', provinciaId: 5 },
  { cedula: '6677889903', nombre: 'Ismael', apellido1: 'Méndez', apellido2: 'Cruz', fecha_nacimiento: new Date('2011-02-14'), direccion: 'Avenida 3333, Puntarenas', telefono: '99998888', correo: 'ismael.mendez@est.com', provinciaId: 6 },
  { cedula: '7788990014', nombre: 'Regina', apellido1: 'Pérez', apellido2: 'Ortiz', fecha_nacimiento: new Date('2012-06-30'), direccion: 'Calle 3434, San José', telefono: '88887777', correo: 'regina.perez@est.com', provinciaId: 1 },
  { cedula: '8899001125', nombre: 'Agustín', apellido1: 'Gómez', apellido2: 'Navarro', fecha_nacimiento: new Date('2013-09-12'), direccion: 'Avenida 3535, Alajuela', telefono: '77776666', correo: 'agustin.gomez@est.com', provinciaId: 2 },
  { cedula: '9900112236', nombre: 'Elena', apellido1: 'Soto', apellido2: 'Miranda', fecha_nacimiento: new Date('2014-04-05'), direccion: 'Calle 3636, Cartago', telefono: '66665555', correo: 'elena.soto@est.com', provinciaId: 3 },
  { cedula: '0011223347', nombre: 'Ian', apellido1: 'Fernández', apellido2: 'Cortés', fecha_nacimiento: new Date('2015-01-20'), direccion: 'Avenida 3737, Heredia', telefono: '55554444', correo: 'ian.fernandez@est.com', provinciaId: 4 },
  { cedula: '1122334459', nombre: 'Carla', apellido1: 'Gutiérrez', apellido2: 'Rojas', fecha_nacimiento: new Date('2016-08-15'), direccion: 'Calle 3838, Guanacaste', telefono: '44443333', correo: 'carla.gutierrez@est.com', provinciaId: 5 },
  { cedula: '2233445570', nombre: 'Martín', apellido1: 'Herrera', apellido2: 'Vargas', fecha_nacimiento: new Date('2017-05-22'), direccion: 'Avenida 3939, Puntarenas', telefono: '33332222', correo: 'martin.herrera@est.com', provinciaId: 6 },
  { cedula: '3344556681', nombre: 'Rebeca', apellido1: 'López', apellido2: 'Mora', fecha_nacimiento: new Date('2018-03-18'), direccion: 'Calle 4040, San José', telefono: '22221111', correo: 'rebeca.lopez@est.com', provinciaId: 1 },
  { cedula: '4455667782', nombre: 'Lorenzo', apellido1: 'Ramírez', apellido2: 'Pacheco', fecha_nacimiento: new Date('2019-07-25'), direccion: 'Avenida 4141, Alajuela', telefono: '11110000', correo: 'lorenzo.ramirez@est.com', provinciaId: 2 },
  { cedula: '5566778893', nombre: 'Abril', apellido1: 'Morales', apellido2: 'Jiménez', fecha_nacimiento: new Date('2020-11-30'), direccion: 'Calle 4242, Cartago', telefono: '99998888', correo: 'abril.morales@est.com', provinciaId: 3 },
  { cedula: '6677889904', nombre: 'Iker', apellido1: 'Díaz', apellido2: 'Castro', fecha_nacimiento: new Date('2021-02-14'), direccion: 'Avenida 4343, Heredia', telefono: '88887777', correo: 'iker.diaz@est.com', provinciaId: 4 },
  { cedula: '7788990015', nombre: 'Clara', apellido1: 'Vega', apellido2: 'Ríos', fecha_nacimiento: new Date('2022-06-30'), direccion: 'Calle 4444, Guanacaste', telefono: '77776666', correo: 'clara.vega@est.com', provinciaId: 5 },
  { cedula: '8899001126', nombre: 'Alejandro', apellido1: 'Méndez', apellido2: 'Cruz', fecha_nacimiento: new Date('2023-09-12'), direccion: 'Avenida 4545, Puntarenas', telefono: '66665555', correo: 'alejandro.mendez@est.com', provinciaId: 6 },
  { cedula: '9900112237', nombre: 'Natalia', apellido1: 'Pérez', apellido2: 'Ortiz', fecha_nacimiento: new Date('2000-04-05'), direccion: 'Calle 4646, San José', telefono: '55554444', correo: 'natalia.perez@est.com', provinciaId: 1 },
  { cedula: '0011223348', nombre: 'Bruno', apellido1: 'Gómez', apellido2: 'Navarro', fecha_nacimiento: new Date('2001-01-20'), direccion: 'Avenida 4747, Alajuela', telefono: '44443333', correo: 'bruno.gomez@est.com', provinciaId: 2 },
  { cedula: '1122334460', nombre: 'Paula', apellido1: 'Soto', apellido2: 'Miranda', fecha_nacimiento: new Date('2002-08-15'), direccion: 'Calle 4848, Cartago', telefono: '33332222', correo: 'paula.soto@est.com', provinciaId: 3 },
  { cedula: '2233445571', nombre: 'Eduardo', apellido1: 'Fernández', apellido2: 'Cortés', fecha_nacimiento: new Date('2003-05-22'), direccion: 'Avenida 4949, Heredia', telefono: '22221111', correo: 'eduardo.fernandez@est.com', provinciaId: 4 },
  { cedula: '3344556682', nombre: 'Ismael', apellido1: 'Gutiérrez', apellido2: 'Rojas', fecha_nacimiento: new Date('2004-03-18'), direccion: 'Calle 5050, Guanacaste', telefono: '11110000', correo: 'ismael.gutierrez@est.com', provinciaId: 5 },
  { cedula: '4455667783', nombre: 'Regina', apellido1: 'Herrera', apellido2: 'Vargas', fecha_nacimiento: new Date('2005-07-25'), direccion: 'Avenida 5151, Puntarenas', telefono: '99998888', correo: 'regina.herrera@est.com', provinciaId: 6 },
  { cedula: '5566778894', nombre: 'Agustín', apellido1: 'López', apellido2: 'Mora', fecha_nacimiento: new Date('2006-11-30'), direccion: 'Calle 5252, San José', telefono: '88887777', correo: 'agustin.lopez@est.com', provinciaId: 1 },
  { cedula: '6677889905', nombre: 'Elena', apellido1: 'Ramírez', apellido2: 'Pacheco', fecha_nacimiento: new Date('2007-02-14'), direccion: 'Avenida 5353, Alajuela', telefono: '77776666', correo: 'elena.ramirez@est.com', provinciaId: 2 },
  { cedula: '7788990016', nombre: 'Ian', apellido1: 'Morales', apellido2: 'Jiménez', fecha_nacimiento: new Date('2008-06-30'), direccion: 'Calle 5454, Cartago', telefono: '66665555', correo: 'ian.morales@est.com', provinciaId: 3 },
  { cedula: '8899001127', nombre: 'Carla', apellido1: 'Díaz', apellido2: 'Castro', fecha_nacimiento: new Date('2009-09-12'), direccion: 'Avenida 5555, Heredia', telefono: '55554444', correo: 'carla.diaz@est.com', provinciaId: 4 },
  { cedula: '9900112238', nombre: 'Martín', apellido1: 'Vega', apellido2: 'Ríos', fecha_nacimiento: new Date('2010-04-05'), direccion: 'Calle 5656, Guanacaste', telefono: '44443333', correo: 'martin.vega@est.com', provinciaId: 5 },
  { cedula: '0011223349', nombre: 'Rebeca', apellido1: 'Méndez', apellido2: 'Cruz', fecha_nacimiento: new Date('2011-01-20'), direccion: 'Avenida 5757, Puntarenas', telefono: '33332222', correo: 'rebeca.mendez@est.com', provinciaId: 6 },
  { cedula: '1122334461', nombre: 'Lorenzo', apellido1: 'Pérez', apellido2: 'Ortiz', fecha_nacimiento: new Date('2012-08-15'), direccion: 'Calle 5858, San José', telefono: '22221111', correo: 'lorenzo.perez@est.com', provinciaId: 1 },
  { cedula: '2233445572', nombre: 'Abril', apellido1: 'Gómez', apellido2: 'Navarro', fecha_nacimiento: new Date('2013-05-22'), direccion: 'Avenida 5959, Alajuela', telefono: '11110000', correo: 'abril.gomez@est.com', provinciaId: 2 },
  { cedula: '3344556683', nombre: 'Iker', apellido1: 'Soto', apellido2: 'Miranda', fecha_nacimiento: new Date('2014-03-18'), direccion: 'Calle 6060, Cartago', telefono: '99998888', correo: 'iker.soto@est.com', provinciaId: 3 },
  { cedula: '4455667784', nombre: 'Clara', apellido1: 'Fernández', apellido2: 'Cortés', fecha_nacimiento: new Date('2015-07-25'), direccion: 'Avenida 6161, Heredia', telefono: '88887777', correo: 'clara.fernandez@est.com', provinciaId: 4 },
  { cedula: '5566778895', nombre: 'Alejandro', apellido1: 'Gutiérrez', apellido2: 'Rojas', fecha_nacimiento: new Date('2016-11-30'), direccion: 'Calle 6262, Guanacaste', telefono: '77776666', correo: 'alejandro.gutierrez@est.com', provinciaId: 5 },
  { cedula: '6677889906', nombre: 'Natalia', apellido1: 'Herrera', apellido2: 'Vargas', fecha_nacimiento: new Date('2017-02-14'), direccion: 'Avenida 6363, Puntarenas', telefono: '66665555', correo: 'natalia.herrera@est.com', provinciaId: 6 },
  { cedula: '7788990017', nombre: 'Bruno', apellido1: 'López', apellido2: 'Mora', fecha_nacimiento: new Date('2018-06-30'), direccion: 'Calle 6464, San José', telefono: '55554444', correo: 'bruno.lopez@est.com', provinciaId: 1 },
  { cedula: '8899001128', nombre: 'Paula', apellido1: 'Ramírez', apellido2: 'Pacheco', fecha_nacimiento: new Date('2019-09-12'), direccion: 'Avenida 6565, Alajuela', telefono: '44443333', correo: 'paula.ramirez@est.com', provinciaId: 2 },
  { cedula: '9900112239', nombre: 'Eduardo', apellido1: 'Morales', apellido2: 'Jiménez', fecha_nacimiento: new Date('2020-04-05'), direccion: 'Calle 6666, Cartago', telefono: '33332222', correo: 'eduardo.morales@est.com', provinciaId: 3 },
  { cedula: '0011223350', nombre: 'Ismael', apellido1: 'Díaz', apellido2: 'Castro', fecha_nacimiento: new Date('2021-01-20'), direccion: 'Avenida 6767, Heredia', telefono: '22221111', correo: 'ismael.diaz@est.com', provinciaId: 4 },
  { cedula: '1122334462', nombre: 'Regina', apellido1: 'Vega', apellido2: 'Ríos', fecha_nacimiento: new Date('2022-08-15'), direccion: 'Calle 6868, Guanacaste', telefono: '11110000', correo: 'regina.vega@est.com', provinciaId: 5 },
  { cedula: '2233445573', nombre: 'Agustín', apellido1: 'Méndez', apellido2: 'Cruz', fecha_nacimiento: new Date('2023-05-22'), direccion: 'Avenida 6969, Puntarenas', telefono: '99998888', correo: 'agustin.mendez@est.com', provinciaId: 6 },
  { cedula: '9988776655', nombre: 'Gabriel', apellido1: 'Rojas', apellido2: 'Vargas', fecha_nacimiento: new Date('2000-03-12'), direccion: 'Calle 7070, San José', telefono: '88887777', correo: 'gabriel.rojas@est.com', provinciaId: 1 },
  { cedula: '1234567890', nombre: 'Alejandro', apellido1: 'García', apellido2: 'López', fecha_nacimiento: new Date('2000-01-01'), direccion: 'Calle 1, San José', telefono: '11112222', correo: 'alejandro.garcia@est.com', provinciaId: 1 },
  { cedula: '9988776652', nombre: 'Gabriel', apellido1: 'Rojas', apellido2: 'Vargas', fecha_nacimiento: new Date('2000-03-12'), direccion: 'Calle 7070, San José', telefono: '88887777', correo: 'gabriel.rojas2@est.com', provinciaId: 1 },
  { cedula: '8877665544', nombre: 'Héctor', apellido1: 'Mendoza', apellido2: 'López', fecha_nacimiento: new Date('2001-04-13'), direccion: 'Calle 8080, Alajuela', telefono: '77776666', correo: 'hector.mendoza@est.com', provinciaId: 2 },
  { cedula: '7766554433', nombre: 'Isabel', apellido1: 'Gutiérrez', apellido2: 'Sánchez', fecha_nacimiento: new Date('2002-05-14'), direccion: 'Calle 9090, Cartago', telefono: '66665555', correo: 'isabel.gutierrez@est.com', provinciaId: 3 },
  { cedula: '6655443322', nombre: 'Jorge', apellido1: 'Vega', apellido2: 'Rodríguez', fecha_nacimiento: new Date('2003-06-15'), direccion: 'Calle 1010, Heredia', telefono: '55554444', correo: 'jorge.vega@est.com', provinciaId: 4 },
  { cedula: '5544332211', nombre: 'Karen', apellido1: 'Pérez', apellido2: 'Fernández', fecha_nacimiento: new Date('2004-07-16'), direccion: 'Calle 1111, Guanacaste', telefono: '44443333', correo: 'karen.perez@est.com', provinciaId: 5 },
  { cedula: '4433221100', nombre: 'Luis', apellido1: 'Gómez', apellido2: 'Martínez', fecha_nacimiento: new Date('2005-08-17'), direccion: 'Calle 1212, Puntarenas', telefono: '33332222', correo: 'luis.gomez@est.com', provinciaId: 6 },
  { cedula: '3322110099', nombre: 'María', apellido1: 'Sánchez', apellido2: 'López', fecha_nacimiento: new Date('2006-09-18'), direccion: 'Calle 1313, San José', telefono: '22221111', correo: 'maria.sanchez@est.com', provinciaId: 1 },
  { cedula: '2211009988', nombre: 'Nicolás', apellido1: 'Fernández', apellido2: 'Gómez', fecha_nacimiento: new Date('2007-10-19'), direccion: 'Calle 1414, Alajuela', telefono: '11110000', correo: 'nicolas.fernandez@est.com', provinciaId: 2 },
  { cedula: '1100998877', nombre: 'Olivia', apellido1: 'Rodríguez', apellido2: 'Sánchez', fecha_nacimiento: new Date('2008-11-20'), direccion: 'Calle 1515, Cartago', telefono: '99998888', correo: 'olivia.rodriguez@est.com', provinciaId: 3 },
  { cedula: '0099887766', nombre: 'Pablo', apellido1: 'López', apellido2: 'Gómez', fecha_nacimiento: new Date('2009-12-21'), direccion: 'Calle 1616, Heredia', telefono: '88887777', correo: 'pablo.lopez@est.com', provinciaId: 4 },
  { cedula: '9988776654', nombre: 'Quintín', apellido1: 'Gómez', apellido2: 'Martínez', fecha_nacimiento: new Date('2010-01-22'), direccion: 'Calle 1717, Guanacaste', telefono: '77776666', correo: 'quintin.gomez@est.com', provinciaId: 5 },
  { cedula: '8877665543', nombre: 'Rosa', apellido1: 'Sánchez', apellido2: 'Rodríguez', fecha_nacimiento: new Date('2011-02-23'), direccion: 'Calle 1818, Puntarenas', telefono: '66665555', correo: 'rosa.sanchez@est.com', provinciaId: 6 },
  { cedula: '7766554432', nombre: 'Sergio', apellido1: 'Fernández', apellido2: 'López', fecha_nacimiento: new Date('2012-03-24'), direccion: 'Calle 1919, San José', telefono: '55554444', correo: 'sergio.fernandez@est.com', provinciaId: 1 },
  { cedula: '6655443321', nombre: 'Teresa', apellido1: 'Gómez', apellido2: 'Sánchez', fecha_nacimiento: new Date('2013-04-25'), direccion: 'Calle 2020, Alajuela', telefono: '44443333', correo: 'teresa.gomez@est.com', provinciaId: 2 },
  { cedula: '5544332210', nombre: 'Ulises', apellido1: 'Rodríguez', apellido2: 'Fernández', fecha_nacimiento: new Date('2014-05-26'), direccion: 'Calle 2121, Cartago', telefono: '33332222', correo: 'ulises.rodriguez@est.com', provinciaId: 3 },
  { cedula: '4433221109', nombre: 'Verónica', apellido1: 'López', apellido2: 'Gómez', fecha_nacimiento: new Date('2015-06-27'), direccion: 'Calle 2222, Heredia', telefono: '22221111', correo: 'veronica.lopez@est.com', provinciaId: 4 },
  { cedula: '3322110098', nombre: 'Walter', apellido1: 'Gómez', apellido2: 'Martínez', fecha_nacimiento: new Date('2016-07-28'), direccion: 'Calle 2323, Guanacaste', telefono: '11110000', correo: 'walter.gomez@est.com', provinciaId: 5 },
  { cedula: '2211009987', nombre: 'Ximena', apellido1: 'Sánchez', apellido2: 'Rodríguez', fecha_nacimiento: new Date('2017-08-29'), direccion: 'Calle 2424, Puntarenas', telefono: '99998888', correo: 'ximena.sanchez@est.com', provinciaId: 6 },
  { cedula: '1100998876', nombre: 'Yolanda', apellido1: 'Fernández', apellido2: 'López', fecha_nacimiento: new Date('2018-09-30'), direccion: 'Calle 2525, San José', telefono: '88887777', correo: 'yolanda.fernandez@est.com', provinciaId: 1 },
  { cedula: '0099887765', nombre: 'Zacarías', apellido1: 'Gómez', apellido2: 'Sánchez', fecha_nacimiento: new Date('2019-10-31'), direccion: 'Calle 2626, Alajuela', telefono: '77776666', correo: 'zacarias.gomez@est.com', provinciaId: 2 },
  { cedula: '9988776653', nombre: 'Adrián', apellido1: 'Rodríguez', apellido2: 'Fernández', fecha_nacimiento: new Date('2020-11-30'), direccion: 'Calle 2727, Cartago', telefono: '66665555', correo: 'adrian.rodriguez@est.com', provinciaId: 3 },
  { cedula: '8877665542', nombre: 'Beatriz', apellido1: 'López', apellido2: 'Gómez', fecha_nacimiento: new Date('2021-12-31'), direccion: 'Calle 2828, Heredia', telefono: '55554444', correo: 'beatriz.lopez@est.com', provinciaId: 4 },
  { cedula: '7766554431', nombre: 'Carlos', apellido1: 'Gómez', apellido2: 'Martínez', fecha_nacimiento: new Date('2022-01-01'), direccion: 'Calle 2929, Guanacaste', telefono: '44443333', correo: 'carlos.gomez@est.com', provinciaId: 5 },
  { cedula: '6655443320', nombre: 'Diana', apellido1: 'Sánchez', apellido2: 'Rodríguez', fecha_nacimiento: new Date('2023-02-02'), direccion: 'Calle 3030, Puntarenas', telefono: '33332222', correo: 'diana.sanchez@est.com', provinciaId: 6 },
  { cedula: '9000000001', nombre: 'Esteban', apellido1: 'Romero', apellido2: 'Silva', fecha_nacimiento: new Date('2001-09-15'), direccion: 'Calle Nueva 100, San José', telefono: '55550001', correo: 'esteban.romero@est.com', provinciaId: 1 },
  { cedula: '9000000002', nombre: 'Catalina', apellido1: 'Morales', apellido2: 'Rojas', fecha_nacimiento: new Date('2002-12-05'), direccion: 'Avenida Central 200, Alajuela', telefono: '55550002', correo: 'catalina.morales@est.com', provinciaId: 2},
 
   
];


// Estudiantes
async function seedEstudiantes() {
  await prisma.estudiante.createMany({
    data: estudiantesData,
  });
}

const materiasData = [
  // 1. Ingeniería en Software (ISW-2023)
  {
    nombre: "Programación Orientada a Objetos",
    nivel: 1,
    codigo: "ISW101",
    creditos: 4,
    horas_teoricas: 3,
    horas_practicas: 2,
    PlanEstudios: ["ISW-2023"]
  },
  // 2. Administración de Empresas (ADE-2023)
  {
    nombre: "Gestión Estratégica de Negocios",
    nivel: 2,
    codigo: "ADE201",
    creditos: 3,
    horas_teoricas: 2,
    horas_practicas: 1,
    PlanEstudios: ["ADE-2023"]
  },
  // 3. Ingeniería Civil (ICV-2023)
  {
    nombre: "Diseño de Estructuras de Acero",
    nivel: 3,
    codigo: "ICV301",
    creditos: 5,
    horas_teoricas: 4,
    horas_practicas: 3,
    PlanEstudios: ["ICV-2023"]
  },
  // 4. Medicina General (MED-2023)
  {
    nombre: "Fisiopatología Avanzada",
    nivel: 2,
    codigo: "MED202",
    creditos: 6,
    horas_teoricas: 4,
    horas_practicas: 4,
    PlanEstudios: ["MED-2023"]
  },
  // 5. Arquitectura Urbana (ARQ-2023)
  {
    nombre: "Urbanismo Sostenible",
    nivel: 1,
    codigo: "ARQ101",
    creditos: 4,
    horas_teoricas: 3,
    horas_practicas: 2,
    PlanEstudios: ["ARQ-2023"]
  },
  // 6. Psicología Clínica (PSC-2023)
  {
    nombre: "Terapia Cognitivo-Conductual",
    nivel: 3,
    codigo: "PSC303",
    creditos: 4,
    horas_teoricas: 2,
    horas_practicas: 3,
    PlanEstudios: ["PSC-2023"]
  },
  // 7. Derecho Internacional (DIN-2023)
  {
    nombre: "Tratados y Derecho Global",
    nivel: 1,
    codigo: "DIN101",
    creditos: 3,
    horas_teoricas: 3,
    horas_practicas: 1,
    PlanEstudios: ["DIN-2023"]
  },
  // 8. Biología Marina (BMA-2023)
  {
    nombre: "Ecosistemas de Arrecifes",
    nivel: 2,
    codigo: "BMA202",
    creditos: 5,
    horas_teoricas: 3,
    horas_practicas: 4,
    PlanEstudios: ["BMA-2023"]
  },
  // 9. Enfermería Integral (ENF-2023)
  {
    nombre: "Cuidados Intensivos",
    nivel: 3,
    codigo: "ENF303",
    creditos: 4,
    horas_teoricas: 2,
    horas_practicas: 3,
    PlanEstudios: ["ENF-2023"]
  },
  // 10. Economía Digital (ECD-2023)
  {
    nombre: "Criptoeconomía y Blockchain",
    nivel: 2,
    codigo: "ECD202",
    creditos: 4,
    horas_teoricas: 3,
    horas_practicas: 2,
    PlanEstudios: ["ECD-2023"]
  },
  // 11. Diseño Gráfico Multimedia (DGM-2023)
  {
    nombre: "Diseño de Interfaces de Usuario",
    nivel: 1,
    codigo: "DGM101",
    creditos: 4,
    horas_teoricas: 3,
    horas_practicas: 2,
    PlanEstudios: ["DGM-2023"]
  },
  // 12. Ingeniería en Robótica (IRO-2023)
  {
    nombre: "Sistemas Autónomos Inteligentes",
    nivel: 2,
    codigo: "IRO201",
    creditos: 5,
    horas_teoricas: 3,
    horas_practicas: 3,
    PlanEstudios: ["IRO-2023"]
  },
  // 13. Marketing Estratégico (MKE-2023)
  {
    nombre: "Análisis de Mercados Globales",
    nivel: 1,
    codigo: "MKE101",
    creditos: 3,
    horas_teoricas: 2,
    horas_practicas: 1,
    PlanEstudios: ["MKE-2023"]
  },
  // 14. Nutrición Clínica (NUC-2023)
  {
    nombre: "Bioquímica Nutricional",
    nivel: 2,
    codigo: "NUC202",
    creditos: 4,
    horas_teoricas: 3,
    horas_practicas: 2,
    PlanEstudios: ["NUC-2023"]
  },
  // 15. Física Cuántica (FQC-2023)
  {
    nombre: "Mecánica Cuántica Avanzada",
    nivel: 3,
    codigo: "FQC301",
    creditos: 6,
    horas_teoricas: 4,
    horas_practicas: 3,
    PlanEstudios: ["FQC-2023"]
  },
  // 16. Historia del Arte (HDA-2023)
  {
    nombre: "Arte Renacentista Europeo",
    nivel: 1,
    codigo: "HDA101",
    creditos: 3,
    horas_teoricas: 3,
    horas_practicas: 1,
    PlanEstudios: ["HDA-2023"]
  },
  // 17. Ingeniería en Telecomunicaciones (ITL-2023)
  {
    nombre: "Redes 5G y Fibra Óptica",
    nivel: 2,
    codigo: "ITL201",
    creditos: 5,
    horas_teoricas: 3,
    horas_practicas: 3,
    PlanEstudios: ["ITL-2023"]
  },
  // 18. Educación Especial (EDE-2023)
  {
    nombre: "Psicopedagogía Inclusiva",
    nivel: 1,
    codigo: "EDE101",
    creditos: 4,
    horas_teoricas: 3,
    horas_practicas: 2,
    PlanEstudios: ["EDE-2023"]
  },
  // 19. Astronomía Observacional (ASO-2023)
  {
    nombre: "Cosmología Observacional",
    nivel: 3,
    codigo: "ASO301",
    creditos: 5,
    horas_teoricas: 4,
    horas_practicas: 2,
    PlanEstudios: ["ASO-2023"]
  },
  // 20. Química Farmacéutica (QFA-2023)
  {
    nombre: "Síntesis de Fármacos",
    nivel: 2,
    codigo: "QFA201",
    creditos: 4,
    horas_teoricas: 3,
    horas_practicas: 2,
    PlanEstudios: ["QFA-2023"]
  },
  // 21. Turismo Sostenible (TUS-2023)
  {
    nombre: "Ecoturismo y Conservación",
    nivel: 1,
    codigo: "TUS101",
    creditos: 3,
    horas_teoricas: 2,
    horas_practicas: 2,
    PlanEstudios: ["TUS-2023"]
  },
  // 22. Ingeniería en Energías Renovables (IER-2023)
  {
    nombre: "Energía Solar Fotovoltaica",
    nivel: 2,
    codigo: "IER201",
    creditos: 5,
    horas_teoricas: 3,
    horas_practicas: 3,
    PlanEstudios: ["IER-2023"]
  },
  // 23. Periodismo Investigativo (PEI-2023)
  {
    nombre: "Periodismo de Datos",
    nivel: 1,
    codigo: "PEI101",
    creditos: 4,
    horas_teoricas: 3,
    horas_practicas: 2,
    PlanEstudios: ["PEI-2023"]
  },
  // 24. Ciencias de la Computación (CDC-2023)
  {
    nombre: "Algoritmos Cuánticos",
    nivel: 3,
    codigo: "CDC301",
    creditos: 6,
    horas_teoricas: 4,
    horas_practicas: 3,
    PlanEstudios: ["CDC-2023"]
  },
  // 25. Diseño de Modas (DMO-2023)
  {
    nombre: "Patronaje Digital 3D",
    nivel: 2,
    codigo: "DMO201",
    creditos: 4,
    horas_teoricas: 2,
    horas_practicas: 3,
    PlanEstudios: ["DMO-2023"]
  },
  // 26. Geología Aplicada (GEA-2023)
  {
    nombre: "Geofísica de Reservorios",
    nivel: 3,
    codigo: "GEA301",
    creditos: 5,
    horas_teoricas: 3,
    horas_practicas: 4,
    PlanEstudios: ["GEA-2023"]
  },
  // 27. Filosofía Contemporánea (FCO-2023)
  {
    nombre: "Fenomenología Existencial",
    nivel: 1,
    codigo: "FCO101",
    creditos: 3,
    horas_teoricas: 3,
    horas_practicas: 1,
    PlanEstudios: ["FCO-2023"]
  },
  // 28. Ingeniería en Inteligencia Artificial (IIA-2023)
  {
    nombre: "Redes Neuronales Profundas",
    nivel: 2,
    codigo: "IIA201",
    creditos: 5,
    horas_teoricas: 3,
    horas_practicas: 3,
    PlanEstudios: ["IIA-2023"]
  },
  // 29. Relaciones Internacionales (REI-2023)
  {
    nombre: "Geopolítica Global",
    nivel: 1,
    codigo: "REI101",
    creditos: 4,
    horas_teoricas: 3,
    horas_practicas: 2,
    PlanEstudios: ["REI-2023"]
  },
  // 30. Odontología Integral (ODI-2023)
  {
    nombre: "Cirugía Oral Avanzada",
    nivel: 3,
    codigo: "ODI301",
    creditos: 6,
    horas_teoricas: 4,
    horas_practicas: 4,
    PlanEstudios: ["ODI-2023"]
  },
  // 31. Antropología Cultural (ANC-2023)
  {
    nombre: "Etnografía Contemporánea",
    nivel: 1,
    codigo: "ANC101",
    creditos: 3,
    horas_teoricas: 3,
    horas_practicas: 1,
    PlanEstudios: ["ANC-2023"]
  },

  // 32. Ingeniería en Nanotecnología (INA-2023)
  {
    nombre: "Nanomateriales Aplicados",
    nivel: 2,
    codigo: "INA201",
    creditos: 5,
    horas_teoricas: 3,
    horas_practicas: 3,
    PlanEstudios: ["INA-2023"]
  },

  // 33. Cine y Producción Audiovisual (CPA-2023)
  {
    nombre: "Guionismo Cinematográfico",
    nivel: 1,
    codigo: "CPA101",
    creditos: 4,
    horas_teoricas: 3,
    horas_practicas: 2,
    PlanEstudios: ["CPA-2023"]
  },

  // 34. Seguridad Informática (SEI-2023)
  {
    nombre: "Criptografía Cuántica",
    nivel: 3,
    codigo: "SEI301",
    creditos: 6,
    horas_teoricas: 4,
    horas_practicas: 3,
    PlanEstudios: ["SEI-2023"]
  },

  // 35. Derecho Corporativo (DEC-2023)
  {
    nombre: "Fusiones y Adquisiciones",
    nivel: 2,
    codigo: "DEC201",
    creditos: 4,
    horas_teoricas: 3,
    horas_practicas: 2,
    PlanEstudios: ["DEC-2023"]
  },

  // 36. Ingeniería en Logística (ILG-2023)
  {
    nombre: "Cadena de Suministro Global",
    nivel: 1,
    codigo: "ILG101",
    creditos: 4,
    horas_teoricas: 3,
    horas_practicas: 2,
    PlanEstudios: ["ILG-2023"]
  },

  // 37. Literatura Comparada (LCO-2023)
  {
    nombre: "Narrativas Transmedia",
    nivel: 1,
    codigo: "LCO101",
    creditos: 3,
    horas_teoricas: 3,
    horas_practicas: 1,
    PlanEstudios: ["LCO-2023"]
  },

  // 38. Ingeniería Biomédica (IBM-2023)
  {
    nombre: "Prótesis Inteligentes",
    nivel: 3,
    codigo: "IBM301",
    creditos: 5,
    horas_teoricas: 3,
    horas_practicas: 4,
    PlanEstudios: ["IBM-2023"]
  },

  // 39. Administración Hotelera (ADH-2023)
  {
    nombre: "Revenue Management",
    nivel: 2,
    codigo: "ADH201",
    creditos: 4,
    horas_teoricas: 2,
    horas_practicas: 2,
    PlanEstudios: ["ADH-2023"]
  },

  // 40. Ecología Urbana (ECU-2023)
  {
    nombre: "Biodiversidad en Ciudades",
    nivel: 1,
    codigo: "ECU101",
    creditos: 3,
    horas_teoricas: 2,
    horas_practicas: 2,
    PlanEstudios: ["ECU-2023"]
  },

  // 41. Ingeniería en Sistemas Embebidos (ISE-2023)
  {
    nombre: "Microcontroladores ARM",
    nivel: 2,
    codigo: "ISE201",
    creditos: 5,
    horas_teoricas: 3,
    horas_practicas: 3,
    PlanEstudios: ["ISE-2023"]
  },

  // 42. Diseño de Interiores (DSI-2023)
  {
    nombre: "Espacios Comerciales Inteligentes",
    nivel: 1,
    codigo: "DSI101",
    creditos: 4,
    horas_teoricas: 3,
    horas_practicas: 2,
    PlanEstudios: ["DSI-2023"]
  },

  // 43. Finanzas Internacionales (FII-2023)
  {
    nombre: "Riesgo Cambiario",
    nivel: 2,
    codigo: "FII201",
    creditos: 4,
    horas_teoricas: 3,
    horas_practicas: 2,
    PlanEstudios: ["FII-2023"]
  },

  // 44. Ingeniería en Materiales (IMA-2023)
  {
    nombre: "Polímeros Compuestos",
    nivel: 3,
    codigo: "IMA301",
    creditos: 5,
    horas_teoricas: 3,
    horas_practicas: 4,
    PlanEstudios: ["IMA-2023"]
  },

  // 45. Sociología Digital (SOD-2023)
  {
    nombre: "Redes Sociales y Sociedad",
    nivel: 1,
    codigo: "SOD101",
    creditos: 3,
    horas_teoricas: 2,
    horas_practicas: 1,
    PlanEstudios: ["SOD-2023"]
  },

  // 46. Ingeniería en Petróleo (IPE-2023)
  {
    nombre: "Perforación Offshore",
    nivel: 2,
    codigo: "IPE201",
    creditos: 5,
    horas_teoricas: 3,
    horas_practicas: 3,
    PlanEstudios: ["IPE-2023"]
  },

  // 47. Musicología Aplicada (MUA-2023)
  {
    nombre: "Tecnología en Producción Musical",
    nivel: 1,
    codigo: "MUA101",
    creditos: 4,
    horas_teoricas: 3,
    horas_practicas: 2,
    PlanEstudios: ["MUA-2023"]
  },

  // 48. Derecho Ambiental (DAM-2023)
  {
    nombre: "Legislación Climática Global",
    nivel: 2,
    codigo: "DAM201",
    creditos: 4,
    horas_teoricas: 3,
    horas_practicas: 2,
    PlanEstudios: ["DAM-2023"]
  },

  // 49. Ingeniería en Alimentos (IAL-2023)
  {
    nombre: "Tecnología de Conservación",
    nivel: 3,
    codigo: "IAL301",
    creditos: 5,
    horas_teoricas: 3,
    horas_practicas: 4,
    PlanEstudios: ["IAL-2023"]
  },

  // 50. Traducción e Interpretación (TRI-2023)
  {
    nombre: "Traducción Jurídica Especializada",
    nivel: 2,
    codigo: "TRI201",
    creditos: 4,
    horas_teoricas: 3,
    horas_practicas: 2,
    PlanEstudios: ["TRI-2023"]
  },
  // 51. Ingeniería en Transporte (ITR-2023)
  {
    nombre: "Movilidad Urbana Sostenible",
    nivel: 1,
    codigo: "ITR101",
    creditos: 4,
    horas_teoricas: 3,
    horas_practicas: 2,
    PlanEstudios: ["ITR-2023"]
  },

  // 52. Diseño Industrial (DID-2023)
  {
    nombre: "Ergonomía Avanzada",
    nivel: 2,
    codigo: "DID201",
    creditos: 4,
    horas_teoricas: 2,
    horas_practicas: 3,
    PlanEstudios: ["DID-2023"]
  },

  // 53. Ciencias Políticas (CPO-2023)
  {
    nombre: "Teoría del Estado Moderno",
    nivel: 1,
    codigo: "CPO101",
    creditos: 3,
    horas_teoricas: 3,
    horas_practicas: 1,
    PlanEstudios: ["CPO-2023"]
  },

  // 54. Ingeniería en Sonido (ISO-2023)
  {
    nombre: "Acústica Arquitectónica",
    nivel: 2,
    codigo: "ISO201",
    creditos: 5,
    horas_teoricas: 3,
    horas_practicas: 3,
    PlanEstudios: ["ISO-2023"]
  },

  // 55. Arte Digital (ADI-2023)
  {
    nombre: "Animación 3D con Blender",
    nivel: 1,
    codigo: "ADI101",
    creditos: 4,
    horas_teoricas: 2,
    horas_practicas: 3,
    PlanEstudios: ["ADI-2023"]
  },

  // 56. Bioquímica Clínica (BQC-2023)
  {
    nombre: "Diagnóstico Molecular",
    nivel: 3,
    codigo: "BQC301",
    creditos: 6,
    horas_teoricas: 4,
    horas_practicas: 3,
    PlanEstudios: ["BQC-2023"]
  },

  // 57. Ingeniería en Seguridad Laboral (ISL-2023)
  {
    nombre: "Prevención de Riesgos Industriales",
    nivel: 2,
    codigo: "ISL201",
    creditos: 4,
    horas_teoricas: 2,
    horas_practicas: 2,
    PlanEstudios: ["ISL-2023"]
  },

  // 58. Fotografía Profesional (FOP-2023)
  {
    nombre: "Fotoperiodismo Ético",
    nivel: 1,
    codigo: "FOP101",
    creditos: 3,
    horas_teoricas: 2,
    horas_practicas: 2,
    PlanEstudios: ["FOP-2023"]
  },

  // 59. Economía Circular (ECC-2023)
  {
    nombre: "Modelos de Negocio Circulares",
    nivel: 1,
    codigo: "ECC101",
    creditos: 4,
    horas_teoricas: 3,
    horas_practicas: 2,
    PlanEstudios: ["ECC-2023"]
  },

  // 60. Ingeniería en Realidad Virtual (IRV-2023)
  {
    nombre: "Desarrollo de Entornos Inmersivos",
    nivel: 2,
    codigo: "IRV201",
    creditos: 5,
    horas_teoricas: 3,
    horas_practicas: 3,
    PlanEstudios: ["IRV-2023"]
  },
  // 61. Derecho Penal (DPE-2023)
  {
    nombre: "Procesos Penales Contemporáneos",
    nivel: 1,
    codigo: "DPE101",
    creditos: 3,
    horas_teoricas: 3,
    horas_practicas: 1,
    PlanEstudios: ["DPE-2023"]
  },

  // 62. Ingeniería en Agricultura (IAG-2023)
  {
    nombre: "Agricultura de Precisión con Drones",
    nivel: 2,
    codigo: "IAG201",
    creditos: 4,
    horas_teoricas: 2,
    horas_practicas: 2,
    PlanEstudios: ["IAG-2023"]
  },

  // 63. Neurociencia Cognitiva (NEC-2023)
  {
    nombre: "Neuroplasticidad y Aprendizaje",
    nivel: 3,
    codigo: "NEC301",
    creditos: 5,
    horas_teoricas: 3,
    horas_practicas: 3,
    PlanEstudios: ["NEC-2023"]
  },

  // 64. Diseño de Videojuegos (DVI-2023)
  {
    nombre: "Narrativa Interactiva en Unity",
    nivel: 1,
    codigo: "DVI101",
    creditos: 4,
    horas_teoricas: 3,
    horas_practicas: 2,
    PlanEstudios: ["DVI-2023"]
  },

  // 65. Ingeniería en Calidad (ICA-2023)
  {
    nombre: "Control Estadístico de Procesos",
    nivel: 2,
    codigo: "ICA201",
    creditos: 4,
    horas_teoricas: 2,
    horas_practicas: 2,
    PlanEstudios: ["ICA-2023"]
  },

  // 66. Lingüística Computacional (LIC-2023)
  {
    nombre: "Procesamiento del Lenguaje Natural",
    nivel: 3,
    codigo: "LIC301",
    creditos: 5,
    horas_teoricas: 3,
    horas_practicas: 3,
    PlanEstudios: ["LIC-2023"]
  },

  // 67. Ingeniería en Textiles (ITX-2023)
  {
    nombre: "Fibras Inteligentes",
    nivel: 2,
    codigo: "ITX201",
    creditos: 4,
    horas_teoricas: 2,
    horas_practicas: 3,
    PlanEstudios: ["ITX-2023"]
  },

  // 68. Física Médica (FIM-2023)
  {
    nombre: "Radioprotección Clínica",
    nivel: 3,
    codigo: "FIM301",
    creditos: 6,
    horas_teoricas: 4,
    horas_practicas: 3,
    PlanEstudios: ["FIM-2023"]
  },

  // 69. Ingeniería en Procesos (IPR-2023)
  {
    nombre: "Optimización de Flujos Industriales",
    nivel: 2,
    codigo: "IPR201",
    creditos: 5,
    horas_teoricas: 3,
    horas_practicas: 3,
    PlanEstudios: ["IPR-2023"]
  },

  // 70. Derecho Financiero (DEF-2023)
  {
    nombre: "Regulación de Mercados de Capitales",
    nivel: 1,
    codigo: "DEF101",
    creditos: 3,
    horas_teoricas: 3,
    horas_practicas: 1,
    PlanEstudios: ["DEF-2023"]
  },

  // 71. Ingeniería en Acústica (IAC-2023)
  {
    nombre: "Diseño de Estudios de Grabación",
    nivel: 2,
    codigo: "IAC201",
    creditos: 4,
    horas_teoricas: 2,
    horas_practicas: 3,
    PlanEstudios: ["IAC-2023"]
  },

  // 72. Ciberseguridad Avanzada (CIA-2023)
  {
    nombre: "Hacking Ético Avanzado",
    nivel: 3,
    codigo: "CIA301",
    creditos: 6,
    horas_teoricas: 4,
    horas_practicas: 3,
    PlanEstudios: ["CIA-2023"]
  },

  // 73. Ingeniería en Impresión 3D (I3D-2023)
  {
    nombre: "Bioimpresión de Tejidos",
    nivel: 2,
    codigo: "I3D201",
    creditos: 5,
    horas_teoricas: 3,
    horas_practicas: 3,
    PlanEstudios: ["I3D-2023"]
  },

  // 74. Gestión Cultural (GEC-2023)
  {
    nombre: "Políticas Culturales Globales",
    nivel: 1,
    codigo: "GEC101",
    creditos: 3,
    horas_teoricas: 3,
    horas_practicas: 1,
    PlanEstudios: ["GEC-2023"]
  },

  // 75. Ingeniería en Drones (IDR-2023)
  {
    nombre: "Diseño de Drones Autónomos",
    nivel: 2,
    codigo: "IDR201",
    creditos: 5,
    horas_teoricas: 3,
    horas_practicas: 3,
    PlanEstudios: ["IDR-2023"]
  },

  // 76. Bioinformática (BIO-2023)
  {
    nombre: "Análisis de Genomas Masivos",
    nivel: 3,
    codigo: "BIO301",
    creditos: 6,
    horas_teoricas: 4,
    horas_practicas: 4,
    PlanEstudios: ["BIO-2023"]
  },

  // 77. Ingeniería en Automatización (IAU-2023)
  {
    nombre: "Robótica Colaborativa",
    nivel: 2,
    codigo: "IAU201",
    creditos: 5,
    horas_teoricas: 3,
    horas_practicas: 3,
    PlanEstudios: ["IAU-2023"]
  },

  // 78. Derecho Tecnológico (DET-2023)
  {
    nombre: "Legislación de Inteligencia Artificial",
    nivel: 1,
    codigo: "DET101",
    creditos: 3,
    horas_teoricas: 3,
    horas_practicas: 1,
    PlanEstudios: ["DET-2023"]
  },

  // 79. Ingeniería en Sustentabilidad (ISU-2023)
  {
    nombre: "Energías Renovables en Edificios",
    nivel: 2,
    codigo: "ISU201",
    creditos: 4,
    horas_teoricas: 2,
    horas_practicas: 3,
    PlanEstudios: ["ISU-2023"]
  },

  // 80. Arqueología Digital (ARD-2023)
  {
    nombre: "Reconstrucción 3D de Sitios Históricos",
    nivel: 1,
    codigo: "ARD101",
    creditos: 4,
    horas_teoricas: 3,
    horas_practicas: 2,
    PlanEstudios: ["ARD-2023"]
  },

  // 81. Ingeniería en Realidad Aumentada (IRA-2023)
  {
    nombre: "Desarrollo con ARKit y ARCore",
    nivel: 2,
    codigo: "IRA201",
    creditos: 5,
    horas_teoricas: 3,
    horas_practicas: 3,
    PlanEstudios: ["IRA-2023"]
  },

  // 82. Genómica Aplicada (GEM-2023)
  {
    nombre: "Edición Genómica CRISPR",
    nivel: 3,
    codigo: "GEM301",
    creditos: 6,
    horas_teoricas: 4,
    horas_practicas: 4,
    PlanEstudios: ["GEM-2023"]
  },

  // 83. Ingeniería en Blockchain (IBL-2023)
  {
    nombre: "Smart Contracts en Solidity",
    nivel: 2,
    codigo: "IBL201",
    creditos: 5,
    horas_teoricas: 3,
    horas_practicas: 3,
    PlanEstudios: ["IBL-2023"]
  },

  // 84. Derecho Deportivo (DED-2023)
  {
    nombre: "Contratos de Patrocinio Deportivo",
    nivel: 1,
    codigo: "DED101",
    creditos: 3,
    horas_teoricas: 3,
    horas_practicas: 1,
    PlanEstudios: ["DED-2023"]
  },

  // 85. Ingeniería en Meteorología (IME-2023)
  {
    nombre: "Modelos Climáticos Globales",
    nivel: 3,
    codigo: "IME301",
    creditos: 6,
    horas_teoricas: 4,
    horas_practicas: 4,
    PlanEstudios: ["IME-2023"]
  },

  // 86. Filosofía de la Ciencia (FDC-2023)
  {
    nombre: "Epistemología Cuántica",
    nivel: 1,
    codigo: "FDC101",
    creditos: 3,
    horas_teoricas: 3,
    horas_practicas: 1,
    PlanEstudios: ["FDC-2023"]
  },

  // 87. Ingeniería en Espacios Inteligentes (IEI-2023)
  {
    nombre: "Domótica Avanzada",
    nivel: 2,
    codigo: "IEI201",
    creditos: 5,
    horas_teoricas: 3,
    horas_practicas: 3,
    PlanEstudios: ["IEI-2023"]
  },

  // 88. Psicología Organizacional (PSO-2023)
  {
    nombre: "Liderazgo en Equipos Remotos",
    nivel: 1,
    codigo: "PSO101",
    creditos: 3,
    horas_teoricas: 2,
    horas_practicas: 1,
    PlanEstudios: ["PSO-2023"]
  },

  // 89. Ingeniería en Optoelectrónica (IOP-2023)
  {
    nombre: "Diseño de Sensores Ópticos",
    nivel: 3,
    codigo: "IOP301",
    creditos: 6,
    horas_teoricas: 4,
    horas_practicas: 3,
    PlanEstudios: ["IOP-2023"]
  },

  // 90. Derecho Espacial (DES-2023)
  {
    nombre: "Legislación de Exploración Lunar",
    nivel: 2,
    codigo: "DES201",
    creditos: 4,
    horas_teoricas: 3,
    horas_practicas: 2,
    PlanEstudios: ["DES-2023"]
  },

  // 91. Ingeniería en Simulaciones (ISI-2023)
  {
    nombre: "Modelado de Fenómenos Caóticos",
    nivel: 3,
    codigo: "ISI301",
    creditos: 5,
    horas_teoricas: 3,
    horas_practicas: 4,
    PlanEstudios: ["ISI-2023"]
  },

  // 92. Astrobiología (ASB-2023)
  {
    nombre: "Búsqueda de Vida Extraterrestre",
    nivel: 2,
    codigo: "ASB201",
    creditos: 4,
    horas_teoricas: 3,
    horas_practicas: 2,
    PlanEstudios: ["ASB-2023"]
  },

  // 93. Ingeniería en Wearables (IWE-2023)
  {
    nombre: "Dispositivos Biométricos Vestibles",
    nivel: 1,
    codigo: "IWE101",
    creditos: 4,
    horas_teoricas: 3,
    horas_practicas: 2,
    PlanEstudios: ["IWE-2023"]
  },

  // 94. Derecho Genómico (DGE-2023)
  {
    nombre: "Ética en la Edición Genética",
    nivel: 3,
    codigo: "DGE301",
    creditos: 5,
    horas_teoricas: 3,
    horas_practicas: 3,
    PlanEstudios: ["DGE-2023"]
  },

  // 95. Ingeniería en Fotónica (IFO-2023)
  {
    nombre: "Comunicaciones por Fibra Cuántica",
    nivel: 2,
    codigo: "IFO201",
    creditos: 5,
    horas_teoricas: 3,
    horas_practicas: 3,
    PlanEstudios: ["IFO-2023"]
  },

  // 96. Psicología Forense (PSF-2023)
  {
    nombre: "Perfilación Criminal Avanzada",
    nivel: 3,
    codigo: "PSF301",
    creditos: 4,
    horas_teoricas: 2,
    horas_practicas: 3,
    PlanEstudios: ["PSF-2023"]
  },

  // 97. Ingeniería en Grafeno (IGR-2023)
  {
    nombre: "Aplicaciones del Grafeno en Electrónica",
    nivel: 2,
    codigo: "IGR201",
    creditos: 5,
    horas_teoricas: 3,
    horas_practicas: 3,
    PlanEstudios: ["IGR-2023"]
  },

  // 98. Derecho Cibernético (DCI-2023)
  {
    nombre: "Ciberdelitos y Jurisdicción Global",
    nivel: 1,
    codigo: "DCI101",
    creditos: 3,
    horas_teoricas: 3,
    horas_practicas: 1,
    PlanEstudios: ["DCI-2023"]
  },

  // 99. Ingeniería en Exoesqueletos (IEX-2023)
  {
    nombre: "Exoesqueletos para Rehabilitación",
    nivel: 3,
    codigo: "IEX301",
    creditos: 6,
    horas_teoricas: 4,
    horas_practicas: 4,
    PlanEstudios: ["IEX-2023"]
  },

  // 100. Bioingeniería de Tejidos (BIT-2023)
  {
    nombre: "Ingeniería de Órganos Artificiales",
    nivel: 3,
    codigo: "BIT301",
    creditos: 6,
    horas_teoricas: 4,
    horas_practicas: 4,
    PlanEstudios: ["BIT-2023"]
  }
];


// Materias
async function seedMaterias() {
  for (const materia of materiasData) {
    await prisma.materias.create({
      data: {
        nombre: materia.nombre,
        nivel: materia.nivel,
        codigo: materia.codigo,
        creditos: materia.creditos,
        horas_teoricas: materia.horas_teoricas,
        horas_practicas: materia.horas_practicas,
        PlanEstudios: {
          connect: materia.PlanEstudios.map(codigo => ({ codigo }))
        }
      }
    });
  }
}

// PLANES DE ESTUDIO
const planesData = [
  { carrera: 'Ingeniería en Software', codigo: 'ISW-2023' },
  { carrera: 'Administración de Empresas', codigo: 'ADE-2023' },
  { carrera: 'Ingeniería Civil', codigo: 'ICV-2023' },
  { carrera: 'Medicina General', codigo: 'MED-2023' },
  { carrera: 'Arquitectura Urbana', codigo: 'ARQ-2023' },
  { carrera: 'Psicología Clínica', codigo: 'PSC-2023' },
  { carrera: 'Derecho Internacional', codigo: 'DIN-2023' },
  { carrera: 'Biología Marina', codigo: 'BMA-2023' },
  { carrera: 'Enfermería Integral', codigo: 'ENF-2023' },
  { carrera: 'Economía Digital', codigo: 'ECD-2023' },
  { carrera: 'Diseño Gráfico Multimedia', codigo: 'DGM-2023' },
  { carrera: 'Ingeniería en Robótica', codigo: 'IRO-2023' },
  { carrera: 'Marketing Estratégico', codigo: 'MKE-2023' },
  { carrera: 'Nutrición Clínica', codigo: 'NUC-2023' },
  { carrera: 'Física Cuántica', codigo: 'FQC-2023' },
  { carrera: 'Historia del Arte', codigo: 'HDA-2023' },
  { carrera: 'Ingeniería en Telecomunicaciones', codigo: 'ITL-2023' },
  { carrera: 'Educación Especial', codigo: 'EDE-2023' },
  { carrera: 'Astronomía Observacional', codigo: 'ASO-2023' },
  { carrera: 'Química Farmacéutica', codigo: 'QFA-2023' },
  { carrera: 'Turismo Sostenible', codigo: 'TUS-2023' },
  { carrera: 'Ingeniería en Energías Renovables', codigo: 'IER-2023' },
  { carrera: 'Periodismo Investigativo', codigo: 'PEI-2023' },
  { carrera: 'Ciencias de la Computación', codigo: 'CDC-2023' },
  { carrera: 'Diseño de Modas', codigo: 'DMO-2023' },
  { carrera: 'Geología Aplicada', codigo: 'GEA-2023' },
  { carrera: 'Filosofía Contemporánea', codigo: 'FCO-2023' },
  { carrera: 'Ingeniería en Inteligencia Artificial', codigo: 'IIA-2023' },
  { carrera: 'Relaciones Internacionales', codigo: 'REI-2023' },
  { carrera: 'Odontología Integral', codigo: 'ODI-2023' },
  { carrera: 'Antropología Cultural', codigo: 'ANC-2023' },
  { carrera: 'Ingeniería en Nanotecnología', codigo: 'INA-2023' },
  { carrera: 'Cine y Producción Audiovisual', codigo: 'CPA-2023' },
  { carrera: 'Seguridad Informática', codigo: 'SEI-2023' },
  { carrera: 'Derecho Corporativo', codigo: 'DEC-2023' },
  { carrera: 'Ingeniería en Logística', codigo: 'ILG-2023' },
  { carrera: 'Literatura Comparada', codigo: 'LCO-2023' },
  { carrera: 'Ingeniería Biomédica', codigo: 'IBM-2023' },
  { carrera: 'Administración Hotelera', codigo: 'ADH-2023' },
  { carrera: 'Ecología Urbana', codigo: 'ECU-2023' },
  { carrera: 'Ingeniería en Sistemas Embebidos', codigo: 'ISE-2023' },
  { carrera: 'Diseño de Interiores', codigo: 'DSI-2023' },
  { carrera: 'Finanzas Internacionales', codigo: 'FII-2023' },
  { carrera: 'Ingeniería en Materiales', codigo: 'IMA-2023' },
  { carrera: 'Sociología Digital', codigo: 'SOD-2023' },
  { carrera: 'Ingeniería en Petróleo', codigo: 'IPE-2023' },
  { carrera: 'Musicología Aplicada', codigo: 'MUA-2023' },
  { carrera: 'Derecho Ambiental', codigo: 'DAM-2023' },
  { carrera: 'Ingeniería en Alimentos', codigo: 'IAL-2023' },
  { carrera: 'Traducción e Interpretación', codigo: 'TRI-2023' },
  { carrera: 'Ingeniería en Transporte', codigo: 'ITR-2023' },
  { carrera: 'Diseño Industrial', codigo: 'DID-2023' },
  { carrera: 'Ciencias Políticas', codigo: 'CPO-2023' },
  { carrera: 'Ingeniería en Sonido', codigo: 'ISO-2023' },
  { carrera: 'Arte Digital', codigo: 'ADI-2023' },
  { carrera: 'Bioquímica Clínica', codigo: 'BQC-2023' },
  { carrera: 'Ingeniería en Seguridad Laboral', codigo: 'ISL-2023' },
  { carrera: 'Fotografía Profesional', codigo: 'FOP-2023' },
  { carrera: 'Economía Circular', codigo: 'ECC-2023' },
  { carrera: 'Ingeniería en Realidad Virtual', codigo: 'IRV-2023' },
  { carrera: 'Derecho Penal', codigo: 'DPE-2023' },
  { carrera: 'Ingeniería en Agricultura', codigo: 'IAG-2023' },
  { carrera: 'Neurociencia Cognitiva', codigo: 'NEC-2023' },
  { carrera: 'Diseño de Videojuegos', codigo: 'DVI-2023' },
  { carrera: 'Ingeniería en Calidad', codigo: 'ICA-2023' },
  { carrera: 'Lingüística Computacional', codigo: 'LIC-2023' },
  { carrera: 'Ingeniería en Textiles', codigo: 'ITX-2023' },
  { carrera: 'Física Médica', codigo: 'FIM-2023' },
  { carrera: 'Ingeniería en Procesos', codigo: 'IPR-2023' },
  { carrera: 'Derecho Financiero', codigo: 'DEF-2023' },
  { carrera: 'Ingeniería en Acústica', codigo: 'IAC-2023' },
  { carrera: 'Ciberseguridad Avanzada', codigo: 'CIA-2023' },
  { carrera: 'Ingeniería en Impresión 3D', codigo: 'I3D-2023' },
  { carrera: 'Gestión Cultural', codigo: 'GEC-2023' },
  { carrera: 'Ingeniería en Drones', codigo: 'IDR-2023' },
  { carrera: 'Bioinformática', codigo: 'BIO-2023' },
  { carrera: 'Ingeniería en Automatización', codigo: 'IAU-2023' },
  { carrera: 'Derecho Tecnológico', codigo: 'DET-2023' },
  { carrera: 'Ingeniería en Sustentabilidad', codigo: 'ISU-2023' },
  { carrera: 'Arqueología Digital', codigo: 'ARD-2023' },
  { carrera: 'Ingeniería en Realidad Aumentada', codigo: 'IRA-2023' },
  { carrera: 'Genómica Aplicada', codigo: 'GEM-2023' },
  { carrera: 'Ingeniería en Blockchain', codigo: 'IBL-2023' },
  { carrera: 'Derecho Deportivo', codigo: 'DED-2023' },
  { carrera: 'Ingeniería en Meteorología', codigo: 'IME-2023' },
  { carrera: 'Filosofía de la Ciencia', codigo: 'FDC-2023' },
  { carrera: 'Ingeniería en Espacios Inteligentes', codigo: 'IEI-2023' },
  { carrera: 'Psicología Organizacional', codigo: 'PSO-2023' },
  { carrera: 'Ingeniería en Optoelectrónica', codigo: 'IOP-2023' },
  { carrera: 'Derecho Espacial', codigo: 'DES-2023' },
  { carrera: 'Ingeniería en Simulaciones', codigo: 'ISI-2023' },
  { carrera: 'Astrobiología', codigo: 'ASB-2023' },
  { carrera: 'Ingeniería en Wearables', codigo: 'IWE-2023' },
  { carrera: 'Derecho Genómico', codigo: 'DGE-2023' },
  { carrera: 'Ingeniería en Fotónica', codigo: 'IFO-2023' },
  { carrera: 'Psicología Forense', codigo: 'PSF-2023' },
  { carrera: 'Ingeniería en Grafeno', codigo: 'IGR-2023' },
  { carrera: 'Derecho Cibernético', codigo: 'DCI-2023' },
  { carrera: 'Ingeniería en Exoesqueletos', codigo: 'IEX-2023' },
  { carrera: 'Bioingeniería de Tejidos', codigo: 'BIT-2023' },
];

// Planes de estudio
async function seedPlanEstudios() {
  await prisma.planEstudios.createMany({
    data: planesData,
  });
}
// OFERTA ACADÉMICA
const ofertaData = [
  { periodo: '2024-Q1' },
  { periodo: '2024-Q2' },
  { periodo: '2024-Q3' },
  { periodo: '2024-Q4' },
  { periodo: '2025-Q1' },
  { periodo: '2025-Q2' },
  { periodo: '2025-Q3' },
  { periodo: '2025-Q4' },
  { periodo: '2026-Q1' },
  { periodo: '2026-Q2' },
  { periodo: '2026-Q3' },
  { periodo: '2026-Q4' },
  { periodo: '2027-Q1' },
  { periodo: '2027-Q2' },
  { periodo: '2027-Q3' },
  { periodo: '2027-Q4' },
  { periodo: '2028-Q1' },
  { periodo: '2028-Q2' },
  { periodo: '2028-Q3' },
  { periodo: '2028-Q4' },
  { periodo: '2029-Q1' },
  { periodo: '2029-Q2' },
  { periodo: '2029-Q3' },
  { periodo: '2029-Q4' },
  { periodo: '2030-Q1' },
  { periodo: '2030-Q2' },
  { periodo: '2030-Q3' },
  { periodo: '2030-Q4' },
  { periodo: '2031-Q1' },
  { periodo: '2031-Q2' },
  { periodo: '2031-Q3' },
  { periodo: '2031-Q4' },
  { periodo: '2032-Q1' },
  { periodo: '2032-Q2' },
  { periodo: '2032-Q3' },
  { periodo: '2032-Q4' },
  { periodo: '2033-Q1' },
  { periodo: '2033-Q2' },
  { periodo: '2033-Q3' },
  { periodo: '2033-Q4' },
  { periodo: '2034-Q1' },
  { periodo: '2034-Q2' },
  { periodo: '2034-Q3' },
  { periodo: '2034-Q4' },
  { periodo: '2035-Q1' },
  { periodo: '2035-Q2' },
  { periodo: '2035-Q3' },
  { periodo: '2035-Q4' },
  { periodo: '2036-Q1' },
  { periodo: '2036-Q2' },
  { periodo: '2036-Q3' },
  { periodo: '2036-Q4' },
  { periodo: '2037-Q1' },
  { periodo: '2037-Q2' },
  { periodo: '2037-Q3' },
  { periodo: '2037-Q4' },
  { periodo: '2038-Q1' },
  { periodo: '2038-Q2' },
  { periodo: '2038-Q3' },
  { periodo: '2038-Q4' },
  { periodo: '2039-Q1' },
  { periodo: '2039-Q2' },
  { periodo: '2039-Q3' },
  { periodo: '2039-Q4' },
  { periodo: '2040-Q1' },
  { periodo: '2040-Q2' },
  { periodo: '2040-Q3' },
  { periodo: '2040-Q4' },
  { periodo: '2041-Q1' },
  { periodo: '2041-Q2' },
  { periodo: '2041-Q3' },
  { periodo: '2041-Q4' },
  { periodo: '2042-Q1' },
  { periodo: '2042-Q2' },
  { periodo: '2042-Q3' },
  { periodo: '2042-Q4' },
  { periodo: '2043-Q1' },
  { periodo: '2043-Q2' },
  { periodo: '2043-Q3' },
  { periodo: '2043-Q4' },
  { periodo: '2044-Q1' },
  { periodo: '2044-Q2' },
  { periodo: '2044-Q3' },
  { periodo: '2044-Q4' },
  { periodo: '2045-Q1' },
  { periodo: '2045-Q2' },
  { periodo: '2045-Q3' },
  { periodo: '2045-Q4' },
  { periodo: '2046-Q1' },
  { periodo: '2046-Q2' },
  { periodo: '2046-Q3' },
  { periodo: '2046-Q4' },
  { periodo: '2047-Q1' },
  { periodo: '2047-Q2' },
  { periodo: '2047-Q3' },
  { periodo: '2047-Q4' },
  { periodo: '2048-Q1' },
  { periodo: '2048-Q2' },
  { periodo: '2048-Q3' },
  { periodo: '2048-Q4' },
];
// Oferta académica
async function seedOfertaAcademica() {
  await prisma.ofertaAcademica.createMany({
    data: ofertaData,
  });
}

// Cursos
async function seedCursos() {
  await prisma.cursos.createMany({
    data: cursosData,
  });
}


// CURSOS
const cursosData = Array.from({ length: 100 }, (_, index) => {
  const planEstudioId = index + 1;
  const docenteId = index + 1;
  const ofertaAcademicaid = index + 1;
  const periodo = ofertaData[index].periodo; // Periodos desde "2024-Q1" hasta "2048-Q4"
  const materia = materiasData[index]; // Asignar 1 materia por curso

  // Generar horarios variados
  const dias = index % 2 === 0 ? "Lunes y Miércoles" : "Martes y Jueves";
  const hora = index % 4 < 2 ? "8:00-10:00" : "14:00-16:00";

  return {
    planEstudioId,
    nombre: materia.nombre,
    codigo: `${materia.codigo}-${periodo.replace("-", "")}`, // Ej: "ISW101-2024Q1"
    docenteId,
    horario: `${dias} ${hora}`,
    aula: `A-${200 + index}`, // A-201, A-202, ..., A-300
    periodo,
    ofertaAcademicaid,
  };
});

/*
// CURSOS
const cursosData = [
  {
    planEstudioId: 1,
    nombre: 'Introducción a la Programación',
    codigo: 'PROG-101-2024',
    docenteId: 1,
    horario: 'Lunes y Miércoles 8:00-10:00',
    aula: 'A-201',
    periodo: '2024-Q1',
    ofertaAcademicaid: 1
  },
  // Agregar más cursos...
];
*/
// HISTÓRICO ACADÉMICO
const historicoData = Array.from({ length: 100 }, (_, index) => {
  const curso = cursosData[index];
  

  const randomStudentIndex = Math.floor(Math.random() * estudiantesData.length);

  const estudianteId = randomStudentIndex + 1;


  const nota_obtenida = parseFloat((Math.random() * 40 + 60).toFixed(1));

  return {
    estudianteId,       
    cursoId: index + 1, 
    nota_obtenida,      
    periodo: curso.periodo 
  };
});
/*
const historicoData = [
  { estudianteId: 1, cursoId: 1, nota_obtenida: 85.5, periodo: '2024-Q1' },
  // Agregar más registros...
];
*/
// Histórico académico
async function seedHistoricoAcademico() {
  await prisma.historicoAcademico.createMany({
    data: historicoData,
  });
}

// USUARIOS
const usuariosData = [
  // Mapear docentes (primeros 100)
  ...docentesData.map(docente => ({
    username: docente.correo,
    password: 'Password123',
    rol: Rol.DOCENTE,
    estado: true
  })),
  
  // Mapear estudiantes (siguientes 100)
  ...estudiantesData.map(estudiante => ({
    username: estudiante.correo,
    password: 'Password123',
    rol: Rol.ESTUDIANTE,
    estado: true
  })),
  { username: 'kcamposgo90@gmail.com', password: 'Password123', rol: Rol.ADMINISTRADOR, estado: true }
];

  // Usuarios 
async function seedUsuarios() {
  await prisma.usuarios.createMany({
    data: usuariosData,
  });
}



// AUDITORÍA
const auditoriaData = [
  // Para docentes (primeros 100 usuarios)
  ...Array.from({length: 100}, (_, i) => ({
    usuarioId: i + 1, // IDs 1-100
    accion: 'CREACION_DOCENTE',
    fecha_hora: new Date(),
    modulo_afectado: 'DOCENTES'
  })),
  
  // Para estudiantes (siguientes 100 usuarios)
  ...Array.from({length: 100}, (_, i) => ({
    usuarioId: i + 101, // IDs 101-200
    accion: 'CREACION_ESTUDIANTE',
    fecha_hora: new Date(),
    modulo_afectado: 'ESTUDIANTES'
  }))
];

// Agregar el registro extra para el administrador
auditoriaData.push({
  usuarioId: 201, // Asumiendo que el admin es el usuario 201
  accion: 'CREACION_ADMINISTRADOR',
  fecha_hora: new Date(),
  modulo_afectado: 'ADMINISTRADORES'
});

docentesData.push(
{ cedula: '206750567', nombre: 'Kevin', apellido1: 'Campos', apellido2: 'Gonzalez', direccion: 'Santa Barbara centro', fecha_nacimiento: new Date('1990-08-05'), telefono: '61509057', correo: 'kcamposgo90@gmail.com', provinciaId: 4 }
); 
estudiantesData.push(
{ cedula: '206750567', nombre: 'Kevin', apellido1: 'Campos', apellido2: 'Gonzalez', fecha_nacimiento: new Date('1990-08-05'), direccion: 'Santa Barbara centro', telefono: '61509057', correo: 'kcamposgo90@gmail.com', provinciaId: 4 }
);

/*
const auditoriaData = [
  { usuarioId: 1, accion: 'LOGIN', fecha_hora: new Date(), modulo_afectado: 'Autenticación' },
  // Agregar más registros...
];
*/
 // Auditoria 
async function seedAuditoria() {
  await prisma.auditoria.createMany({
    data: auditoriaData,
  });
}

async function main() {
  //Provincias
  await seedSanJose()
  await seedOtherProvincias()
  await seedCantones()
  await seedDistritos()

  //Docentes
  await seedDocentes()

  // Estudiantes
  await seedEstudiantes()

  // Planes de estudio
  await seedPlanEstudios()

  // Materias
  await seedMaterias()

  // Oferta académica
  await seedOfertaAcademica()

  // Cursos
  await seedCursos()

  // Histórico académico
  await seedHistoricoAcademico()

  // Usuarios 
  await seedUsuarios()

  // Auditoria 
  await seedAuditoria()
}

/* Codigo dado por el profe intacto para estudio
async function main() {
  await prisma.provincias.create({
    data: {
      Provincia: 'Alajuela',
      FechaDeCreacion: new Date()
    }
  })


  await prisma.provincias.createMany({
    data: [
      {Provincia: 'Cartago'},
      {Provincia: 'Guanacaste'},
      {Provincia: 'Heredia'},
      {Provincia: 'Limón'},
      {Provincia: 'Puntarenas'},
      // {Provincia: 'San José'},
    ],
  })


  await prisma.cantones.create({
    data: {
      ProvinciaId: 1,
      Canton: 'Alajuela'
    }
  })


  await prisma.cantones.createMany({
    data: [
      {ProvinciaId: 1, Canton: 'Grecia'},
      {ProvinciaId: 4, Canton: 'Hospital'},
    ],
  })


  await prisma.distritos.createMany({
    data: [
      {CantonId: 1, Distrito: 'Alajuela'},
      {CantonId: 2, Distrito: 'Desamparados', Valoracion: 'Excelente'},
    ],
  })
}
*/

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })