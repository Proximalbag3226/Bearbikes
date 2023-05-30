package com.example.bearbikes_react.config;

import com.example.bearbikes_react.controller.filter.InvalidJwtResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.nio.charset.CharsetEncoder;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Locale;

@Component
public class CustomAuthenticationEntryPoint implements AuthenticationEntryPoint {


    @Override
    public void commence(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse,
                         AuthenticationException e) throws IOException, ServletException {
        ObjectMapper mapper = new ObjectMapper();
        e.printStackTrace();

        InvalidJwtResponse errorDetails =
                InvalidJwtResponse.builder()
                        .cause("No se incluyo ningun token en la peticion, o el token incluido es invalido")
                        .message("Necesitas autentificarte primero para acceder a este recurso")
                        .time(DateTimeFormatter.ofPattern("dd-MMM-yyyy HH:mm:ss", Locale.US)
                                .format(LocalDateTime.now()))
                        .build();
        httpServletResponse.setContentType("application/json");
        httpServletResponse.setCharacterEncoding(httpServletRequest.getCharacterEncoding());
        httpServletResponse.setStatus(HttpServletResponse.SC_BAD_REQUEST);
        String responseBody = mapper.writeValueAsString(errorDetails);
        httpServletResponse.getOutputStream().println(responseBody);
    }
}
