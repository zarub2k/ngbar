import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit, OnChanges {
  constructor() {}

  hero = 'Roger';

  ngOnChanges() {
    console.log('Enters heroes.ngOnChanges()');
  }

  ngOnInit() {
    console.log('Enters heroes.ngOnInit()');
  }
}
