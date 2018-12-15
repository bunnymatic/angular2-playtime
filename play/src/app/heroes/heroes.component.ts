import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selected: Hero;

  constructor() {
  }

  onSelect(hero: Hero) {
    this.selected = hero;
  }

  ngOnInit() {
    this.heroes = [
      new Hero({ id: 1, name: "Mr Rogers", score: -10 }),
      new Hero({ id: 2, name: "Super Person", score: 14.2 }),
      new Hero({ id: 3, name: "Race Lady", score: 2.2 }),
    ].sort((a: Hero,b: Hero) => b.score - a.score);
    this.selected = this.heroes[1];
  }

}
