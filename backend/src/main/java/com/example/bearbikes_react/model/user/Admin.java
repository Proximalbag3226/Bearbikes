package com.example.bearbikes_react.model.user;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.sql.Date;

@NoArgsConstructor
@Getter
@Setter
public class Admin extends User {
    private static final UserRole ROLE = UserRole.ADMINISTRADOR;
    private Date registerDate;

    public Admin(String email, String password, String nombre) {
        super(email, password, ROLE);
        super.setNombre(nombre);
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("Admin{");
        sb.append("id=").append(super.getId());
        sb.append(", email='").append(super.getEmail()).append('\'');
        sb.append(", password='").append(super.getPassword()).append('\'');
        sb.append(", nombre='").append(super.getNombre()).append('\'');
        sb.append(", registerDate='").append(registerDate).append('\'');
        sb.append('}');
        return sb.toString();
    }
}
