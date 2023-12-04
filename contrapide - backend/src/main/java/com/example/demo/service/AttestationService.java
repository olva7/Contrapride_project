package com.example.demo.service;

import com.example.demo.dto.AttestationDto;
import com.example.demo.entities.Attestation;

import java.util.List;

public interface AttestationService {
    void addAttestation(AttestationDto attestationDto);
    public List<Attestation> getAttestation();
}
