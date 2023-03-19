package com.example.bearbikes_react.controller;

import com.example.bearbikes_react.model.service.AuthenticationService;
import com.example.bearbikes_react.utils.auth.AuthenticationResponse;
import com.example.bearbikes_react.utils.auth.requests.Authenticate.AuthenticateRequest;
import com.example.bearbikes_react.utils.auth.requests.Register.RegisterRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.SQLException;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService service;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest request) {
        try {
            System.out.println(request);
            return ResponseEntity.ok(service.register(request));
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticateRequest request) {
        System.out.println(request);
        return ResponseEntity.ok(service.authenticate(request));
    }


}
