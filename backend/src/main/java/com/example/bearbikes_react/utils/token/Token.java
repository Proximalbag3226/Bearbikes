package com.example.bearbikes_react.utils.token;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.Builder;


@Builder
public class Token {
  public Integer id;

  public String token;

  @Enumerated(EnumType.STRING)
  public TokenType tokenType = TokenType.BEARER;

  public boolean revoked;

  public boolean expired;
  
  public Integer idUsuario;

    public Token(Integer id, String token, TokenType tokenType, boolean revoked, boolean expired, Integer idUsuario) {
        this.id = id;
        this.token = token;
        this.tokenType = tokenType;
        this.revoked = revoked;
        this.expired = expired;
        this.idUsuario = idUsuario;
    }

    public Token(Integer id, String token, boolean revoked, boolean expired, Integer idUsuario) {
        this.id = id;
        this.token = token;
        this.revoked = revoked;
        this.expired = expired;
        this.idUsuario = idUsuario;
    }

    public Token() {
    }


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public TokenType getTokenType() {
        return tokenType;
    }

    public void setTokenType(TokenType tokenType) {
        this.tokenType = tokenType;
    }

    public boolean isRevoked() {
        return revoked;
    }

    public void setRevoked(boolean revoked) {
        this.revoked = revoked;
    }

    public boolean isExpired() {
        return expired;
    }

    public void setExpired(boolean expired) {
        this.expired = expired;
    }

    public Integer getIdUsuario() {
        return idUsuario;
    }

    public void setIdUsuario(Integer idUsuario) {
        this.idUsuario = idUsuario;
    }

    @Override
    public String toString() {
        return "Token{" + "id=" + id + ", token=" + token + ", tokenType=" + tokenType + ", revoked=" + revoked + ", expired=" + expired + ", idUsuario=" + idUsuario + '}';
    }
  
}
