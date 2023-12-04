package com.example.demo.service;

import com.example.demo.entities.Stagaire;

import java.util.List;

public interface StagaireService {
    Stagaire addstadaire(Stagaire s);
    String deletestagaire(Long id);
    public List<Stagaire> getStagaire();
}
