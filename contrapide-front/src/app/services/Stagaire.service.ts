import { Stagaire } from './../models/Stagaire';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
  export class StagaireService{
    private urlServiceApi="http://localhost:8081";
    constructor(private http:HttpClient) { }
    addStagaire(sal: Stagaire){
        return this.http.post(this.urlServiceApi+"/addstagaire",sal);
      }
      delete(id:number){
        return this.http.delete(this.urlServiceApi+"/deletee/"+id)
       }
       public getStagaire(){
        return this.http.get<Stagaire[]>(this.urlServiceApi+"/haveallStagaire")
    
      }

  }