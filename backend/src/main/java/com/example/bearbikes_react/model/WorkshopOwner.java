package com.example.bearbikes_react.model;

public class WorkshopOwner {
    private int id;
    private String email;
    private String password;
    private String nombre;
    private String apellidoPat;
    private String apellidoMat;
    private String numerocelular;
    private String rfcFisica;
    private AccountStatus accountStatus;

    public WorkshopOwner() {
    }

    public WorkshopOwner(String email, String password, String nombre, String apellidoPat, String apellidoMat, String numerocelular, String rfcFisica) {
        this.email = email;
        this.password = password;
        this.nombre = nombre;
        this.apellidoPat = apellidoPat;
        this.apellidoMat = apellidoMat;
        this.numerocelular = numerocelular;
        this.rfcFisica = rfcFisica;
    }

    public AccountStatus getAccountStatus() {
        return accountStatus;
    }

    public void setAccountStatus(AccountStatus accountStatus) {
        this.accountStatus = accountStatus;
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("WorkshopOwnerId{");
        sb.append("id=").append(id);
        sb.append(", email='").append(email).append('\'');
        sb.append(", password='").append(password).append('\'');
        sb.append(", nombre='").append(nombre).append('\'');
        sb.append(", apellidoPat='").append(apellidoPat).append('\'');
        sb.append(", apellidoMat='").append(apellidoMat).append('\'');
        sb.append(", numerocelular='").append(numerocelular).append('\'');
        sb.append(", RFC_Fisica='").append(rfcFisica).append('\'');
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

    public String getApellidoPat() {
        return apellidoPat;
    }

    public void setApellidoPat(String apellidoPat) {
        this.apellidoPat = apellidoPat;
    }

    public String getApellidoMat() {
        return apellidoMat;
    }

    public void setApellidoMat(String apellidoMat) {
        this.apellidoMat = apellidoMat;
    }

    public String getNumerocelular() {
        return numerocelular;
    }

    public void setNumerocelular(String numerocelular) {
        this.numerocelular = numerocelular;
    }

    public String getRfcFisica() {
        return rfcFisica;
    }

    public void setRfcFisica(String tokenPersonal) {
        this.rfcFisica = tokenPersonal;
    }
}
