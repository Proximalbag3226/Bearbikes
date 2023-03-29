package com.example.bearbikes_react.utils.payload.establishment.register.request;

import com.example.bearbikes_react.model.locations.Address;
import com.example.bearbikes_react.utils.payload.user.register.request.RegisterAdminRequest;
import com.example.bearbikes_react.utils.payload.user.register.request.RegisterCommerceOwnerRequest;
import com.example.bearbikes_react.utils.payload.user.register.request.RegisterCyclistRequest;
import com.example.bearbikes_react.utils.payload.user.register.request.RegisterWorkshopOwnerRequest;
import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@JsonTypeInfo(
        use = JsonTypeInfo.Id.NAME,
        include = JsonTypeInfo.As.PROPERTY,
        property = "type"
)
@JsonSubTypes({
        @JsonSubTypes.Type(value = RegisterCommerceRequest.class, name = "comercio"),
        @JsonSubTypes.Type(value = RegisterWorkshopRequest.class, name = "taller")
})
@Getter
@Setter
@NoArgsConstructor
public abstract class RegisterEstablishmentRequest {

    private String nombreEstablecimiento;
    private String rfcEstablecimiento;
    private Address direccionEstablecimiento;
}

