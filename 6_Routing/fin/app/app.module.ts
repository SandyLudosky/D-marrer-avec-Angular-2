import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import {AccueilComponent} from './accueil.component';
import {AppPage1Component} from './app.page1.component';
import {AppPage2Component} from './app.page2.component';
import {routing} from './app.routing'



@NgModule({
imports: [
  BrowserModule,
  routing
],
declarations: [
  AppComponent,
  AccueilComponent, 
  AppPage1Component, 
  AppPage2Component
],
bootstrap: [ AppComponent ]
})
export class AppModule {
}

