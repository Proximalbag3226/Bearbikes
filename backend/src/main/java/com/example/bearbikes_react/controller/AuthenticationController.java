package com.example.bearbikes_react.controller;

import com.example.bearbikes_react.model.service.AuthenticationService;
import com.example.bearbikes_react.utils.payload.user.authenticate.response.AuthenticationResponse;
import com.example.bearbikes_react.utils.payload.user.authenticate.request.AuthenticateRequest;
import com.example.bearbikes_react.utils.payload.user.register.request.RegisterRequest;
import com.example.bearbikes_react.utils.payload.user.register.response.RegisterResponse;
import lombok.RequiredArgsConstructor;
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
            return ResponseEntity.ok(service.register(request));
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticateRequest request) {
        return ResponseEntity.ok(service.authenticate(request));
    }

}
