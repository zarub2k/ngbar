import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from '../messages/message.service';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService) { 
    this.messageService.add('Enters HeroService.constructor()');
  }

  getHeros(): Observable<Hero[]> {
    this.messageService.add('Enters HeroService.getHeroes()');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add('Enters HeroService.getHero()');
    return of(HEROES.find(hero => hero.id === id));
  }
}
