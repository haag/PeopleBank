import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  showFiller = false;

  clickedParent(p){
    console.log("In PARENT", p)
  }
  constructor() { }

  ngOnInit() {
  }

}
