package com.example.demo.service;

import com.example.demo.entities.Salarie;
import com.example.demo.entities.Stagaire;
import com.example.demo.repo.AttestaionRepository;
import com.example.demo.repo.StagaireRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class StagaireServiceImpl implements StagaireService{
    @Autowired
    private StagaireRepository stagaireRepo;
    @Autowired
    private AttestaionRepository attestaionRepo;
    public StagaireServiceImpl (StagaireRepository stagaireRepo, AttestaionRepository attestaionRepo){
        this.stagaireRepo = stagaireRepo;
        this.attestaionRepo = attestaionRepo;
    }

    @Override
    public Stagaire addstadaire(@RequestBody Stagaire s) {
        Stagaire existingstagaie = stagaireRepo.findByCin(s.getCin());
        if (existingstagaie!=null){
            throw new RuntimeException("A stagaire with the same CIN already exists.");
        }
        return stagaireRepo.save(s);
    }

    @Override
    public String deletestagaire(Long id) {
        stagaireRepo.deleteById(id);
        return "done";
    }
    @Override
    public List<Stagaire> getStagaire() {
        return stagaireRepo.findAll();
    }
}
