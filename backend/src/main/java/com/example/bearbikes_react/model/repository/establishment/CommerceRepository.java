package com.example.bearbikes_react.model.repository.establishment;

import com.example.bearbikes_react.model.establishments.Commerce;
import com.example.bearbikes_react.model.establishments.Workshop;
import com.example.bearbikes_react.model.locations.Address;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.SqlOutParameter;
import org.springframework.jdbc.core.SqlParameter;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Types;
import java.util.List;
import java.util.Map;

@Repository
public class CommerceRepository {
    private static final String SELECT_ALL_COMMERCES_QUERY;
    private static final String SELECT_COMMERCE_BY_ID_QUERY;

    static {
        SELECT_ALL_COMMERCES_QUERY =
                """
                        SELECT 
                            Establecimientos.id_establecimiento, Establecimientos.nombre_establecimiento, Establecimientos.rfc_moral, Establecimientos.tipo_establecimiento,
                            Personas.nombre as nombre_dueño, Personas.numero_celular as celular_dueño,
                            Usuarios.email_usuario as correo_dueño,
                            Direcciones.calle , Direcciones.numero_exterior, Direcciones.numero_interior, Direcciones.colonia, Direcciones.codigo_postal, Direcciones.alcaldia, Direcciones.ciudad, Direcciones.tipo_direccion
                        FROM
                            Establecimientos, Personas, Usuarios, Direcciones
                        WHERE
                            Establecimientos.id_dueño_establecimiento = Personas.id_persona AND 
                            Personas.id_persona = Usuarios.id_usuario AND 
                            Establecimientos.id_direccion = Direcciones.id_direccion; 
                        """.stripIndent();
        SELECT_COMMERCE_BY_ID_QUERY =
                """
                        SELECT 
                            Establecimientos.id_establecimiento, Establecimientos.nombre_establecimiento, Establecimientos.rfc_moral, Establecimientos.tipo_establecimiento,
                            Personas.nombre as nombre_dueño, Personas.numero_celular as celular_dueño,
                            Usuarios.email_usuario as correo_dueño,
                            Direcciones.calle , Direcciones.numero_exterior, Direcciones.numero_interior, Direcciones.colonia, Direcciones.codigo_postal, Direcciones.alcaldia, Direcciones.ciudad, Direcciones.tipo_direccion
                        FROM
                            Establecimientos, Personas, Usuarios, Direcciones
                        WHERE
                            Establecimientos.id_establecimiento =  (?) AND 
                            Establecimientos.id_dueño_establecimiento = Personas.id_persona AND 
                            Personas.id_persona = Usuarios.id_usuario AND 
                            Establecimientos.id_direccion = Direcciones.id_direccion; 
                        """.stripIndent();
    }

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    CommerceRepository(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    /**
     * Makes a query to the database to count the registered workshops
     *
     * @return the number of workshops in the database
     */
    public int count() {
        String countUsersQuery = "SELECT count(*) FROM Establecimientos WHERE Establecimientos.tipo_establecimiento = 'COMERCIO';";
        return jdbcTemplate.queryForObject(countUsersQuery, Integer.class);
    }


    public Commerce getById(int workshopId) {
        return jdbcTemplate.queryForObject(SELECT_ALL_COMMERCES_QUERY, new CommerceMapper(), workshopId);
    }

    /**
     * Makes a query to the database to get all the registered workshop
     * it uses the .WorkshopMapper to map the query results in to
     * Worshop objects
     *
     * @return a list containing the Worshops
     */
    public List<Commerce> getAll() {
        return jdbcTemplate.query(SELECT_ALL_COMMERCES_QUERY, new CommerceMapper());
    }


    /**
     * Makes a query to the database in order to add a new row in the taller table
     * using a given Worshop object
     *
     * @param newCommerce Worshop object to insert
     * @return the id of the new Worshop in the database, or -1 if an exception happened
     */
    public Commerce addNew(Commerce newCommerce) {

        SimpleJdbcCall addUserProcedureCall
                = new SimpleJdbcCall(jdbcTemplate)
                .withProcedureName("añadir_nuevo_comercio")
                .declareParameters(
                        new SqlParameter("emailDueño", Types.VARCHAR),
                        new SqlParameter("nombreEstablecimiento", Types.VARCHAR),
                        new SqlParameter("rfcEstablecimiento", Types.VARCHAR),
                        new SqlParameter("calle", Types.VARCHAR),
                        new SqlParameter("numeroExterior", Types.VARCHAR),
                        new SqlParameter("numeroInterior", Types.VARCHAR),
                        new SqlParameter("colonia", Types.VARCHAR),
                        new SqlParameter("codigoPostal", Types.VARCHAR),
                        new SqlParameter("alcaldia", Types.VARCHAR),
                        new SqlParameter("ciudad", Types.VARCHAR),
                        new SqlOutParameter("idEstablecimiento", Types.INTEGER)
                );
        final Address workshopAddress = newCommerce.getDireccion();
        Map<String, Object> result = addUserProcedureCall.execute(
                newCommerce.getEmailDueñoEstablecimiento(),
                newCommerce.getNombreEstablecimiento(),
                newCommerce.getRfcMoral(),
                workshopAddress.getCalle(),
                workshopAddress.getNumeroExterior(),
                workshopAddress.getNumeroInterior(),
                workshopAddress.getColonia(),
                workshopAddress.getCodigoPostal(),
                workshopAddress.getAlcaldia(),
                workshopAddress.getCiudad()

        );

        int workshopInsertedId = (int) result.getOrDefault("idEstablecimiento", -1);
        newCommerce.setId(workshopInsertedId);
        return newCommerce;
    }


    /**
     * RowMapper implementation for map resulting select queries for WorshopOwners using the SELECT_WORKSHOP_OWNER_QUERY String
     * of WorshopOwnerRepository class
     */

    class CommerceMapper implements RowMapper<Commerce> {
        public Commerce mapRow(ResultSet rs, int rowNum) throws SQLException {
            Address commerceAddress = new Address();
            commerceAddress.setCalle(rs.getString("calle"));
            commerceAddress.setNumeroExterior(rs.getString("numero_exterior"));
            commerceAddress.setNumeroInterior(rs.getString("numero_interior"));
            commerceAddress.setColonia(rs.getString("colonia"));
            commerceAddress.setCodigoPostal(rs.getString("codigo_postal"));
            commerceAddress.setAlcaldia(rs.getString("alcaldia"));
            commerceAddress.setCiudad(rs.getString("ciudad"));
            commerceAddress.setTipoDireccion(Address.AddressType.valueOf(rs.getString("tipo_direccion")));

            Commerce commerce = new Commerce();
            commerce.setId(rs.getInt("id_establecimiento"));
            commerce.setNombreEstablecimiento(rs.getString("nombre_establecimiento"));
            commerce.setRfcMoral(rs.getString("rfc_moral"));
            // assert commerce.getTipoEstablecimiento().equals(EstablishmentType.valueOf(rs.getString("tipoEstablecimiento")));
            commerce.setNombreDueño(rs.getString("nombre_dueño"));
            commerce.setCelularDueño(rs.getString("celular_dueño"));
            commerce.setEmailDueñoEstablecimiento(rs.getString("correo_dueño"));
            commerce.setDireccion(commerceAddress);
            return commerce;
        }
    }
}
