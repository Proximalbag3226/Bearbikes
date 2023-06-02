drop database if exists bearBikes;
create database bearBikes;
use bearBikes;
DROP PROCEDURE IF EXISTS debug_msg ;

-- DEBUGGING PROCEDURE -------------------------------------------------------------------------------------------------
DELIMITER $$
CREATE PROCEDURE debug_msg(property VARCHAR(50), msg VARCHAR(255))
BEGIN
    select concat('** ', property, ' => ',  msg) AS '** DEBUG:';
END $$
DELIMITER ;
-- ---------------------------------------------------------------------------------------------------------------------

create table TipoUsuarios(
	id_tipo_usuario int not null, 
	primary key (id_tipo_usuario),
    tipo_usuario varchar(15) not null
);

insert into TipoUsuarios values (1, 'PERSONA');
insert into TipoUsuarios values (2, 'ADMINISTRADOR');

create table Usuarios (
	id_usuario int not null auto_increment,
	primary key (id_usuario),
    
	email_usuario varchar(30) not null unique,
	password_usuario varchar(200) not null,
	account_status varchar(25) not null default 'ACTIVA',
    
	tipo_usuario int not null default 1 references TipoUsuarios(id_tipo_usuario),
    constraint Usuarios_AltPk unique (id_usuario, tipo_usuario),
    constraint CHK_Usuarios_account_status CHECK (account_status='ACTIVA' OR account_status='INACTIVA')
);

create table Administradores(
	id_admin int primary key unique,
    tipo_usuario int not null default 2 check(tipo_usuario = 2), -- ADMINISTRADOR
	nombre_admin varchar(20),
    fecha_registro TIMESTAMP default CURRENT_TIMESTAMP,
    foreign key (id_admin, tipo_usuario) references Usuarios(id_usuario, tipo_usuario)
);

create table TipoPersonas(
	id_tipo_persona int not null, 
	primary key (id_tipo_persona),
    tipo_persona varchar(15) not null
);

insert into TipoPersonas values (1, 'EMPRESARIO'); 
insert into TipoPersonas values (2, 'CICLISTA');


create table Personas (
	id_persona int primary key unique,
    tipo_usuario int not null default 1 check (tipo_usuario = 1), -- PERSONA
	tipo_persona int not null default 2 check (tipo_persona = 1 OR tipo_persona = 2),
	nombre varchar(30) not null,
	apellido_pat varchar(30) not null,
	apellido_mat varchar(30) not null,
	numero_celular varchar(10),
	foreign key (tipo_persona) references TipoPersonas(id_tipo_persona),
    foreign key (id_persona, tipo_usuario) references Usuarios(id_usuario, tipo_usuario),
    constraint Personas_AltPk unique (id_persona, tipo_persona)
);
-- foreign key constraint fails (`bearbikes`.`personas`, CONSTRAINT `personas_ibfk_1` FOREIGN KEY (`id_persona`, `tipo_usuario`) REFERENCES `usuarios` (`id_usuario`, `tipo_usuario`))

create table Direcciones (
	id_direccion int not null primary key auto_increment,
	calle varchar(35),
	numero_exterior varchar(10),
	numero_interior varchar(10),
	colonia varchar(15),
	codigo_postal varchar(6),
    alcaldia varchar(25),
	ciudad varchar(25),
    tipo_direccion varchar(100)
);


create table Ciclistas(
	id_ciclista int primary key not null,
    tipo_persona int not null default 2 check(tipo_persona = 2), -- CICLISTA
	token_personal_ciclista varchar(40) not null unique,
    foreign key (id_ciclista, tipo_persona) references Personas(id_persona, tipo_persona)
);

CREATE TABLE TipoEmpresarios(
	id_tipo_empresario int not null primary key,
    tipo_empresario varchar(20) not null 
);

insert into TipoEmpresarios values (1, 'DUEÑO_TALLER'), (2, 'DUEÑO_COMERCIO');


CREATE TABLE Empresarios( -- incluye dueño taller y dueño tienda
	id_empresario int primary key unique not null,
    tipo_persona int not null default 1 check(tipo_persona = 1), -- empresario
    tipo_empresario int not null check (tipo_empresario = 1 OR tipo_empresario = 2),
	rfc_fisica varchar(15) not null,
    foreign key (tipo_empresario) references TipoEmpresarios(id_tipo_empresario),
    foreign key (id_empresario, tipo_persona) references Personas(id_persona, tipo_persona)
);

create table TipoEstablecimientos (
	tipo_establecimiento varchar(10) not null primary key
);

insert into TipoEstablecimientos values ('COMERCIO'), ('TALLER');


CREATE TABLE Establecimientos( -- LA TIENDA Y TALLER SE ENCUENTRAN AQUI, PERO EL TALLER TIENE UNA EXTENSIÓN 
	id_establecimiento int primary key auto_increment,
    id_dueño_establecimiento int not null,
    nombre_establecimiento varchar(30) not null, 
    rfc_moral varchar(15) not null unique,
    tipo_establecimiento varchar(30) not null default 'COMERCIO' check(tipo_establecimiento = 'TALLER' OR tipo_establecimiento = 'COMERCIO'),
    id_direccion int ,
    foreign key (id_direccion) references Direcciones(id_direccion) on delete cascade on update cascade,
    foreign key (tipo_establecimiento) references TipoEstablecimientos(tipo_establecimiento),
    foreign key (id_dueño_establecimiento) references Empresarios (id_empresario) on delete cascade on update cascade
);
    
