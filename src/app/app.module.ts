import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { routes } from './app-routing.module';



import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,   RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
  
})
export class AppModule { }
