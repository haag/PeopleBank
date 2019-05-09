import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav, MatDialog } from '@angular/material';
import { SidenavService } from './sidenav.service';
import { PersonService } from '../create-person/person.service'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
	constructor(
    private sidenavService: SidenavService, 
    public dialog: MatDialog,
    private personService: PersonService) {	}

  showFiller = false;

  @ViewChild('sidenav') public sidenav: MatSidenav;  
  
	ngOnInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
	}
  
  //OPEN DIALOG
  openCreateDialog(): void {
    this.personService.openCreateDialog()
  };
}
