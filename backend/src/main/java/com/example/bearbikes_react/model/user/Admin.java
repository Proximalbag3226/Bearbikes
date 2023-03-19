package com.example.bearbikes_react.model.user;

import java.sql.Date;

public class Admin extends User {
    private static final UserRole ROLE = UserRole.ADMINISTRADOR;
    private String name;

    private Date registerDate;

    public Admin() {
    }

    public Admin(String email, String password, String name) {
        super(email, password, ROLE);
        this.name = name;
    }

    public Date getRegisterDate() {
        return registerDate;
    }

    public void setRegisterDate(Date registerDate) {
        this.registerDate = registerDate;
    }

    public AccountStatus getAccountStatus() {
        return super.getAccountStatus();
    }

    public void setAccountStatus(AccountStatus accounStatus) {
        super.setAccountStatus(accounStatus);
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("Admin{");
        sb.append("id=").append(super.getId());
        sb.append(", email='").append(super.getEmail()).append('\'');
        sb.append(", password='").append(super.getPassword()).append('\'');
        sb.append(", nombre='").append(name).append('\'');
        sb.append(", registerDate='").append(registerDate).append('\'');
        sb.append('}');
        return sb.toString();
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
