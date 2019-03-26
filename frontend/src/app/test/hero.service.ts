import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Hero } from './hero';

const api = '/api';
const baseURL = 'http://localhost:4000';

@Injectable()
export class HeroService {
  constructor(private http: HttpClient) {}

  getHeroes() {
    return this.http.get<Array<Hero>>(`${baseURL}${api}/heroes`);
  }

  deleteHero(hero: Hero) {
    return this.http.delete(`${baseURL}${api}/hero/${hero.id}`);
  }

  addHero(hero: Hero) {
    return this.http.post<Hero>(`${baseURL}${api}/hero/`, hero);
  }

  updateHero(hero: Hero) {
    return this.http.put<Hero>(`${baseURL}${api}/hero/${hero.id}`, hero);
  }
}
