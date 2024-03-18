import { Component, OnInit } from '@angular/core';
import { Planet } from '../planet';
import { PlanetService } from '../planet.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  planets: Planet[] = [];

  constructor(private planetService: PlanetService) {}

  ngOnInit(): void {
    this.getPlanets();
  }
  getPlanets(): void {
    this.planetService.getPlanets().subscribe(p => this.planets = p.slice(2,5));
  }

}
