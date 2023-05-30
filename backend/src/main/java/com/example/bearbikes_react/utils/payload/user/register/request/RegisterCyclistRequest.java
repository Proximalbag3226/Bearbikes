package com.example.bearbikes_react.utils.payload.user.register.request;

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
public class RegisterCyclistRequest extends RegisterRequest{
  private String apellidoPat;
  private String apellidoMat;
  private String celular;

  @Override
  public String toString() {
    final StringBuilder sb = new StringBuilder("RegisterCyclistRequest{");
    sb.append("name='").append(super.getName()).append('\'');
    sb.append(", email='").append(super.getEmail()).append('\'');
    sb.append(", password='").append(super.getPassword()).append('\'');
    sb.append(", apellidoPat='").append(apellidoPat).append('\'');
    sb.append(", apellidoMat='").append(apellidoMat).append('\'');
    sb.append(", celular='").append(celular).append('\'');
    sb.append('}');
    return sb.toString();
  }
}
