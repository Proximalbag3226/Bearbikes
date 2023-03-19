package com.example.bearbikes_react.model.reporitory;

import com.example.bearbikes_react.model.user.AccountStatus;
import com.example.bearbikes_react.model.user.Cyclist;
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
public class CyclistsRepository {
    private final JdbcTemplate jdbcTemplate;
    private static final String SELECT_CYCLIST_QUERY;

    static {
        SELECT_CYCLIST_QUERY = "SELECT " +
                "usuarios.id_usuario AS id, usuarios.email_usuario AS email, usuarios.password_usuario AS password, usuarios.account_status, " +
                "personas.nombre, personas.apellido_pat, personas.apellido_mat, personas.numero_celular, " +
                "ciclistas.token_personal_ciclista AS token " +
                "FROM usuarios, personas, ciclistas " +
                "WHERE usuarios.id_usuario = personas.id_persona AND personas.id_persona = ciclistas.id_ciclista";
    }

    @Autowired
    CyclistsRepository(DataSource dataSource){
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    /*
        Ciclist realted Methods
     */

    /**
     * Makes a query to the database to count the registered cyclists
     * @return the number of cyclists in the database
     */
    public int count(){
        String countUsersQuery = "SELECT COUNT(*) FROM ciclistas";
        return jdbcTemplate.queryForObject(countUsersQuery, Integer.class);
    }

    /**
     * Makes a query to the database to get all the registered cyclists
     * it uses the CyclistsRepository.CyclistMapper to map the query results in to
     * Cyclist objects
     * @return a list containing the cyclists
     */
    public List<Cyclist> getAll(){
        return jdbcTemplate.query(SELECT_CYCLIST_QUERY, new CyclistMapper());
    }

    /**
     * Makes a call to a stored procedure in the database in order to add a new row in the ciclistas table
     * using a given Ciclist object
     * @param newCyclist Ciclist object to insert
     * @return a Ciclist object with his assigned id, or -1 if an exception happened
     */
    public Cyclist addNew(Cyclist newCyclist){
        SimpleJdbcCall addUserProcedureCall
                = new SimpleJdbcCall(jdbcTemplate)
                .withProcedureName("insertar_ciclista")
                .declareParameters(
                        new SqlParameter("emailUsuario", Types.VARCHAR),
                        new SqlParameter("passwordUsuario", Types.VARCHAR),
                        new SqlParameter("nombreCiclista", Types.VARCHAR),
                        new SqlParameter("apellidoPat", Types.VARCHAR),
                        new SqlParameter("apellidoMat", Types.VARCHAR),
                        new SqlParameter("numeroCelular", Types.VARCHAR),
                        new SqlParameter("tokenPersonalCiclista", Types.VARCHAR),
                        new SqlOutParameter("idUsuarioInsertado", Types.INTEGER)
                );
        Map<String, Object> result = addUserProcedureCall.execute(
                newCyclist.getEmail(),
                newCyclist.getPassword(),
                newCyclist.getNombre(),
                newCyclist.getApellidoPat(),
                newCyclist.getApellidoMat(),
                newCyclist.getNumerocelular(),
                newCyclist.getTokenPersonal()
        );
        int insertedCiclistId = (int) result.getOrDefault("idUsuarioInsertado", -1);
        newCyclist.setId(insertedCiclistId);
        return newCyclist;
    }

    /**
     * RowMapper implementation for map resulting select queries for Cyclists using the SELECT_CYCLIST_QUERY String
     * of CyclistRepository class
     */
    class CyclistMapper implements RowMapper<Cyclist> {
        public Cyclist mapRow(ResultSet rs, int rowNum) throws SQLException {
            Cyclist cyclist = new Cyclist();
            cyclist.setId(rs.getInt("id"));
            cyclist.setEmail(rs.getString ("email"));
            cyclist.setPassword(rs.getString ("password"));
            // assign an enum corresponding to the varchar value of account_status
            cyclist.setAccountStatus(AccountStatus.valueOf(rs.getString ("account_status")));
            cyclist.setNombre(rs.getString ("nombre"));
            cyclist.setApellidoPat(rs.getString ("apellido_pat"));
            cyclist.setApellidoMat(rs.getString ("apellido_mat"));
            cyclist.setNumerocelular(rs.getString ("numero_celular"));
            cyclist.setTokenPersonal(rs.getString ("token"));
            return cyclist;
        }
    }
}

