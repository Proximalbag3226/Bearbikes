package com.example.bearbikes_react.model.repository.user;

import com.example.bearbikes_react.model.user.AccountStatus;
import com.example.bearbikes_react.model.user.CommerceOwner;
import com.example.bearbikes_react.model.user.UserRole;
import com.example.bearbikes_react.model.user.WorkshopOwner;
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
public class CommerceOwnerRepository {
    private static final String SELECT_ALL_COMMERCE_OWNERS_QUERY;

    static {
        SELECT_ALL_COMMERCE_OWNERS_QUERY =
                """
                SELECT 
                    usuarios.id_usuario AS id, usuarios.email_usuario AS email, usuarios.password_usuario AS password, usuarios.account_status,
                    personas.nombre, personas.apellido_pat, personas.apellido_mat, personas.numero_celular,
                    empresarios.Rfc_fisica AS rfc
                FROM 
                    usuarios, personas, empresarios
                WHERE 
                    usuarios.id_usuario = personas.id_persona AND
                    personas.id_persona = empresarios.id_empresario AND
                    empresarios.tipo_empresario = 2;
                """.stripIndent();
    }

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    CommerceOwnerRepository(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    /**
     * Makes a query to the database to count the registered workshop owners
     *
     * @return the number of cyclists in the database
     */
    public int count() {
        String countUsersQuery = "SELECT COUNT(*) FROM empresarios WHERE empresarios.tipo_empresario = 2;";
        return jdbcTemplate.queryForObject(countUsersQuery, Integer.class);
    }

    /**
     * Makes a query to the database to get all the registered workshop owners
     * it uses the .WorkshopOwnerMapper to map the query results in to
     * WorshopOwner objects
     * @return a list containing the WorshopOwners
     */
    public List<CommerceOwner> getAll(){
        return jdbcTemplate.query(SELECT_ALL_COMMERCE_OWNERS_QUERY, new CommerceOwnerMapper());
    }


    /**
     * Makes a call to a stored procedure in the database in order to add a new row in the dueñoTaller table
     * using a given WorkshopOwner object
     *
     * @param newCommerceOwner WorkshopOwner object to insert
     * @return the id of the new WorkshopOwner in the database, or -1 if an exception happened
     */
    public CommerceOwner addNew(CommerceOwner newCommerceOwner) {
        SimpleJdbcCall addUserProcedureCall
                = new SimpleJdbcCall(jdbcTemplate)
                .withProcedureName("insertar_dueño_comercio")
                .declareParameters(
                        new SqlParameter("emailUsuario", Types.VARCHAR),
                        new SqlParameter("passwordUsuario", Types.VARCHAR),
                        new SqlParameter("nombreDueño", Types.VARCHAR),
                        new SqlParameter("apellidoPat", Types.VARCHAR),
                        new SqlParameter("apellidoMat", Types.VARCHAR),
                        new SqlParameter("numeroCelular", Types.VARCHAR),
                        new SqlParameter("RFCFisica", Types.VARCHAR),
                        new SqlOutParameter("idUsuarioInsertado", Types.INTEGER)
                );
        Map<String, Object> result = addUserProcedureCall.execute(
                newCommerceOwner.getEmail(),
                newCommerceOwner.getPassword(),
                newCommerceOwner.getNombre(),
                newCommerceOwner.getApellidoPat(),
                newCommerceOwner.getApellidoMat(),
                newCommerceOwner.getNumerocelular(),
                newCommerceOwner.getRfcFisica()
        );
        int insertedWorkshopOwnerId = (int) result.getOrDefault("idUsuarioInsertado", -1);

        newCommerceOwner.setId(insertedWorkshopOwnerId);
        return newCommerceOwner;
    }
    
    /**
     * RowMapper implementation for map resulting select queries for WorshopOwners using the SELECT_COMMERCE_OWNER_QUERY String
     * of WorshopOwnerRepository class
     */
    class CommerceOwnerMapper implements RowMapper<CommerceOwner> {
        public CommerceOwner mapRow(ResultSet rs, int rowNum) throws SQLException {
            CommerceOwner commerceOwner = new CommerceOwner();
            commerceOwner.setId(rs.getInt("id"));
            commerceOwner.setEmail(rs.getString("email"));
            commerceOwner.setPassword(rs.getString("password"));
            commerceOwner.setAccountStatus(AccountStatus.valueOf(rs.getString("account_status")));
            commerceOwner.setNombre(rs.getString("nombre"));
            commerceOwner.setApellidoPat(rs.getString("apellido_pat"));
            commerceOwner.setApellidoMat(rs.getString("apellido_mat"));
            commerceOwner.setNumerocelular(rs.getString("numero_celular"));
            commerceOwner.setRfcFisica(rs.getString("rfc"));
            commerceOwner.setRole(UserRole.DUEÑO_COMERCIO);
            return commerceOwner;
        }
    }
}
