-- ---------------------------- SETENCIAS PARA PRUEBAS ----------------------------

-- TIPO USUARIOS
insert into TipoUsuarios values (2, 'ADMINISTRADOR');
insert into TipoUsuarios values (1, 'PERSONA');

-- TIPO PERSONAS
insert into TipoPersonas values (1, 'DUEÑO_TALLER');
insert into TipoPersonas values (2, 'CICLISTA');

-- CLAVE ADMINISTRADOR
insert into CLAVE_ADMINISTRADOR (clave) value ('CLAVE123');
SELECT count(*) FROM CLAVE_ADMINISTRADOR WHERE clave = 'CLAVE123';

-- CICLISTAS --------------------------------------------------------------------------------------------------------------------------------------------------------------------
CALL insertar_ciclista ('procedureCiclista12@mysql.com', 'password', 'ciclista procedure', 'Paterno','Materno','5615548192', 'UN_TOKEN_BIEN_SEGURO123',  @idUsuarioInsertado);
	SELECT @idUsuarioInsertado AS id_ciclista_nuevo;
	SELECT * from Usuarios where tipo_usuario = 1; -- PERSONA
	SELECT * from Personas where tipo_usuario = 1 and tipo_persona = 2; -- PERSONA Y CICLISTA 
	SELECT * from Ciclistas; -- CICLISTA 
    
	SELECT usuarios.id_usuario as id, usuarios.email_usuario as email, usuarios.password_usuario as password, usuarios.account_status, personas.nombre, personas.apellido_pat, personas.apellido_mat, personas.numero_celular, ciclistas.token_personal_ciclista as token
		FROM usuarios, personas, ciclistas
		WHERE usuarios.id_usuario = personas.id_persona and personas.id_persona = ciclistas.id_ciclista;

-- DUEÑOS TALLER --------------------------------------------------------------------------------------------------------------------------------------------------------------------
CALL insertar_dueño_taller ('dueñotaller@mysql.com', 'password', 'dueño Procedure', 'Paterno','Materno','5615548192', 'UN_RFC',  @idUsuarioInsertado);
	SELECT @idUsuarioInsertado AS id_dueño_nuevo;
	SELECT * from Usuarios where tipo_usuario = 1; -- PERSONA
	SELECT * from Personas where tipo_usuario = 1 and tipo_persona = 1; -- PERSONA Y DUEÑO TALLER  
	SELECT * from Dueñotaller; -- DUEÑO TALLER 
    
	SELECT usuarios.id_usuario AS id, usuarios.email_usuario AS email, usuarios.password_usuario AS password, usuarios.account_status, personas.nombre, personas.apellido_pat, personas.apellido_mat, personas.numero_celular, dueñotaller.RFC_fisica AS rfc
		FROM usuarios, personas, dueñotaller
		WHERE usuarios.id_usuario = personas.id_persona AND personas.id_persona = dueñotaller.id_dueño_taller;


-- ADMINISTRADORES --------------------------------------------------------------------------------------------------------------------------------------------------------------------
CALL insertar_admin ('adminn@mysql.com', 'password', 'Procedure Admin',  @idUsuarioInsertado);
	SELECT @idUsuarioInsertado AS id_admin_nuevo;
	SELECT * from Usuarios where tipo_usuario = 2; -- ADMIN
	SELECT * from Administradores; -- admin 
    
	SELECT usuarios.id_usuario as id, usuarios.email_usuario as email, usuarios.password_usuario as password, usuarios.account_status, administradores.nombre_admin as nombre, administradores.fecha_registro 
		FROM usuarios, administradores 
		WHERE usuarios.id_usuario = administradores.id_admin;
    
-- USUARIOS POR ID --------------------------------------------------------------------------------------------------------------------------------------------------------------------

SELECT * FROM USUARIOS;
CALL find_user_by_id (5,  @idUsuario, @emailUsuario, @passwordUsuario, @statusUsuario, @roleUsuario);
SELECT @idUsuario AS id, @emailUsuario AS email, @passwordUsuario AS pass, @statusUsuario AS status, @roleUsuario AS role;

-- JWT TOKENS --------------------------------------------------------------------------------------------------------------------------------------------------------------------
SELECT * FROM Token;
SELECT * FROM token WHERE token.id_usuario = 2;
SELECT * FROM token WHERE token.token= 'ELTOKEN2_1234Z';

-- AÑADIR ESTABLECIMIENTO ---------------------------------------------------------------------------------------------------------------------------------------------------------
CALL insertar_dueño_taller ('dueñoDeUnTaller@mysql.com', 'password', 'dueño Procedure', 'Paterno','Materno','5615548192', 'UN_RFC_2',  @idUsuarioInsertado);
SELECT @idUsuarioInsertado AS id_dueño_nuevo;
SELECT COUNT(*) from Empresarios where id_empresario = @idUsuarioInsertado; -- verificar que el id del usuario sea un empresario
INSERT INTO direcciones 
	(calle, numero_exterior, numero_interior, colonia, codigo_postal, alcaldia, ciudad, tipo_direccion) VALUES
    ('Mar Mediterràneo', '221', 'S/N', 'Nextitla', '11420', 'Miguel Hidalgo', 'CDMX', 'ESTABLECIMIENTO' );

 -- VERIFICAR QUE EXISTA UNA DIRECCION DE ESTABLECIMIENTO CON EL ID INDICADO
SELECT COUNT(*) from Direcciones where id_direccion = last_insert_id() and tipo_direccion = 'ESTABLECIMIENTO'; 

SELECT * from Direcciones where tipo_direccion = 'ESTABLECIMIENTO'; 

INSERT INTO Establecimientos 
	(id_dueño_establecimiento, nombre_establecimiento, rfc_moral, tipo_establecimiento, id_direccion) values
    (@idUsuarioInsertado, 'ESTABLECIMIENTO 1', '0234567890RFC', 'TALLER', last_insert_id());
SELECT * FROM ESTABLECIMIENTOS;

SELECT 
	Establecimientos.nombre_establecimiento, Establecimientos.rfc_moral, Establecimientos.tipo_establecimiento, 
    Personas.nombre as nombre_dueño, Personas.numero_celular as celular_dueño, 
    Usuarios.email_usuario as correo_dueño,
    Direcciones.calle , Direcciones.numero_exterior, Direcciones.numero_interior, Direcciones.colonia, Direcciones.codigo_postal, Direcciones.alcaldia, Direcciones.ciudad, Direcciones.tipo_direccion
FROM
	Establecimientos, Personas, Usuarios, Direcciones
WHERE 
	Establecimientos.id_dueño_establecimiento = Personas.id_persona AND
    Personas.id_persona = Usuarios.id_usuario AND 
    Establecimientos.id_direccion = Direcciones.id_direccion;
    
SELECT * FROM EMPRESARIOS;