import { Component, OnInit } from '@angular/core';
import { SalarierService } from './../services/salarier.service';
import { Salarie } from './../models/Salarie';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-add-salarie',
  templateUrl: './add-salarie.component.html',
  styleUrls: ['./add-salarie.component.scss']
})
export class AddSalarieComponent implements OnInit {
  favoriteSeason: string;
  salarie: Salarie;
  salarieForm :FormGroup;
  checked = false;
  indeterminate = false;
  seasons: string[] = ['homme', 'femme'];
  disabled = false;




  constructor(private salarieService:SalarierService) { 
  }
  
  ngOnInit() {
    this.salarieForm=new FormGroup({
      salarieNom: new FormControl(),
      salariePrenom: new FormControl(),
      salarieAddresse: new FormControl(),
      salarieLieu: new FormControl(),
      salarieCin: new FormControl(),
      salariemail: new FormControl('', [
        Validators.required,
        Validators.email, 
      ]),
      salarieNumero: new FormControl(),
      salarieGendre: new FormControl(),
      salarieDatedenaissance: new FormControl(),
      
   });


  }
 

  get salarieNom() {
    return this.salarieForm.get("salarieNom")
  }
  
  get salariePrenom() {
    return this.salarieForm.get("salariePrenom")
  }
  
  get salarieAddresse() {
    return this.salarieForm.get("salarieAddresse")
  }
  
  get salarieLieu() {
    return this.salarieForm.get("salarieLieu")
  }
  
  get salarieCin() {
    return this.salarieForm.get("salarieCin")
  }
  
  get salariemail() {
    return this.salarieForm.get("salariemail")
  }
  get salarieGendre() {
    return this.salarieForm.get("salarieGendre")
  }
  get salarieNumero() {
    return this.salarieForm.get("salarieNumero")
  }
  get salarieDatedenaissance() {
    return this.salarieForm.get("salarieDatedenaissance")
  }
  


  submitSalarieForm() {
    console.log("test")
    this.salarie = new Salarie();
    this.salarie.nom = this.titleCaseWord(this.salarieNom.value);
    this.salarie.prenom = this.titleCaseWord(this.salariePrenom.value);
    this.salarie.addresse = this.salarieAddresse.value;
    this.salarie.lieu = this.salarieLieu.value;
    this.salarie.cin = this.salarieCin.value;
    this.salarie.mail = this.salariemail.value;
    this.salarie.numero=this.salarieNumero.value;
    this.salarie.gendre=this.salarieGendre.value;
    this.salarie.datedenaissance=this.salarieDatedenaissance.value;

    
    console.log(this.salarie)
  }
  
  addSalarie() {
    if (this.salarieForm.valid) {
      this.submitSalarieForm();
      console.log(this.salarie);
  
      this.salarieService.addSalarie(this.salarie).subscribe(
        (data: any) => {
          // Success case, the salarie was added successfully
          console.log(data);
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Salarie added successfully!',
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
              text: 'ce salarié existe déja!',
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
