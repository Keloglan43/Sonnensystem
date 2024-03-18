import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetsComponent } from './planets/planets.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'planets', component: PlanetsComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'detail/:id', component: PlanetDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
