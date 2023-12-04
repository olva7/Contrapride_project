package com.example.demo.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import net.minidev.json.annotate.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Collection;
import java.util.Date;
import java.util.Set;

@Entity
@Data
public class Salarie implements Serializable {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long cin;
    private String nom;
    private String prenom;
    private String addresse;
    private String gendre;
    private String mail;
    private float numero;
    private String lieu;
    private Date datedenaissance;
    @OneToOne(cascade=CascadeType.ALL)
    private Contrat contrat;

}
