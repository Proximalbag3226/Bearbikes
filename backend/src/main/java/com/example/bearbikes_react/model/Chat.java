package com.example.bearbikes_react.model;

import java.util.List;

public class Chat {
    private int id;
    private int idDueño;
    private int idCiclista;
    private List<Message> mensajesChat;

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

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getIdDueño() {
        return idDueño;
    }

    public void setIdDueño(int idDueño) {
        this.idDueño = idDueño;
    }

    public int getIdCiclista() {
        return idCiclista;
    }

    public void setIdCiclista(int idCiclista) {
        this.idCiclista = idCiclista;
    }

    public List<Message> getMensajesChat() {
        return mensajesChat;
    }

    public void setMensajesChat(List<Message> mensajesChat) {
        this.mensajesChat = mensajesChat;
    }
}
