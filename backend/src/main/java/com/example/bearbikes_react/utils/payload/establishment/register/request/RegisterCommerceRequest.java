package com.example.bearbikes_react.utils.payload.establishment.register.request;

import com.example.bearbikes_react.utils.payload.user.register.request.RegisterAdminRequest;
import com.example.bearbikes_react.utils.payload.user.register.request.RegisterCyclistRequest;
import com.example.bearbikes_react.utils.payload.user.register.request.RegisterRequest;
import com.fasterxml.jackson.annotation.JsonSubTypes;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString

@JsonSubTypes({
        @JsonSubTypes.Type(value = RegisterCommerceRequest.class, name = "comercio"),
        @JsonSubTypes.Type(value = RegisterWorkshopRequest.class, name = "taller")
})
public class RegisterCommerceRequest extends RegisterEstablishmentRequest {
}
