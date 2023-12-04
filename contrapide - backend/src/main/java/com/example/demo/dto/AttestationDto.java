package com.example.demo.dto;

import lombok.Data;

import java.io.Serializable;
import java.util.Date;
@Data

public class AttestationDto implements Serializable {
    private Long id;
    private Date datedebut;
    private Date datefin;
    private long idstagaire;

}
