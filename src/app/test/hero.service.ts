import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Hero } from './hero';

const api = '/api';
const baseURL = 'http://localhost:4000';

@Injectable()
export class HeroService {
  constructor(private http: HttpClient) {}

  getHeroes() {
    return this.http.get<Array<Hero>>(`${baseURL}${api}/people`);
  }

  deleteHero(hero: Hero) {
    return this.http.delete(`${baseURL}${api}/person/${hero.id}`);
  }

  addHero(hero: Hero) {
    return this.http.post<Hero>(`${baseURL}${api}/person/`, hero);
  }

  updateHero(hero: Hero) {
    return this.http.put<Hero>(`${baseURL}${api}/person/${hero.id}`, hero);
  }
}
