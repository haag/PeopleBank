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
  
  // name = new FormControl('', [Validators.required, Validators.email]);
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
    this.createForm();
    this.setChangeValidate()
    this.selectedPerson = new Person();
  }
  
  createForm() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.formGroup = this.formBuilder.group({
      'email': [null, [Validators.required, Validators.pattern(emailregex)]],
      'name': [null, Validators.required],
      'description': [null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      'validate': ''
    });
  }

  setChangeValidate() {
    this.formGroup.get('validate').valueChanges.subscribe(
      (validate) => {
        if (validate == '1') {
          this.formGroup.get('name').setValidators([Validators.required, Validators.minLength(3)]);
          this.titleAlert = "You need to specify at least 3 characters";
        } else {
          this.formGroup.get('name').setValidators(Validators.required);
        }
        this.formGroup.get('name').updateValueAndValidity();
      }
    )
  }

  onSubmit(post) {
    this.post = post;
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

//ERROR HANDLING
// getErrorMessage() {
  //   return this.name.hasError('required') ? 'You must enter a value' :
  //       this.name.hasError('name') ? 'Not a valid name' :
  //           '';
  // }