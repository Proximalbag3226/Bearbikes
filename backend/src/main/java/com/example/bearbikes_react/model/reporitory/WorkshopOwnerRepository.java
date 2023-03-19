package com.example.bearbikes_react.model.reporitory;

import com.example.bearbikes_react.model.user.AccountStatus;
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
public class WorkshopOwnerRepository {
    private static final String SELECT_WORKSHOP_OWNER_QUERY;

    static {
        SELECT_WORKSHOP_OWNER_QUERY = "SELECT " +
                "usuarios.id_usuario AS id, usuarios.email_usuario AS email, usuarios.password_usuario AS password, usuarios.account_status, " +
                "personas.nombre, personas.apellido_pat, personas.apellido_mat, personas.numero_celular, " +
                "dueñotaller.RFC_fisica AS rfc " +
                "FROM usuarios, personas, dueñotaller " +
                "WHERE usuarios.id_usuario = personas.id_persona AND personas.id_persona = dueñotaller.id_dueño_taller;";
    }

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    WorkshopOwnerRepository(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    /**
     * Makes a query to the database to count the registered workshop owners
     *
     * @return the number of cyclists in the database
     */
    public int count() {
        String countUsersQuery = "SELECT COUNT(*) FROM dueñotaller";
        return jdbcTemplate.queryForObject(countUsersQuery, Integer.class);
    }

    /**
     * Makes a query to the database to get all the registered workshop owners
     * it uses the .WorkshopOwnerMapper to map the query results in to
     * WorshopOwner objects
     * @return a list containing the WorshopOwners
     */
    public List<WorkshopOwner> getAll(){
        return jdbcTemplate.query(SELECT_WORKSHOP_OWNER_QUERY, new WorkshopOwnerMapper());
    }


    /**
     * Makes a call to a stored procedure in the database in order to add a new row in the dueñoTaller table
     * using a given WorkshopOwner object
     *
     * @param newWorkshopOwner WorkshopOwner object to insert
     * @return the id of the new WorkshopOwner in the database, or -1 if an exception happened
     */
    public int addNew(WorkshopOwner newWorkshopOwner) {
        SimpleJdbcCall addUserProcedureCall
                = new SimpleJdbcCall(jdbcTemplate)
                .withProcedureName("insertar_dueño_taller")
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
                newWorkshopOwner.getEmail(),
                newWorkshopOwner.getPassword(),
                newWorkshopOwner.getNombre(),
                newWorkshopOwner.getApellidoPat(),
                newWorkshopOwner.getApellidoMat(),
                newWorkshopOwner.getNumerocelular(),
                newWorkshopOwner.getRfcFisica()
        );
        int insertedWorkshopOwnerId = (int) result.getOrDefault("idUsuarioInsertado", -1);

        newWorkshopOwner.setId(insertedWorkshopOwnerId);
        return insertedWorkshopOwnerId;
    }
    
    /**
     * RowMapper implementation for map resulting select queries for WorshopOwners using the SELECT_WORKSHOP_OWNER_QUERY String
     * of WorshopOwnerRepository class
     */
    class WorkshopOwnerMapper implements RowMapper<WorkshopOwner> {
        public WorkshopOwner mapRow(ResultSet rs, int rowNum) throws SQLException {
            WorkshopOwner workshopOwner = new WorkshopOwner();
            workshopOwner.setId(rs.getInt("id"));
            workshopOwner.setEmail(rs.getString("email"));
            workshopOwner.setPassword(rs.getString("password"));
            // assign an enum corresponding to the varchar value of account_status
            workshopOwner.setAccountStatus(AccountStatus.valueOf(rs.getString("account_status")));
            workshopOwner.setNombre(rs.getString("nombre"));
            workshopOwner.setApellidoPat(rs.getString("apellido_pat"));
            workshopOwner.setApellidoMat(rs.getString("apellido_mat"));
            workshopOwner.setNumerocelular(rs.getString("numero_celular"));
            workshopOwner.setRfcFisica(rs.getString("rfc"));
            return workshopOwner;
        }
    }
}
