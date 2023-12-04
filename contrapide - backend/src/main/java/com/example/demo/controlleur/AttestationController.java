package com.example.demo.controlleur;

import com.example.demo.dto.AttestationDto;
import com.example.demo.entities.Contrat;
import com.example.demo.service.AttestationService;
import com.example.demo.service.StagaireService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class AttestationController {
    @Autowired
    AttestationService attestationService;
    @Autowired
    StagaireService stagaireService;
    @PostMapping("/addAttestation")
    public void addAttestation (@RequestBody AttestationDto attestationDto){
        attestationService.addAttestation(attestationDto);

    }

}
