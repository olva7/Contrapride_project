package com.example.demo.service;

import com.example.demo.dto.AttestationDto;
import com.example.demo.entities.Attestation;
import com.example.demo.entities.Contrat;
import com.example.demo.entities.Stagaire;
import com.example.demo.repo.AttestaionRepository;
import com.example.demo.repo.StagaireRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AttestationServiceImp implements AttestationService {
    @Autowired
    private AttestaionRepository attestaionRepository;
    @Autowired
    private StagaireRepository stagaireRepository;


    @Override
    public void addAttestation(AttestationDto attestationDto) {
        System.out.println("idStagaire: " + attestationDto.getIdstagaire());
        Attestation attestation = new Attestation();
        attestation.setDatedebut(attestationDto.getDatedebut());
        attestation.setDatefin(attestationDto.getDatefin());
        System.out.println(attestationDto.getIdstagaire());
        System.out.println( "   " +attestationDto.getIdstagaire());
        Stagaire stagaire = stagaireRepository.findById(attestationDto.getIdstagaire()).orElseThrow(() -> new RuntimeException("no stagaire found"));

        stagaire.setAttestation(attestation);
        stagaireRepository.save(stagaire);

    }
    @Override
    public List<Attestation> getAttestation() {
        return attestaionRepository.findAll();
    }
}
