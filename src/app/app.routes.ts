import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MatutinaComponent } from './matutina/matutina.component';
import { VespertinaComponent } from './vespertina/vespertina.component';

export const routes: Routes = [
{path:"", redirectTo:"VESPERTINA" ,pathMatch:"full"} ,
    
     {path:"MATUTINA", component:MatutinaComponent} ,
     {path:"HOME", component:HomeComponent} ,
      {path:"VESPERTINA", component:VespertinaComponent} ,
    
   

];
