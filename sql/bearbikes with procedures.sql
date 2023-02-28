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
	password_usuario varchar(25) not null,
	account_status varchar(25) not null default 'ACTIVA',
    
	tipo_usuario int not null default 1 references TipoUsuarios(id_tipo_usuario),
    constraint Usuarios_AltPk unique (id_usuario, tipo_usuario)
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

insert into TipoPersonas values (1, 'DUEÑO TALLER');
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
	id_taller  int not null primary key,
	nombre_taller varchar(10) not null,	
	RFC_taller varchar(16) not null,
	calificacion_taller double,
	cantidad_empleados int
);	
create table Reparaciones(
	id_reparacion int not null primary key auto_increment,
	id_dueño_taller int not null,
	id_ciclista int not null,
	fecha_inicio TIMESTAMP default CURRENT_TIMESTAMP,
	estado_reparacion varchar(20) default 'etapa inicial' not null,
	tipo_reparacion varchar (20),
	fecha_estimada TIMESTAMP,
	foreign key (id_dueño_taller) references DueñoTaller(id_dueño_taller),
	foreign key (id_ciclista) references Ciclistas(id_ciclista)
);
create table Taller_Reparacion(
	id_reparacion int not null,
    id_taller int not null,
    foreign key (id_taller) references Talleres(id_taller),
    foreign key (id_reparacion) references Reparaciones(id_reparacion)
);
create table Taller_Direccion(
	id_taller int not null, 
	id_direccion int not null, 
    foreign key (id_taller) references Talleres(id_taller) on update cascade on delete cascade,
    foreign key (id_direccion) references Direcciones(id_direccion) on update cascade on delete cascade
);

create table Chats(
	id_chat int not null primary key auto_increment,
	id_dueño_taller int not null,
	id_ciclista int not null,
	foreign key (id_dueño_taller) references Reparaciones(id_dueño_taller) on update cascade on delete cascade,
	foreign key (id_ciclista) references Reparaciones(id_ciclista) on update cascade on delete cascade
);

create table Mensajes(
id_mensaje int not null auto_increment primary key,
tipo_mensaje varchar(10) not null,
id_Emisor int not null,
contenido_mensaje blob not null,
fecha_envio TIMESTAMP default CURRENT_TIMESTAMP,
foreign key (id_Emisor) references Personas(id_persona) on delete cascade on update cascade
);

create table Mensaje_Chat(
	id_mensaje int not null, 
	id_chat int not null,
    foreign key (id_mensaje) references Mensajes(id_mensaje) on update cascade on delete cascade,
    foreign key (id_chat) references Chats(id_chat) on update cascade on delete cascade
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
insert into CLAVE_ADMINISTRADOR (clave) value ('CLAVE-123');


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
		(IN emailUsuario varchar(30), IN passwordUsuario varchar(25), IN nombreCiclista varchar(30), IN apellidoPat varchar(30), 
		IN apellidoMat varchar(30), IN numeroCelular varchar(10), IN RFCFisica varchar(15), OUT idUsuarioInsertado int)
		BEGIN
			DECLARE new_id INT DEFAULT 0; -- Id que se asignara al nuevo usuario y se retornara
			DECLARE tipoUsuario INT DEFAULT 1; -- Tipo usuario correspondiente a persona
			DECLARE tipoPersona INT DEFAULT 1; -- Tipo persona correspondiente a dueño taller
			
			INSERT INTO Usuarios (email_usuario, password_usuario, account_status, tipo_usuario) values   (emailUsuario, passwordUsuario, default, tipoUsuario); -- USUARIO TIPO PERSONA
			
			SET new_id = LAST_INSERT_ID(); -- guarda el id del nuevo usuario  
			
			INSERT INTO Personas (id_persona, tipo_usuario, tipo_persona, nombre, apellido_pat, apellido_mat, numero_celular) 
				values   (new_id, tipoUsuario , tipoPersona, nombreCiclista, apellidoPat, apellidoMat, numeroCelular); -- NUEVA PERSONA TIPO CICLISTA
			
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
