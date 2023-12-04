package com.example.demo.entities;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import net.minidev.json.annotate.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
@Entity
@Data
public class Contrat implements Serializable {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Temporal(TemporalType.DATE)
    private Date datedebut;
    private Date datefin;
    //private String addresse;
    private float salaire;
    private String preavis ;
    private String poste ;
    private String dureconge ;
    @OneToMany(mappedBy = "contrat")
    private Collection<AppUser> appUsers;
    @ManyToOne
    private Status status;


}
