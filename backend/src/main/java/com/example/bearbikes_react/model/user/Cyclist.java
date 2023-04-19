package com.example.bearbikes_react.model.user;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class Cyclist extends User {
    private static final UserRole ROLE = UserRole.CICLISTA;

    private String apellidoPat;
    private String apellidoMat;
    private String numerocelular;
    private String tokenPersonal;

    public Cyclist(String email, String password, String nombre, String apellidoPat, String apellidoMat, String numerocelular, String tokenPersonal) {
        super(email, password, ROLE);
        super.setNombre(nombre);
        this.apellidoPat = apellidoPat;
        this.apellidoMat = apellidoMat;
        this.numerocelular = numerocelular;
        this.tokenPersonal = tokenPersonal;
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("Ciclist{");
        sb.append("id=").append(super.getId());
        sb.append(", email='").append(super.getEmail()).append('\'');
        sb.append(", password='").append(super.getPassword()).append('\'');
        sb.append(", nombre='").append(super.getNombre()).append('\'');
        sb.append(", apellidoPat='").append(apellidoPat).append('\'');
        sb.append(", apellidoMat='").append(apellidoMat).append('\'');
        sb.append(", numerocelular='").append(numerocelular).append('\'');
        sb.append(", tokenPersonal='").append(tokenPersonal).append('\'');
        sb.append('}');
        return sb.toString();
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
