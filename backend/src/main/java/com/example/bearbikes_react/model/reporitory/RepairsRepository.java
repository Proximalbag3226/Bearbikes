package com.example.bearbikes_react.model.reporitory;

import com.example.bearbikes_react.model.Repair;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository
public class RepairsRepository {
    private static final String SELECT_ALL_QUERY;

    static {
        SELECT_ALL_QUERY = "SELECT * FROM Reparaciones;";
    }

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    RepairsRepository(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    /**
     * Makes a query to the database to count the registered workshops
     *
     * @return the number of workshops in the database
     */
    public int count() {
        String countUsersQuery = "SELECT COUNT(*) FROM Reparaciones";
        return jdbcTemplate.queryForObject(countUsersQuery, Integer.class);
    }

    /**
     * Makes a query to the database to get all the registered workshop
     * it uses the .WorkshopMapper to map the query results in to
     * Worshop objects
     * @return a list containing the Worshops
     */
    public List<Repair> getAll(){
        return jdbcTemplate.query(SELECT_ALL_QUERY, new RepairMapper());
    }


    /**
     * Makes a query to the database in order to add a new row in the reparaciones table
     * using a given repair object
     *
     * @param repair Repair object to insert
     * @return the id of the new Worshop in the database, or -1 if an exception happened
     */
    public int addNew(Repair repair) {
        String sql = "INSERT INTO reparaciones (id_dueño_taller, id_ciclista, id_taller, tipo_reparacion) " +
                "values(?, ?, ?, ?);";
        KeyHolder keyHolder = new GeneratedKeyHolder();
        jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection.prepareStatement(sql, new String[] {"id_reparacion"});
            ps.setInt(1, repair.getIdDueño());
            ps.setInt(2, repair.getIdCiclista());
            ps.setInt(3, repair.getIdTaller());
            ps.setString(4, repair.getTipo());
            return ps;
        }, keyHolder);
        int insertedWorkshopId  = keyHolder.getKey()!=null?keyHolder.getKey().intValue():-1;

        repair.setId(insertedWorkshopId);
        return insertedWorkshopId;
    }
    /**
     * RowMapper implementation for map resulting select queries for Reapair objects using the SELECT_ALL_QUERY String
     * of ReapairRepository class
     */

    class RepairMapper implements RowMapper<Repair> {
        public Repair mapRow(ResultSet rs, int rowNum) throws SQLException {
            Repair repair = new Repair();
            repair.setId(rs.getInt("id_reparacion"));
            repair.setIdDueño(rs.getInt("id_dueño_taller"));
            repair.setIdTaller(rs.getInt("id_taller"));
            repair.setIdCiclista(rs.getInt("id_ciclista"));
            repair.setInicio(rs.getDate("fecha_inicio"));
            repair.setEstado(rs.getString("estado_reparacion"));
            repair.setTipo(rs.getString("tipo_reparacion"));
            repair.setFinalizacionEstimada(rs.getDate("fecha_estimada"));
            return repair;
        }
    }
}
