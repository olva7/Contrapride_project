package com.example.demo.controlleur;

import com.example.demo.dto.ContratDto;
import com.example.demo.entities.Contrat;
import com.example.demo.repo.ContratRepository;
import com.example.demo.service.ContratSevice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController

public class ContratControlleur {
    @Autowired
    ContratSevice contratSevice;
    @Autowired
    ContratRepository contratRepository;

    @PostMapping("/addContrat")
    public void addContrat(@RequestBody ContratDto contratDto) {

        contratSevice.addContrat(contratDto);
    }

    @DeleteMapping("/deleteContrat/{id}")
    @ResponseBody
    public void deleteContrat(@PathVariable("id") Long id) {
        contratSevice.deleteContrat(id);

    }
    @GetMapping("/afficher/{id}")
    public Contrat getContratById(@PathVariable("id") Long id)
    {
        return contratSevice.getContratById(id);
    }
    @PutMapping("/updatee")
    public void updateContrat(@RequestBody ContratDto contrat){
        contratSevice.updateContrat(contrat);
    }
    @PutMapping("/validateContrat/{id}")
    public void validateContrat(@PathVariable("id") Long idContrat,@RequestBody String code){
        contratSevice.validateContrat(idContrat,code);
    }
    @GetMapping("/haveallContrat")
    public List<Contrat> getContrat(){
       return contratSevice.getContrat();
    }



















}