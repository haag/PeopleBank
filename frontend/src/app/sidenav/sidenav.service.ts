import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Injectable()
export class SidenavService {
	private sidenav: MatSidenav;

	public setSidenav(sidenav: MatSidenav) {
		this.sidenav = sidenav;
	}

	public open() {
		return this.sidenav.open();
	}

	public close() {
		return this.sidenav.close();
	}

	//States whether is open or not
	public isOpen() {
		return this.sidenav.opened;
	}
	
	public toggle() {
		this.sidenav.toggle();
	}
}