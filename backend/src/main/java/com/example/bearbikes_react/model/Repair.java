package com.example.bearbikes_react.model;

import java.sql.Date;

public class Repair {

    private int id;
    private int idDueño;
    private int idTaller;
    private int idCiclista;
    private Date inicio;
    private String estado;
    private String tipo;
    private Date finalizacionEstimada;

    public Repair() {

    }

    public Repair(int idDueño, int idCiclista, int idTaller, String tipo) {
        this.idDueño = idDueño;
        this.idTaller = idTaller;
        this.idCiclista = idCiclista;
        this.tipo = tipo;
    }

    public int getIdTaller() {
        return idTaller;
    }

    public void setIdTaller(int idTaller) {
        this.idTaller = idTaller;
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("Repair{");
        sb.append("id=").append(id);
        sb.append(", idDueño=").append(idDueño);
        sb.append(", idCiclista=").append(idCiclista);
        sb.append(", inicio=").append(inicio);
        sb.append(", estado='").append(estado).append('\'');
        sb.append(", tipo='").append(tipo).append('\'');
        sb.append(", finalizacionEstimada=").append(finalizacionEstimada);
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

    public Date getInicio() {
        return inicio;
    }

    public void setInicio(Date inicio) {
        this.inicio = inicio;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public Date getFinalizacionEstimada() {
        return finalizacionEstimada;
    }

    public void setFinalizacionEstimada(Date finalizacionEstimada) {
        this.finalizacionEstimada = finalizacionEstimada;
    }

    //    create table Reparaciones(
//            id_reparacion int not null primary key auto_increment,
//            id_dueño_taller int not null,
//            id_ciclista int not null,
//            fecha_inicio TIMESTAMP default CURRENT_TIMESTAMP,
//            estado_reparacion varchar(20) default 'etapa inicial' not null,
//    tipo_reparacion varchar (20),
//    fecha_estimada TIMESTAMP,
//    foreign key (id_dueño_taller) references DueñoTaller(id_dueño_taller),
//    foreign key (id_ciclista) references Ciclistas(id_ciclista)
//            );
}
