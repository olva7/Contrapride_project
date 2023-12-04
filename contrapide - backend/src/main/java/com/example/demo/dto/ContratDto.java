package com.example.demo.dto;

import lombok.Data;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import java.io.Serializable;
import java.util.Date;

@Data
public class ContratDto implements Serializable{
    private  long id ;
    private Date datedebut;
    private Date datefin;
    private float salaire;
    private String preavis ;
    private String poste ;
    private String dureconge ;

    private long idSalarie ;
}
