package com.example.bearbikes_react.model;

public class Workshop {
    private int id;

    private int idDueño;

    public int getIdDueño() {
        return idDueño;
    }

    public void setIdDueño(int idDueño) {
        this.idDueño = idDueño;
    }

    private String nombre;
    private String rfc_taller;
    private double calificacion;
    private int cantidad_empleados;

    public Workshop() {
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("Workshop{");
        sb.append("id=").append(id);
        sb.append(", idDueño=").append(idDueño);
        sb.append(", nombre='").append(nombre).append('\'');
        sb.append(", rfc_taller='").append(rfc_taller).append('\'');
        sb.append(", calificacion=").append(calificacion);
        sb.append(", cantidad_empleados=").append(cantidad_empleados);
        sb.append('}');
        return sb.toString();
    }

    public Workshop(int idDueño, String nombre, String rfc_taller, int cantidad_empleados) {
        this.idDueño = idDueño;
        this.nombre = nombre;
        this.rfc_taller = rfc_taller;
        this.cantidad_empleados = cantidad_empleados;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getRfc_taller() {
        return rfc_taller;
    }

    public void setRfc_taller(String rfc_taller) {
        this.rfc_taller = rfc_taller;
    }

    public double getCalificacion() {
        return calificacion;
    }

    public void setCalificacion(double calificacion) {
        this.calificacion = calificacion;
    }

    public int getCantidad_empleados() {
        return cantidad_empleados;
    }

    public void setCantidad_empleados(int cantidad_empleados) {
        this.cantidad_empleados = cantidad_empleados;
    }
}
//
//    create table Talleres (
//        id_taller  int not null primary key,
//        nombre_taller varchar(10) not null,
//        RFC_taller varchar(16) not null,
//        calificacion_taller double,
//        cantidad_empleados int
//        );
