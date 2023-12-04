package com.example.demo.repo;

import com.example.demo.entities.Stagaire;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StagaireRepository extends JpaRepository<Stagaire,Long> {
    //Stagaire findByCin(Long cin);
    Stagaire findByCin(Long cin);
}
