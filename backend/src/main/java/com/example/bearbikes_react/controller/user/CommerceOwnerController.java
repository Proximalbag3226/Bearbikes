package com.example.bearbikes_react.controller.user;

import com.example.bearbikes_react.model.repository.user.CommerceOwnerRepository;
import com.example.bearbikes_react.model.user.CommerceOwner;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/commerceOwner")
@CrossOrigin()
public class CommerceOwnerController {
    private final CommerceOwnerRepository commerceOwnerRepository;

    public CommerceOwnerController(CommerceOwnerRepository commerceOwnerRepository){
        this.commerceOwnerRepository = commerceOwnerRepository;
    }
    @GetMapping(value={"/count"})
    public int countRegisteredWorkshopOwners(){
        return commerceOwnerRepository.count();
    }
    @GetMapping(value={"/getAll"})
    public List<CommerceOwner> getRegisteredWorkshopOwners() {
        return commerceOwnerRepository.getAll();
    }
}
