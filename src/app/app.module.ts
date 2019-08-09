import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreaterecipeComponent } from './components/createrecipe/createrecipe.component';
import { SearchrecipeComponent } from './components/searchrecipe/searchrecipe.component';
import { TryrecipeComponent } from './components/tryrecipe/tryrecipe.component';
import { TimePipe } from './pipes/time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CreaterecipeComponent,
    SearchrecipeComponent,
    TryrecipeComponent,
    TimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
