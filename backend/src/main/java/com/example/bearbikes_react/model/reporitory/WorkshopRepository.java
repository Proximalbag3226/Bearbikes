package com.example.bearbikes_react.model.reporitory;

import com.example.bearbikes_react.model.Workshop;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.*;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.sql.*;
import java.util.List;

@Repository
public class WorkshopRepository {
    private static final String SELECT_WORKSHOP_OWNER_QUERY;

    static {
        SELECT_WORKSHOP_OWNER_QUERY = "SELECT * FROM talleres;";
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
        String countUsersQuery = "SELECT COUNT(*) FROM talleres";
        return jdbcTemplate.queryForObject(countUsersQuery, Integer.class);
    }

    /**
     * Makes a query to the database to get all the registered workshop
     * it uses the .WorkshopMapper to map the query results in to
     * Worshop objects
     * @return a list containing the Worshops
     */
    public List<Workshop> getAll(){
        return jdbcTemplate.query(SELECT_WORKSHOP_OWNER_QUERY, new WorkshopMapper());
    }


    /**
     * Makes a query to the database in order to add a new row in the taller table
     * using a given Worshop object
     *
     * @param newWorkshop Worshop object to insert
     * @return the id of the new Worshop in the database, or -1 if an exception happened
     */
    public int addNew(Workshop newWorkshop) {
        String sql = "INSERT INTO talleres (id_dueño_taller, nombre_taller, RFC_taller, cantidad_empleados) " +
                "values(?, ?, ?, ?);";
        KeyHolder keyHolder = new GeneratedKeyHolder();
        jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection.prepareStatement(sql, new String[] {"id_taller"});
            ps.setInt(1, newWorkshop.getIdDueño());
            ps.setString(2, newWorkshop.getNombre());
            ps.setString(3, newWorkshop.getRfc_taller());
            ps.setInt(4, newWorkshop.getCantidad_empleados());
            return ps;
        }, keyHolder);
        int insertedWorkshopId  = keyHolder.getKey()!=null?keyHolder.getKey().intValue():-1;

        newWorkshop.setId(insertedWorkshopId);
        return insertedWorkshopId;
    }
    /**
     * RowMapper implementation for map resulting select queries for WorshopOwners using the SELECT_WORKSHOP_OWNER_QUERY String
     * of WorshopOwnerRepository class
     */

    class WorkshopMapper implements RowMapper<Workshop> {
        public Workshop mapRow(ResultSet rs, int rowNum) throws SQLException {
            Workshop workshop = new Workshop();
            workshop.setId(rs.getInt("id_taller"));
            workshop.setIdDueño(rs.getInt("id_dueño_taller"));
            workshop.setNombre(rs.getString("nombre_taller"));
            workshop.setRfc_taller(rs.getString("RFC_taller"));
            workshop.setCalificacion(rs.getDouble("calificacion_taller"));
            workshop.setCantidad_empleados(rs.getInt("cantidad_empleados"));
            return workshop;
        }
    }
}
