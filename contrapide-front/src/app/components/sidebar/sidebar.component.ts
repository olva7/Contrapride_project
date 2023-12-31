import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    //{ path: '/user-profile', title: 'salarié',  icon:'person', class: '' },
    {path: '/add-salarie' , title: 'salarié',  icon:'person', class: ''},
    {path: '/liste-des-salarie',title: 'liste des salariés',  icon:'content_paste', class: ''},
    { path: '/add-stagaire', title: 'stagaire',  icon:'person', class: '' },
    { path: '/liste-des-stagaires', title: 'liste des stagaires',  icon:'content_paste', class: '' },
    //{ path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
