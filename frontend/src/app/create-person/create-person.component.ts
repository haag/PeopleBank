import { Component, OnInit } from '@angular/core';
import { Person } from './person';
import { PersonService } from './person.service';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.scss']
})
export class CreatePersonComponent implements OnInit {
  formGroup: FormGroup;
  titleAlert: string = 'This field is required';
  post: any = '';
  
  addingPerson = true;
  editingPerson = false;
  people: any = [];
  selectedPerson: Person;
 
  
  //MatDialog added so that the dialog is closed upon save()
  constructor(
    private personService: PersonService, 
    public dialog: MatDialog,
    private formBuilder: FormBuilder) {}
  
  ngOnInit() {
    this.selectedPerson = new Person();
  }
  

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }






  cancel() {
    this.addingPerson = false;
    this.selectedPerson = null;
    this.dialog.closeAll();
  }
  
  onSelect(person: Person) {
    this.selectedPerson = person;
  }

  
  update() {
    this.personService.updatePerson(this.selectedPerson).subscribe(person => {
      this.addingPerson = false;
      this.selectedPerson = null;
    });
  }

  save() {
      this.personService.addPerson(this.selectedPerson).subscribe(person => {
        // this.addingPerson = false;
        // this.selectedPerson = null;
        this.people.push(person);
        this.dialog.closeAll();
      });
  }
}
