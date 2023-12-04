import { SalarierService } from './services/salarier.service';
import { ContratService } from './services/contrat.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ModelsComponent } from './models/models.component';
import { LoginComponent } from './login/login.component';
import { AddsalarieService } from './services/addsalarie.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PdfcontratComponent } from './pdfcontrat/pdfcontrat.component';
import { IconsComponent } from './icons/icons.component';
import { EssaiComponent } from './essai/essai.component';
import { AddStagaireComponent } from './add-stagaire/add-stagaire.component';
//import { AddAddestationComponent } from './add-addestation/add-addestation.component';
import { ListeDesAttestationComponent } from './liste-des-Attestation/liste-des-attestation.component';
import { ListeDesStagairesComponent } from './liste-des-stagaires/liste-des-stagaires.component';
import { PdfAttestationComponent } from './pdf-attestation/pdf-attestation.component';
//import { ListeDesAttestationComponent } from './liste-des-attestation/liste-des-attestation.component';
//import { AddStagaireComponent } from './add-stagaire/add-stagaire.component';
//import { AddContratComponent } from './add-contrat/add-contrat.component';
//import { ListeDesSalarieComponent } from './liste-des-salarie/liste-des-salarie.component';
//import { AddSalarieComponent } from './add-salarie/add-salarie.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ModelsComponent,
    LoginComponent,
    PdfcontratComponent,
    IconsComponent,
    EssaiComponent,
    //AddAddestationComponent,
    ListeDesStagairesComponent,
    PdfAttestationComponent,
    //ListeDesAttestationComponent,
    //AddStagaireComponent,
    //AddContratComponent,
    
    //AddSalarieComponent,
    

  ],
  providers: [ContratService,
  SalarierService,AddsalarieService,AddStagaireComponent , ListeDesAttestationComponent , ListeDesStagairesComponent,AddStagaireComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
