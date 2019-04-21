import { Component, OnInit, OnChanges } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit, OnChanges {
  constructor(private heroService: HeroService) {}

  hero: Hero = {
    id: 1,
    name: 'Roger'
  };

  heroes: Hero[];
  selectedHero: Hero;

  ngOnChanges() {
    console.log('Enters heroes.ngOnChanges()');
  }

  ngOnInit() {
    console.log('Enters heroes.ngOnInit()');
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeros()
      .subscribe(heroes => this.heroes = heroes);
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   console.log(JSON.stringify(hero));
  // }
}
