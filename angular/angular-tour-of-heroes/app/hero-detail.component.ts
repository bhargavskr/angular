// Keep the Input import for now, we'll remove it later:
import { Component, Input, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  //moduleId: module.id,
  selector: 'my-hero-detail',
  //templateUrl: 'hero-detail.component.html',
  //styleUrls: [ 'hero-detail.component.css' ]
  template:`
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
    </div>
    <button (click)="goBack()">Back</button>
  `
})

export class HeroDetailComponent{

  @Input() hero: Hero;
  

}
