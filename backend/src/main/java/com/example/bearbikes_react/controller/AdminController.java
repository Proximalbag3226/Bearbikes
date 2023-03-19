package com.example.bearbikes_react.controller;

import com.example.bearbikes_react.model.user.Admin;
import com.example.bearbikes_react.model.reporitory.AdminsRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/admins")
@CrossOrigin()
public class AdminController {

    private final AdminsRepository adminsRepository;

    public AdminController(AdminsRepository adminsRepository) {
        this.adminsRepository = adminsRepository;
    }

    @GetMapping(value = {"/count"})
    public ResponseEntity<Integer> countRegisteredAdmins() {
        try {
            return new ResponseEntity(adminsRepository.count(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity(e, HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping(value = {"/getAll"}, produces = "application/json")
    public ResponseEntity<List<Admin>> getRegisteredAdministrator() {
        try {
            return new ResponseEntity(adminsRepository.getAll(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity(e, HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping(value = "/register", consumes = "application/json", produces = "application/json")
    public ResponseEntity<?> registerNewAdmin(
            @RequestParam(value = "adminKey") String clave, // despues encriptar mientras el profe no sabe ni que es rest
            @RequestBody Admin newAdmin
    ) {
        // http://localhost:9000/admins/register?adminKey=kkadsfkldfsh

        try {
                return new ResponseEntity(adminsRepository.addNew(newAdmin, clave), HttpStatus.OK);

        } catch (Exception e) {
            System.out.println(e.getMessage());
            return new ResponseEntity(e, HttpStatus.OK);
        }
    }

}
