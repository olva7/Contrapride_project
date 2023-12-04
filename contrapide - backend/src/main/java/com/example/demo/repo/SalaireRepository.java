package com.example.demo.repo;

import com.example.demo.entities.Salarie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SalaireRepository extends JpaRepository<Salarie,Long> {
    Salarie findByCin(Long cin);



}
