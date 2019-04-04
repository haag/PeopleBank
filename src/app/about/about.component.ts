import { Component, OnInit } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
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
  
  
  openCreateDialog(): void {
    const dialogRef = this.dialog.open(CreatePersonComponent, { });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  };

  openEditDialog(prop) {
  
    const dialogRef = this.dialog.open(EditPersonComponent);

    let instance = dialogRef.componentInstance;
    instance.person = prop;
    
    console.log('dialogRef', dialogRef);

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