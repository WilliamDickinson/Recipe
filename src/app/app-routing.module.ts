import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchrecipeComponent } from './components/searchrecipe/searchrecipe.component';

import { CreaterecipeComponent } from './components/createrecipe/createrecipe.component';


const routes: Routes = [

  {path: "searchrecipe" ,component: SearchrecipeComponent},
  {path: "createrecipe" ,component: CreaterecipeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
