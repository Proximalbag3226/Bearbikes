package com.example.bearbikes_react.utils.payload.user.register.request;

import com.example.bearbikes_react.model.locations.Address;
import com.fasterxml.jackson.annotation.JsonSubTypes;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@JsonSubTypes({
        @JsonSubTypes.Type(value = RegisterAdminRequest.class, name = "admin"),
        @JsonSubTypes.Type(value = RegisterCyclistRequest.class, name = "ciclista"),
        @JsonSubTypes.Type(value = RegisterWorkshopOwnerRequest.class, name = "dueño_taller"),
        @JsonSubTypes.Type(value = RegisterCommerceOwnerRequest.class, name = "dueño_comercio")
})
public class RegisterAdminRequest extends RegisterRequest {
    private String adminKey;

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("RegisterAdminRequest{");
        sb.append("name='").append(super.getName()).append('\'');
        sb.append(", email='").append(super.getEmail()).append('\'');
        sb.append(", password='").append(super.getPassword()).append('\'');
        sb.append(", adminKey='").append(adminKey).append('\'');
        sb.append('}');
        return sb.toString();
    }
}
