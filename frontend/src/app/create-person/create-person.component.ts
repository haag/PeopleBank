import { Component, OnInit } from '@angular/core';
import { Person } from './person';
import { PersonService } from './person.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.scss']
})
export class CreatePersonComponent implements OnInit {
  name = new FormControl('', [Validators.required, Validators.email]);

  addingPerson = false;
  people: any = [];
  selectedPerson: Person;

  constructor(private personService: PersonService) {}

  ngOnInit() {
    this.getPeople();
  }
  //ERROR HANDLING
  getErrorMessage() {
    return this.name.hasError('required') ? 'You must enter a value' :
        this.name.hasError('name') ? 'Not a valid name' :
            '';
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