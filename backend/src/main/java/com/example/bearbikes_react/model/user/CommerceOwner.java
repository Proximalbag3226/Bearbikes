package com.example.bearbikes_react.model.user;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class CommerceOwner extends User {
    private static final UserRole ROLE = UserRole.DUEÑO_COMERCIO;
    private String apellidoPat;
    private String apellidoMat;
    private String numerocelular;
    private String rfcFisica;

    public CommerceOwner(String email, String password, String nombre, String apellidoPat, String apellidoMat, String numerocelular, String rfcFisica) {
        super(email, password, ROLE);
        super.setNombre(nombre);
        this.apellidoPat = apellidoPat;
        this.apellidoMat = apellidoMat;
        this.numerocelular = numerocelular;
        this.rfcFisica = rfcFisica;
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("CommerceOwner{");
        sb.append("id=").append(super.getId());
        sb.append(", email='").append(super.getEmail()).append('\'');
        sb.append(", password='").append(super.getPassword()).append('\'');
        sb.append(", nombre='").append(super.getNombre()).append('\'');
        sb.append(", apellidoPat='").append(apellidoPat).append('\'');
        sb.append(", apellidoMat='").append(apellidoMat).append('\'');
        sb.append(", numerocelular='").append(numerocelular).append('\'');
        sb.append(", rfcFisica='").append(rfcFisica).append('\'');
        sb.append('}');
        return sb.toString();
    }
}
