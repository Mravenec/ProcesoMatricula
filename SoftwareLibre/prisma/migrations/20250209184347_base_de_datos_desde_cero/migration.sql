-- CreateTable
CREATE TABLE `Provincias` (
    `ProvinciaId` INTEGER NOT NULL AUTO_INCREMENT,
    `Provincia` VARCHAR(191) NOT NULL,
    `FechaDeCreacion` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `ActualizadoEn` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`ProvinciaId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cantones` (
    `CantonId` INTEGER NOT NULL AUTO_INCREMENT,
    `Canton` VARCHAR(191) NOT NULL,
    `ProvinciaId` INTEGER NOT NULL,
    `FechaDeCreacion` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `ActualizadoEn` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`CantonId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Distritos` (
    `DistritoId` INTEGER NOT NULL AUTO_INCREMENT,
    `Distrito` VARCHAR(191) NOT NULL,
    `CantonId` INTEGER NOT NULL,
    `FechaDeCreacion` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `ActualizadoEn` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `Valoracion` ENUM('Excelente', 'Bueno', 'Regular') NOT NULL DEFAULT 'Bueno',

    PRIMARY KEY (`DistritoId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Usuarios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `rol` ENUM('ADMINISTRADOR', 'DOCENTE', 'ESTUDIANTE') NOT NULL,
    `estado` BOOLEAN NOT NULL,

    UNIQUE INDEX `Usuarios_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Auditoria` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `usuarioId` INTEGER NOT NULL,
    `accion` VARCHAR(191) NOT NULL,
    `fecha_hora` DATETIME(3) NOT NULL,
    `modulo_afectado` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Docente` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cedula` VARCHAR(191) NOT NULL,
    `nombre` VARCHAR(191) NOT NULL,
    `apellido1` VARCHAR(191) NOT NULL,
    `apellido2` VARCHAR(191) NOT NULL,
    `direccion` VARCHAR(191) NOT NULL,
    `fecha_nacimiento` DATETIME(3) NOT NULL,
    `telefono` VARCHAR(191) NOT NULL,
    `correo` VARCHAR(191) NOT NULL,
    `provinciaId` INTEGER NOT NULL,

    UNIQUE INDEX `Docente_cedula_key`(`cedula`),
    UNIQUE INDEX `Docente_correo_key`(`correo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Estudiante` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cedula` VARCHAR(191) NOT NULL,
    `nombre` VARCHAR(191) NOT NULL,
    `apellido1` VARCHAR(191) NOT NULL,
    `apellido2` VARCHAR(191) NOT NULL,
    `fecha_nacimiento` DATETIME(3) NOT NULL,
    `direccion` VARCHAR(191) NOT NULL,
    `telefono` VARCHAR(191) NOT NULL,
    `correo` VARCHAR(191) NOT NULL,
    `provinciaId` INTEGER NOT NULL,

    UNIQUE INDEX `Estudiante_cedula_key`(`cedula`),
    UNIQUE INDEX `Estudiante_correo_key`(`correo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Materias` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `nivel` INTEGER NOT NULL,
    `codigo` VARCHAR(191) NOT NULL,
    `creditos` INTEGER NOT NULL,
    `horas_teoricas` INTEGER NOT NULL,
    `horas_practicas` INTEGER NOT NULL,

    UNIQUE INDEX `Materias_codigo_key`(`codigo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PlanEstudios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `carrera` VARCHAR(191) NOT NULL,
    `codigo` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `PlanEstudios_codigo_key`(`codigo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OfertaAcademica` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `periodo` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cursos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `planEstudioId` INTEGER NOT NULL,
    `nombre` VARCHAR(191) NOT NULL,
    `codigo` VARCHAR(191) NOT NULL,
    `docenteId` INTEGER NOT NULL,
    `horario` VARCHAR(191) NOT NULL,
    `aula` VARCHAR(191) NOT NULL,
    `periodo` VARCHAR(191) NOT NULL,
    `ofertaAcademicaid` INTEGER NULL,

    UNIQUE INDEX `Cursos_codigo_key`(`codigo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HistoricoAcademico` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `estudianteId` INTEGER NOT NULL,
    `cursoId` INTEGER NOT NULL,
    `nota_obtenida` DOUBLE NOT NULL,
    `periodo` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_MateriasToPlanEstudios` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_MateriasToPlanEstudios_AB_unique`(`A`, `B`),
    INDEX `_MateriasToPlanEstudios_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Cantones` ADD CONSTRAINT `Cantones_ProvinciaId_fkey` FOREIGN KEY (`ProvinciaId`) REFERENCES `Provincias`(`ProvinciaId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Distritos` ADD CONSTRAINT `Distritos_CantonId_fkey` FOREIGN KEY (`CantonId`) REFERENCES `Cantones`(`CantonId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Auditoria` ADD CONSTRAINT `Auditoria_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Docente` ADD CONSTRAINT `Docente_provinciaId_fkey` FOREIGN KEY (`provinciaId`) REFERENCES `Provincias`(`ProvinciaId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Estudiante` ADD CONSTRAINT `Estudiante_provinciaId_fkey` FOREIGN KEY (`provinciaId`) REFERENCES `Provincias`(`ProvinciaId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cursos` ADD CONSTRAINT `Cursos_planEstudioId_fkey` FOREIGN KEY (`planEstudioId`) REFERENCES `PlanEstudios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cursos` ADD CONSTRAINT `Cursos_docenteId_fkey` FOREIGN KEY (`docenteId`) REFERENCES `Docente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cursos` ADD CONSTRAINT `Cursos_ofertaAcademicaid_fkey` FOREIGN KEY (`ofertaAcademicaid`) REFERENCES `OfertaAcademica`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HistoricoAcademico` ADD CONSTRAINT `HistoricoAcademico_estudianteId_fkey` FOREIGN KEY (`estudianteId`) REFERENCES `Estudiante`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HistoricoAcademico` ADD CONSTRAINT `HistoricoAcademico_cursoId_fkey` FOREIGN KEY (`cursoId`) REFERENCES `Cursos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_MateriasToPlanEstudios` ADD CONSTRAINT `_MateriasToPlanEstudios_A_fkey` FOREIGN KEY (`A`) REFERENCES `Materias`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_MateriasToPlanEstudios` ADD CONSTRAINT `_MateriasToPlanEstudios_B_fkey` FOREIGN KEY (`B`) REFERENCES `PlanEstudios`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
