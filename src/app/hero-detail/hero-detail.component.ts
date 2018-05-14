import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { Staticname } from '../staticname';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  @Input() sname:Staticname;
  @Input() sample;
  constructor() { 
    console.log("herodetails called",this.sname);
  }

  ngOnInit() {
  }

}