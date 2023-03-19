package com.example.bearbikes_react.utils.auth.requests.Register;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor

@JsonSubTypes({
        @JsonSubTypes.Type(value = RegisterAdminRequest.class, name = "admin"),
        @JsonSubTypes.Type(value = RegisterCyclistRequest.class, name = "ciclista"),
        @JsonSubTypes.Type(value = RegisterWorkshopOwnerRequest.class, name = "dueño_taller")})
public class RegisterWorkshopOwnerRequest extends RegisterRequest {
    private String apellidoPat;
    private String apellidoMat;
    private String celular;
    private String rfc;


    public RegisterWorkshopOwnerRequest(String name, String email, String password, String apellidoPat, String apellidoMat, String celular, String rfc) {
        super(name, email, password);
        this.apellidoPat = apellidoPat;
        this.apellidoMat = apellidoMat;
        this.celular = celular;
        this.rfc = rfc;
    }
}
