package com.example.bearbikes_react.controller.establishments;

import com.example.bearbikes_react.model.establishments.Commerce;
import com.example.bearbikes_react.model.repository.establishment.CommerceRepository;
import com.example.bearbikes_react.utils.payload.establishment.register.request.RegisterCommerceRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/commerce")
@CrossOrigin()
public class CommerceController {
    private final CommerceRepository commerceRepository;

    public CommerceController(CommerceRepository commerceRepository) {
        this.commerceRepository = commerceRepository;
    }

    @GetMapping(value = {"/count"})
    public int countRegisteredWorkshopOwners() {
        return commerceRepository.count();
    }

    @GetMapping(value = {"/getAll"})
    public List<Commerce> getRegisteredWorkshopOwners() {
        return commerceRepository.getAll();
    }

    @PostMapping(value = "/register", consumes = "application/json", produces = "application/json")
    public ResponseEntity<?> registerNewAdmin(@RequestBody RegisterCommerceRequest newCommerceRequest) {

        try {
            System.out.printf("%n ***%-40s ===> %60s %n%n", "PETICIoN REGISTRO RECIBIDA", newCommerceRequest);
            String emailSesionActiva = SecurityContextHolder.getContext().getAuthentication().getName();
            System.out.println("Active session email " + emailSesionActiva);

            Commerce newCommerce = new Commerce();
            newCommerce.setEmailDueñoEstablecimiento(emailSesionActiva);
            newCommerce.setNombreEstablecimiento(newCommerceRequest.getNombreEstablecimiento());
            newCommerce.setRfcMoral(newCommerceRequest.getRfcEstablecimiento());
            newCommerce.setDireccion(newCommerceRequest.getDireccionEstablecimiento());
            return new ResponseEntity(commerceRepository.addNew(newCommerce), HttpStatus.OK);

        } catch (Exception e) {
            System.out.println(e.getMessage());
            return new ResponseEntity(e, HttpStatus.OK);
        }
    }
}
