import { Component, OnInit } from '@angular/core';
import { Person } from './person';
import { PersonService } from './person.service';
import {FormControl, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.scss']
})
export class CreatePersonComponent implements OnInit {
  name = new FormControl('', [Validators.required, Validators.email]);
  addingPerson = true;
  people: any = [];
  selectedPerson: Person;
 
  
  //MatDialog added so that the dialog is closed upon save()
  constructor(private personService: PersonService, public dialog: MatDialog) {}
  
  ngOnInit() {
    this.selectedPerson = new Person();
  }
  
  cancel() {
    // this.addingPerson = false;
    // this.selectedPerson = null;
    this.dialog.closeAll();
  }
  
  // onSelect(person: Person) {
  //   this.addingPerson = false;
  //   this.selectedPerson = person;
  // }

  save() {
      this.personService.addPerson(this.selectedPerson).subscribe(person => {
        // this.addingPerson = false;
        // this.selectedPerson = null;
        this.people.push(person);
        this.dialog.closeAll();
      });
  }
}
 
    //ERROR HANDLING
    // getErrorMessage() {
    //   return this.name.hasError('required') ? 'You must enter a value' :
    //       this.name.hasError('name') ? 'Not a valid name' :
    //           '';
    // }