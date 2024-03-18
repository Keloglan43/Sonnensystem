import { Injectable } from '@angular/core';
import { PLANETS } from './mock-planets';
import { Planet } from './planet';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root'})
export class PlanetService {

  getPlanets(): Observable <Planet[]> {
    const planets  = of(PLANETS);
    return planets;
  }

  getPlanet(id:number): Observable<Planet> {
    const planet = PLANETS.find(p=> p.id ===id)!;
    return of(planet);
  }
  constructor() { }
}
