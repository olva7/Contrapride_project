
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Salarie } from 'app/models/Salarie';

@Injectable({
  providedIn: 'root'
})
export class SalarierService {
  private urlServiceApi="http://localhost:8081";

  constructor(private http:HttpClient) { }
  public getSalarie(){
    return this.http.get<Salarie[]>(this.urlServiceApi+"/haveallSalaries")

  }
  addSalarie(sal: Salarie){
    return this.http.post(this.urlServiceApi+"/addsalarie",sal);
  }
  delete(id:number){
    return this.http.delete(this.urlServiceApi+"/delete/"+id)
   }
   
  }

