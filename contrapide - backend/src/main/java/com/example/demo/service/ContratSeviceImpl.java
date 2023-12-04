package com.example.demo.service;

import com.example.demo.dto.ContratDto;
import com.example.demo.entities.Contrat;
import com.example.demo.entities.Salarie;
import com.example.demo.repo.ContratRepository;
import com.example.demo.repo.SalaireRepository;
import com.example.demo.repo.StatusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public class ContratSeviceImpl implements ContratSevice {
    @Autowired
    private ContratRepository contratRepository;
    @Autowired
    private SalaireRepository salaireRepository;

    @Autowired
    private StatusRepository statusRepository;

    public void  addContrat(ContratDto contratDto) {
        System.out.println("idSalarie: " + contratDto.getIdSalarie());
        Contrat contrat= new Contrat();
        contrat.setDatefin(contratDto.getDatefin());
        contrat.setDureconge(contratDto.getDureconge());
        contrat.setPoste(contratDto.getPoste());
        contrat.setPreavis(contratDto.getPreavis());
        contrat.setDatedebut(contratDto.getDatedebut());
        contrat.setSalaire(contratDto.getSalaire());
        contrat.setStatus(statusRepository.findByCode("EN_COURS"));
        System.out.println(contratDto.getIdSalarie());
        Salarie s = salaireRepository.findById(contratDto.getIdSalarie()).orElseThrow(() -> new RuntimeException("Salarié not found"));
        s.setContrat(contrat);
        salaireRepository.save(s);

    }



    @Override
    public void deleteContrat(Long id) {
        contratRepository.deleteById(id);
    }

    @Override
    public void updateContrat(ContratDto contrat)
    {

        Contrat oldContat = contratRepository.findById(contrat.getId()).orElseThrow(() -> new RuntimeException("Contrat not found"));
        if("EN_COURS".equals(oldContat.getStatus().getCode())){
            oldContat.setDatedebut(contrat.getDatedebut());
            oldContat.setDatefin(contrat.getDatefin());
            oldContat.setDureconge(contrat.getDureconge());
            oldContat.setPoste(contrat.getPoste());
            oldContat.setPreavis(contrat.getPreavis());
            contratRepository.save(oldContat);
        }
        else {
            throw new RuntimeException("Cannot update Contrat: Status is not 'EN_COURS'");}



    }

    public Contrat getContratById(long id)
    {
       return contratRepository.findById(id).orElseThrow(() -> new RuntimeException("Contrat not found"));
    }


    public void validateContrat(long idContrat,String code) {
       Contrat contrat =contratRepository.findById(idContrat).orElseThrow(() -> new RuntimeException("Contrat not found"));
       contrat.setStatus(statusRepository.findByCode(code));
       contratRepository.save(contrat);
    }

    @Override
    public List<Contrat> getContrat() {
        return contratRepository.findAll();
    }

}
