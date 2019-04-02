import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Person } from './person';

const api = '/api';
const baseURL = 'http://localhost:4000';

@Injectable()
export class PersonService {
  constructor(private http: HttpClient) {}

    getPeople() {
      return this.http.get<Array<Person>>(`${baseURL}${api}/people`);
    }
  
    addPerson(person: Person) {
      return this.http.post<Person>(`${baseURL}${api}/person/`, person);
    }
    
    updatePerson(person: Person) {
      return this.http.put<Person>(`${baseURL}${api}/person/${person.id}`, person);
    }
    
    deletePerson(person: Person) {
      return this.http.delete(`${baseURL}${api}/person/${person.id}`);
    }

}
    