import { Component, OnInit, HostListener } from '@angular/core';
import {MatDialog, MatDialogRef } from '@angular/material';
import { CreatePersonComponent } from '../create-person/create-person.component';
import { EditPersonComponent } from '../edit-person/edit-person.component'

import { Person } from '../create-person/person';
import { PersonService } from '../create-person/person.service';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  constructor(private personService: PersonService, public dialog: MatDialog) { }

  name = new FormControl('', [Validators.required, Validators.email]);

  addingPerson = false;
  people: any = [];
  selectedPerson: Person;


  // FOR CREATING
  openCreateDialog(): void {
    const dialogRef = this.dialog.open(CreatePersonComponent, { });
    dialogRef.disableClose = true;

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  };

  // FOR EDITING
  openEditDialog(prop) {

    const dialogRef = this.dialog.open(EditPersonComponent, { disableClose: true });

    const instance = dialogRef.componentInstance;
    instance.person = prop;


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  };


  ngOnInit() {
  this.getPeople();
}

enableAddMode() {
  this.addingPerson = true;
  this.selectedPerson = new Person();
}

cancel() {
  this.addingPerson = false;
  this.selectedPerson = null;
}

deletePerson(person: Person) {
  this.personService.deletePerson(person).subscribe(res => {
    this.people = this.people.filter(h => h !== person);
    if (this.selectedPerson === person) {
      this.selectedPerson = null;
    }
  });
}

getPeople() {
  return this.personService.getPeople().subscribe(people => {
    this.people = people;
  });
}


onSelect(person: Person) {
  this.addingPerson = false;
  this.selectedPerson = person;
}

save() {
  if (this.addingPerson) {
    this.personService.addPerson(this.selectedPerson).subscribe(person => {
      this.addingPerson = false;
      this.selectedPerson = null;
      this.people.push(person);
    });
  } else {
    this.personService.updatePerson(this.selectedPerson).subscribe(person => {
      this.addingPerson = false;
      this.selectedPerson = null;
    });
  }
}
}
