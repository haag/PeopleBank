import { Component, OnInit, HostListener } from '@angular/core';
import { Person } from '../create-person/person';
import { PersonService } from '../create-person/person.service';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';

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

  constructor(
    private personService: PersonService, 
    public dialog: MatDialog,
    private dialogRef: MatDialogRef<EditPersonComponent>) {}
  
    ngOnInit() {
      this.getPeople();
      this.onSelect()
    }
    
    //Allows ESC to close dialog
    @HostListener('window:keyup.esc') onKeyUp() {
      this.dialogRef.close();
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
      this.dialogRef.close();
    }

    deletePerson(person: Person) {
      this.personService.deletePerson(person).subscribe(res => {
        this.people = this.people.filter(h => h !== person);
        if (this.selectedPerson === person) {
          this.dialogRef.close();
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
          this.dialog.closeAll();
        });
      }
}

