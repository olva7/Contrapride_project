package com.example.demo.entities;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity @Data
public class Stagaire implements Serializable {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long cin;
    private String nom;
    private String prenom;
    private Date datedenaissance;
    private String addresse;
    private String gendre;
    private String mail;
    @OneToOne (cascade = CascadeType.ALL)
    private Attestation attestation;



}
