import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddsalarieService {

  constructor(private http:HttpClient) { }
}
