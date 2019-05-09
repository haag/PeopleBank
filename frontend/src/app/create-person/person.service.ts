import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from './person';
import { MatDialog } from '@angular/material';
import { CreatePersonComponent } from './create-person.component';
import { EditPersonComponent } from '../edit-person/edit-person.component';


const api = '/api';
//PRODUCTION
// const baseURL = "https://pplbe.azurewebsites.net/";

//DEV
const baseURL = "http://localhost:4000";


@Injectable()
export class PersonService {
  constructor(private http: HttpClient, private dialog: MatDialog) {}

    getPeople() {
      return this.http.get<Array<Person>>(`${baseURL}${api}/people`);
    }

    addPerson(person: Person) {
      return this.http.post<Person>(`${baseURL}${api}/person`, person);
    }

    updatePerson(person: Person) {
      console.log('person ID:', person);
      return this.http.put<Person>(`${baseURL}${api}/person/${person.id}`, person);
    }

    deletePerson(person: Person) {
      return this.http.delete(`${baseURL}${api}/person/${person.id}`);
    }

    openCreateDialog(){
      const dialogRef = this.dialog.open(CreatePersonComponent, { });
      dialogRef.disableClose = true; //Prevents esc and off click. esc has be allowed elsewhere
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    };

    // openEditDialog(){
    //   this.dialog.open(EditPersonComponent, { })
    // }

}

