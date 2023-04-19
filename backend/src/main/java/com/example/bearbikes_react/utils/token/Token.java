package com.example.bearbikes_react.utils.token;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.*;

@Builder
@Getter
@Setter
@ToString
@AllArgsConstructor
public class Token {
    private Integer id;
    private String tokenString;
    @Enumerated(EnumType.STRING)
    @Builder.Default
    private TokenType tokenType = TokenType.BEARER;
    private boolean revoked;
    private boolean expired;
    private Integer idUsuario;

    public Token() {
        //Intentionally left blank for object mapping purposes
    }
}
