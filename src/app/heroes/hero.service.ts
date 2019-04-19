import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from '../messages/message.service';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeros(): Observable<Hero[]> {
    this.messageService.add('Enters HeroService.getHeroes()');
    return of(HEROES);
  }

  constructor(private messageService: MessageService) { 
    this.messageService.add('Enters HeroService.constructor()');
  }
}
