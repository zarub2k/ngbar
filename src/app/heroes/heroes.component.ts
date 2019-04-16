import { Component, OnInit, OnChanges } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit, OnChanges {
  constructor() {}

  hero: Hero = {
    id: 1,
    name: 'Roger'
  };

  heroes = HEROES;

  ngOnChanges() {
    console.log('Enters heroes.ngOnChanges()');
  }

  ngOnInit() {
    console.log('Enters heroes.ngOnInit()');
  }
}
