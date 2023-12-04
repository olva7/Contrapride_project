import { Attestation } from './../models/Attestation';
import { contra } from './../models/contra';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { contra } from 'app/models/contra';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })
  export class AttestationService {
    private urlServiceApi="http://localhost:8081";
    constructor(private http: HttpClient) { }
    public getattestation(){
      return this.http.get<Attestation[]>(this.urlServiceApi+"/haveallContrat")
    }
    addAttestaion(attestation : Attestation){
      return this.http.post(this.urlServiceApi+"/addAttestation",attestation);
    }
  }