import Swal from 'sweetalert2/dist/sweetalert2.all.js';
import { Attestation } from 'app/models/Attestation';
import { Stagaire } from 'app/models/Stagaire';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import { PdfcontratComponent } from 'app/pdfcontrat/pdfcontrat.component';
import { ScrollStrategy, ScrollStrategyOptions } from '@angular/cdk/overlay';
import { Component, OnInit, ViewChild} from '@angular/core';
import { StagaireService } from 'app/services/Stagaire.service';
import {MatIconModule} from '@angular/material/icon';
import { AddAddestationComponent } from 'app/add-addestation/add-addestation.component';
import { PdfAttestationComponent } from 'app/pdf-attestation/pdf-attestation.component';

@Component({
  selector: 'app-liste-des-stagaires',
  templateUrl: './liste-des-stagaires.component.html',
  styleUrls: ['./liste-des-stagaires.component.scss']
})
export class ListeDesStagairesComponent implements OnInit {

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

    
  ngOnInit():void{

    this.sal.getStagaire().subscribe(
      data =>{ this.liste = data
        
        //this.datasource= new MatTableDataSource();
      }
    );
   
  } 
  formatDate(dateString: string): string {
    const dateObj = new Date(dateString);
    const day = this.padZero(dateObj.getDate());
    const month = this.padZero(dateObj.getMonth() + 1);
    const year = dateObj.getFullYear();
    return `${day}/${month}/${year}`;
  }
  padZero(num: number): string {
    return num.toString().padStart(2, '0');
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
    const Stagaire = this.liste.find(s => s.id === id);
    const Attestation = Stagaire?.attestation;

    const dialogRef = this.dialog.open(PdfAttestationComponent, {
      data: { stagaire: Stagaire ,attestation:Attestation}, // Pass the stagaire object directly
      height: '350px'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
