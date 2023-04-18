package com.example.bearbikes_react.controller.filter;

import lombok.*;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.io.Serializable;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class InvalidJwtResponse {
    private String message;
    private String cause;
    private String time;
}
