import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { PlanetsComponent } from './planets/planets.component';
import { FormsModule } from '@angular/forms';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetsComponent,
    PlanetDetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    UpperCasePipe,
    NgIf,
    NgFor,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
