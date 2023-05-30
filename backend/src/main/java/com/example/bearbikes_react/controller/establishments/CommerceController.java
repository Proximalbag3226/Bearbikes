package com.example.bearbikes_react.controller.establishments;

import com.example.bearbikes_react.model.establishments.Commerce;
import com.example.bearbikes_react.model.repository.establishment.CommerceRepository;
import com.example.bearbikes_react.utils.payload.establishment.delete.request.DeleteEstablishmentRequest;
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
    public int countRegisteredCommerces() {
        return commerceRepository.count();
    }

    @GetMapping(value = {"/getAll"})
    public List<Commerce> getRegisteredCommerces() {
        return commerceRepository.getAll();
    }

    @PostMapping(value = "/delete", consumes = "application/json", produces = "application/json")
    public ResponseEntity<?> deleteRegisteredWorkshop(@RequestBody DeleteEstablishmentRequest deleteRequest) {
        try {
            int id = deleteRequest.getId();
            System.out.println("**ID COMMERCIO => " + id);

            return new ResponseEntity<>(commerceRepository.deleteById(id), HttpStatus.OK);

        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(e.getMessage(), HttpStatus.OK);
        }
    }


    @PostMapping(value = "/register", consumes = "application/json", produces = "application/json")
    public ResponseEntity<?> registerNewAdmin(@RequestBody RegisterCommerceRequest newCommerceRequest) {

        try {

            String emailSesionActiva = newCommerceRequest.getEmail();
            System.out.println("**EMAIL => " + emailSesionActiva);

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
