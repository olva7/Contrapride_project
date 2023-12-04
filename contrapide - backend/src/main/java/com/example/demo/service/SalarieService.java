package com.example.demo.service;

import com.example.demo.entities.Salarie;

import java.util.List;
import java.util.Optional;

public interface SalarieService {
    Salarie addSalarie (Salarie s);
    void addSalarieToContrat(Long cin,Long id);
    String deleteSalarie(Long id);
    public Optional<Salarie> affiche(Long id);
    Salarie modifySalarie (Long id, Salarie salarie);
    public List<Salarie> getSalarie();





}
