package com.example.bearbikes_react.model.establishments;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Workshop extends Establishment {
    @Enumerated(EnumType.STRING)
    private final EstablishmentType tipoEstablecimiento = EstablishmentType.TALLER;
    private double calificacionTaller;

    private int cantidadEmpleados;

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("Workshop{");
        sb.append("tipoEstablecimiento=").append(tipoEstablecimiento);
        sb.append(", calificacionTaller=").append(calificacionTaller);
        sb.append(", nombreDueño='").append(nombreDueño).append('\'');
        sb.append(", celularDueño='").append(celularDueño).append('\'');
        sb.append(", cantidadEmpleados=").append(cantidadEmpleados);
        sb.append(", id=").append(id);
        sb.append(", emailDueñoEstablecimiento='").append(emailDueñoEstablecimiento).append('\'');
        sb.append(", nombreEstablecimiento='").append(nombreEstablecimiento).append('\'');
        sb.append(", rfcMoral='").append(rfcMoral).append('\'');
        sb.append(", direccion=").append(direccion);
        sb.append('}');
        return sb.toString();
    }
}
