import { Component, OnInit } from '@angular/core';
import { PersonService } from '../create-person/person.service';
import { PEOPLE } from '../create-person/DummyPeople';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  constructor(private personService: PersonService) { }

  people: any = [];

  ngOnInit() {
    this.personService.getPeople().subscribe(people => { 
      this.people = people
    })
  }

}