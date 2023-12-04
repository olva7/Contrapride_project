package com.example.demo.service;
import com.example.demo.entities.Salarie;
import com.example.demo.repo.ContratRepository;
import com.example.demo.repo.SalaireRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;

@Service
public class SalarieServiceImpl implements SalarieService {
    @Autowired
    private SalaireRepository salaireRepository;
    @Autowired
    private ContratRepository contratRepository;

    public SalarieServiceImpl(SalaireRepository salaireRepository, ContratRepository contratRepository) {
        this.salaireRepository = salaireRepository;
        this.contratRepository = contratRepository;
    }

    @Override
    public Salarie addSalarie(@RequestBody Salarie s) {
        Salarie existingSalarie = salaireRepository.findByCin(s.getCin());
        if (existingSalarie != null) {

            throw new RuntimeException("A salarie with the same CIN already exists.");
        }


        return salaireRepository.save(s);
    }

    @Override
    public void addSalarieToContrat(Long cin, Long id) {
        //Salarie salarie=salaireRepository.findByCin(cin);
        //Contrat contrat=contratRepository.getReferenceById(id);
        //contrat.getSalarie().add(salarie);
        //salarie.getContrat().add(contrat);
    }

    @Override
    public String deleteSalarie(Long id) {
        salaireRepository.deleteById(id);
        return "done";
    }

    @Override
    public Optional<Salarie> affiche(Long id) {
        return salaireRepository.findById(id);
    }

    @Override
    public Salarie modifySalarie(Long id, Salarie salarie) {
        return salaireRepository.findById(id)
                .map(salarie1 -> {
                    salarie1.setAddresse(salarie.getAddresse());
                    salarie1.setCin(salarie.getCin());
                    salarie1.setNom(salarie.getNom());
                    salarie1.setPrenom(salarie.getPrenom());
                    //salarie1.setPoste(salarie.getPoste());
                    salarie1.setMail(salarie.getMail());


                    return salaireRepository.save(salarie1);
                }).orElseThrow(()->new RuntimeException("le salarié non valide"));
    }

    @Override
    public List<Salarie> getSalarie() {
        return salaireRepository.findAll();
    }


}
