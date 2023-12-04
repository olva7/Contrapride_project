import { Component, OnInit } from '@angular/core';
import { contra } from 'app/models/contra';
import { ContratService } from './../services/contrat.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IconsComponent } from 'app/icons/icons.component';
import { Inject } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-add-contrat',
  templateUrl: './add-contrat.component.html',
  styleUrls: ['./add-contrat.component.scss']
})
export class AddContratComponent implements OnInit {
  contrat: contra;
  contratForm:FormGroup;

  constructor( public MatDialogRef: MatDialogRef<IconsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private contratService: ContratService) { }

  ngOnInit() {

    this.contratForm=new FormGroup({
      contratpreavis: new FormControl(),
      contratposte: new FormControl(),
      contratduredeconge: new FormControl(),
      contratsalaire: new FormControl(),
      contratdatedebut:new FormControl(),
      contratdatefin: new FormControl(),
    });
    this.contrat = new contra();

    console.log("hello =" + this.data?.idSalarie)


  }

  get contratpreavis(){
    return this.contratForm.get("contratpreavis")
      
  }
  get contratposte(){
    return this.contratForm.get("contratposte")
      
  }
  get contratduredeconge(){
    return this.contratForm.get("contratduredeconge")
      
  }
  get contratsalaire(){
    return this.contratForm.get("contratsalaire")
      
  }
  get contratdatedebut(){
    return this.contratForm.get("contratdatedebut")
      
  }
  get contratdatefin(){
    return this.contratForm.get("contratdatefin")
      
  }
  

  submitContratForm() {
    
    this.contrat = new contra();
    this.contrat.preavis = this.contratpreavis.value;
    this.contrat.poste = this.contratposte.value;
    this.contrat.datedebut = this.contratdatedebut.value;
    this.contrat.duredeconge = this.contratduredeconge.value;
    this.contrat.datefin = this.contratdatefin.value;
    this.contrat.salaire = this.contratsalaire.value; 
    this.contrat.idSalarie = this.data?.idSalarie;
    
  }
  addContrat() {
    this.submitContratForm()
    console.log(this.contrat);  
      this.contratService.addContrat(this.contrat).subscribe({
        
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