create table Talleres (
	id_taller int not null primary key auto_increment,
    tipo_establecimiento varchar(30) not null default 'TALLER' check(tipo_establecimiento = 'TALLER') , 
	calificacion_taller double,
	cantidad_empleados int,
    foreign key (id_taller) references Establecimientos(id_establecimiento),
    foreign key (tipo_establecimiento) references TipoEstablecimientos(tipo_establecimiento)
);


create table Reparaciones(
	id_reparacion int not null primary key auto_increment,
	id_dueño_taller int not null,
    id_taller int not null,
	id_ciclista int not null,
	fecha_inicio TIMESTAMP default CURRENT_TIMESTAMP,
	estado_reparacion varchar(20) default 'etapa inicial' not null,
	tipo_reparacion varchar (40),
	fecha_estimada TIMESTAMP,
	foreign key (id_dueño_taller) references Empresarios(id_empresario) on delete cascade,
	foreign key (id_ciclista) references Ciclistas(id_ciclista),
	foreign key (id_taller) references Talleres(id_taller) on delete cascade
);
create table establecimiento_direccion(
	id_establecimiento int not null, 
	id_direccion int not null, 
    foreign key (id_establecimiento) references Establecimientos(id_establecimiento) on update cascade on delete cascade,
    foreign key (id_direccion) references Direcciones(id_direccion) on update cascade on delete cascade
);

create table Tiendas(
	id_tienda int primary key auto_increment,
    nombre_tienda varchar (30) not null,
    descripcion_tienda varchar(500) not null, 
    imagenTienda BLOB
);

create table Productos(
	id_producto int auto_increment primary key,
    id_establecimiento int not null,
    nombre_producto varchar(30),
    descripcion_producto varchar(200),
    imagen_producto BLOB,
    foreign key (id_establecimiento) references Establecimientos(id_establecimiento)
);

create table Chats(
	id_chat int not null primary key auto_increment,
	id_dueño_taller int not null,
	id_ciclista int not null,
    fecha_creacion timestamp not null default current_timestamp,
	foreign key (id_dueño_taller) references Reparaciones(id_dueño_taller) on update cascade on delete cascade,
	foreign key (id_ciclista) references Reparaciones(id_ciclista) on update cascade on delete cascade
);

create table Mensajes(
	id_mensaje int not null auto_increment primary key,
	tipo_mensaje varchar(10) not null,
	id_Emisor int not null,
	id_chat int not null,
	contenido_mensaje blob not null,
	fecha_envio TIMESTAMP default CURRENT_TIMESTAMP,
	foreign key (id_chat) references Chats(id_chat) on update cascade on delete cascade,
	foreign key (id_Emisor) references Personas(id_persona) on delete cascade on update cascade
);



create table Ubicaciones(
	id_ubicacion int not null primary key,
    tipo_ubicacion varchar(15),
    latitud double not null,
    longitud double not null,
    id_direccion_ruta int,
    foreign key (id_direccion_ruta) references Direcciones(id_direccion)
);

create table Rutas(
	id_ruta int not null primary key,
    id_ciclista int not null,
	id_ubicacion_destino int not null,
	id_ubicacion_partida int not null,
	fecha_ruta TIMESTAMP default CURRENT_TIMESTAMP,
    foreign key (id_ciclista) references Ciclistas(id_ciclista) on delete cascade on update cascade,
    foreign key (id_ubicacion_destino) references Ubicaciones(id_ubicacion),
    foreign key (id_ubicacion_partida) references Ubicaciones(id_ubicacion)
);

create table CLAVE_ADMINISTRADOR(
	id_clave int unique not null primary key default 1 check(id_clave=1),
	clave varchar(20) not null
);
insert into CLAVE_ADMINISTRADOR (clave) value ('CLAVE123');
SELECT count(*) FROM CLAVE_ADMINISTRADOR WHERE clave = 'CLAVE123';


create table SitiosTuristicos(
	id_sitio int not null primary key auto_increment,
    nombre_sitio varchar(20) not null,
    descripcion_sitio varchar(100) not null, 
    imagenSitio blob, 
    id_direccion_sitio int not null,
    foreign key (id_direccion_sitio) references Direcciones(id_direccion)
);

/*	create table Direccion_Sitio (
		id_sitio int not null,
		id_direccion int not null,
		foreign key (id_sitio) references SitiosTuristicos(id_sitio),
		foreign key (id_direccion) references Direcciones(id_direccion)
	);
*/
create table Avisos(
	id_aviso int primary key not null auto_increment,
    contenido_aviso varchar(50) not null, 
    relevancia_aviso varchar(10) not null,
    fecha_aviso TIMESTAMP default CURRENT_TIMESTAMP
);


