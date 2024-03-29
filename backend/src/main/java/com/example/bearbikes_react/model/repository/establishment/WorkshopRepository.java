package com.example.bearbikes_react.model.repository.establishment;

import com.example.bearbikes_react.model.establishments.Workshop;
import com.example.bearbikes_react.model.locations.Address;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.*;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.sql.*;
import java.util.List;
import java.util.Map;

@Repository
public class WorkshopRepository {
    private static final String SELECT_ALL_WORKSHOPS_QUERY;
    private static final String SELECT_WORKSHOP_BY_ID_QUERY;

    static {
        SELECT_ALL_WORKSHOPS_QUERY =
                                """
                                        SELECT
                                            Establecimientos.id_establecimiento, Establecimientos.nombre_establecimiento, Establecimientos.rfc_moral, Establecimientos.tipo_establecimiento,
                                            Personas.nombre as nombre_dueño, Personas.numero_celular as celular_dueño,
                                            Usuarios.email_usuario as correo_dueño,
                                            Direcciones.calle , Direcciones.numero_exterior, Direcciones.numero_interior, Direcciones.colonia, Direcciones.codigo_postal, Direcciones.alcaldia, Direcciones.ciudad, Direcciones.tipo_direccion,
                                            Talleres.calificacion_taller, Talleres.cantidad_empleados
                                        FROM
                                            Establecimientos, Personas, Usuarios, Direcciones,  Talleres
                                        WHERE
                                            Establecimientos.id_establecimiento = Talleres.id_taller AND
                                            Establecimientos.tipo_establecimiento = 'TALLER' AND
                                            Establecimientos.id_dueño_establecimiento = Personas.id_persona AND
                                            Personas.id_persona = Usuarios.id_usuario AND
                                            Establecimientos.id_direccion = Direcciones.id_direccion;
                                        """.stripIndent();
        SELECT_WORKSHOP_BY_ID_QUERY =
                                """
                                        SELECT
                                            Establecimientos.id_establecimiento, Establecimientos.nombre_establecimiento, Establecimientos.rfc_moral, Establecimientos.tipo_establecimiento,
                                            Personas.nombre as nombre_dueño, Personas.numero_celular as celular_dueño,
                                            Usuarios.email_usuario as correo_dueño,
                                            Direcciones.calle , Direcciones.numero_exterior, Direcciones.numero_interior, Direcciones.colonia, Direcciones.codigo_postal, Direcciones.alcaldia, Direcciones.ciudad, Direcciones.tipo_direccion,
                                            Talleres.calificacion_taller, Talleres.cantidad_empleados
                                        FROM
                                            Establecimientos, Personas, Usuarios, Direcciones,  Talleres
                                        WHERE
                                            Establecimientos.id_establecimiento =  (?) AND
                                            Establecimientos.tipo_establecimiento = 'TALLER' AND
                                            Establecimientos.id_establecimiento = Talleres.id_taller AND
                                            Establecimientos.id_dueño_establecimiento = Personas.id_persona AND
                                            Personas.id_persona = Usuarios.id_usuario AND
                                            Establecimientos.id_direccion = Direcciones.id_direccion;
                                        """.stripIndent();
    }

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    WorkshopRepository(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    /**
     * Makes a query to the database to count the registered workshops
     *
     * @return the number of workshops in the database
     */
    public int count() {
        String countUsersQuery = "SELECT count(*) FROM Establecimientos WHERE Establecimientos.tipo_establecimiento = 'TALLER';";
        return jdbcTemplate.queryForObject(countUsersQuery, Integer.class);
    }



    public Workshop getById(int workshopId){
        return jdbcTemplate.queryForObject(SELECT_WORKSHOP_BY_ID_QUERY, new WorkshopMapper(), workshopId);
    }

    /**
     * Makes a query to the database to get all the registered workshop
     * it uses the .WorkshopMapper to map the query results in to
     * Worshop objects
     * @return a list containing the Worshops
     */
    public List<Workshop> getAll(){
        return jdbcTemplate.query(SELECT_ALL_WORKSHOPS_QUERY, new WorkshopMapper());
    }


    public int getAddressIdForWorkshop(int idEstablishment){
        String query = "SELECT direcciones.id_direccion FROM direcciones WHERE direcciones.id_direccion = (?)";
        return jdbcTemplate.queryForObject(query, Integer.class, idEstablishment);
    }

    /**
     * Makes a query to the database in order to add a new row in the taller table
     * using a given Worshop object
     *
     * @param newWorkshop Worshop object to insert
     * @return the id of the new Worshop in the database, or -1 if an exception happened
     */
    public Workshop addNew(Workshop newWorkshop) {

        SimpleJdbcCall addUserProcedureCall
                = new SimpleJdbcCall(jdbcTemplate)
                .withProcedureName("añadir_nuevo_taller")
                .declareParameters(
                        new SqlParameter("emailDueño", Types.VARCHAR),
                        new SqlParameter("nombreEstablecimiento", Types.VARCHAR),
                        new SqlParameter("rfcEstablecimiento", Types.VARCHAR),
                        new SqlParameter("numeroEmpleados", Types.INTEGER),
                        new SqlParameter("calle", Types.VARCHAR),
                        new SqlParameter("numeroExterior", Types.VARCHAR),
                        new SqlParameter("numeroInterior", Types.VARCHAR),
                        new SqlParameter("colonia", Types.VARCHAR),
                        new SqlParameter("codigoPostal", Types.VARCHAR),
                        new SqlParameter("alcaldia", Types.VARCHAR),
                        new SqlParameter("ciudad", Types.VARCHAR),
                        new SqlOutParameter("idDireccionInsertada", Types.INTEGER),
                        new SqlOutParameter("idEstablecimiento", Types.INTEGER)
                );
        final Address workshopAddress = newWorkshop.getDireccion();
        Map<String, Object> result = addUserProcedureCall.execute(
                newWorkshop.getEmailDueñoEstablecimiento(),
                newWorkshop.getNombreEstablecimiento(),
                newWorkshop.getRfcMoral(),
                newWorkshop.getCantidadEmpleados(),
                workshopAddress.getCalle(),
                workshopAddress.getNumeroExterior(),
                workshopAddress.getNumeroInterior(),
                workshopAddress.getColonia(),
                workshopAddress.getCodigoPostal(),
                workshopAddress.getAlcaldia(),
                workshopAddress.getCiudad()

        );

        int workshopInsertedId =  (int) result.getOrDefault("idEstablecimiento", -1);

        return getById(workshopInsertedId);
    }



    /**
     * RowMapper implementation for map resulting select queries for WorshopOwners using the SELECT_WORKSHOP_OWNER_QUERY String
     * of WorshopOwnerRepository class
     */
    class WorkshopMapper implements RowMapper<Workshop> {
        public Workshop mapRow(ResultSet rs, int rowNum) throws SQLException {
            Address workshopAddress = new Address();
            workshopAddress.setIdDireccion(getAddressIdForWorkshop(rs.getInt("id_establecimiento")));
            workshopAddress.setCalle(rs.getString("calle"));
            workshopAddress.setNumeroExterior(rs.getString("numero_exterior"));
            workshopAddress.setNumeroInterior(rs.getString("numero_interior"));
            workshopAddress.setColonia(rs.getString("colonia"));
            workshopAddress.setCodigoPostal(rs.getString("codigo_postal"));
            workshopAddress.setAlcaldia(rs.getString("alcaldia"));
            workshopAddress.setCiudad(rs.getString("ciudad"));
            workshopAddress.setTipoDireccion(Address.AddressType.valueOf(rs.getString("tipo_direccion")));

            Workshop workshop = new Workshop();
            workshop.setId(rs.getInt("id_establecimiento"));
            workshop.setNombreEstablecimiento(rs.getString("nombre_establecimiento"));
            workshop.setRfcMoral(rs.getString("rfc_moral"));
            // assert workshop.getTipoEstablecimiento().equals(EstablishmentType.valueOf(rs.getString("tipoEstablecimiento")));
            workshop.setNombreDueño(rs.getString("nombre_dueño"));
            workshop.setCelularDueño(rs.getString("celular_dueño"));
            workshop.setEmailDueñoEstablecimiento(rs.getString("correo_dueño"));
            workshop.setCalificacionTaller(rs.getInt("calificacion_taller"));
            workshop.setCantidadEmpleados(rs.getInt("cantidad_empleados"));
            workshop.setDireccion(workshopAddress);
            return workshop;
        }
    }
}
