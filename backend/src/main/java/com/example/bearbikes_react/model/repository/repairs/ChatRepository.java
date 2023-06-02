package com.example.bearbikes_react.model.repository.repairs;

import com.example.bearbikes_react.model.Chat;
import com.example.bearbikes_react.model.Message;
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
public class ChatRepository {
    @Autowired
    ChatRepository chatRepository;

    private final static String SELECT_CHAT_MESSAGES_BY_CHAT_ID;
    private final static String INSERT_NEW_CHAT;
    private final static String SELECT_CHAT_BY_ID;
    private final static String INSERT_NEW_MESSAGE;

    static{
        SELECT_CHAT_MESSAGES_BY_CHAT_ID =
                """
                SELECT * FROM mensajes
                    WHERE mensajes.id_chat = (?)
                    ORDER BY mensajes.fecha_envio, mensajes.id_mensaje;
                """;
        SELECT_CHAT_BY_ID =
                """
                SELECT * FROM chats
                    WHERE chats.id_chat = (?) LIMIT 1;
                """;
        INSERT_NEW_CHAT =
                """
                INSERT INTO chats
                    (id_dueño_taller, id_ciclista)
                     values( (?), (?));
                """;
        INSERT_NEW_MESSAGE =
                """
                INSERT INTO mensajes
                    (tipo_mensaje, id_chat, id_Emisor, contenido_mensaje) values 
                    ((?), (?), (?), (?));
                """;

    }

    private JdbcTemplate jdbcTemplate;

    @Autowired
    ChatRepository(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    public List<Message> getChatMessagesByChatId(int idChat){
        return jdbcTemplate.query(SELECT_CHAT_MESSAGES_BY_CHAT_ID, new MessageMapper(), idChat);
    }

    public Chat getChatById(int idChat){
        Chat retrievedChat = jdbcTemplate.queryForObject(SELECT_CHAT_BY_ID, new ChatMapper(), idChat);
        if (retrievedChat != null)
            retrievedChat.setMensajesChat(getChatMessagesByChatId(idChat));
        return retrievedChat;
    }

    public int createNewChat(int cyclistId, int workshopOwnerId){
        KeyHolder keyHolder = new GeneratedKeyHolder();
        jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection.prepareStatement(INSERT_NEW_CHAT);
            ps.setInt(1, cyclistId);
            ps.setInt(2, workshopOwnerId);
            return ps;
        }, keyHolder);
        int insertedChatId  = keyHolder.getKey()!=null?keyHolder.getKey().intValue():-1;
        return insertedChatId;
    }

    public int saveMessage(Message messageToSave){
        KeyHolder keyHolder = new GeneratedKeyHolder();
        jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection.prepareStatement(INSERT_NEW_MESSAGE);
            ps.setString(1, messageToSave.getTipo().name());
            ps.setInt(2, messageToSave.getIdChat());
            ps.setInt(2, messageToSave.getIdEmisor());
            ps.setBytes(2, messageToSave.getContenido());
            return ps;
        }, keyHolder);
        int insertedMessageId  = keyHolder.getKey()!=null?keyHolder.getKey().intValue():-1;
        return insertedMessageId;
    }


    public static class ChatMapper implements RowMapper<Chat> {

        @Override
        public Chat mapRow(ResultSet rs, int rowNum) throws SQLException {
            return
                    Chat.builder()
                            .id(rs.getInt(""))
                            .idDueño(rs.getInt(""))
                            .idCiclista(rs.getInt(""))
                            .fechaCreacion(rs.getTimestamp(""))
                            .build();

        }
    }
    public static class MessageMapper implements RowMapper<Message> {

        @Override
        public Message mapRow(ResultSet rs, int rowNum) throws SQLException {
            return
                    Message.builder()
                            .id(rs.getInt(""))
                            .idChat(rs.getInt(""))
                            .idEmisor(rs.getInt(""))
                            .tipo(Message.TipoMensaje.valueOf(rs.getString("")))
                            .contenido(rs.getBytes(""))
                            .fechaEnvio(rs.getTimestamp(""))
                            .build();

        }
    }

}
