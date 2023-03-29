package com.example.bearbikes_react.model.locations;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Address {
    @Enumerated(EnumType.STRING)
    AddressType tipoDireccion;
    private int idDireccion;
    private String calle;
    private String numeroExterior;
    private String numeroInterior;
    private String colonia;
    private String codigoPostal;
    private String alcaldia;
    private String ciudad;

    public Address(String calle, String numeroExterior, String numeroInterior, String colonia, String codigoPostal, String alcaldia, String ciudad, AddressType tipoDireccion) {
        this.calle = calle;
        this.numeroExterior = numeroExterior;
        this.numeroInterior = numeroInterior;
        this.colonia = colonia;
        this.codigoPostal = codigoPostal;
        this.alcaldia = alcaldia;
        this.ciudad = ciudad;
        this.tipoDireccion = tipoDireccion;
    }

    public enum AddressType {
        ESTABLECIMIENTO,
        DIRECCION_PERSONAL,
        PUNTO_PARTIDA_RUTA,
        PUNTO_DESTINO_RUTA,
    }


}
