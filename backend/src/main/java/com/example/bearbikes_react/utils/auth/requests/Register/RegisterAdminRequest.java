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
public class RegisterAdminRequest extends RegisterRequest {
    private String adminKey;

    public RegisterAdminRequest(String name, String email, String password, String adminKey) {
        super(name, email, password);
        this.adminKey = adminKey;
    }
}
