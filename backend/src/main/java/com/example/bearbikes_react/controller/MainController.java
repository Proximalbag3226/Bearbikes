package com.example.bearbikes_react.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/demo-controller")
public class MainController {

  @GetMapping
  public ResponseEntity<String> sayHello() {
    System.out.println("alguien trato de conseguir acceso");
    return ResponseEntity.ok("Hello from secured endpoint");
  }

}
