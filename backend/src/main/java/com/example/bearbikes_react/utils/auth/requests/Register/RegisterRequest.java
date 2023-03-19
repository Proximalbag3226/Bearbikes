package com.example.bearbikes_react.utils.auth.requests.Register;

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
        @JsonSubTypes.Type(value = RegisterAdminRequest.class, name = "admin"),
        @JsonSubTypes.Type(value = RegisterCyclistRequest.class, name = "ciclista"),
        @JsonSubTypes.Type(value = RegisterWorkshopOwnerRequest.class, name = "dueño_taller")})
@Getter
@Setter
@NoArgsConstructor
public abstract class RegisterRequest {
  private String name;
  private String email;
  private String password;

  public RegisterRequest(String name, String email, String password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
