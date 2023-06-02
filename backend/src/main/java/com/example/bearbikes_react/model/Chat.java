package com.example.bearbikes_react.model;

import lombok.Builder;
import lombok.Data;

import java.sql.Timestamp;
import java.util.List;

@Data
@Builder
public class Chat {
    private int id;
    private int idDueño;
    private int idCiclista;
    private List<Message> mensajesChat;
    private Timestamp fechaCreacion;

    public Chat(int idDueño, int idCiclista) {
        this.idDueño = idDueño;
        this.idCiclista = idCiclista;
    }

    public Chat() {
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("Chat{");
        sb.append("id=").append(id);
        sb.append(", idDueño=").append(idDueño);
        sb.append(", idCiclista=").append(idCiclista);
        sb.append('}');
        return sb.toString();
    }


}
