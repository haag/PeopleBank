import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { SidenavService } from './sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  showFiller = false;

  @ViewChild('sidenav') public sidenav: MatSidenav;

	constructor(private sidenavService: SidenavService) {	}

	ngOnInit(): void {
		this.sidenavService.setSidenav(this.sidenav);
	}

}
