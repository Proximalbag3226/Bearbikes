package com.example.bearbikes_react.controller;

import com.example.bearbikes_react.model.Cyclist;
import com.example.bearbikes_react.model.WorkshopOwner;
import com.example.bearbikes_react.repository.WorkshopOwnerRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/workshopOwner")
@CrossOrigin()
public class WorkshopOwnerController {
    private final WorkshopOwnerRepository workshopOwnerRepository;

    public WorkshopOwnerController(WorkshopOwnerRepository workshopOwnerRepository){
        this.workshopOwnerRepository = workshopOwnerRepository;
    }

    @GetMapping(value={"/count"})
    public int countRegisteredWorkshopOwners(){
        return workshopOwnerRepository.count();
    }

    @GetMapping(value={"/getAll"})
    public List<WorkshopOwner> getRegisteredWorkshopOwners() {
        return workshopOwnerRepository.getAll();
    }

    @PostMapping(value="/register")
    public String registerNewCyclist(
            @RequestParam("email")String email,
            @RequestParam("password")String password,
            @RequestParam("nombre")String nombre,
            @RequestParam("apellidoPat")String apellidoPat,
            @RequestParam("apellidoMat")String apellidoMat,
            @RequestParam("celular")String celular,
            @RequestParam("rfc")String rfc
            )
    {
        //http://localhost:9000/workshopOwner/register?email=emailOwner@curl.com&password=constraseña&nombre=curl&apellidoPat=velazquez&apellidoMat=tellez&celular=5533175289&rfc=1234567890ABCDE
        WorkshopOwner newWorkshopOwner = new WorkshopOwner(email, password, nombre, apellidoPat, apellidoMat, celular, rfc);
        System.out.println(newWorkshopOwner);

        workshopOwnerRepository.addNew(newWorkshopOwner);
        return newWorkshopOwner.toString();

    }

}
