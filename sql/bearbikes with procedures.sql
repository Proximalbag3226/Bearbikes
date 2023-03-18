drop database if exists bearBikes;
create database bearBikes;
use bearBikes;

create table TipoUsuarios(
	id_tipo_usuario int not null, 
	primary key (id_tipo_usuario),
    tipo_usuario varchar(15) not null
);

insert into TipoUsuarios values (2, 'ADMINISTRADOR');
insert into TipoUsuarios values (1, 'PERSONA');

create table Usuarios (
	id_usuario int not null auto_increment,
	primary key (id_usuario),
    
	email_usuario varchar(30) not null unique,
	password_usuario varchar(100) not null,
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

insert into TipoPersonas values (1, 'DUEÑO_TALLER');
insert into TipoPersonas values (2, 'CICLISTA');


create table Personas (
	id_persona int primary key unique,
    tipo_usuario int not null default 2 check (tipo_usuario = 1), -- PERSONA
	tipo_persona int not null default 2 references TipoPersonas(id_tipo_persona),
	nombre varchar(30) not null,
	apellido_pat varchar(30) not null,
	apellido_mat varchar(30) not null,
	numero_celular varchar(10),
    foreign key (id_persona, tipo_usuario) references Usuarios(id_usuario, tipo_usuario),
    constraint Personas_AltPk unique (id_persona, tipo_persona)
);
-- foreign key constraint fails (`bearbikes`.`personas`, CONSTRAINT `personas_ibfk_1` FOREIGN KEY (`id_persona`, `tipo_usuario`) REFERENCES `usuarios` (`id_usuario`, `tipo_usuario`))

create table Direcciones (
	id_direccion int not null primary key,
	calle varchar(35) not null,
	numero_exterior varchar(10),
	numero_interior varchar(10),
	colonia varchar(15) not null,
	codigo_postal varchar(6) not null,
	ciudad varchar(25) not null,
    tipo_direccion varchar(30)
);

create table Persona_Direccion(
	id_persona int not null,
	id_direccion int not null,
    foreign key (id_persona) references Personas(id_persona) on update cascade on delete cascade,
    foreign key (id_direccion) references Direcciones(id_direccion) on update cascade on delete cascade
);

create table Ciclistas(
	id_ciclista int primary key not null,
    tipo_persona int not null default 2 check(tipo_persona = 2), -- CICLISTA
	token_personal_ciclista varchar(40) not null unique,
    foreign key (id_ciclista, tipo_persona) references Personas(id_persona, tipo_persona)
);

create table DueñoTaller(
	id_dueño_taller int primary key unique not null,
    tipo_persona int not null default 1 check(tipo_persona = 1), -- TALLER
	RFC_fisica varchar(15) not null,
    foreign key (id_dueño_taller, tipo_persona) references Personas(id_persona, tipo_persona)
);
    
create table Talleres (
	id_taller  int primary key auto_increment,
    id_dueño_taller int not null,	
	nombre_taller varchar(30) not null,	
	RFC_taller varchar(16) not null,
	calificacion_taller double,
	cantidad_empleados int,
    foreign key (id_dueño_taller) references DueñoTaller(id_dueño_taller)
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
	foreign key (id_dueño_taller) references DueñoTaller(id_dueño_taller),
	foreign key (id_ciclista) references Ciclistas(id_ciclista),
	foreign key (id_taller) references Talleres(id_taller)
);
create table Taller_Direccion(
	id_taller int not null, 
	id_direccion int not null, 
    foreign key (id_taller) references Talleres(id_taller) on update cascade on delete cascade,
    foreign key (id_direccion) references Direcciones(id_direccion) on update cascade on delete cascade
);


create table Producto(
	idProducto int auto_increment primary key,
    nombreProducto varchar(30),
    descripcionProducto varchar(200),
    imagenProducto BLOB);

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


-- -----------------------------------------------------------------------------------
DROP PROCEDURE IF EXISTS insertar_ciclista;
DROP PROCEDURE IF EXISTS insertar_admin;
DROP PROCEDURE IF EXISTS insertar_dueño_taller;

DELIMITER $$

-- ---------------------- PROCEDURE NUEVO CICLISTA --------------------------------------------------------------- $$
	CREATE PROCEDURE insertar_ciclista 
		(IN emailUsuario varchar(30), IN passwordUsuario varchar(25), IN nombreCiclista varchar(30), 
		IN apellidoPat varchar(30), IN apellidoMat varchar(30), IN numeroCelular varchar(10), IN tokenPersonalCiclista varchar(30),
		OUT idUsuarioInsertado int)
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
    
-- ---------------------- PROCEDURE NUEVO DUEÑO TALLER ---------------------------------------------------------------$$
    CREATE PROCEDURE insertar_dueño_taller 
		(IN emailUsuario varchar(30), IN passwordUsuario varchar(25), IN nombreDueño varchar(30), IN apellidoPat varchar(30), 
		IN apellidoMat varchar(30), IN numeroCelular varchar(10), IN RFCFisica varchar(15), OUT idUsuarioInsertado int)
		BEGIN
			DECLARE new_id INT DEFAULT 0; -- Id que se asignara al nuevo usuario y se retornara
			DECLARE tipoUsuario INT DEFAULT 1; -- Tipo usuario correspondiente a persona
			DECLARE tipoPersona INT DEFAULT 1; -- Tipo persona correspondiente a dueño taller
			
			INSERT INTO Usuarios (email_usuario, password_usuario, account_status, tipo_usuario) values   (emailUsuario, passwordUsuario, default, tipoUsuario); -- USUARIO TIPO PERSONA
			
			SET new_id = LAST_INSERT_ID(); -- guarda el id del nuevo usuario  
			
			INSERT INTO Personas (id_persona, tipo_usuario, tipo_persona, nombre, apellido_pat, apellido_mat, numero_celular) 
				values   (new_id, tipoUsuario , tipoPersona, nombreDueño, apellidoPat, apellidoMat, numeroCelular); -- NUEVA PERSONA TIPO CICLISTA
			
			INSERT INTO DueñoTaller (id_dueño_taller, tipo_persona, RFC_fisica) values (new_id, tipo_persona, RFCFisica); -- NUEVO CICLISTA
			SELECT new_id INTO idUsuarioInsertado;
		END $$
    
-- ---------------------- PROCEDURE NUEVO ADMIN ---------------------------------------------------------------$$
    CREATE PROCEDURE insertar_admin (IN emailUsuario varchar(30), IN passwordUsuario varchar(25), IN nombreAdmin varchar(20), OUT idUsuarioInsertado int)
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


CALL insertar_ciclista ('procedureCiclista@mysql.com', 'password', 'ciclista procedure', 'Paterno','Materno','5615548192', 'UN_TOKEN_BIEN_SEGURO',  @idUsuarioInsertado);
SELECT @idUsuarioInsertado AS id_ciclista_nuevo;
SELECT * from Usuarios where tipo_usuario = 1; -- CICLISTA 
SELECT * from Personas where tipo_usuario = 1 and tipo_persona = 2; -- USUARIO Y CICLISTA 
SELECT * from Ciclistas where tipo_persona = 2; -- CICLISTA 

CALL insertar_dueño_taller ('procedureDueñoTaller@mysql.com', 'password', 'dueño Procedure', 'Paterno','Materno','5615548192', 'UN_RFC',  @idUsuarioInsertado);
SELECT @idUsuarioInsertado AS id_dueño_nuevo;
SELECT * from Usuarios where tipo_usuario = 1; -- CICLISTA 
SELECT * from Personas where tipo_usuario = 1 and tipo_persona = 1; -- USUARIO Y CICLISTA 
SELECT * from Dueñotaller where tipo_persona = 1; -- DUEÑO TALLER 

CALL insertar_admin ('procedureAdmin@mysql.com', 'password', 'Procedure Admin',  @idUsuarioInsertado);
SELECT @idUsuarioInsertado AS id_admin_nuevo;
SELECT * from Usuarios where tipo_usuario = 2; -- usuario tipo admin 
SELECT * from Administradores where tipo_usuario = 2  ; -- admin 

-- ------------------------------------------- SELECT CLAUSE para ADMINS ---------------------------------------------
select usuarios.id_usuario as id, usuarios.email_usuario as email, usuarios.password_usuario as password, usuarios.account_status, administradores.nombre_admin as nombre, administradores.fecha_registro 
	from usuarios, administradores 
	where usuarios.id_usuario = administradores.id_admin;
    -- ------------------------------------------- SELECT CLAUSE para ADMINS by ID---------------------------------------------
select usuarios.id_usuario as id, usuarios.email_usuario as email, usuarios.password_usuario as password, usuarios.account_status, administradores.nombre_admin as nombre, administradores.fecha_registro 
	from usuarios, administradores 
	where usuarios.id_usuario = administradores.id_admin and usuarios.id_usuario = 4;
    
-- ------------------------------------------- SELECT CLAUSE para CICLISTAS ---------------------------------------------
select usuarios.id_usuario as id, usuarios.email_usuario as email, usuarios.password_usuario as password, usuarios.account_status,
		personas.nombre, personas.apellido_pat, personas.apellido_mat, personas.numero_celular,
		ciclistas.token_personal_ciclista as token
	from usuarios, personas, ciclistas
	where usuarios.id_usuario = personas.id_persona and personas.id_persona = ciclistas.id_ciclista;
        
-- ------------------------------------------- SELECT CLAUSE para DUEÑOS DE TALLER ---------------------------------------------
select usuarios.id_usuario as id, usuarios.email_usuario as email, usuarios.password_usuario as password, usuarios.account_status,
		personas.nombre, personas.apellido_pat, personas.apellido_mat, personas.numero_celular,
		dueñotaller.RFC_fisica as rfc
	from usuarios, personas, dueñotaller
	where usuarios.id_usuario = personas.id_persona and personas.id_persona = dueñotaller.id_dueño_taller;
    
    
-- ------------------------------------------- SELECT CLAUSE PARA TALLERES ---------------------------------------------
select * from talleres;
INSERT INTO talleres (id_dueño_taller, nombre_taller, RFC_taller, calificacion_taller, cantidad_empleados) values( 2, 'taller', 'rfcTaller',5.0, 3);
-- ------------------------------------------- SELECT CLAUSE para REPARACIONES ---------------------------------------------

select * from reparaciones;
INSERT INTO reparaciones (id_dueño_taller, id_ciclista, id_taller,  tipo_reparacion) values( 2, 1, 1, 'Reparacion de cambio de rines');
    -- ------------------------------------------- SELECT CLAUSE para Chats ---------------------------------------------
select * from chats;
INSERT INTO chats ( id_dueño_taller, id_ciclista) values( 2, 1);

-- ------------------------------------------- SELECT CLAUSE para MENSAJES ---------------------------------------------
select * from mensajes;
INSERT INTO mensajes (tipo_mensaje, id_chat, id_Emisor, contenido_mensaje) values ('TEXTO', 1, 2, 'HOLA DESDE DUEÑO TALLER');

-- ------------------------------------------- USER LOGIN PROCEDURE ----------------------------------------------------
DROP procedure IF EXISTS login_usuario;
    DELIMITER $$
-- ---------------------- PROCEDURE LOGIN USUARIO --------------------------------------------------------------- $$
	CREATE PROCEDURE login_usuario (IN emailUsuario varchar(30), IN passwordUsuario varchar(25), OUT id int, OUT email varchar(30), OUT password varchar(25), OUT status varchar(15), OUT role varchar(15))
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
                    IF tipoPersona = 1 -- DUEÑO TALLER
						THEN 
							SELECT 'DUEÑO TALLER' INTO role;
						ELSE
							SELECT 'CICLISTA' INTO role;
					END IF;
			END IF;
		END $$    
DELIMITER ;

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
-- ---------------------- PROCEDURE USUARIO POR ID --------------------------------------------------------------- $$
	CREATE PROCEDURE find_user_by_id (IN id varchar(30), OUT idUsuario int, OUT email varchar(30), OUT password varchar(25), OUT status varchar(15), OUT role varchar(15))
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
                ELSE -- PERSONA
                    SELECT @tipoPersona := Personas.tipo_persona
					From personas
					where idUsuario = personas.id_persona;
                    IF tipoPersona = 1 -- DUEÑO TALLER
						THEN 
							SELECT 'DUEÑO TALLER' INTO role;
						ELSE
							SELECT 'CICLISTA' INTO role;
					END IF;
			END IF;
		END $$    
DELIMITER ;


CALL find_user_by_id (1,  @idUsuario, @emailUsuario, @passwordUsuario, @statusUsuario, @roleUsuario);

SELECT @idUsuario AS id, @emailUsuario AS email, @passwordUsuario AS pass, @statusUsuario AS status, @roleUsuario AS role;


-- ------------------------------------- TABLA PARA ALMACENAR SESIONES JWT-----------------------------------

create table Token (
	id_token int auto_increment primary key,
    id_usuario int not null,
    token varchar (200) not null unique,
    revocado boolean,
    expirado boolean,
    tipo varchar(10) default 'BEARER' check (tipo = 'BEARER'),
    foreign key (id_usuario) references Usuarios(id_usuario)
);

INSERT INTO Token (id_usuario, token, revocado, expirado ) VALUES (1, 'ELTOKEN1_1234Z', FALSE, FALSE);
INSERT INTO Token (id_usuario, token, revocado, expirado ) VALUES (2, 'ELTOKEN2_1234Z', FALSE, FALSE);
SELECT * FROM Token;

-- -------------------------------------------------- SELECT CLAUSE PARA TOKENS VALIDOS POR ID USUARIO --------------------
SELECT * FROM token WHERE token.id_usuario = 3;
-- -------------------------------------------------- SELECT CLAUSE PARA TOKENS VALIDOS POR TOKEN STRING --------------------
SELECT * FROM token WHERE token.token= 'ELTOKEN2_1234Z';