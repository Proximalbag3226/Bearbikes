package com.example.bearbikes_react.controller.establishments;

import com.example.bearbikes_react.model.establishments.Workshop;
import com.example.bearbikes_react.model.repository.establishment.WorkshopRepository;
import com.example.bearbikes_react.utils.payload.establishment.register.request.RegisterWorkshopRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/workshop")
@CrossOrigin()
public class WorkshopController {
    private final WorkshopRepository workshopRepository;

    public WorkshopController(WorkshopRepository workshopRepository) {
        this.workshopRepository = workshopRepository;
    }

    @GetMapping(value = {"/count"})
    public int countRegisteredWorkshopOwners() {
        return workshopRepository.count();
    }

    @GetMapping(value = {"/getAll"})
    public List<Workshop> getRegisteredWorkshopOwners() {
        return workshopRepository.getAll();
    }

    @PostMapping(value = "/register", consumes = "application/json", produces = "application/json")
    public ResponseEntity<?> registerNewAdmin(@RequestBody RegisterWorkshopRequest newWorkshopRequest) {

        try {
            String emailSesionActiva = SecurityContextHolder.getContext().getAuthentication().getName();
            System.out.println("Active session email " + emailSesionActiva);

            Workshop newWorkshop = new Workshop();
            newWorkshop.setEmailDueñoEstablecimiento(emailSesionActiva);
            newWorkshop.setNombreEstablecimiento(newWorkshopRequest.getNombreEstablecimiento());
            newWorkshop.setRfcMoral(newWorkshopRequest.getRfcEstablecimiento());
            newWorkshop.setDireccion(newWorkshopRequest.getDireccionEstablecimiento());
            newWorkshop.setCantidadEmpleados(newWorkshopRequest.getCantidadEmpleados());
            newWorkshop.setCalificacionTaller(0);

            return new ResponseEntity(workshopRepository.addNew(newWorkshop), HttpStatus.OK);

        } catch (Exception e) {
            System.out.println(e.getMessage());
            return new ResponseEntity(e, HttpStatus.OK);
        }
    }

}