DROP PROCEDURE IF EXISTS insertar_ciclista;
DROP PROCEDURE IF EXISTS insertar_admin;
DROP PROCEDURE IF EXISTS insertar_dueño_taller;
DROP PROCEDURE IF EXISTS insertar_dueño_comercio;
DELIMITER $$
-- ---------------------- PROCEDURE NUEVO CICLISTA ---------------------------------------------------------------------------------------------------------------- $$
	CREATE PROCEDURE insertar_ciclista (
		IN emailUsuario varchar(30), IN passwordUsuario varchar(200), IN nombreCiclista varchar(30), 
		IN apellidoPat varchar(30), IN apellidoMat varchar(30), IN numeroCelular varchar(10), IN tokenPersonalCiclista varchar(30),
		OUT idUsuarioInsertado int
	)
		BEGIN     
			
			DECLARE new_id INT DEFAULT 0; -- Id que se asignara al nuevo usuario y se retornara
			DECLARE tipoUsuario INT DEFAULT 1; -- Tipo usuario correspondiente a persona
			DECLARE tipoPersona INT DEFAULT 2; -- Tipo persona correspondiente a ciclista
			
			INSERT INTO Usuarios (email_usuario, password_usuario, account_status, tipo_usuario)
				values   (emailUsuario, passwordUsuario, default, tipoUsuario); -- USUARIO TIPO PERSONA
			
			SET new_id = LAST_INSERT_ID(); -- guarda el id del nuevo usuario  
			
			INSERT INTO Personas (id_persona, tipo_usuario, tipo_persona, nombre, apellido_pat, apellido_mat, numero_celular)
				values   (new_id, tipoUsuario , tipoPersona, nombreCiclista, apellidoPat, apellidoMat, numeroCelular); -- NUEVA PERSONA TIPO CICLISTA
			
			INSERT INTO Ciclistas (id_ciclista, tipo_persona, token_personal_ciclista)
				values   (new_id, tipoPersona, tokenPersonalCiclista); -- NUEVO CICLISTA
			SELECT new_id INTO idUsuarioInsertado;
		END $$

-- --------------------------------------------------------------------------------------------------------------------------------------------------------------- $$
-- ---------------------- PROCEDURE NUEVO DUEÑO TALLER ----------------------------------------------------------------------------------------------------------- $$
    CREATE PROCEDURE insertar_dueño_taller (
		IN emailUsuario varchar(30), IN passwordUsuario varchar(200), IN nombreDueño varchar(30), IN apellidoPat varchar(30), 
		IN apellidoMat varchar(30), IN numeroCelular varchar(10), IN RFCFisica varchar(15), OUT idUsuarioInsertado int
	)
		BEGIN
			DECLARE new_id INT DEFAULT 0; -- Id que se asignara al nuevo usuario y se retornara
			DECLARE tipoUsuario INT DEFAULT 1; -- Tipo usuario correspondiente a persona
			DECLARE tipoPersona INT DEFAULT 1; -- Tipo persona correspondiente a empresario
            DECLARE tipoEmpresario INT DEFAULT 1; -- Tipo empresario correspondiente a dueño Taller
			
			INSERT INTO Usuarios (email_usuario, password_usuario, account_status, tipo_usuario) values   (emailUsuario, passwordUsuario, default, tipoUsuario); -- USUARIO TIPO PERSONA
			
			SET new_id = LAST_INSERT_ID(); -- guarda el id del nuevo usuario  
			
			INSERT INTO Personas (id_persona, tipo_usuario, tipo_persona, nombre, apellido_pat, apellido_mat, numero_celular) 
				values   (new_id, tipoUsuario , tipoPersona, nombreDueño, apellidoPat, apellidoMat, numeroCelular); -- NUEVA PERSONA TIPO EMPRESARIO
			
			INSERT INTO Empresarios (id_empresario, tipo_persona, tipo_empresario, RFC_fisica) values (new_id, tipoPersona, tipoEmpresario, RFCFisica); -- NUEVO EMPRESARIO TIPO DUEÑO TALLER
			SELECT new_id INTO idUsuarioInsertado;
		END $$
-- --------------------------------------------------------------------------------------------------------------------------------------------------------------- $$
-- ---------------------- PROCEDURE NUEVO DUEÑO_COMERCIO --------------------------------------------------------------------------------------------------------- $$
	CREATE PROCEDURE insertar_dueño_comercio (
		IN emailUsuario varchar(30), IN passwordUsuario varchar(200), IN nombreDueño varchar(30), IN apellidoPat varchar(30), 
		IN apellidoMat varchar(30), IN numeroCelular varchar(10), IN RFCFisica varchar(15), OUT idUsuarioInsertado int
	)
	BEGIN
		DECLARE new_id INT DEFAULT 0; -- Id que se asignara al nuevo usuario y se retornara
		DECLARE tipoUsuario INT DEFAULT 1; -- Tipo usuario correspondiente a persona
		DECLARE tipoPersona INT DEFAULT 1; -- Tipo persona correspondiente a empresario
		DECLARE tipoEmpresario INT DEFAULT 2; -- Tipo empresario correspondiente a Dueño Comercio
		
		INSERT INTO Usuarios (email_usuario, password_usuario, account_status, tipo_usuario) values   (emailUsuario, passwordUsuario, default, tipoUsuario); -- USUARIO TIPO PERSONA
		
		SET new_id = LAST_INSERT_ID(); -- guarda el id del nuevo usuario  
		
		INSERT INTO Personas (id_persona, tipo_usuario, tipo_persona, nombre, apellido_pat, apellido_mat, numero_celular) 
			values   (new_id, tipoUsuario , tipoPersona, nombreDueño, apellidoPat, apellidoMat, numeroCelular); -- NUEVA PERSONA TIPO EMPRESARIO
		
		INSERT INTO Empresarios (id_empresario, tipo_persona, tipo_empresario, RFC_fisica) values (new_id, tipoPersona, tipoEmpresario, RFCFisica); -- NUEVO EMPRESARIO TIPO DUEÑO COMERCIO
		SELECT new_id INTO idUsuarioInsertado;
	END $$
