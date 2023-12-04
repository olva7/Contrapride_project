import { ListeDesStagairesComponent } from './../../liste-des-stagaires/liste-des-stagaires.component';
import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
//import { UserProfileComponent } from '../../user-profile/user-profile.component';

//import { TypographyComponent } from '../../typography/typography.component';
import { AddContratComponent } from 'app/add-contrat/add-contrat.component';
import { ListeDesSalarieComponent } from 'app/liste-des-salarie/liste-des-salarie.component';
import { IconsComponent } from '../../icons/icons.component';

import { AddSalarieComponent } from 'app/add-salarie/add-salarie.component';
import { AddStagaireComponent } from 'app/add-stagaire/add-stagaire.component';
import { ListeDesAttestationComponent } from 'app/liste-des-Attestation/liste-des-attestation.component';


export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    //{ path: 'user-profile',   component: UserProfileComponent },
    { path: 'add-salarie', component:AddSalarieComponent},
    { path: 'liste-des-salarie', component:ListeDesSalarieComponent},
    { path: 'add-stagaire',     component: AddStagaireComponent },
    //{ path: 'typography',     component: TypographyComponent },
    { path: 'add-contrat', component:AddContratComponent},
    { path: 'icons',          component: IconsComponent },
    { path: 'liste-des-salarie', component:ListeDesSalarieComponent},
    { path: 'liste-des-Attestation',           component:ListeDesAttestationComponent},
    { path: 'liste-des-stagaires',  component: ListeDesStagairesComponent },
    //{ path: 'upgrade',        component: UpgradeComponent },
    { path: 'add-salarie', component:AddSalarieComponent},
    
    
];
