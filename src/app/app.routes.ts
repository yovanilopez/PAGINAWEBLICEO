import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MatutinaComponent } from './matutina/matutina.component';

export const routes: Routes = [
{path:"", redirectTo:"MATUTINA" ,pathMatch:"full"} ,
    
     {path:"MATUTINA", component:MatutinaComponent} ,
     {path:"HOME", component:HomeComponent} ,
    
   

];