-- --------------------------------------------------------------------------------------------------------------------------------------------------------------- $$
-- ---------------------- PROCEDURE NUEVO ADMIN ------------------------------------------------------------------------------------------------------------------ $$
    CREATE PROCEDURE insertar_admin (
		IN emailUsuario varchar(30), IN passwordUsuario varchar(200), IN nombreAdmin varchar(20), OUT idUsuarioInsertado int
    )
		BEGIN
			DECLARE new_id INT DEFAULT 0; -- Id que se asignara al nuevo usuario y se retornara
			DECLARE tipoUsuario INT DEFAULT 2; -- Tipo usuario correspondiente a Administrador
			
			INSERT INTO Usuarios (email_usuario, password_usuario, account_status, tipo_usuario) 
				values   (emailUsuario, passwordUsuario, default, tipoUsuario); -- USUARIO TIPO ADMINISTRADOR
			
			SET new_id = LAST_INSERT_ID(); -- guarda el id del nuevo usuario  
			
			INSERT INTO administradores (id_admin, tipo_usuario, nombre_admin) 
				values   (new_id, tipoUsuario, nombreAdmin); -- NUEVA ADMINISTRADOR
			
			SELECT new_id INTO idUsuarioInsertado;
		END $$
    
DELIMITER ;
-- --------------------------------------------------------------------------------------------------------------------------------------------------------------- $$
-- --------------------------------------------------------------------------------------------------------------------------------------------------------------- $$

CALL insertar_ciclista ('procedureCiclista@mysql.com', 'password', 'ciclista procedure', 'Paterno','Materno','5615548192', 'UN_TOKEN_BIEN_SEGURO',  @idUsuarioInsertado);
SELECT @idUsuarioInsertado AS id_ciclista_nuevo;
SELECT * from Usuarios where tipo_usuario = 1; -- PERSONA
SELECT * from Personas where tipo_usuario = 1 and tipo_persona = 2; -- PERSONA Y CICLISTA 
SELECT * from Ciclistas; -- CICLISTA 

CALL insertar_dueño_taller ('procedureDueñoTaller@mysql.com', 'password', 'dueño Procedure', 'Paterno','Materno','5615548192', 'UN_RFC',  @idUsuarioInsertado);
SELECT @idUsuarioInsertado AS id_dueño_nuevo;
SELECT * from Usuarios where tipo_usuario = 1; -- PERSONA
SELECT * from Personas where tipo_usuario = 1 and tipo_persona = 1; -- PERSONA Y DUEÑO TALLER  
SELECT * from Empresarios; -- DUEÑO TALLER 

CALL insertar_admin ('procedureAdmin@mysql.com', 'password', 'Procedure Admin',  @idUsuarioInsertado);
SELECT @idUsuarioInsertado AS id_admin_nuevo;

SELECT * from Usuarios; -- ADMIN
SELECT * from Administradores; -- admin 

-- ------------------------------------------- SELECT CLAUSE para ADMINS ---------------------------------------------
SELECT 
	usuarios.id_usuario as id, usuarios.email_usuario as email, usuarios.password_usuario as password, usuarios.account_status, administradores.nombre_admin as nombre, administradores.fecha_registro 
FROM 
	usuarios, administradores 
WHERE 
	usuarios.id_usuario = administradores.id_admin;
    -- ------------------------------------------- SELECT CLAUSE para ADMINS by ID---------------------------------------------
SELECT 
	usuarios.id_usuario as id, usuarios.email_usuario as email, usuarios.password_usuario as password, usuarios.account_status, administradores.nombre_admin as nombre, administradores.fecha_registro 
FROM 
	usuarios, administradores 
WHERE 
	usuarios.id_usuario = administradores.id_admin and usuarios.id_usuario = 3;
    
-- ------------------------------------------- SELECT CLAUSE para CICLISTAS ---------------------------------------------
SELECT
	usuarios.id_usuario as id, usuarios.email_usuario as email, usuarios.password_usuario as password, usuarios.account_status,
	personas.nombre, personas.apellido_pat, personas.apellido_mat, personas.numero_celular,
	ciclistas.token_personal_ciclista as token
FROM 
	usuarios, personas, ciclistas
WHERE 
	usuarios.id_usuario = personas.id_persona and personas.id_persona = ciclistas.id_ciclista;
        
-- ------------------------------------------- SELECT CLAUSE para DUEÑOS DE TALLER ---------------------------------------------
SELECT 
	usuarios.id_usuario as id, usuarios.email_usuario as email, usuarios.password_usuario as password, usuarios.account_status,
	personas.nombre, personas.apellido_pat, personas.apellido_mat, personas.numero_celular,
	empresarios.Rfc_fisica as rfc
FROM 
	usuarios, personas, empresarios
WHERE 
	usuarios.id_usuario = personas.id_persona and personas.id_persona = empresarios.id_empresario and empresarios.tipo_empresario = 1;
    
-- ------------------------------------------- SELECT CLAUSE para DUEÑOS DE COMERCIO ---------------------------------------------
SELECT 
	usuarios.id_usuario as id, usuarios.email_usuario as email, usuarios.password_usuario as password, usuarios.account_status,
	personas.nombre, personas.apellido_pat, personas.apellido_mat, personas.numero_celular,
	empresarios.Rfc_fisica as rfc
FROM 
	usuarios, personas, empresarios
WHERE 
	usuarios.id_usuario = personas.id_persona and personas.id_persona = empresarios.id_empresario and empresarios.tipo_empresario = 2;
    
    
