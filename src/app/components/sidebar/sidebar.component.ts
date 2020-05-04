import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/view-all/0', title: 'View All Speeches',  icon: 'fa fa-book text-primary', class: '' },   
    { path: '/add-speech', title: 'Add Speech',  icon: 'fa fa-plus text-primary', class: '' },    
    { path: '/search-speech', title: 'Search Speech',  icon: 'fas fa-search text-primary', class: '' },  
    { path: '/user-profile', title: 'User profile',  icon:'ni-single-02 text-yellow', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;
  public editId:number;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);

    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
