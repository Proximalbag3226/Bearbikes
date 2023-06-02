package com.example.bearbikes_react.controller.chat;

import com.example.bearbikes_react.model.Repair;
import com.example.bearbikes_react.model.repository.RepairsRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("chat/{idChat}")
@CrossOrigin()
public class ChatController {
    private final RepairsRepository repairsRepository;

    public ChatController(RepairsRepository repairsRepository){
        this.repairsRepository = repairsRepository;
    }

    @GetMapping(value={"/count"})
    public int countRegisteredRepairs(){
        return repairsRepository.count();
    }

    @GetMapping(value={"/getAll"})
    public List<Repair> getRegisteredRepairs() {
        return repairsRepository.getAll();
    }

    @PostMapping(value="/register")
    public String registerNewWorkshop(
            @RequestParam("idDueño")int idDueño,
            @RequestParam("idTaller")int idTaller,
            @RequestParam("idCiclista")int idCiclista,
            @RequestParam("tipo")String tipo
            )
    {
        // http://localhost:9000/repairs/register?idDueño=2&idTaller=1&idCiclista=1&tipo=cambioRin
        Repair newRepair = new Repair(idDueño, idCiclista, idTaller, tipo);
        System.out.println(newRepair);


        repairsRepository.addNew(newRepair);
        return newRepair.toString();

    }

}
