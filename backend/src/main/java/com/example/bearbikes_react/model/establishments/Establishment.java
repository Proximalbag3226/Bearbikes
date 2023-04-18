package com.example.bearbikes_react.model.establishments;

import com.example.bearbikes_react.model.locations.Address;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public abstract class Establishment {
    protected int id;
    protected String emailDueñoEstablecimiento;
    protected String nombreEstablecimiento;
    protected String rfcMoral;
    protected Address direccion;
    protected String nombreDueño;
    protected String celularDueño;

    public Establishment(String emailDueñoEstablecimiento, String nombreEstablecimiento, String rfcMoral, Address direccion) {
        this.emailDueñoEstablecimiento = emailDueñoEstablecimiento;
        this.nombreEstablecimiento = nombreEstablecimiento;
        this.rfcMoral = rfcMoral;
        this.direccion = direccion;
    }

    public void setIdDireccion(int id) {
        this.direccion.setIdDireccion(id);
    }


}
