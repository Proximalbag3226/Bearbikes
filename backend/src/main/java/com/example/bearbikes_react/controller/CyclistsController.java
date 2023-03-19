package com.example.bearbikes_react.controller;

import com.example.bearbikes_react.model.user.Cyclist;
import com.example.bearbikes_react.model.reporitory.CyclistsRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.example.bearbikes_react.utils.Utils.generateRandomToken;

@RestController
@RequestMapping("/ciclistas")
@CrossOrigin()
public class CyclistsController {
    private final CyclistsRepository cyclistsRepository;

    public CyclistsController(CyclistsRepository cyclistsRepository) {
        this.cyclistsRepository = cyclistsRepository;
    }

    @GetMapping(value = {"/count"})
    public int countRegisteredCyclists() {
        return cyclistsRepository.count();
    }

    @GetMapping(value = {"/getAll"}, produces="application/json")
    public List<Cyclist> getRegisteredCyclists() {
        return cyclistsRepository.getAll();
    }

    @PostMapping(value = "/register")
    public String registerNewCyclist(
            @RequestParam("email") String email,
            @RequestParam("password") String password,
            @RequestParam("nombre") String nombre,
            @RequestParam("apellidoPat") String apellidoPat,
            @RequestParam("apellidoMat") String apellidoMat,
            @RequestParam("celular") String celular
    ) {
        //http://localhost:9000/ciclistas/register?email=email@curl.com&password=constraseña&nombre=curl&apellidoPat=velazquez&apellidoMat=tellez&celular=5533175289

        String randomToken = generateRandomToken(30);
        Cyclist newCyclist = new Cyclist(email, password, nombre, apellidoPat, apellidoMat, celular, randomToken);
        System.out.println(newCyclist);

        cyclistsRepository.addNew(newCyclist);
        return newCyclist.toString();

    }

}