-- ------------------------------------------- PROCEDURE ESTABLECIMIENTO ---------------------------------------------
DROP PROCEDURE IF EXISTS insertar_nuevo_establecimiento;
DROP PROCEDURE IF EXISTS añadir_nuevo_comercio;
DROP PROCEDURE IF EXISTS añadir_nuevo_taller;
DELIMITER $$

-- ---------------------------------------- PROCEDURE ESTABLECIMIENTO -----------------------------------------$$
	CREATE PROCEDURE insertar_nuevo_establecimiento (
		IN idDueñoEstablecimiento int, IN nombreEstablecimiento varchar(30), IN rfcEstablecimiento varchar(15), IN idDireccion INT,
        OUT idEstablecimiento int
	)
		BEGIN   			
            DECLARE tipoDueño int default 0;
			DECLARE tipoEstablecimiento varchar(10);
            DECLARE mensajeError varchar (100);
            
			IF (SELECT COUNT(*) from Empresarios where Empresarios.id_empresario = idDueñoEstablecimiento) = 0 -- NO EXISTE EL EMPRESARIO
				THEN 
                SET mensajeError = CONCAT('No existe ningun usuario de tipo empresario con el id: ' , idDueñoEstablecimiento);
                CALL debug_msg('mensaje error ', mensajeError);
                SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = mensajeError;
			ELSEIF (SELECT COUNT(*) from Direcciones where id_direccion = idDireccion and tipo_direccion = 'ESTABLECIMIENTO') = 0 -- NO EXISTE LA DIRECCION 
				THEN
                SET mensajeError = CONCAT('No existe ninguna dirección de tipo "ESTABLECIMIENTO" con el id: ' , idDueñoEstablecimiento);
                CALL debug_msg('mensaje error ', mensajeError);
                SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = mensajeError;
			ELSE -- EXISTEN AMBOS EMPRESARIO Y DIRECCION DE TIPO ESTABLECIMIENTO
				SELECT Empresarios.tipo_empresario INTO tipoDueño from Empresarios WHERE Empresarios.id_empresario = idDueñoEstablecimiento; -- OBTIENE EL TIPO DE EMPERSARIO PROPORCIONADO COMO DUEÑO
                CALL debug_msg('TIPO DUEÑO ', (SELECT TipoEmpresarios.tipo_empresario from TipoEmpresarios where TipoEmpresarios.id_tipo_empresario = tipoDueño));
                -- DETERMINA EL TIPO DE ESTABLECIMIENTO EN BASE AL TIPO DE EMPRESARIO PROPORCIONADO
				IF (SELECT TipoEmpresarios.tipo_empresario from TipoEmpresarios where TipoEmpresarios.id_tipo_empresario = tipoDueño) = 'DUEÑO_TALLER'
					THEN 
                    SET tipoEstablecimiento = 'TALLER';
				ELSE 
					SET tipoEstablecimiento = 'COMERCIO';
				END IF;
                CALL debug_msg('TIPO establecimiento ', tipoEstablecimiento);
				INSERT INTO Establecimientos -- INSERTA EL ESTABLECIMIENTO CON LOS DATOS PROPORCIONADOS Y EL TIPO ENCONTRADO
					(id_dueño_establecimiento, nombre_establecimiento, rfc_moral, tipo_establecimiento, id_direccion) values
					(idDueñoEstablecimiento, nombreEstablecimiento, rfcEstablecimiento, tipoEstablecimiento, idDireccion);
				SET idEstablecimiento = last_insert_id();
			END IF;            
		END $$
        
        -- ---------------------------------------- PROCEDURE NUEVO COMERCIO -----------------------------------------$$
        CREATE PROCEDURE añadir_nuevo_comercio(
			IN emailDueño varchar(30), IN nombreEstablecimiento varchar(30), IN rfcEstablecimiento varchar(15),
        	IN calle varchar(35), IN numeroExterior varchar(10), IN numeroInterior varchar(10), IN colonia varchar(15), IN codigoPostal varchar(6), IN alcaldia varchar(25), IN ciudad varchar(25),
			OUT idDireccionInsertada int, OUT idEstablecimiento int
		)
		BEGIN   		
			DECLARE idEmpresario int;            
            DECLARE idDireccionEstablecimiento int;
            
            SET idEmpresario = (SELECT Usuarios.id_usuario FROM Usuarios WHERE Usuarios.email_usuario = emailDueño); -- obtiene id del dueño del taller
            
            INSERT INTO direcciones 
				(calle, numero_exterior, numero_interior, colonia, codigo_postal, alcaldia, ciudad, tipo_direccion) VALUES
				(calle, numeroExterior, numeroInterior, colonia, codigoPostal, alcaldia, ciudad, 'ESTABLECIMIENTO');
			SELECT last_insert_id() into idDireccionInsertada;
            
                
			SET idDireccionEstablecimiento = last_insert_id();
            CALL debug_msg('ID EMPRESARIO OBTENIDO ', idEmpresario);
            CALL debug_msg('ID DIRECCION AÑADIDA ', idDireccionEstablecimiento);
            
			CALL insertar_nuevo_establecimiento(idEmpresario, nombreEstablecimiento, rfcEstablecimiento, idDireccionEstablecimiento, @idEstablecimientoInsertado);
			SELECT @idEstablecimientoInsertado INTO idEstablecimiento;       
            
            INSERT INTO establecimiento_direccion values( idEstablecimiento,idDireccionInsertada);
		END $$
        
        -- ---------------------------------------- PROCEDURE NUEVO TALLER -----------------------------------------$$
        CREATE PROCEDURE añadir_nuevo_taller(
			IN emailDueño varchar(30), IN nombreEstablecimiento varchar(30), IN rfcEstablecimiento varchar(15), numeroEmpleados int,
        	IN calle varchar(35), IN numeroExterior varchar(10), IN numeroInterior varchar(10), IN colonia varchar(15), IN codigoPostal varchar(6), IN alcaldia varchar(25), IN ciudad varchar(25),
			OUT idDireccionInsertada int, OUT idEstablecimiento int
		)
		BEGIN   			
        
			DECLARE idEmpresario int;            
            DECLARE idDireccionEstablecimiento int;
            SET idEmpresario = (SELECT Usuarios.id_usuario FROM Usuarios WHERE Usuarios.email_usuario = emailDueño); -- obtiene id del dueño del taller
            
            INSERT INTO direcciones 
				(calle, numero_exterior, numero_interior, colonia, codigo_postal, alcaldia, ciudad, tipo_direccion) VALUES
				(calle, numeroExterior, numeroInterior, colonia, codigoPostal, alcaldia, ciudad, 'ESTABLECIMIENTO');
			SELECT last_insert_id() into idDireccionInsertada;
                
			SET idDireccionEstablecimiento = last_insert_id();
            
            CALL debug_msg('ID EMPRESARIO OBTENIDO ', idEmpresario);
            CALL debug_msg('ID DIRECCION AÑADIDA ', idDireccionEstablecimiento);
            
			CALL insertar_nuevo_establecimiento(idEmpresario, nombreEstablecimiento, rfcEstablecimiento, idDireccionEstablecimiento, @idEstablecimientoInsertado);
			SELECT @idEstablecimientoInsertado INTO idEstablecimiento;     
            
            INSERT INTO establecimiento_direccion values( idEstablecimiento,idDireccionInsertada);
            
            INSERT INTO Talleres (id_taller, tipo_establecimiento, calificacion_taller, cantidad_empleados) values
				(@idEstablecimientoInsertado, 'TALLER', 0, numeroEmpleados);
		END $$
