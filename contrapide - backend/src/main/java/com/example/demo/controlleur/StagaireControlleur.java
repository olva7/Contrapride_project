package com.example.demo.controlleur;

import com.example.demo.entities.Salarie;
import com.example.demo.entities.Stagaire;
import com.example.demo.repo.StagaireRepository;
import com.example.demo.service.StagaireService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class StagaireControlleur {
    @Autowired
    private StagaireService stagaireService;
    @Autowired
    private StagaireRepository stagaireRepository;
    @PostMapping("/addstagaire")
    public Stagaire addStagaire(@RequestBody Stagaire stagaire){
        return stagaireService.addstadaire(stagaire);
    }
    @DeleteMapping(value = "/deletee/{id}")
    @ResponseBody
    public String deleteStagaire(@PathVariable("id") Long id){
        return stagaireService.deletestagaire(id);


    }
    @GetMapping("/haveallStagaire")
    public List<Stagaire> getStagaire(){
        return stagaireService.getStagaire();
    }

}
