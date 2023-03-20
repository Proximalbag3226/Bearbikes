package com.example.bearbikes_react.model.user;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class WorkshopOwner extends User {
    private static final UserRole ROLE = UserRole.DUEÑO_TALLER;
    private String nombre;
    private String apellidoPat;
    private String apellidoMat;
    private String numerocelular;
    private String rfcFisica;

    public WorkshopOwner(String email, String password, String nombre, String apellidoPat, String apellidoMat, String numerocelular, String rfcFisica) {
        super(email, password, ROLE);
        this.nombre = nombre;
        this.apellidoPat = apellidoPat;
        this.apellidoMat = apellidoMat;
        this.numerocelular = numerocelular;
        this.rfcFisica = rfcFisica;
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("WorkshopOwner{");
        sb.append("id=").append(super.getId());
        sb.append(", email='").append(super.getEmail()).append('\'');
        sb.append(", password='").append(super.getPassword()).append('\'');
        sb.append(", nombre='").append(nombre).append('\'');
        sb.append(", apellidoPat='").append(apellidoPat).append('\'');
        sb.append(", apellidoMat='").append(apellidoMat).append('\'');
        sb.append(", numerocelular='").append(numerocelular).append('\'');
        sb.append(", rfcFisica='").append(rfcFisica).append('\'');
        sb.append('}');
        return sb.toString();
    }
}
