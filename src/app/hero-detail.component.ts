import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from './hero';
import { HeroService } from './hero.service';

//import switchmap to be used with route parameters
import 'rxjs/add/operator/switchMap';

@Component ({
    moduleId: module.id,
    selector: 'my-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit{

    hero: Hero;
    
    //constructor
    constructor (
      private heroService: HeroService,
      private router: ActivatedRoute,
      private location: Location
    ) {}

    ngOnInit(): void {
      this.router.params.switchMap((params: Params) => 
      this.heroService.getHero(+params['id'])).subscribe(hero => this.hero = hero);
    }

    goBack(): void {
      this.location.back();
    }

    save(): void {
      this.heroService.update(this.hero)
      .then(() => this.goBack());
    }

}