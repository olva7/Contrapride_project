import { Component, OnInit } from '@angular/core';
import { Attestation } from 'app/models/Attestation';
import { FormControl, FormGroup} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IconsComponent } from 'app/icons/icons.component';
import { AttestationService } from 'app/services/Attestation.service';
import { Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-addestation',
  templateUrl: './add-addestation.component.html',
  styleUrls: ['./add-addestation.component.scss']
})

export class AddAddestationComponent implements OnInit {
  attestation:Attestation;
  attestationForm:FormGroup;



  constructor( public MatDialogRef: MatDialogRef<IconsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private attestationService: AttestationService ) { }

  ngOnInit(): void {
    
    this.attestationForm = new FormGroup({
      attestationdatedebut: new FormControl(),
      attestationdatefin: new FormControl(),
    });
    this.attestation = new Attestation();

    console.log("hello =" + this.data?.idStagaire)
  
  }
  get attestationdatedebut(){
    return this.attestationForm.get("attestationdatedebut")
      
  }
  get attestationdatefin(){
    return this.attestationForm.get("attestationdatefin")
      
  }
  submitAttestationForm() {
    
    this.attestation = new Attestation();
    this.attestation.date_debut = this.attestationdatedebut.value;
    this.attestation.date_fin = this.attestationdatefin.value;
    this.attestation.idStagaire = this.data?.idStagaire;
  }

addAttestation() {
  this.submitAttestationForm()
  console.log(this.attestation); 
  console.log(this.data?.idStagaire); 
    this.attestationService.addAttestaion(this.attestation).subscribe({
      
      next: (data: any) => {
        console.log(data);
      },
      error(error){
      },
      complete: () => {
      }
    })
  }
selectedTeam = '';
onSelected(value:string): void {
  this.selectedTeam = value;
}





}
