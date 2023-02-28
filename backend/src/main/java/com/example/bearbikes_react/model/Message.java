package com.example.bearbikes_react.model;

import java.sql.Date;

public class Message {

    private int id;
    private int idChat;
    private int idEmisor;
    private TipoMensaje tipo;
    private Object contenido;
    private Date fechaEnvio;

    public Message(int idEmisor, int idChat, TipoMensaje tipo, Object contenido) {
        this.idEmisor = idEmisor;
        this.idChat = idChat;
        this.tipo = tipo;
        this.contenido = contenido;
    }

    public Message() {
    }

    public int getIdChat() {
        return idChat;
    }

    public void setIdChat(int idChat) {
        this.idChat = idChat;
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

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getIdEmisor() {
        return idEmisor;
    }

    public void setIdEmisor(int idEmisor) {
        this.idEmisor = idEmisor;
    }

    public TipoMensaje getTipo() {
        return tipo;
    }

    public void setTipo(TipoMensaje tipo) {
        this.tipo = tipo;
    }

    public Object getContenido() {
        return contenido;
    }

    public void setContenido(Object contenido) {
        this.contenido = contenido;
    }

    public Date getFechaEnvio() {
        return fechaEnvio;
    }

    public void setFechaEnvio(Date fechaEnvio) {
        this.fechaEnvio = fechaEnvio;
    }


    public enum TipoMensaje {
        TEXTO,
        IMAGEN,
        VIDEO,
        AUDIO,
        ARCHIVO
    }
}
