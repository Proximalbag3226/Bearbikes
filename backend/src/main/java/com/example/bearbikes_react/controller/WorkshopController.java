package com.example.bearbikes_react.controller;

import com.example.bearbikes_react.model.Workshop;
import com.example.bearbikes_react.model.repository.WorkshopRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/workshop")
@CrossOrigin()
public class WorkshopController {
    private final WorkshopRepository workshopRepository;

    public WorkshopController(WorkshopRepository workshopRepository){
        this.workshopRepository = workshopRepository;
    }

    @GetMapping(value={"/count"})
    public int countRegisteredWorkshopOwners(){
        return workshopRepository.count();
    }

    @GetMapping(value={"/getAll"})
    public List<Workshop> getRegisteredWorkshopOwners() {
        return workshopRepository.getAll();
    }

    @PostMapping(value="/register")
    public String registerNewWorkshop(
            @RequestParam("nombre")String nombre,
            @RequestParam("idDueño")int idDueño,
            @RequestParam("rfc")String rfc,
            @RequestParam("empleados")int empleados
            )
    {
        //http://localhost:9000/workshop/register?nombre=curl&idDueño=2&rfc=rfcTaller&empleados=2
        Workshop newWorkshop = new Workshop(idDueño, nombre, rfc, empleados);
        System.out.println(newWorkshop);


        workshopRepository.addNew(newWorkshop);
        return newWorkshop.toString();

    }

}
