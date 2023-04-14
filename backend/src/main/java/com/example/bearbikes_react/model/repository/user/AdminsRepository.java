package com.example.bearbikes_react.model.repository.user;

import com.example.bearbikes_react.model.user.AccountStatus;
import com.example.bearbikes_react.model.user.Admin;
import com.example.bearbikes_react.model.user.UserRole;
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
public class AdminsRepository {
    protected static final String SELECT_ADMINISTRATORS_QUERY;
    protected static final String SELECT_ADMINISTRATORS_BY_ID_QUERY;

    static {
        SELECT_ADMINISTRATORS_QUERY = "SELECT " +
                "usuarios.id_usuario AS id, usuarios.email_usuario AS email, usuarios.password_usuario AS password, usuarios.account_status, " +
                "administradores.nombre_admin AS nombre, administradores.fecha_registro " +
                "FROM usuarios, administradores " +
                "WHERE usuarios.id_usuario = administradores.id_admin;";

        SELECT_ADMINISTRATORS_BY_ID_QUERY = "SELECT " +
                "usuarios.id_usuario AS id, usuarios.email_usuario AS email, usuarios.password_usuario AS password, usuarios.account_status, " +
                "administradores.nombre_admin AS nombre, administradores.fecha_registro " +
                "FROM usuarios, administradores " +
                "WHERE usuarios.id_usuario = administradores.id_admin and usuarios.id_usuario = (?);";
    }

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    AdminsRepository(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    /*
        Ciclist realted Methods
     */

    /**
     * Makes a query to the database to count the registered admins
     *
     * @return the number of admins in the database
     */
    public int count() {
        String countUsersQuery = "SELECT COUNT(*) FROM administradores";
        return jdbcTemplate.queryForObject(countUsersQuery, Integer.class);
    }

    /**
     * Makes a query to the database to get all the registered adminsitrators
     * it uses the AdminsRepository.AdminMapper to map the query results in to
     * Admin objects
     *
     * @return a list containing the cyclists
     */
    public List<Admin> getAll() {
        return jdbcTemplate.query(SELECT_ADMINISTRATORS_QUERY, new AdminMapper());
    }

    /**
     * Retrieves the Admin with the given id
     *
     * @param idUsuario id to search
     * @return Admin Object
     */
    public Admin getById(int idUsuario) {
        return jdbcTemplate.queryForObject(SELECT_ADMINISTRATORS_BY_ID_QUERY, new AdminMapper(), idUsuario);
    }


    /**
     * Makes a call to a stored procedure in the database in order to add a new row in the administradores table
     * using a given Admin object
     *
     * @param newAdmin Admin object to insert
     * @return the id of the new Administrator in the database, or -1 if an exception happened
     */
//    public int addNew(Admin newAdmin){
//        SimpleJdbcCall addUserProcedureCall
//                = new SimpleJdbcCall(jdbcTemplate)
//                .withProcedureName("insertar_admin")
//                .declareParameters(
//                        new SqlParameter("emailUsuario", Types.VARCHAR),
//                        new SqlParameter("passwordUsuario", Types.VARCHAR),
//                        new SqlParameter("nombreAdmin", Types.VARCHAR),
//                        new SqlOutParameter("idUsuarioInsertado", Types.INTEGER)
//                );
//        Map<String, Object> result = addUserProcedureCall.execute(
//                newAdmin.getEmail(),
//                newAdmin.getPassword(),
//                newAdmin.getName()
//        );
//
//        int insertedAdminId = (int) result.getOrDefault("idUsuarioInsertado", -1);
//        newAdmin.setId(insertedAdminId);
//        return insertedAdminId;
//    }
    public boolean isAdminKeyValid(String adminKey) {

        String addQuery = "SELECT COUNT(*) FROM CLAVE_ADMINISTRADOR WHERE clave = (?);";

        return jdbcTemplate.queryForObject(addQuery, Integer.class, adminKey) != 0;
    }

    public Admin addNew(Admin newAdmin, String adminKey) throws SQLException {
        if (!isAdminKeyValid(adminKey))
            throw new SQLException("La llave del administrador no coincide con la registrada");

        SimpleJdbcCall addUserProcedureCall
                = new SimpleJdbcCall(jdbcTemplate)
                .withProcedureName("insertar_admin")
                .declareParameters(
                        new SqlParameter("emailUsuario", Types.VARCHAR),
                        new SqlParameter("passwordUsuario", Types.VARCHAR),
                        new SqlParameter("nombreAdmin", Types.VARCHAR),
                        new SqlOutParameter("idUsuarioInsertado", Types.INTEGER)
                );
        Map<String, Object> result = addUserProcedureCall.execute(
                newAdmin.getEmail(),
                newAdmin.getPassword(),
                newAdmin.getName()
        );

        int insertedAdminId = (int) result.getOrDefault("idUsuarioInsertado", -1);
        newAdmin.setId(insertedAdminId);
        return newAdmin;
    }

    public Admin addNew(Admin newAdmin) {

        SimpleJdbcCall addUserProcedureCall
                = new SimpleJdbcCall(jdbcTemplate)
                .withProcedureName("insertar_admin")
                .declareParameters(
                        new SqlParameter("emailUsuario", Types.VARCHAR),
                        new SqlParameter("passwordUsuario", Types.VARCHAR),
                        new SqlParameter("nombreAdmin", Types.VARCHAR),
                        new SqlOutParameter("idUsuarioInsertado", Types.INTEGER)
                );
        Map<String, Object> result = addUserProcedureCall.execute(
                newAdmin.getEmail(),
                newAdmin.getPassword(),
                newAdmin.getName()
        );

        int insertedAdminId = (int) result.getOrDefault("idUsuarioInsertado", -1);
        newAdmin.setId(insertedAdminId);
        return newAdmin;
    }

    /**
     * RowMapper implementation for map resulting select queries for Administrators using the SELECT_CYCLIST_QUERY String
     * of AdminRepository class
     */
    static class AdminMapper implements RowMapper<Admin> {
        public Admin mapRow(ResultSet rs, int rowNum) throws SQLException {
            Admin admin = new Admin();
            admin.setId(rs.getInt("id"));
            admin.setEmail(rs.getString("email"));
            admin.setPassword(rs.getString("password"));
            // assign an enum corresponding to the varchar value of account_status
            admin.setAccountStatus(AccountStatus.valueOf(rs.getString("account_status")));
            admin.setName(rs.getString("nombre"));
            admin.setRegisterDate(rs.getDate("fecha_registro"));
            admin.setRole(UserRole.ADMINISTRADOR);
            return admin;
        }
    }
}