DELIMITER ;

-- -------------------------------- PRUEBA TALLER -----------------------------

CALL insertar_dueño_taller ('dueñoDeUnTaller2@mysql.com', 'password', 'dueño Procedure', 'Paterno','Materno','5615548192', 'UN_RFC_11',  @idUsuarioInsertado);
CALL añadir_nuevo_taller(
	/* emailDueño */'dueñoDeUnTaller2@mysql.com',
    /* nombreEstablecimiento */'Taller del Procedure',
    /* rfcEstablecimiento */'RFC_DEL_Ta34' ,
    /* numeroEmpleados */5,
    /* calle */'Mar Mediterràneo',
    /* numeroExterior */'221',
    /* numeroInterior */'S/N', 
    /* colonia */'Nextitla', 
    /* codigoPostal */'11420', 
    /* alcaldia */'Miguel Hidalgo',
    /* ciudad */'CDMX',
    /* idDireccionInsertada  */ @idDireccionInsertada,
	/* idEstablecimiento */ @idTallerInsertado
);
SELECT @idTallerInsertado AS 'id del nuevo taller', @idDireccionInsertada AS 'id direccion del nuevo taller';
select * from direcciones;
SELECT establecimiento_direccion.id_direccion FROM establecimiento_direccion WHERE establecimiento_direccion.id_establecimiento = 1;

/*
DELETE FROM Talleres WHERE id_taller = 3;
DELETE FROM Establecimientos WHERE id_establecimiento = 3;
DELETE FROM direcciones WHERE id_direccion = 3;
*/
SELECT -- select del taller insertado
	Establecimientos.nombre_establecimiento, Establecimientos.rfc_moral, Establecimientos.tipo_establecimiento, 
    Personas.nombre as nombre_dueño, Personas.numero_celular as celular_dueño, 
    Usuarios.email_usuario as correo_dueño,
    Direcciones.calle , Direcciones.numero_exterior, Direcciones.numero_interior, Direcciones.colonia, Direcciones.codigo_postal, Direcciones.alcaldia, Direcciones.ciudad, Direcciones.tipo_direccion,
    Talleres.calificacion_taller, Talleres.cantidad_empleados 
FROM
	Establecimientos, Personas, Usuarios, Direcciones,  Talleres
WHERE 
	Establecimientos.id_establecimiento =  @idEstablecimientoInsertado AND
    Establecimientos.tipo_establecimiento = 'TALLER' AND
    Establecimientos.id_establecimiento = Talleres.id_taller AND
	Establecimientos.id_dueño_establecimiento = Personas.id_persona AND
    Personas.id_persona = Usuarios.id_usuario AND 
    Establecimientos.id_direccion = Direcciones.id_direccion;
    
-- -------------------------------- PRUEBA COMERCIO -----------------------------

