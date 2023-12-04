package com.example.demo.repo;

import com.example.demo.entities.Attestation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AttestaionRepository extends JpaRepository<Attestation,Long> {
}
