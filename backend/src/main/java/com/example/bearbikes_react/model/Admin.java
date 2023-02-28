package com.example.bearbikes_react.model;

import java.sql.Date;

public class Admin {
    private int id;
    private String email;
    private String password;
    private String nombre;
    private AccounStatus accounStatus;

    private Date registerDate;

    public Admin() {
    }

    public Admin(String email, String password, String nombre) {
        this.email = email;
        this.password = password;
        this.nombre = nombre;
        this.accounStatus = AccounStatus.ACTIVA;
    }

    public Date getRegisterDate() {
        return registerDate;
    }

    public void setRegisterDate(Date registerDate) {
        this.registerDate = registerDate;
    }

    public AccounStatus getAccounStatus() {
        return accounStatus;
    }

    public void setAccounStatus(AccounStatus accounStatus) {
        this.accounStatus = accounStatus;
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("Admin{");
        sb.append("id=").append(id);
        sb.append(", email='").append(email).append('\'');
        sb.append(", password='").append(password).append('\'');
        sb.append(", nombre='").append(nombre).append('\'');
        sb.append('}');
        return sb.toString();
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}
