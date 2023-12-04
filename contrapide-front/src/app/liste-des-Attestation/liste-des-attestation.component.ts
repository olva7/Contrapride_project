import { Attestation } from '../models/Attestation';
import { Stagaire } from 'app/models/Stagaire';

import { filter } from 'rxjs';
import { Component, OnInit, ViewChild} from '@angular/core';

import { SalarierService } from '../services/salarier.service';
import { Salarie } from '../models/Salarie';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { AddContratComponent } from 'app/add-contrat/add-contrat.component';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';
import { PageEvent } from '@angular/material/paginator';
import {MatPaginator} from '@angular/material/paginator';
import { PdfcontratComponent } from 'app/pdfcontrat/pdfcontrat.component';
import { ScrollStrategy, ScrollStrategyOptions } from '@angular/cdk/overlay';
import { EssaiComponent } from 'app/essai/essai.component';
import { contra } from 'app/models/contra';
//import { Attestation } from 'app/models/Attestation';
import { StagaireService } from 'app/services/Stagaire.service';
import { AddAddestationComponent } from 'app/add-addestation/add-addestation.component';

@Component({
  selector: 'app-liste-des-attestation',
  templateUrl: './liste-des-attestation.component.html',
  styleUrls: ['./liste-des-attestation.component.scss']
})
export class ListeDesAttestationComponent implements OnInit {
  liste: Stagaire[] = [];
  list: Attestation[] = [];
  pageSize = 5;
  currentPage = 1;
  searchText: string = '';
  @ViewChild(MatPaginator) paginator: MatPaginator;

  scrollStrategy: ScrollStrategy;
  

  constructor(private sal: StagaireService,public dialog: MatDialog,private readonly sso: ScrollStrategyOptions) {
    this.scrollStrategy = this.sso.noop();
   }

  ngOnInit(): void {
    this.sal.getStagaire().subscribe(
      data =>{ this.liste = data
  }
  );
 
} 


onPageChange(event: number) {
  this.currentPage = event;
  this.filterStagaireList();
}
filterStagaireList() {
  if (!this.searchText) {
    return this.liste;
  }
  return this.liste.filter((stagaire) =>
    stagaire.nom.toLowerCase().includes(this.searchText.toLowerCase())
  );
}

delete(id:number){

  Swal.fire({
    title: 'Do you want to save the changes?',
    showDenyButton: true,
    confirmButtonText: 'Save',
    denyButtonText: `Don't save`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      this.sal.delete(id).subscribe(()=>this.liste=this.liste.filter((p)=>p.id != id))
      this.liste = this.liste.filter(l=>l.id!=id)
      Swal.fire('Saved!', '', 'success')
    } else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info')
    }
  })




 
}


openDialog(id :number) {
  
  
  console.log("in"+id)
  
  const dialogRef = this.dialog.open(AddAddestationComponent ,{
    data: { idStagaire: id }, disableClose: true });
    

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
  
  
}
//Filterchangre(event :Event){
  //const filvalue=(event.target as HTMLInputElement).value;
  //this.datasource.filter=filvalue;



//}

openDialog2(id: number) {
  const stagaire = this.liste.find(s => s.id === id);
  const Attestation = stagaire?.attestation;

  const dialogRef = this.dialog.open(PdfcontratComponent, {
    data: { stagaire: stagaire ,attestation:Attestation}, // Pass the salarie object directly
    height: '350px'
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}

}
