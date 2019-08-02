import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreaterecipeComponent } from './components/createrecipe/createrecipe.component';
import { SearchrecipeComponent } from './components/searchrecipe/searchrecipe.component';
import { TryrecipeComponent } from './components/tryrecipe/tryrecipe.component';

@NgModule({
  declarations: [
    AppComponent,
    CreaterecipeComponent,
    SearchrecipeComponent,
    TryrecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
