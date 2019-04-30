import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

@Output() voted = new EventEmitter();

toParent(){
  console.log("Step 1")
  this.voted.emit(true)
}
  constructor() {}

  ngOnInit() {
  }

}
