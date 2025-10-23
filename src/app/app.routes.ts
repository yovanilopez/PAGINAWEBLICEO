import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MatutinaComponent } from './matutina/matutina.component';
import { VespertinaComponent } from './vespertina/vespertina.component';
import { PrimariaComponent } from './primaria/primaria.component';
import { FinsemanaComponent } from './finsemana/finsemana.component';

export const routes: Routes = [
      { path: "", redirectTo: "FINSEMANA", pathMatch: "full" },

      { path: "MATUTINA", component: MatutinaComponent },
      { path: "HOME", component: HomeComponent },
      { path: "VESPERTINA", component: VespertinaComponent },
      { path: "PRIMARIA", component: PrimariaComponent },
      { path: "FINSEMANA", component: FinsemanaComponent },



];