CALL insertar_dueño_comercio ('dueñoDeUnComercio3@mysql.com', 'password', 'dueño Procedure', 'Paterno','Materno','5615548192', 'UN_RFC_31', @idUsuarioInsertado);
CALL añadir_nuevo_comercio(
	/* emailDueño */'dueñoDeUnComercio3@mysql.com',
    /* nombreEstablecimiento */'Comercio del Procedure',
    /* rfcEstablecimiento */'RFC_COMERCIddO' ,
    /* calle */'Mar Mediterràneo',
    /* numeroExterior */'221',
    /* numeroInterior */'S/N', 
    /* colonia */'Nextitla', 
    /* codigoPostal */'11420', 
    /* alcaldia */'Miguel Hidalgo',
    /* ciudad */'CDMX',
    /* idDireccionInsertada  */ @idDireccionInsertada,
	/* idEstablecimiento */ @idComercioInsertado
);
SELECT @idComercioInsertado AS 'id del nuevo Comercio', @idDireccionInsertada AS 'id dirección comercio';
SELECT -- select del taller insertado
	Establecimientos.nombre_establecimiento, Establecimientos.rfc_moral, Establecimientos.tipo_establecimiento, 
    Personas.nombre as nombre_dueño, Personas.numero_celular as celular_dueño, 
    Usuarios.email_usuario as correo_dueño,
    Direcciones.calle , Direcciones.numero_exterior, Direcciones.numero_interior, Direcciones.colonia, Direcciones.codigo_postal, Direcciones.alcaldia, Direcciones.ciudad, Direcciones.tipo_direccion
FROM
	Establecimientos, Personas, Usuarios, Direcciones
WHERE 
	Establecimientos.id_establecimiento =  @idComercioInsertado AND 
    Establecimientos.tipo_establecimiento = 'COMERCIO' AND
	Establecimientos.id_dueño_establecimiento = Personas.id_persona AND
    Personas.id_persona = Usuarios.id_usuario AND 
    Establecimientos.id_direccion = Direcciones.id_direccion;

-- select establecimeiento insertado
SELECT 
	Establecimientos.nombre_establecimiento, Establecimientos.rfc_moral, Establecimientos.tipo_establecimiento, 
    Personas.nombre as nombre_dueño, Personas.numero_celular as celular_dueño, 
    Usuarios.email_usuario as correo_dueño,
    Direcciones.calle , Direcciones.numero_exterior, Direcciones.numero_interior, Direcciones.colonia, Direcciones.codigo_postal, Direcciones.alcaldia, Direcciones.ciudad, Direcciones.tipo_direccion
FROM
	Establecimientos, Personas, Usuarios, Direcciones
WHERE 
	Establecimientos.id_establecimiento =  @idEstablecimientoInsertado AND 
	Establecimientos.id_dueño_establecimiento = Personas.id_persona AND
    Personas.id_persona = Usuarios.id_usuario AND 
    Establecimientos.id_direccion = Direcciones.id_direccion;

select * from Establecimientos;
select Establecimientos.id_establecimiento, Establecimientos.id_dueño_establecimiento, Establecimientos.nombre_establecimiento, Establecimientos.rfc_moral, Establecimientos.id_direccion,  
		Talleres.calificacion_taller, Talleres.cantidad_empleados 
        from Establecimientos, Talleres
        WHERE Establecimientos.id_establecimiento = Talleres.id_taller;
        
-- ------------------------------------------- SELECT CLAUSE para REPARACIONES ---------------------------------------------

select * from reparaciones;

INSERT INTO reparaciones (id_dueño_taller, id_ciclista, id_taller,  tipo_reparacion) values( 2, 1, 1, 'Reparacion de cambio de rines');
    -- ------------------------------------------- SELECT CLAUSE para Chats ---------------------------------------------
select * from chats;
INSERT INTO chats ( id_dueño_taller, id_ciclista) values( 2, 1);
SELECT * from chats where chats.id_chat = 1 LIMIT 1;

-- ------------------------------------------- SELECT CLAUSE para MENSAJES ---------------------------------------------
select * from mensajes;
INSERT INTO mensajes (tipo_mensaje, id_chat, id_Emisor, contenido_mensaje) values ('TEXTO', 1, 2, 'HOLA DESDE DUEÑO TALLER');


SELECT * FROM mensajes where mensajes.id_chat = 1 ORDER BY mensajes.fecha_envio, mensajes.id_mensaje;

-- ------------------------------------------- USER LOGIN PROCEDURE ----------------------------------------------------
DROP procedure IF EXISTS login_usuario;
    DELIMITER $$
-- ---------------------- PROCEDURE LOGIN USUARIO --------------------------------------------------------------- $$
	CREATE PROCEDURE login_usuario (IN emailUsuario varchar(30), IN passwordUsuario varchar(200), OUT id int, OUT email varchar(30), OUT password varchar(200), OUT status varchar(15), OUT role varchar(15))
		BEGIN     
			DECLARE idUsuario INT DEFAULT 0; -- Id que se asignara al nuevo usuario y se retornara
			DECLARE tipoUsuario INT DEFAULT 1; -- Tipo usuario correspondiente a persona
			DECLARE tipoPersona INT DEFAULT 2; -- Tipo persona correspondiente a ciclista
            
			SELECT usuarios.id_usuario, usuarios.email_usuario, usuarios.password_usuario, usuarios.account_status, usuarios.tipo_usuario 
            into  idUsuario, email, password, status, tipoUsuario
            FROM usuarios
            where usuarios.email_usuario = emailUsuario and usuarios.password_usuario = passwordUsuario;
			SELECT idUsuario into id;
            
			IF tipoUsuario = 2 -- ADMINISTRADOR
				THEN
                    SELECT 'ADMINISTRADOR' into role;
                ELSE -- PERSONA
                    SELECT @tipoPersona := Personas.tipo_persona
					From personas
					where idUsuario = personas.id_persona;
                    IF tipoPersona = 1 THEN
						IF (SELECT Empresarios.tipo_empresario FROM Empresarios where Empresarios.id_empresario = idUsuario) = 1
							THEN SET role = 'DUEÑO_TALLER';
						ELSE 
							SET role = 'DUEÑO_COMERCIO';
						END IF;
					ELSEIF tipoPersona = 2 THEN
						SET role = 'CICLISTA';
					ELSE
						SET role = 'DESCONOCIDO';
					END IF;
			END IF;
		END $$    
