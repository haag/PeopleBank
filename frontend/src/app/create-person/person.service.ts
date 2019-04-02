import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Person } from './person';

const api = '/api';
const baseURL = 'http://localhost:4000';

@Injectable()
export class PersonService {
  constructor(private http: HttpClient) {}

  getPeople() {
    console.log("GET PEOPLE")
    console.log("GET PEOPLE")
    this.http.get<Array<Person>>(`${baseURL}${api}/people`);
    return 
  }
  
    addPerson(person: Person) {
      return this.http.post<Person>(`${baseURL}${api}/person/`, person);
    }
    
    updatePerson(person: Person) {
      console.log("PERSON PUT", person)
      return this.http.put<Person>(`${baseURL}${api}/person/${person.id}`, person);
    }
    
    deletePerson(person: Person) {
      return this.http.delete(`${baseURL}${api}/person/${person.id}`);
    }

  }
    