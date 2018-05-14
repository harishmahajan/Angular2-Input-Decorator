import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import { HEROES } from '../mock-heroes';
import { Staticname } from '../staticname';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero : Hero = {
    id:1,
    name: 'harish'
  };
  heroes = HEROES;
  selectedHero: Hero;
  myname : Staticname;
  testname = "Hello this is default name";
  constructor() { }

  ngOnInit() {
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.myname = {name:'harish mahajan'};
    console.log("hero: ",hero);
  }
}
