package com.example.bearbikes_react.utils.payload.establishment.register.request;

import com.example.bearbikes_react.utils.payload.user.register.request.*;
import com.fasterxml.jackson.annotation.JsonSubTypes;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor

@JsonSubTypes({
        @JsonSubTypes.Type(value = RegisterCommerceRequest.class, name = "comercio"),
        @JsonSubTypes.Type(value = RegisterWorkshopRequest.class, name = "taller")
})
public class RegisterWorkshopRequest extends RegisterEstablishmentRequest {
    private int cantidadEmpleados;
}
