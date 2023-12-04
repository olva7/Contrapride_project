import { StagaireService } from './../services/Stagaire.service';
import { Component, OnInit } from '@angular/core';
import { Stagaire } from 'app/models/Stagaire';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-stagaire',
  templateUrl: './add-stagaire.component.html',
  styleUrls: ['./add-stagaire.component.scss']
})
export class AddStagaireComponent implements OnInit {
  favoriteSeason: string;
  stagaire: Stagaire;
  stagaireForm :FormGroup;
  checked = false;
  indeterminate = false;
  seasons: string[] = ['homme', 'femme'];
  disabled = false;

  constructor(private stagaireService:StagaireService) { }

  ngOnInit(): void {
    this.stagaireForm=new FormGroup({
      stagaireNom: new FormControl(),
      stagairePrenom: new FormControl(),
      stagaireAddresse: new FormControl(),
      alarieLieu: new FormControl(),
      stagaireCin: new FormControl(),
      stagairemail: new FormControl('', [
        Validators.required,
        Validators.email, 
      ]),
      stagaireGendre: new FormControl(),
      stagaireDatedenaissance: new FormControl(),
      
   });
  }
  get stagaireNom() {
    return this.stagaireForm.get("stagaireNom")
  }
  
  get stagairePrenom() {
    return this.stagaireForm.get("stagairePrenom")
  }
  
  get stagaireAddresse() {
    return this.stagaireForm.get("stagaireAddresse")
  }
  

  
  get stagaireCin() {
    return this.stagaireForm.get("stagaireCin")
  }
  
  get stagairemail() {
    return this.stagaireForm.get("stagairemail")
  }
  get stagaireGendre() {
    return this.stagaireForm.get("stagaireGendre")
  }
  get stagaireDatedenaissance() {
    return this.stagaireForm.get("stagaireDatedenaissance")
  }
  submitStagaireForm() {
    console.log("test")
    this.stagaire = new Stagaire();
    this.stagaire.nom = this.titleCaseWord(this.stagaireNom.value);
    this.stagaire.prenom = this.titleCaseWord(this.stagairePrenom.value);
    this.stagaire.addresse = this.stagaireAddresse.value;
    this.stagaire.cin = this.stagaireCin.value;
    this.stagaire.mail = this.stagairemail.value;
    this.stagaire.gendre=this.stagaireGendre.value;
    this.stagaire.datedenaissance=this.stagaireDatedenaissance.value;

    
    console.log(this.stagaire)
  }
  addStagaire() {
    if (this.stagaireForm.valid) {
      this.submitStagaireForm();
      console.log(this.stagaire);
  
      this.stagaireService.addStagaire(this.stagaire).subscribe(
        (data: any) => {
          // Success case, the salarie was added successfully
          console.log(data);
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'salarié est ajouté avec succès!',
            showConfirmButton: false,
            timer: 1500
          });
        },
        (error) => {
          // Error case, check if it's a duplicate CIN error
          if (error.status === 409 && error.error.message === 'Duplicate CIN') {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'This CIN is already associated with another salarie.',
              footer: '<a href="">Why do I have this issue?</a>'
            });
          } else {
            // Generic error message for other errors
            console.error(error);
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'ce stagaire existe déja!',
              //footer: '<a href="">Why do I have this issue?</a>'
            });
          }
        },
        () => {
          // Complete handling (optional)
        }
      );
    } else {
      console.log('Vérifier vos données!!!!');
    }
  }
  
  

   titleCaseWord(word: string) {
    if (!word) return word;
    return word[0].toUpperCase() + word.substr(1).toLowerCase();
  }

}
