import { contra } from './../models/contra';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { contra } from 'app/models/contra';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContratService {
  private urlServiceApi="http://localhost:8081";
  constructor(private http: HttpClient) { }
  public getcontrat(){
    return this.http.get<contra[]>(this.urlServiceApi+"/haveallContrat")
  }
  addContrat(contrat : contra){
    return this.http.post(this.urlServiceApi+"/addContrat",contrat);
  }
}
