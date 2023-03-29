SELECT usuarios.id_usuario FROM usuarios WHERE usuarios.email_usuario = 'email1@postman.com';
SELECT * from ciclistas;

SELECT usuarios.id_usuario AS id, usuarios.email_usuario AS email, usuarios.password_usuario AS password, usuarios.account_status, personas.nombre, personas.apellido_pat, personas.apellido_mat, personas.numero_celular, ciclistas.token_personal_ciclista AS token FROM usuarios, personas, ciclistas WHERE usuarios.id_usuario = personas.id_persona AND personas.id_persona = ciclistas.id_ciclista;

select 
	Establecimientos.id_establecimiento, Establecimientos.nombre_establecimiento, Establecimientos.rfc_moral, Establecimientos.tipo_establecimiento,
    Personas.nombre as nombre_dueño, Personas.numero_celular as celular_dueño,
    Usuarios.email_usuario as correo_dueño,
    Direcciones.calle , Direcciones.numero_exterior, Direcciones.numero_interior, Direcciones.colonia, Direcciones.codigo_postal, Direcciones.alcaldia, Direcciones.ciudad, Direcciones.tipo_direccion,
    Talleres.calificacion_taller, Talleres.cantidad_empleados
FROM
    Establecimientos, Personas, Usuarios, Direcciones,  Talleres
WHERE
    Establecimientos.id_establecimiento = Talleres.id_taller AND
    Establecimientos.id_dueño_establecimiento = Personas.id_persona AND
    Personas.id_persona = Usuarios.id_usuario AND
    Establecimientos.id_direccion = Direcciones.id_direccion;