DELIMITER ;

SELECT * FROM Personas;

CALL login_usuario ('procedureCiclista@mysql.com', 'password',  @idUsuario, @emailUsuario, @passwordUsuario, @statusUsuario, @roleUsuario);

SELECT @idUsuario AS id, @emailUsuario AS email, @passwordUsuario AS pass, @statusUsuario AS status, @roleUsuario AS role;

    
    -- ------------------------------------------- SELECT CLAUSE para ROLES ---------------------------------------------
SELECT tipoUsuarios.tipo_usuario AS role
	FROM tipoUsuarios 
    WHERE tipoUsuarios.tipo_usuario!='PERSONA'
    UNION 
    SELECT tipoPersonas.tipo_persona AS role
    FROM tipoPersonas;
        -- ------------------------------------------- SELECT CLAUSE para ROLES por Nombre rol ---------------------------------------------
SELECT tipoUsuarios.tipo_usuario AS role
	FROM tipoUsuarios 
    WHERE tipoUsuarios.tipo_usuario='ADMINISTRADOR'
    UNION 
    SELECT tipoPersonas.tipo_persona AS role
    FROM tipoPersonas WHERE tipoPersonas.tipo_persona = 'CICLISTA';
    
-- ------------------------------------------- find USER BY ID PROCEDURE----------------------------------------------------
DROP procedure IF EXISTS find_user_by_id;
    DELIMITER $$
-- ---------------------- PROCEDURE USUARIO POR ID --------------------------------------------------------------- 
$$
	CREATE PROCEDURE find_user_by_id (IN id int, OUT idUsuario int, OUT email varchar(30), OUT password varchar(200), OUT status varchar(15), OUT role varchar(15), OUT name varchar(50))
		BEGIN     
			
			DECLARE tipoUsuario INT DEFAULT 1; -- Tipo usuario correspondiente a persona
			DECLARE tipoPersona INT DEFAULT 2; -- Tipo persona correspondiente a ciclista
            
			SELECT usuarios.id_usuario, usuarios.email_usuario, usuarios.password_usuario, usuarios.account_status, usuarios.tipo_usuario 
            into  idUsuario, email, password, status, tipoUsuario
            FROM usuarios
            where usuarios.id_usuario = id;
            
			IF tipoUsuario = 2 -- ADMINISTRADOR
				THEN
                    SELECT 'ADMINISTRADOR' into role;
                    SELECT nombre_admin into name from Administradores where id_admin = id;
			ELSE -- PERSONA
				SELECT Personas.tipo_persona into tipoPersona From personas where idUsuario = personas.id_persona;
                -- SELECT nombre into name from Personas where id_persona= id;
                SELECT concat(nombre, ' ', apellido_pat) into name from Personas where id_persona= id;
				IF tipoPersona = 1 
					THEN 
						IF (SELECT Empresarios.tipo_empresario FROM Empresarios WHERE Empresarios.id_empresario = idUsuario) = 1
							THEN 
								SET ROLE = 'DUEÑO_TALLER';
                        ELSE 
							SET role = 'DUEÑO_COMERCIO';
						END IF;
				ELSEIF tipoPersona = 2 
					THEN SET role = 'CICLISTA';
				ELSE 
					SET role = 'DESCONOCIDO';
				END IF;
			END IF;
		END $$    
DELIMITER ;

SELECT * from PERSONAS;

SELECT Personas.tipo_persona
					From personas where 2 = personas.id_persona;
                    

CALL find_user_by_id (5,  @idUsuario, @emailUsuario, @passwordUsuario, @statusUsuario, @roleUsuario, @name);

SELECT @idUsuario AS id, @emailUsuario AS email, @passwordUsuario AS pass, @statusUsuario AS status, @roleUsuario AS role, @name as nombre;


-- ------------------------------------- TABLA PARA ALMACENAR SESIONES JWT-----------------------------------

create table Token (
	id_token int auto_increment primary key,
    id_usuario int not null,
    token varchar (500) not null ,
    revocado boolean,
    expirado boolean,
    tipo varchar(10) default 'BEARER' check (tipo = 'BEARER'),
    foreign key (id_usuario) references Usuarios(id_usuario)
);

INSERT INTO Token (id_usuario, token, revocado, expirado ) VALUES (1, 'ELTOKEN1_1234Z', FALSE, FALSE);
INSERT INTO Token (id_usuario, token, revocado, expirado ) VALUES (2, 'ELTOKEN2_1234Z', FALSE, FALSE);
SELECT * FROM Token;

-- -------------------------------------------------- SELECT CLAUSE PARA TOKENS VALIDOS POR ID USUARIO --------------------
SELECT * FROM token WHERE token.id_usuario = 4;
-- -------------------------------------------------- SELECT CLAUSE PARA TOKENS VALIDOS POR TOKEN STRING --------------------
SELECT * FROM token WHERE token.token= 'ELTOKEN2_1234Z';