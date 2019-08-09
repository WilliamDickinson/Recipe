import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreaterecipeComponent } from './components/createrecipe/createrecipe.component';


const routes: Routes = [

  {path : "create", component : CreaterecipeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
