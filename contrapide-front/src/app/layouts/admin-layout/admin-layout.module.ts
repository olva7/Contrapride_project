import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { AddSalarieComponent } from 'app/add-salarie/add-salarie.component';
//import { UserProfileComponent } from '../../user-profile/user-profile.component';

import { AddContratComponent } from 'app/add-contrat/add-contrat.component';
import { IconsComponent } from '../../icons/icons.component';
import { ListeDesSalarieComponent } from 'app/liste-des-salarie/liste-des-salarie.component';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AddStagaireComponent } from 'app/add-stagaire/add-stagaire.component';
import { AddAddestationComponent } from 'app/add-addestation/add-addestation.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatDialogModule,
    MatRadioModule,
    MatIconModule,
    MatPaginatorModule

  ],
  declarations: [
    DashboardComponent,
    //UserProfileComponent,
    AddSalarieComponent,
    AddStagaireComponent,
    //TableListComponent,
    //TypographyComponent,
    AddContratComponent,
    //IconsComponent,
    ListeDesSalarieComponent,
    AddAddestationComponent,
    //MapsComponent,
    //NotificationsComponent,
    //UpgradeComponent,
  ]
})

export class AdminLayoutModule {}
