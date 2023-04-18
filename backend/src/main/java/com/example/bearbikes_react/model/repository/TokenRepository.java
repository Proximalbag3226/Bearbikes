package com.example.bearbikes_react.model.repository;

import com.example.bearbikes_react.utils.token.Token;
import com.example.bearbikes_react.utils.token.TokenType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.dao.IncorrectResultSizeDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Types;
import java.util.List;
import java.util.Optional;

@Repository
public class TokenRepository {
    
    private final JdbcTemplate jdbcTemplate;    

    @Autowired
    TokenRepository(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }
    
     protected static final String SELECT_VALID_TOKENS_BY_USER_ID;
     protected static final String SELECT_VALID_TOKENS_BY_TOKEN_STRING;
     protected static final String INSERT_NEW_TOKEN;
     

    static {
        SELECT_VALID_TOKENS_BY_USER_ID = "SELECT * FROM token WHERE token.id_usuario = (?);";
        SELECT_VALID_TOKENS_BY_TOKEN_STRING = "SELECT * FROM token WHERE token.token= (?);";
        INSERT_NEW_TOKEN = "INSERT INTO Token (id_usuario, token, revocado, expirado ) VALUES ((?), (?), (?), (?));";
    }
    
    public Optional<List<Token>> findAllValidTokenByUserId(int id){

        return Optional.ofNullable( jdbcTemplate.query(SELECT_VALID_TOKENS_BY_USER_ID,new TokenMapper(), id));
    }

    public Optional<Token> findByToken(String token){
        Token retrievedToken = null;
        try{
            retrievedToken = (jdbcTemplate.queryForObject(SELECT_VALID_TOKENS_BY_TOKEN_STRING, new TokenMapper(), token));
        }catch(DataAccessException e){
            System.out.println("No valid tokens were found for token String =>" + token);
        }
        return Optional.ofNullable(retrievedToken);
    }
    
    
    public void saveAllTokens(List<Token> tokens){
        for (Token token: tokens){
            this.save(token);
        }
    }

    public void save(Token storedToken){
        
        
        Object[] args = {
            storedToken.getIdUsuario(),
            storedToken.getTokenString(),
            storedToken.isRevoked(),
            storedToken.isExpired()            
        };
        int[] argsTypes = {
            Types.INTEGER,
            Types.VARCHAR,
            Types.BOOLEAN,
            Types.BOOLEAN,                
        };
        
        jdbcTemplate.update(INSERT_NEW_TOKEN, args, argsTypes);
    }
    
    public static class TokenMapper implements RowMapper<Token>{

        @Override
        public Token mapRow(ResultSet rs, int rowNum) throws SQLException {
            Token token = new Token();
            token.setId(rs.getInt("id_token"));
            token.setIdUsuario(rs.getInt("id_usuario"));
            token.setTokenString(rs.getString("token"));
            token.setRevoked(rs.getBoolean("revocado"));
            token.setExpired(rs.getBoolean("expirado"));
            token.setTokenType(TokenType.valueOf(rs.getString("tipo")));
            return token;
        }
    }
}
