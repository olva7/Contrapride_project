package com.example.demo.repo;

import com.example.demo.entities.Contrat;
import com.example.demo.entities.Salarie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContratRepository extends JpaRepository<Contrat, Long> {

    Salarie findAllById(Long id);
}
