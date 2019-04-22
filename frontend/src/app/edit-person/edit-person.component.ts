import { Component, OnInit } from '@angular/core';
import { Person } from '../create-person/person';
import { PersonService } from '../create-person/person.service';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.scss']
})

export class EditPersonComponent implements OnInit {

  name = new FormControl('', [Validators.required, Validators.email]);

  people: any = [];
  selectedPerson: Person;
  person: Person;

  constructor(private personService: PersonService, public dialog: MatDialog) {}

  ngOnInit() {
    this.getPeople();
    this.onSelect()
  }

  email = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }





  enableAddMode() {
    this.selectedPerson = new Person();
  }
  
  cancel() {
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


  onSelect() {
    this.selectedPerson = this.person;
  }

  save() {
      this.personService.updatePerson(this.selectedPerson).subscribe(person => {
        this.selectedPerson = null;
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


//   name = new FormControl('', [Validators.required, Validators.email]);

//   addingPerson = false;
//   people: any = [];
//   selectedPerson: Person;

//   constructor(private personService: PersonService) {}

//   ngOnInit() {
//     this.getPeople();
//   }

//   enableAddMode() {
//     this.addingPerson = true;
//     this.selectedPerson = new Person();
//   }
  
//   cancel() {
//     this.addingPerson = false;
//     this.selectedPerson = null;
//   }

//   deletePerson(person: Person) {
//     this.personService.deletePerson(person).subscribe(res => {
//       this.people = this.people.filter(h => h !== person);
//       if (this.selectedPerson === person) {
//         this.selectedPerson = null;
//       }
//     });
//   }

//   getPeople() {
//     return this.personService.getPeople().subscribe(people => {
//       this.people = people;
//     });
//   }


//   onSelect(person: Person) {
//     this.addingPerson = false;
//     this.selectedPerson = person;
//   }

//   save() {
//     if (this.addingPerson) {
//       this.personService.addPerson(this.selectedPerson).subscribe(person => {
//         this.addingPerson = false;
//         this.selectedPerson = null;
//         this.people.push(person);
//       });
//     } else {
//       this.personService.updatePerson(this.selectedPerson).subscribe(person => {
//         this.addingPerson = false;
//         this.selectedPerson = null;
//       });
//     }
//   }
// }