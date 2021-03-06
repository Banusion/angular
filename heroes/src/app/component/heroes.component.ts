import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../class/hero';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './view/heroes.component.html',
  styleUrls: [ './style/heroes.component.css' ]
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private router: Router,
    private heroService: HeroService) { }

  getHeroes(): void {
  	this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
  	this.selectedHero = hero;
  }

  ngOnInit(): void {
  	this.getHeroes();
  }

  goDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Hero): void {
    this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
  }
}
