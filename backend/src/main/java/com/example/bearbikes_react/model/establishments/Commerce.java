package com.example.bearbikes_react.model.establishments;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Commerce extends Establishment{
    @Enumerated(EnumType.STRING)
    private final EstablishmentType tipoEstablecimiento = EstablishmentType.COMERCIO;


    private String nombreDueño;

    private String celularDueño;

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("Commerce{");
        sb.append("tipoEstablecimiento=").append(tipoEstablecimiento);
        sb.append("emailDueñoEstablecimiento=").append(super.id);
        sb.append(", idDueñoEstablecimiento=").append(super.emailDueñoEstablecimiento);
        sb.append(", nombreEstablecimiento='").append(super.nombreEstablecimiento).append('\'');
        sb.append(", rfcMoral='").append(super.rfcMoral).append('\'');
        sb.append(", direccion=").append(super.direccion);
        sb.append('}');
        return sb.toString();
    }
}
