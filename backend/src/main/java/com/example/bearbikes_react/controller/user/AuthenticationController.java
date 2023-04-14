package com.example.bearbikes_react.controller.user;

import com.example.bearbikes_react.model.service.AuthenticationService;
import com.example.bearbikes_react.utils.payload.user.authenticate.response.AuthenticationResponse;
import com.example.bearbikes_react.utils.payload.user.authenticate.request.AuthenticateRequest;
import com.example.bearbikes_react.utils.payload.user.register.request.RegisterRequest;
import com.example.bearbikes_react.utils.payload.user.register.response.RegisterResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.SQLException;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
@CrossOrigin()
public class AuthenticationController {

    private final AuthenticationService service;

    @PostMapping("/register")
    public ResponseEntity<RegisterResponse> register(@RequestBody RegisterRequest request) {
        try {
            System.out.printf("%n ***%-40s ===> %60s %n%n", "PETICIÓN REGISTRO RECIBIDA", request);
            return ResponseEntity.ok(service.register(request));
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(
                    RegisterResponse.builder()
                            .message("No se pudo Registrar el usuario")
                            .cause(e.getMessage())
                            .build()
                    , HttpStatus.CONFLICT
            );
        }
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticateRequest request) {
        try {
            System.out.printf("%n ***%-40s ===> %60s %n%n", "PETICIÓN LOGIN RECIBIDA", request);
            return ResponseEntity.ok(service.authenticate(request));
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(
                    AuthenticationResponse.builder()
                            .message("No se pudo iniciar sesión")
                            .cause(e.getMessage())
                            .build()
                    , HttpStatus.CONFLICT
            );
        }
    }

}
