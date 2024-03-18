import { Component, OnInit } from '@angular/core';
import { Planet } from '../planet';
import { PlanetService } from '../planet.service';


@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  planets : Planet[] = [];
  // selectedPlanet? : Planet;

  // onSelect(planet: Planet): void {
  //   this.selectedPlanet = planet;
  // }
  constructor(private planetService: PlanetService){}

  ngOnInit(): void {
    this.getPlanets();
  }
  getPlanets(): void {
    this.planetService.getPlanets().subscribe(p => this.planets = p);
  }

}