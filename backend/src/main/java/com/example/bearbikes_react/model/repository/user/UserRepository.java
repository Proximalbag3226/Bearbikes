package com.example.bearbikes_react.model.repository.user;

import com.example.bearbikes_react.model.user.AccountStatus;
import com.example.bearbikes_react.model.user.User;
import com.example.bearbikes_react.model.user.UserRole;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.dao.IncorrectResultSizeDataAccessException;
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
import java.util.Map;
import java.util.NoSuchElementException;
import java.util.Optional;

@Repository

public class UserRepository {
    protected static final String SELECT_USER_ID_BY_EMAIL;

    static {
        SELECT_USER_ID_BY_EMAIL =
                "SELECT usuarios.id_usuario AS id FROM usuarios WHERE usuarios.email_usuario = (?);";
    }

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    UserRepository(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    Optional<Integer> findIdByEmail(String email) throws DataAccessException {

        Integer idUser;
        try {
            idUser = jdbcTemplate.queryForObject(SELECT_USER_ID_BY_EMAIL, Integer.class, email);
        } catch (IncorrectResultSizeDataAccessException e) {
            System.out.printf("%n ***%-40s ===> %s %n", "USUARIO NO ENCONTRADO", email);
            idUser = null;
        }
        return Optional.ofNullable(idUser);
    }

    public Optional<User> findUserByEmail(String email) {
        User newUser;
        try {
            SimpleJdbcCall addUserProcedureCall =
                    new SimpleJdbcCall(jdbcTemplate)
                            .withProcedureName("find_user_by_id")
                            .declareParameters(
                                    new SqlParameter("id", Types.INTEGER),
                                    new SqlOutParameter("idUsuario", Types.INTEGER),
                                    new SqlOutParameter("email", Types.VARCHAR),
                                    new SqlOutParameter("password", Types.VARCHAR),
                                    new SqlOutParameter("status", Types.VARCHAR),
                                    new SqlOutParameter("role", Types.VARCHAR),
                                    new SqlOutParameter("name", Types.VARCHAR));
            Map<String, Object> result = addUserProcedureCall.execute(
                    this.findIdByEmail(email).get()
            );

            UserMapper userMapper = new UserMapper();
            newUser = userMapper.mapProcedureResult(result);
        } catch (NoSuchElementException e) {
            newUser = null;
        }

        return Optional.ofNullable(newUser);
    }

    public boolean isEmailAvailable(String email) {
        String countUsersByEmail = "SELECT COUNT(*) FROM usuarios where usuarios.email_usuario = (?);";
        return jdbcTemplate.queryForObject(countUsersByEmail, Integer.class, email) == 0;
    }


    static class UserMapper implements RowMapper<User> {

        @Override
        public User mapRow(ResultSet rs, int rowNum) throws SQLException {
            User user = new User();
            user.setId(rs.getInt("id"));
            user.setEmail(rs.getString("email"));
            user.setPassword(rs.getString("password"));
            // assign an enum corresponding to the varchar value of account_status
            user.setAccountStatus(AccountStatus.valueOf(rs.getString("status")));
            user.setRole(UserRole.valueOf(rs.getString("role")));
            return user;
        }

        public User mapProcedureResult(Map rs) {
            User user = new User();
            user.setId((Integer) rs.get("idUsuario"));
            user.setEmail((String) rs.get("email"));
            user.setPassword((String) rs.get("password"));
            user.setAccountStatus(AccountStatus.valueOf((String) rs.get("status")));
            user.setRole(UserRole.valueOf((String) rs.get("role")));
            user.setNombre((String) rs.get("name"));
            return user;
        }
    }

}
