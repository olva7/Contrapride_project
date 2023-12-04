package com.example.demo.service;

import com.example.demo.dto.ContratDto;
import com.example.demo.entities.Contrat;

import java.util.List;

public interface ContratSevice {
    void addContrat(ContratDto contratDto);
    void deleteContrat(Long id);

    void updateContrat(ContratDto contrat);

    public Contrat getContratById(long id);
    public void validateContrat(long idContrat,String code);
    public List<Contrat> getContrat();

}
