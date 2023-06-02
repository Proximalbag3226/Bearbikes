package com.example.bearbikes_react.model;

import lombok.Builder;
import lombok.Data;

import java.sql.Timestamp;


@Data
@Builder
public class Message {


    public Message(){}// No args constructor for Builder annotation

    private int id;
    private int idChat;
    private int idEmisor;
    private TipoMensaje tipo;
    private byte[] contenido;
    private Timestamp fechaEnvio;

    public Message(int idEmisor, int idChat, TipoMensaje tipo, byte[] contenido) {
        this.idEmisor = idEmisor;
        this.idChat = idChat;
        this.tipo = tipo;
        this.contenido = contenido;
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("Message{");
        sb.append("id=").append(id);
        sb.append(", idChat=").append(idChat);
        sb.append(", idEmisor=").append(idEmisor);
        sb.append(", tipo=").append(tipo);
        sb.append(", contenido=").append(contenido);
        sb.append(", fechaEnvio=").append(fechaEnvio);
        sb.append('}');
        return sb.toString();
    }


    public enum TipoMensaje {
        TEXTO,
        IMAGEN,
        VIDEO,
        AUDIO,
        ARCHIVO
    }
}
