package com.example.bearbikes_react.model;

public class Cyclist {
    private int id;
    private String email;
    private String password;
    private String nombre;
    private String apellidoPat;
    private String apellidoMat;
    private String numerocelular;
    private String tokenPersonal;

    private AccountStatus accountStatus;

    public AccountStatus getAccountStatus() {
        return accountStatus;
    }

    public void setAccountStatus(AccountStatus estadoCuenta) {
        this.accountStatus = estadoCuenta;
    }

    public Cyclist(){

    }
    public Cyclist(String email, String password, String nombre, String apellidoPat, String apellidoMat, String numerocelular, String tokenPersonal) {
        this.email = email;
        this.password = password;
        this.nombre = nombre;
        this.apellidoPat = apellidoPat;
        this.apellidoMat = apellidoMat;
        this.numerocelular = numerocelular;
        this.tokenPersonal = tokenPersonal;
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("Ciclist{");
        sb.append("id=").append(id);
        sb.append(", email='").append(email).append('\'');
        sb.append(", password='").append(password).append('\'');
        sb.append(", nombre='").append(nombre).append('\'');
        sb.append(", apellidoPat='").append(apellidoPat).append('\'');
        sb.append(", apellidoMat='").append(apellidoMat).append('\'');
        sb.append(", numerocelular='").append(numerocelular).append('\'');
        sb.append(", tokenPersonal='").append(tokenPersonal).append('\'');
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

    public String getTokenPersonal() {
        return tokenPersonal;
    }

    public void setTokenPersonal(String tokenPersonal) {
        this.tokenPersonal = tokenPersonal;
    }
}
